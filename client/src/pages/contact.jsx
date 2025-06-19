import React, { useState } from "react";
import FooterSection from "../components/footer";
import CautionBanner from "../components/cautionBanner";

const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    setStatus("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <>
      <CautionBanner />
      <div className="h-28"></div>
      <div className="bg-red-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-red-600">
            Contact Us
          </h1>
          <p className="text-center text-lg text-gray-700 mt-4">
            We&apos;re here to help and answer any questions you might have.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-red-600">Email</h2>
                <p className="text-gray-700">support@bloodline.com</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-red-600">Phone</h2>
                <p className="text-gray-700">+91 7003955911</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-red-600">
                  Social Media
                </h2>
                <p className="text-gray-700">
                  Follow us on:
                  <a
                    href="https://twitter.com/bloodline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    Twitter
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://facebook.com/bloodline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Facebook
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://instagram.com/bloodline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Instagram
                  </a>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-red-600">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Submit
                </button>
              </form>
              {status && (
                <p className="mt-4 text-green-600 text-center">{status}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ContactUs;
