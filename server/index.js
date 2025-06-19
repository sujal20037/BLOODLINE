import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import indexRoute from "./routes/indexRoute.js";
import { errorHandler } from "./error/ErrorHandler.js";
import morgan from "morgan";
import "./database/db.js";

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json({ extended: true }));
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
		credentials: true,
	})
);

app.use(morgan("dev"));
app.use("/api", indexRoute);

async function callGeminiAPI(message) {
	const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

	const requestBody = {
		contents: [
			{
				parts: [
					{
						text: `You are a helpful AI assistant specialized in blood donation information. Provide accurate, helpful, and encouraging information about blood donation, including eligibility criteria, preparation, aftercare, and general blood donation facts. Always encourage safe practices and suggest consulting healthcare professionals for medical concerns. Keep responses concise but informative.

User question: ${message}`,
					},
				],
			},
		],
		generationConfig: {
			temperature: 0.7,
			topK: 40,
			topP: 0.95,
			maxOutputTokens: 300,
		},
	};

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(requestBody),
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(
			`Gemini API error: ${response.status} - ${
				errorData.error?.message || "Unknown error"
			}`
		);
	}

	const data = await response.json();

	if (data.candidates && data.candidates[0] && data.candidates[0].content) {
		return data.candidates[0].content.parts[0].text;
	} else {
		throw new Error("Unexpected response format from Gemini API");
	}
}

app.post("/api/chat", async (req, res) => {
	try {
		const userMessage = req.body.message;

		if (!userMessage) {
			return res.status(400).json({ error: "No message provided" });
		}

		if (!GEMINI_API_KEY) {
			return res
				.status(500)
				.json({ error: "Gemini API key not configured" });
		}

		const aiResponse = await callGeminiAPI(userMessage);
		res.json({ response: aiResponse });
	} catch (error) {
		console.error("Error calling Gemini API:", error);

		if (error.message.includes("403")) {
			res.status(403).json({
				error: "API key invalid or quota exceeded",
			});
		} else if (error.message.includes("429")) {
			res.status(429).json({
				error: "Rate limit exceeded. Please try again later.",
			});
		} else {
			res.status(500).json({ error: "Failed to process the request" });
		}
	}
});

app.use(errorHandler);

app.get("/", (req, res) => {
	res.send({ status: "alive", message: "Welcome to Bloodline API" });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
