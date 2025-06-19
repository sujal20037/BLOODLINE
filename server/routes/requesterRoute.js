import express from 'express';
import requesterController from '../controller/requesterController.js';

const requesterRoute = express.Router();

requesterRoute.post('/blood-request',requesterController.addBloodRequest);
requesterRoute.get('/request/:id/status', requesterController.getRequestById);


export default requesterRoute;