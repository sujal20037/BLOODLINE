import express from 'express';
import adminController from '../controller/adminController.js';


const bloodRequestManagementRoute = express.Router();

//user Management Routes
bloodRequestManagementRoute.put('/update/:id',adminController.approveBloodRequest);
bloodRequestManagementRoute.get('/', adminController.getAllBloodRequests);
bloodRequestManagementRoute.get('/:id', adminController.getBloodRequestById);
bloodRequestManagementRoute.delete('/:id', adminController.rejectBloodRequest);


export default bloodRequestManagementRoute;