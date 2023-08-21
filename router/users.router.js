import express from 'express';
import userController from '../controllers/user.controller.js'


const router= express.Router();
const {getUsers,createUsers}=userController;
router.get('/', getUsers)

router.post('/',createUsers)

export default router;