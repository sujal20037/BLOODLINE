// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BloodlineLogo from "../assets/avatars/bloodline-logo.svg";

const Header = () => {
  const location = useLocation();


  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex align-middle text-3xl font-bold text-red-500">
          <img src={BloodlineLogo} alt="Blood Line" className="h-11 " />
          Blood Line
        </Link>

        <div id="navbarNavAltMarkup" className="hidden w-full md:flex md:items-center md:w-auto">
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:space-x-6 md:flex-row">
            <Link
              to="/"
              className={`text-black hover:text-red-500 duration-300 text-2xl font-semibold ${location.pathname === "/" ? "border-b-2 border-red-300" : ""} transition-all duration-300 ease-in-out`}
            >
              Home
            </Link>
            <Link
              to="/founder"
              className={`text-black hover:text-red-500 duration-300 text-2xl font-semibold ${location.pathname === "/founder" ? "border-b-2 border-red-300" : ""} transition-all duration-300 ease-in-out`}
            >
              Founder
            </Link>
            <Link
              to="/about-us"
              className={`text-black hover:text-red-500 duration-300 text-2xl font-semibold ${location.pathname === "/about-us" ? "border-b-2 border-red-300" : ""} transition-all duration-300 ease-in-out`}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className={`text-black hover:text-red-500 duration-300 text-2xl font-semibold ${location.pathname === "/contact-us" ? "border-b-2 border-red-300" : ""} transition-all duration-300 ease-in-out`}
            >
              Contact Us
            </Link>
            
            
            <Link
              to="/register"
              className="inline-block bg-black text-white py-2 px-6 rounded-lg"
            >
              Register Now
            </Link>
                
            
            <Link
              to="/login"
              className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Login
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
