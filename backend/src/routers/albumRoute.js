import express from 'express'
import { addAlbum, listAlbum, removeAlbum } from '../controllers/albumController.js'
import upload from '../middleware/multer.js'

const albumRouer = express.Router();

albumRouer.post('/add',upload.single('image'),addAlbum);
albumRouer.get('/list',listAlbum);
albumRouer.post('/remove',removeAlbum);

export default albumRouer;