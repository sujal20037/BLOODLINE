import adminRepo from "../repository/adminRepo.js";

const addBloodRequest = async (name,email,adminId,bloodGroup,state,city,contact,status) => {
    return await adminRepo.addBloodRequest(name,email,adminId,bloodGroup,state,city,contact,status);
}
const getRequestById = async (id) => {
    return await adminRepo.getRequestById(id);
}
export default {
    addBloodRequest,
    getRequestById,
 };