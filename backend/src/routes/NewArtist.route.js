import {Router} from 'express';
import { addArtist,getAllArtist,deleteArtist } from '../controller/NewArtist.controller.js';



const router = Router();

router.post('/', addArtist);


router.get('/',getAllArtist );


router.delete('/:id', deleteArtist);

export default router;
