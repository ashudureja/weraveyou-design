import React from "react";

export default function MagazineSection() {
  return (
    <section
      className="relative w-full overflow-visible bg-[#f3f3f3] px-4 sm:px-6 lg:px-8 pb-0 sm:pb-10 md:pb-0  "
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="mx-auto max-w-[2000px]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-10">
          {/* Magazine Image */}
          <div className="flex justify-center  md:justify-end">
            <img
              src="https://weraveyou.com/wp-content/uploads/2025/12/weraveyou_magazinelanding_mockup01_november2025.png"
              alt="We Rave You Magazine"
              className="
                object-contain h-90 md:h-120 lg:h-130 lg:-mt-25 xl:h-150 2xl:h-180
              
                -mt-8
               
                md:-mt-20 
                xl:-mt-15 
               
              "
            />
          </div>

          {/* Content */}
          <div className="flex -mt-10 mb-16 sm:mb-0 sm:mt-0 flex-col items-center text-center md:items-start md:py-16 md:text-left lg:py-20">
            <h2 className="text-[40px]  leading-[0.95] tracking-[-0.03em] text-black sm:text-[50px] lg:text-[54px] xl:text-[68px] 2xl:text-[74px]">
              Discover
              <br />
              <span className="font-bold  text-[#ED1C35]">
                We Rave You
              </span>
              <br />
              Magazine
            </h2>

            <div className="mt-10 space-y-4 text-[22px] font-light leading-[0.95] tracking-[-0.04em] text-black  md:text-[26px] lg:mt-14 lg:text-[30px] xl:text-[34px] 2xl:text-[38px]">
              <p>Gabry Ponte : Cover Story</p>
              <p>
                ILLENIUM Releases Sixth
                <br />
                Studio Album ‘Odyssey’
              </p>
            </div>

            <div className="mt-10 flex  items-center justify-center gap-4 md:justify-start">
              <button className="rounded-[10px] bg-[#ED1C35] px-7 py-3 text-[12px] xl:text-[14px]  text-white cursor-pointer">
                Download Magazine
              </button>

              <button className="rounded-[10px] xl:text-[14px]  px-7 py-3 text-[12px]  text-white cursor-pointer bg-black">
                Read Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}