const FindDonorSection = () => {
  return (
    <div className="find-donor-section">
      <div className=" mx-auto  text-center">
        {/* <h2 className="text-3xl font-semibold text-gray-800 mb-4">DONOR&apos;S NEAR BY</h2>
        <p className="text-xl text-gray-600 mb-6">
          Locate blood donors near your area with our real-time tracking system.
        </p> */}
        <div className="relative rounded-lg overflow-hidden shadow-lg h-3/6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689694983!2d88.26495057337593!3d22.535564936984567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1736422546603!5m2!1sen!2sin"
            allowFullScreen=" true"
            loading="lazy"
            className="w-full h-full"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FindDonorSection;