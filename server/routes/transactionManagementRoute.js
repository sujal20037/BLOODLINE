import express from 'express';
import adminController from '../controller/adminController.js';


const transactionManagementRoute = express.Router();

//user Management Routes
transactionManagementRoute.get('/', adminController.getAllTransactions);
transactionManagementRoute.get('/', adminController.getTransactionById);


export default transactionManagementRoute;