import React from "react";

const Advertise = () => {
  return (
    <div className="h-screen relative w-full bg-[#f7f3e7] flex flex-col items-center justify-center">
        <img className="absolute scale-105 top-12" src="./lines2.png"></img>
      <div className="bg-black p-8  relative h-120 flex flex-col justify-between items-center">
        <div className="h-2 w-2 rounded-full bg-[#ff0028] z-10 absolute top-2 left-2"></div>
        <div className="h-2 w-2 rounded-full bg-[#ff0028] z-10 absolute bottom-2 left-2"></div>
        <div className="h-2 w-2 rounded-full bg-[#ff0028] z-10 absolute top-2 right-2"></div>
        <div className="h-2 w-2 rounded-full bg-[#ff0028] z-10 absolute bottom-2 right-2"></div>

        <div className="">
          <h3 className="text-[5vw]! text-center text-[#ff0028]">
            Advertise & Promote <br /> on We Rave You
          </h3>
          <div className="mt-5 flex  flex-col gap-1 w-full items-center justify-center text-white">
            <p>2M+ Social Media Followers</p>
            <p>35M+ Monthly Content Reach</p>
          </div>
        </div>
        <div className="font-[signature]!  text-[1.2vw]  text-center absolute top-75 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  ">
          A Truly Global Dance Music Brand
        </div>
        <button className="w-full py-3 mt-25 rounded-full bg-[#ff0028]">
          <span className="text-white">ADVERTISE NOW</span>
        </button>
      </div>
    </div>
  );
};

export default Advertise;
