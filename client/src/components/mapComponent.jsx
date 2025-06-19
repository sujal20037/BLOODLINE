const MapComponent = () => {
    return (
      <div className="w-full h-full">
        <iframe
          title="Kolkata Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3172592876094!2d88.36389591541469!3d22.572646235179193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277bfb252ba93%3A0x434fdef65b3e0529!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1670763965821!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default MapComponent;
  