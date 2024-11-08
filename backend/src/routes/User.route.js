import { Router } from 'express';
import {
    registerUser,
    getAllUser,
    getUserSong,
    deleteUser,
    loginUser,
    logoutUser,
    uploadRevenue,
    downloadRevenue
} from '../controller/User.controller.js';
import { createSong, getSong } from '../controller/Song.controller.js';
import { uploadFile } from '../middleware/multer.middleware.js';
import { revenueFile } from '../middleware/revenue.middleware.js';

const router = Router();

// Register a new user (admin side)
router.post('/register', registerUser);

// Get all users (admin side)
router.get('/allUsers', getAllUser);

// Get user songs (client side)
router.get('/getSongs/:userId', getUserSong);

// Get song by id (client side)
router.get('/songs/:id', getSong);

// Delete user and data (admin side)
router.delete('/deleteUser/:id', deleteUser);

// Login user
router.post('/login', loginUser);

// Logout user
router.post('/logout', logoutUser);

// Song routes
router.post('/songs', uploadFile.fields([{ name: 'audio', maxCount: 1 }, { name: 'poster', maxCount: 1 }]), createSong);

router.post('/uploadRevenue/:userId', revenueFile.single('revenue'), uploadRevenue);
router.get('/downloadRevenue/:userId', downloadRevenue);

export default router;
