import stateCityService from "../service/stateCityService.js";

const getStates = async (req, res, next) => {
    try {
        const rows = await stateCityService.getStates();
        res.status(200).json(rows);
    } catch (error) {
        next(error);
    }
}

const getCities = async (req, res, next) => {
    try {
        const { stateId } = req.params;
        const rows = await stateCityService.getCities(stateId);
        res.status(200).json(rows);
    } catch (error) {
        next(error);
    }
}
export default {
    getStates,
    getCities
};