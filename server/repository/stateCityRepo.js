import { readFile } from 'fs/promises';
import AppError from '../error/AppError.js'
import path from 'path';

const getStates = async () => {
  try {
    const filePath = path.resolve('state-city.json'); // Get the absolute path to the JSON file
    console.log(filePath);
    
    const data = await readFile(filePath, 'utf-8'); // Read the file as a string
    const jsonData = JSON.parse(data); // Parse the JSON data
    const states = jsonData.states.reduce((acc, state) => {
        acc[state.name] = state.id; // Use state name as key and state code as value
        return acc;
      }, {});
      
      console.log(states);
    return states;
  } catch (error) {
    console.error("Error getting all States:", error);
    throw new AppError("Error getting all States.",500);
  }
};
const getCities = async (stateId) => {
    try {
        console.log(stateId);
        
        if (!stateId) {
            throw new AppError("State ID is required.", 400);
        }
    const filePath = path.resolve('state-city.json'); // Get the absolute path to the JSON file
    const data = await readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
    const state = jsonData.states.find((state) => state.id === String(stateId)); // Ensure IDs match in type
if (!state) {
  throw new AppError("State not found.", 404);
}

// Districts do not have a 'type' field in your JSON. You can directly extract them.
const cities = state.districts.map((district) => district.name); 

console.log(`Cities in ${state.name}: ${cities.join(', ')}`);
return cities;

  } catch (error) {
    console.error("Error getting cities:", error);
    throw new AppError("Error getting cities.",500);
  }
};

export default {
  getStates,
  getCities,
};