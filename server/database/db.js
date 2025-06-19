import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGO_URI;

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.once("open", () => {
	console.log("MongoDB connected");
});

db.on("error", (error) => {
	console.error("MongoDB connection error:", error);
});

export default mongoose;
