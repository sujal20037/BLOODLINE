// import React from "react";
// import bannerImage from '../assets/images/donar_map.png';

const Banner = () => {
  return (
    <div
      className="hero bg-cover bg-center bg-no-repeat text-white text-center py-24 px-5"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
        Save Lives, One Donation at a Time
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        Join Blood Line to connect donors with those in need.
      </p>
      <div className="mt-4">
        <a
          href="#register"
          className="inline-block bg-black text-white py-3 px-8 rounded-lg"
        >
          REGISTER AS A DONOR
        </a>
        <a
          href="#login"
          className="inline-block ml-4 bg-red-600 text-white py-3 px-8 rounded-lg hover:bg-red-700 transition duration-300"
        >
          FIND A BLOOD DONOR
        </a>
      </div>
    </div>
  );
};

export default Banner;
