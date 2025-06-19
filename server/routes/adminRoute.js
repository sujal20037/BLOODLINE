import express from 'express';
import userManagementRoute from './userManagementRoute.js';
import bloodRequestManagementRoute from './bloodRequestManagementRoute.js';
import donationManagementRoute from './donationManagementRoute.js';
import bloodBankManagementRoute from './bloodBankManagementRoute.js';
import transactionManagementRoute from './transactionManagementRoute.js';

const adminRoute = express.Router();

//user Management Routes
adminRoute.use('/users',userManagementRoute);
adminRoute.use('/blood-requests', bloodRequestManagementRoute);
adminRoute.use('/donations', donationManagementRoute);
adminRoute.use('/blood-banks', bloodBankManagementRoute);
adminRoute.use('/transactions', transactionManagementRoute);


export default adminRoute;