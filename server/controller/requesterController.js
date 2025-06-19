import AppError from "../error/AppError.js";
import { sendNotificationEmail, sendRequestSubmissionEmail, sendWelcomeEmail } from "../mailHandling/emails.js";
import requesterService from "../service/requesterService.js";

const addBloodRequest = async (req, res, next) => {
    try {
        const { name,email, id, bloodGroup,state, city, contact,status } = req.body;
        // console.log(req.body);
        

        // Validate input data
        if (!name || !email || !id || !bloodGroup || !city || !state || !contact) {
            throw new AppError('All fields are required', 400);
        }
        const bloodRequest = await requesterService.addBloodRequest(name,email,id,bloodGroup,state,city,contact,status);
        bloodRequest.donors.forEach(async (donor) => {
            await sendNotificationEmail(donor.email, donor.name,bloodRequest.name, bloodRequest.bloodGroup,bloodRequest.contact);
        });
        // console.log(bloodRequest);
        
        await sendRequestSubmissionEmail(bloodRequest.email,bloodRequest.name, bloodRequest.donors);
        return res.status(201).json(bloodRequest);
    } catch (error) {
        next(error);
    }
}
const getRequestById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const request = await requesterService.getRequestById(id);
        return res.status(200).json(request);
    } catch (error) {
        next(error);
    }
}

export default {
    addBloodRequest,
    getRequestById,
 };