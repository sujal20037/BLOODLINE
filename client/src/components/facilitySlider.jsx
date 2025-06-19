// import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import facility1 from "../assets/images/Facilities/picture 1.jpg"
import facility2 from "../assets/images/Facilities/picture 2.jpg"
import facility3 from "../assets/images/Facilities/picture 3.jpg"
import facility4 from "../assets/images/Facilities/picture 4.jpg"

const FacilitySlider = () => {
  // Hardcoded data for the facilities
  const facilities = [
    {
      src: facility1
    },
    {
      src: facility2
    },
    {
      src: facility3
    },
    {
      src: facility4
    },
  ];

  // Slider settings for infinite loop
  const settings = {
    dots: true,
    infinite: true, // Ensures the slider loops infinitely
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 4000, // 3 seconds interval
    pauseOnHover: false, // Optional: Keeps sliding even when hovered
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
      <div className="w-full">
        <Slider {...settings}>
          {facilities.map((facility, index) => (
            <div key={index} className="p-0">
              <img
                className="w-full h-96 shadow-lg"
                src={facility.src}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
  );
};

export default FacilitySlider;
