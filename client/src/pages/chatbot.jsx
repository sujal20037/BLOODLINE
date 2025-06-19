import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User, AlertCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";

const Chatbot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			id: 1,
			text: "Hello! I'm your AI assistant specialized in blood donation information. How can I help you today?",
			sender: "bot",
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		},
	]);
	const [inputValue, setInputValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const messagesEndRef = useRef(null);

	const sampleQueries = [
		"At what age can I give blood?",
		"How often can I donate blood?",
		"What are the eligibility criteria for blood donation?",
		"What should I do after donating blood?",
		"What are the different blood types?",
		"How much blood is taken during donation?",
	];

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const GEMINI_API_KEY = "AIzaSyAOAkoQaHt8-whiEXn1Map8TgJYazMxi9A"; // WARNING: This is visible to anyone using your site

	const callGeminiAPI = async (message) => {
		const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

		const requestBody = {
			contents: [
				{
					parts: [
						{
							text: `You are a helpful AI assistant specialized in blood donation information. Provide accurate, helpful, and encouraging information about blood donation, including eligibility criteria, preparation, aftercare, and general blood donation facts. Always encourage safe practices and suggest consulting healthcare professionals for medical concerns. Keep responses concise but informative. User question: ${message}`,
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

		if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
			return data.candidates[0].content.parts[0].text;
		} else {
			throw new Error("Unexpected response format from Gemini API");
		}
	};

	const handleSendMessage = async () => {
		if (!inputValue.trim()) return;

		setError(null);

		const userMessage = {
			id: messages.length + 1,
			text: inputValue,
			sender: "user",
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};

		setMessages((prev) => [...prev, userMessage]);
		const currentInput = inputValue;
		setInputValue("");
		setIsLoading(true);

		try {
			const aiResponse = await callGeminiAPI(currentInput);

			const botMessage = {
				id: messages.length + 2,
				text: aiResponse,
				sender: "bot",
				timestamp: new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
			};

			setMessages((prev) => [...prev, botMessage]);
		} catch (err) {
			console.error("Gemini API error:", err.message);
			setError(err.message);

			setMessages((prev) => [
				...prev,
				{
					id: messages.length + 2,
					text: "I'm having trouble accessing the knowledge base right now. Please try again later.",
					sender: "bot",
					timestamp: new Date().toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
				},
			]);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSampleQuery = (query) => {
		setInputValue(query);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	const clearError = () => {
		setError(null);
	};

	return (
		<>
			{/* Trigger Button */}
			<button
				onClick={() => setIsOpen(true)}
				className="fixed z-40 p-4 text-white transition-all duration-300 transform rounded-full shadow-lg bottom-6 right-6 bg-rose-500 hover:bg-rose-600 hover:shadow-xl hover:scale-105"
			>
				<MessageCircle size={28} />
			</button>

			{/* Modal Overlay */}
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
					<div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[700px] flex flex-col overflow-hidden animate-in fade-in duration-300">
						{/* Header */}
						<div className="flex items-center justify-between p-4 text-white bg-gradient-to-r from-rose-500 to-rose-600">
							<div className="flex items-center space-x-3">
								<div className="p-2 bg-white rounded-full bg-opacity-20">
									<Bot size={24} />
								</div>
								<div>
									<h3 className="text-lg font-semibold">
										Blood Donation AI Assistant
									</h3>
									<p className="text-sm text-rose-100">
										Powered by Gemini AI
									</p>
								</div>
							</div>
							<button
								onClick={() => setIsOpen(false)}
								className="hover:bg-white hover:bg-opacity-20 rounded-full transition-colors w-[44px] h-[44px] flex items-center justify-center"
							>
								<X size={24} />
							</button>
						</div>

						{/* Error Banner */}
						{error && (
							<div className="p-4 border-b border-red-200 bg-red-50">
								<div className="flex items-start justify-between space-x-2">
									<div className="flex items-start space-x-2">
										<AlertCircle
											size={18}
											className="text-red-600 mt-0.5"
										/>
										<div className="text-sm text-red-700">
											<p className="mb-1 font-medium">
												Connection Error
											</p>
											<p>{error}</p>
										</div>
									</div>
									<button
										onClick={clearError}
										className="text-red-600 hover:text-red-800"
									>
										<X size={16} />
									</button>
								</div>
							</div>
						)}

						{/* Sample Queries */}
						<div className="p-4 border-b bg-rose-50">
							<p className="mb-3 text-sm font-medium text-gray-700">
								Try asking:
							</p>
							<div className="flex flex-wrap gap-2">
								{sampleQueries.map((query, index) => (
									<button
										key={index}
										onClick={() => handleSampleQuery(query)}
										className="px-3 py-2 text-sm transition-colors bg-white border rounded-full border-rose-200 text-rose-700 hover:bg-rose-100 hover:border-rose-300"
									>
										{query}
									</button>
								))}
							</div>
						</div>

						{/* Messages Container */}
						<div className="flex-1 p-4 space-y-4 overflow-y-auto">
							{messages.map((message) => (
								<div
									key={message.id}
									className={`flex ${
										message.sender === "user"
											? "justify-end"
											: "justify-start"
									}`}
								>
									<div
										className={`flex items-start space-x-3 max-w-[85%] ${
											message.sender === "user"
												? "flex-row-reverse space-x-reverse"
												: ""
										}`}
									>
										<div
											className={`rounded-full p-2.5 ${
												message.sender === "user"
													? "bg-rose-500"
													: "bg-gray-200"
											}`}
										>
											{message.sender === "user" ? (
												<User
													size={18}
													className="text-white"
												/>
											) : (
												<Bot
													size={18}
													className="text-gray-600"
												/>
											)}
										</div>
										<div>
											<div
												className={`rounded-2xl px-4 py-3 ${
													message.sender === "user"
														? "bg-rose-500 text-white"
														: "bg-gray-100 text-gray-800"
												}`}
											>
												<p className="text-sm prose-sm prose max-w-none">
													<ReactMarkdown>
														{message.text}
													</ReactMarkdown>
												</p>
											</div>
											<p className="px-2 mt-1 text-xs text-gray-500">
												{message.timestamp}
											</p>
										</div>
									</div>
								</div>
							))}
							{isLoading && (
								<div className="flex justify-start">
									<div className="flex items-start space-x-3 max-w-[85%]">
										<div className="p-2.5 bg-gray-200 rounded-full">
											<Bot
												size={18}
												className="text-gray-600"
											/>
										</div>
										<div>
											<div className="px-4 py-3 text-gray-800 bg-gray-100 rounded-2xl">
												<div className="flex space-x-1">
													<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
													<div
														className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
														style={{
															animationDelay:
																"0.1s",
														}}
													></div>
													<div
														className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
														style={{
															animationDelay:
																"0.2s",
														}}
													></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
							{/* Invisible element to scroll to */}
							<div ref={messagesEndRef} />
						</div>

						{/* Input Section */}
						<div className="p-4 border-t bg-gray-50">
							<div className="flex space-x-3">
								<input
									type="text"
									value={inputValue}
									onChange={(e) =>
										setInputValue(e.target.value)
									}
									onKeyPress={handleKeyPress}
									placeholder="Ask about blood donation..."
									disabled={isLoading}
									className="flex-1 px-4 py-3 text-black border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
								/>
								<button
									onClick={handleSendMessage}
									disabled={!inputValue.trim() || isLoading}
									className="bg-rose-500 hover:bg-rose-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full p-3 transition-colors w-[48px] h-[48px] flex items-center justify-center"
								>
									<Send size={20} />
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Chatbot;
