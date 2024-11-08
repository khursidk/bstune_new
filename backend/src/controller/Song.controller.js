import Song from '../model/userSong.model.js';
import User from '../model/user.model.js';

export const createSong = async (req, res) => {
  try {
    const {
      label, title, artist, releaseType, primaryGenre, subGenre,
      cLine, pLine, language, saleStartDate, producer, composer, lyricist, callerTuneDuration, id
    } = req.body;

    // Access uploaded files
    const audio = req.files.audio[0].path;
    const poster = req.files.poster[0].path;

    const newSong = new Song({
      label,
      title,
      artist,
      releaseType,
      primaryGenre,
      subGenre,
      cLine,
      pLine,
      language,
      saleStartDate,
      producer,
      composer,
      lyricist,
      audio,
      poster,
      callerTuneDuration,
      user: id
    });

    await newSong.save();

    // Link song to the user
    await User.findByIdAndUpdate(
      id,
      { $push: { songs: newSong._id } },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "Song successfully uploaded and added",
      data: newSong
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred while uploading song",
      error: error.message
    });
  }
};

export const getSong = async (req, res) => {
  try {
    const { id } = req.params; 
    const song = await Song.findById(id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching song', error: error.message });
  }
};