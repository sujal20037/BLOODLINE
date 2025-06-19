import React from "react";
import { Link } from "react-router-dom";
import CautionBanner from "../components/cautionBanner";
import FooterSection from "../components/footer";

const AboutUs = () => {
  return (
    <>
      <CautionBanner />
      <div className="h-28"></div>
      <div className="bg-red-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-red-600">
            About Us
          </h1>
          <p className="text-center text-lg text-gray-700 mt-4">
            Saving lives, one connection at a time.
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <p className="text-gray-800 text-lg leading-relaxed">
                <strong>BloodLine</strong> is a platform dedicated to saving lives by facilitating
                seamless connections between blood donors and recipients. In
                times of emergency, BloodLine ensures timely access to
                life-saving resources while promoting a collaborative and
                efficient blood donation system. Our mission is to bridge the
                gap between blood donors and hospitals, ensuring that everyone
                in need of blood gets it when they need it the most.
              </p>
            </section>

            <section className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-3xl font-semibold text-red-600">Our Mission</h2>
              <p className="text-gray-800 text-lg leading-relaxed mt-2">
                Our mission is to connect blood donors with those in need
                through an intuitive and user-friendly platform, enabling faster
                response times during medical emergencies.
              </p>
            </section>

            <section className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-3xl font-semibold text-red-600">Our Vision</h2>
              <p className="text-gray-800 text-lg leading-relaxed mt-2">
                To become the leading platform for blood donation, ensuring
                every person has easy access to life-saving blood at the moment
                of their greatest need.
              </p>
            </section>

            <section className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-3xl font-semibold text-red-600">Our Values</h2>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li className="text-gray-800 text-lg">
                  <strong>Empathy</strong> – Understanding the needs of those in
                  medical emergencies.
                </li>
                <li className="text-gray-800 text-lg">
                  <strong>Collaboration</strong> – Connecting people and blood
                  banks efficiently.
                </li>
                <li className="text-gray-800 text-lg">
                  <strong>Trust</strong> – Ensuring privacy and security for all
                  users of the platform.
                </li>
                <li className="text-gray-800 text-lg">
                  <strong>Impact</strong> – Saving lives through immediate
                  connections between donors and requesters.
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact-us"
              className="bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default AboutUs;
