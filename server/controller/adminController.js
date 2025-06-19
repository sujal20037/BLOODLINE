import AppError from "../error/AppError.js";
import adminService from "../service/adminService.js";

// User Management
const getAllUsers = (req,res,next) => {
    try {
        const users = adminService.getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const user = await adminService.getUserById(id);
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, phone, role, state, city, address, age, bloodGroup, lastDonationDate, previousDonations } = req.body;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const user = await adminService.updateUser(id, name, email, phone, role, state, city, address, age, bloodGroup, lastDonationDate, previousDonations);
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const user = await adminService.deleteUser(id);
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

// Blood Request Management

const getAllBloodRequests = async (req, res, next) => {
    try {
        const bloodRequests = await adminService.getAllBloodRequests();
        return res.status(200).json(bloodRequests);
    } catch (error) {
        next(error);
    }
}

const getBloodRequestById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const bloodRequest = await adminService.getBloodRequestById(id);
        return res.status(200).json(bloodRequest);
    } catch (error) {
        next(error);
    }
}

const approveBloodRequest = async (req, res, next) => {
    try {
        const { id } = req.params;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const bloodRequest = await adminService.approveBloodRequest(id);
        return res.status(200).json(bloodRequest);
    } catch (error) {
        next(error);
    }
}

const rejectBloodRequest = async (req, res, next) => {
    try {
        const { id } = req.params;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const bloodRequest = await adminService.rejectBloodRequest(id);
        return res.status(200).json(bloodRequest);
    } catch (error) {
        next(error);
    }
}

// Donation Management

const getAllDonations = async (req, res, next) => {
    try {
        const donations = await adminService.getAllDonations();
        return res.status(200).json(donations);
    } catch (error) {
        next(error);
    }
}

const getDonationById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const donation = await adminService.getDonationById(id);
        return res.status(200).json(donation);
    } catch (error) {
        next(error);
    }
}

const updateDonation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { donorId, requestId, status } = req.body;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const donation = await adminService.updateDonation(id, donorId, requestId, status);
        return res.status(200).json(donation);
    } catch (error) {
        next(error);
    }
}

// Blood Bank Management

const addBloodBank = async (req, res, next) => {
    try {
        const { name, email, phone, state, city, address, stock } = req.body;
        // validate input data
        if (!name || !email || !phone || !state || !city || !address || !stock) {
            throw new AppError('All fields are required', 400);
        }
        const bloodBank = await adminService.addBloodBank(name, email, phone, state, city, address, stock);
        return res.status(201).json(bloodBank);
    } catch (error) {
        next(error);
    }
}

const getAllBloodBanks = async (req, res, next) => {
    try {
        const bloodBanks = await adminService.getAllBloodBanks();
        return res.status(200).json(bloodBanks);
    } catch (error) {
        next(error);
    }
}

const getBloodBankById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const bloodBank = await adminService.getBloodBankById(id);
        return res.status(200).json(bloodBank);
    } catch (error) {
        next(error);
    }
}

const updateBloodBank = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, phone, state, city, address, stock } = req.body;
        // validate input data
        if (!id ||!name ||!email ||!phone ||!state ||!city ||!address ||!stock) {
            throw new AppError('All fields are required', 400);
        }
        const bloodBank = await adminService.updateBloodBank(id, name, email, phone, state, city, address, stock);
        return res.status(200).json(bloodBank);
    } catch (error) {
        next(error);
    }
}

const deleteBloodBank = async (req, res, next) => {
    try {
        const { id } = req.params;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const bloodBank = await adminService.deleteBloodBank(id);
        return res.status(200).json(bloodBank);
    } catch (error) {
        next(error);
    }
}

// Transaction Management

const getAllTransactions = async (req, res, next) => {
    try {
        const transactions = await adminService.getAllTransactions();
        return res.status(200).json(transactions);
    } catch (error) {
        next(error);
    }
}

const getTransactionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // validate input data
        if (!id) {
            throw new AppError('Id is required', 400);
        }
        const transaction = await adminService.getTransactionById(id);
        return res.status(200).json(transaction);
    } catch (error) {
        next(error);
    }
}


export default {
    // User Management
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    
    // Blood Request Management
    getAllBloodRequests,
    getBloodRequestById,
    approveBloodRequest,
    rejectBloodRequest,
    
    // Donation Management
    getAllDonations,
    getDonationById,
    updateDonation,
    
    // Blood Bank Management
    addBloodBank,
    getAllBloodBanks,
    getBloodBankById,
    updateBloodBank,
    deleteBloodBank,
    
    // Transaction Management
    getAllTransactions,
    getTransactionById,
 };