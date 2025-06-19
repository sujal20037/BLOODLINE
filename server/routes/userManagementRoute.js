import express from 'express';
import adminController from '../controller/adminController.js';

const userManagementRoute = express.Router();

//user Management Routes
userManagementRoute.put('/update/:id', adminController.updateUser);
userManagementRoute.get('/', adminController.getAllUsers);
userManagementRoute.get('/:id', adminController.getUserById);
userManagementRoute.delete('/:id', adminController.deleteUser);


export default userManagementRoute;