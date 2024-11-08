import newArtist from '../model/newArtist.model.js';


export const addArtist=async(req,res)=>{
    
        const { artist, email, gender, appleMusic,spotify,label } = req.body;
        try {
        const NewArtist = new newArtist({ artist, email, gender, appleMusic,spotify,label });
        await NewArtist.save();
        res.status(201).json({ message: 'Data received!' });
        } catch (error) {
        res.status(500).json({ message: 'Error saving data', error: error.message });
    }
};

export const getAllArtist=async(req, res)=>{
  try {
    const AllArtist = await newArtist.find();
    res.status(200).json(AllArtist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};


export const deleteArtist=async(req, res)=>{
  const { id } = req.params;
  try {
    const deletedArtist = await newArtist.findByIdAndDelete(id);
    if (!deletedArtist) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting data', error: error.message });
  }
};

