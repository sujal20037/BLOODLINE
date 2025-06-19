import { sendWelcomeEmail } from "../mailHandling/emails.js";
import authService from "../service/authService.js";

const register = async (req, res, next) => {
    try {
        const {name, age, bloodGroup, city, email, password,  lastDonationDate, role, state, address, phone, previousDonations} = req.body;
        // validate input data
        if (!name || !city || !email || !password || !role || !state || !address || !phone) {
            return res.status(400).json({message: 'All fields are required'});
        }
        if (role === 'donor') {
            if (!age || !bloodGroup || !lastDonationDate || !previousDonations) {
                return res.status(400).json({message: 'All fields are required'});
            }
            const donor = await authService.addDonor(name, age, bloodGroup, city, email, password,  lastDonationDate, role, state, address, phone, previousDonations);
            // console.log(donor);
            
            if(isNaN(donor.id)) {
                return res.status(401).json({message: 'User already exists'});
            }
            await sendWelcomeEmail(email, name);
            return res.status(201).json(donor);
        }
        const requester = await authService.addRequester(name, city, email, password, role, state, address, phone);
        await sendWelcomeEmail(email, name);
        return res.status(201).json(requester);
    } catch (error) {
        next(error);
    }
}
const login = async (req, res, next) => {
    try {
        const {email, password, role} = req.body;
        // validate input data
        if (!email || !password || !role) {
            return res.status(400).json({message: 'All fields are required'});
        }
        const user = await authService.login(email, password, role);
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

export default {
    register,
    login,
 };