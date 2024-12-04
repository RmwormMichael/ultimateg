import express from 'express';
const router = express.Router();

import { getAllUsers, getUser, createUser } from '../controllers/userController.js';

router.get('/', getAllUsers); 
router.get('/user/:id',getUser);
router.post('/new-user', createUser);

export default router;
