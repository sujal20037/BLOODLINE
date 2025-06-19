import Header from "./header";

const CautionBanner = () => (
    <div className="fixed max-h-5 top-0 right-0 z-10">
        <div className="flex items-center w-full bg-red-500 py-0">
          <div className="bg-black text-white text-sm font-semibold px-4 py-3.5 flex-shrink-0">
            Caution:
          </div>
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
  );
  
  export default CautionBanner;
  