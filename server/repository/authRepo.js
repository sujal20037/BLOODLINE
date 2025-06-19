import AppError from "../error/AppError.js";
import bcrypt from "bcryptjs";
import { User } from "../models/User.js";
import { Donor } from "../models/Donor.js";

const addDonor = async (
	name,
	age,
	bloodGroup,
	city,
	email,
	password,
	lastDonationDate,
	role,
	state,
	address,
	phone,
	previousDonations
) => {
	try {
		const existing = await User.findOne({ email, role });
		if (existing) {
			return "User already exists";
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			name,
			email,
			password: hashedPassword,
			phone,
			role,
			state,
			city,
			address,
		});

		await Donor.create({
			userId: user._id,
			age,
			bloodGroup,
			lastDonationDate,
			totalDonations: previousDonations,
		});

		return {
			id: user._id,
			name,
			email,
			phone,
			role,
			state,
			city,
			address,
			age,
			bloodGroup,
			lastDonationDate,
			totalDonations: previousDonations,
		};
	} catch (error) {
		console.error("Error adding donor:", error);
		throw new AppError("Error adding donor", 400);
	}
};

const addRequester = async (
	name,
	city,
	email,
	password,
	role,
	state,
	address,
	phone
) => {
	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			name,
			email,
			password: hashedPassword,
			phone,
			role,
			state,
			city,
			address,
		});

		return {
			id: user._id,
			name,
			email,
			phone,
			role,
			state,
			city,
			address,
		};
	} catch (error) {
		console.error("Error adding requester:", error);
		throw new AppError("Error adding requester", 400);
	}
};

const login = async (email, password, role) => {
	try {
		const user = await User.findOne({ email, role });
		if (!user) {
			throw new AppError("Invalid credential", 401);
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			throw new AppError("Invalid email or password", 401);
		}

		return user;
	} catch (error) {
		console.error("Error logging in:", error);
		throw new AppError("Error logging in", 500);
	}
};

export default {
	addDonor,
	addRequester,
	login,
};
