import requesterRepo from "../repository/requesterRepo.js";

const addBloodRequest = async (name,email,requesterId,bloodGroup,state,city,contact,status) => {
    return await requesterRepo.addBloodRequest(name,email,requesterId,bloodGroup,state,city,contact,status);
}
const getRequestById = async (id) => {
    return await requesterRepo.getRequestById(id);
}
export default {
    addBloodRequest,
    getRequestById,
 };