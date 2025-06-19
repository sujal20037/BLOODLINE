import authRepo from "../repository/authRepo.js";

const addDonor = async (name, age, bloodGroup, city, email, password,  lastDonationDate, role, state, address, phone, previousDonations) => {
    return await authRepo.addDonor(name, age, bloodGroup, city, email, password, lastDonationDate, role, state, address, phone, previousDonations);
}
const addRequester = async (name, city, email, password, role, state, address, phone) => {
    return await authRepo.addRequester(name, city, email, password, role, state, address, phone);
}
const login = async (email, password, role) => {
    return await authRepo.login(email, password, role);
}
export default {
    addDonor,
    addRequester,
    login,
 };