import { Link } from "react-router-dom";
import facebookImage from "../assets/avatars/facebook.png"
import tweeterImage from "../assets/avatars/tweeter.png"
import instagramImage from "../assets/avatars/instagram.jpg"
import linkedinImage from "../assets/avatars/linkedin.png"

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* About Section */}
          <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">About Blood Line</h5>
            <p className="text-gray-300">
              Blood Line connects blood donors with those in need. Join our
              mission to save lives with the power of donation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-300 hover:text-red-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-red-500 transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-300 hover:text-red-500 transition"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-300 hover:text-red-500 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3 px-4">
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-500 transition"
              >
                <img
                  src={facebookImage}
                  alt="Facebook"
                 className="fab h-6 rounded-lg fa-facebook fa-lg"></img>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition"
              >
                <img
                  src={tweeterImage}
                  alt="Facebook"
                 className="fab h-6 rounded-lg fa-facebook fa-lg"></img>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-pink-500 transition"
              >
                <img
                  src={instagramImage}
                  alt="Facebook"
                 className="fab h-6 rounded-lg fa-facebook fa-lg"></img>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-700 transition"
              >
                <img
                  src={linkedinImage}
                  alt="Facebook"
                 className="fab h-6 rounded-lg fa-facebook fa-lg"></img>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-gray-400">&copy; 2024 Blood Line. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;