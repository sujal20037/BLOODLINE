import mongoose from "mongoose";

const donorSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		bloodGroup: {
			type: String,
			required: true,
		},
		lastDonationDate: {
			type: Date,
			required: true,
		},
		totalDonations: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export const Donor = mongoose.model("Donor", donorSchema);
