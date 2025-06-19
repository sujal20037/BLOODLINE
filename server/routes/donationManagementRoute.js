import express from 'express';
import adminController from '../controller/adminController.js';

const donationManagementRoute = express.Router();

//user Management Routes
donationManagementRoute.put('/update/:id', adminController.updateDonation);
donationManagementRoute.get('/', adminController.getAllDonations);
donationManagementRoute.get('/:id', adminController.getDonationById);


export default donationManagementRoute;