// import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import RequestBloodSection from "../components/requestblood";
import FindDonorSection from "../components/findadonor";
import FooterSection from "../components/footer";
import PosterLanding from "../components/posterLanding";
import FacilitySlider from "../components/facilitySlider";
import TipsSection from "../components/tipSection";
import DonationInfo from "../components/donationInfo";
import DonationSteps from "../components/donationSteps";

const Home = () => {
  return (
    <>
      <div className="fixed max-h-5 top-0 right-0 z-10">
        <div className="flex items-center w-full bg-red-500 py-0">
          {/* Caution Message */}
          <div className="bg-black text-white text-sm font-semibold px-4 py-3.5 flex-shrink-0">
            Caution:
          </div>

          {/* Marquee */}
          <div className="flex-1">
            <marquee className="text-2xl text-white bg-red-500 py-0 font-semibold">
              We never charge for blood donations. Don&apos;t pay for blood;
              it&apos;s a selfless act. Save lives without cost. If anyone asks
              for money to donate blood, please do not encourage it.
            </marquee>
          </div>
        </div>

        <Header />
      </div>
      <div className="h-28"> </div>
      <FacilitySlider />

      <PosterLanding />

      <DonationInfo />
      <h1 className="text-5xl font-semibold text-center text-red-600 py-2 bg-gray-300 mb-0">
        Post a Blood Request
      </h1>
      <div className="grid grid-cols-2 items-center bg-gray-300 mt-0">
        <FindDonorSection />
        <RequestBloodSection />
      </div>
      <Banner />
      <DonationSteps />
      <TipsSection />
      <FooterSection />
    </>
  );
};

export default Home;
