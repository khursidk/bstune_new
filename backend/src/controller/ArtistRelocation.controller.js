// ArtistRelocation.controller.js
import ArtistRelocation from "../model/artistRelocation.model.js";

export const addRelocation = async (req, res) => {
  const { upc, title, artist, isrc, instaLink, fbLink, label } = req.body;
  try {
    const newRelocation = new ArtistRelocation({
      upc,
      title,
      artist,
      isrc,
      instaLink,
      fbLink,
      label,
    });
    await newRelocation.save();
    res.status(201).json({ message: "Data received!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error: error.message });
  }
};

export const getAllRelocation = async (req, res) => {
  try {
    const allRelocation = await ArtistRelocation.find();
    res.status(200).json(allRelocation);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
};

export const deleteRelocation = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRelocation = await ArtistRelocation.findByIdAndDelete(id);
    if (!deletedRelocation) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting data", error: error.message });
  }
};
