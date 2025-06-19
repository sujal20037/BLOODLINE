import express from 'express';
import adminController from '../controller/adminController.js';


const bloodBankManagementRoute = express.Router();

//user Management Routes

bloodBankManagementRoute.post('/addBloodBank', adminController.addBloodBank);
bloodBankManagementRoute.put('/update/:id', adminController.updateBloodBank);
bloodBankManagementRoute.get('/', adminController.getAllBloodBanks);
bloodBankManagementRoute.get('/:id', adminController.getBloodBankById);
bloodBankManagementRoute.delete('/:id', adminController.deleteBloodBank);


export default bloodBankManagementRoute;