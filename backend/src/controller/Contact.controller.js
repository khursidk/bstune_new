import Contact from '../model/Contact.model.js';


//adding the customer queries 
export const addQuery=async(req,res)=>{
    
        const { name, email, subject, message } = req.body;
        try {
          // Create new contact entry
        const newContact = new Contact({ name, email, subject, message });
          // Save to database
        await newContact.save();
          // Return success message
        res.status(201).json({ message: 'Query received!' });
        } catch (error) {
        // Return error with message and error details 
        res.status(500).json({ message: 'Error saving query', error: error.message });
    }
};

//getting all the customer's queries admin side
export const getAllQuery=async(req, res)=>{
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
};


//deleting queries admin side

export const deleteQuery=async(req, res)=>{
  const { id } = req.params;
  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting contact', error: error.message });
  }
};

