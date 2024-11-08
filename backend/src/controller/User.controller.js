import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import path from 'path';
import fs from 'fs';

// Registering a new user
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email is already registered"
            });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "Successfully registered",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred in registering user",
            error: error.message,
        });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find().populate('songs');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

//get one user's songs
export const getUserSong = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('songs');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user.songs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user songs', error: error.message });
    }
};

// Delete user and data (admin side)
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting data', error: error.message });
    }
};

// Login user
export const loginUser = async (req, res) => {
    try {
        const { name, password } = req.body;
        const login = await User.findOne({ name, password });
        if (!login) {
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password'
            });
        }
        const token = jwt.sign({ id: login._id, name: login.name }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

// Logout user
export const logoutUser = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Successfully logged out',
    });
};

//send revenue (admin only)
export const uploadRevenue = async (req, res) => {
    try {
        const { userId } = req.params;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete old file if exists
        if (user.revenuePdf) {
            const oldFilePath = path.join('public', user.revenuePdf);
            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
            }
        }

        // Update user with the new PDF path
        user.revenuePdf = `revenue/${file.filename}`;
        await user.save();

        res.status(200).json({ message: 'Revenue PDF uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading revenue PDF', error: error.message });
    }
};

//download revenue (client side only)
export const downloadRevenue = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);

        if (!user || !user.revenuePdf) {
            return res.status(404).json({ message: 'Revenue PDF not found for this user' });
        }

        const filePath = path.join('public', user.revenuePdf);
        res.download(filePath, (err) => {
            if (err) {
                res.status(500).json({ message: 'Error downloading file' });
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching revenue PDF', error: error.message });
    }
};