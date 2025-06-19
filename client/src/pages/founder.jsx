import React from "react";
import CautionBanner from "../components/cautionBanner";
import FooterSection from "../components/footer";
import founderImage from "../assets/jeet-pal.jpg"; // Replace with the actual path to the founder's image

const Founder = () => {
  return (
    <>
      <CautionBanner />
      <div className="h-28"></div>
      <div className="bg-red-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-red-600">
            Founder
          </h1>
          <p className="text-center text-lg text-gray-700 mt-4">
            Meet the visionary behind BloodLine.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl p-6">
          <img
            src={founderImage}
            alt="Jeet Pal - Founder"
            className="w-56 h-48 rounded-full shadow-md object-cover"
            />


            <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
              <h2 className="text-3xl font-semibold text-red-600">
                Jeet Pal
              </h2>
              <p className="text-lg text-gray-800 mt-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:jeetpal7804322@gmail.com"
                  className="text-blue-600 underline"
                >
                  jeetpal7804322@gmail.com
                </a>
              </p>
              <p className="text-lg text-gray-800">
                <strong>Phone:</strong> +91 70039 55911
              </p>
              <p className="text-gray-700 text-lg mt-4 leading-relaxed">
                Jeet Pal is the visionary behind BloodLine, a platform dedicated
                to saving lives by bridging the gap between blood donors and
                those in need. With a strong belief in the power of community
                and technology, Jeet created BloodLine to address the critical
                challenges faced during medical emergencies when timely access
                to blood can make all the difference.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <section className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-3xl font-semibold text-red-600">
                The Idea Behind BloodLine
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed mt-2">
                The idea for BloodLine emerged from Jeet’s personal experiences
                and observations of how difficult it can be to find blood donors
                during emergencies. Understanding the urgent need for a
                reliable, technology-driven platform, he set out to create a
                system that simplifies and accelerates the process of finding
                donors, ensuring no life is lost due to delays.
              </p>
            </section>

            <section className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-3xl font-semibold text-red-600">
                Vision for the Future
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed mt-2">
                Jeet envisions BloodLine becoming a global platform that not
                only connects donors and recipients but also fosters awareness
                about blood donation. Future goals include integrating advanced
                technologies like real-time communication, AI-based donor
                matching, and a mobile-first approach to make the platform more
                accessible and effective.
              </p>
            </section>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Founder;
