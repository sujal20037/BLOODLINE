import stateCityRepo from "../repository/stateCityRepo.js";

const getStates = async() => {
    return await stateCityRepo.getStates();
}
const getCities = async(stateId) => {
    return await stateCityRepo.getCities(stateId);
}

export default {
    getStates,
    getCities,
};