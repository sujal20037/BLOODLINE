import express from 'express';
import stateCityController from '../controller/stateCityController.js';

const stateCityRoute = express.Router();

stateCityRoute.get('/states',stateCityController.getStates);
stateCityRoute.get('/:stateId/cities', stateCityController.getCities);


export default stateCityRoute;