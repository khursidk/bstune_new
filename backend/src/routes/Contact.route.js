import {Router} from 'express';
import { addQuery,getAllQuery,deleteQuery } from '../controller/Contact.controller.js';



const router = Router();

// Route to handle contact form submissions
router.post('/', addQuery);


// Fetch all contacts
router.get('/',getAllQuery );


// Delete a contact by ID
router.delete('/:id', deleteQuery);

export default router;
