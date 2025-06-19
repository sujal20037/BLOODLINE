import express from 'express';
import authRoute from './authRoute.js';
import stateCityRoute from './stateCityRoute.js';
import requesterRoute from './requesterRoute.js';
import adminRoute from './adminRoute.js';

const indexRoute = express.Router();

indexRoute.use('/auth',authRoute);
indexRoute.use('/state-city',stateCityRoute);
indexRoute.use('/requester',requesterRoute);
indexRoute.use('/admin',adminRoute);


export default indexRoute;