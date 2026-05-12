import React from "react";

export default function MagazineSection() {
  return (
    <section
      className="relative w-full overflow-visible bg-[#f3f3f3] px-4 sm:px-6 lg:px-8 "
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="mx-auto max-w-[1960px]">
        <div className="grid items-center gap-8 md:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          {/* Magazine Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://weraveyou.com/wp-content/uploads/2025/12/weraveyou_magazinelanding_mockup01_november2025.png"
              alt="We Rave You Magazine"
              className="
                w-full object-contain
                max-w-[340px]
                -mt-8
                sm:max-w-[560px]
                md:-mt-20 md:max-w-[560px]
                lg:-mt-10 lg:max-w-[550px]
                xl:max-w-[550px]
              "
            />
          </div>

          {/* Content */}
          <div className="flex -mt-10 mb-16 sm:mb-0 sm:mt-0 flex-col items-center text-center md:items-start md:py-16 md:text-left lg:py-20">
            <h2 className="text-[42px] font-light leading-[0.95] tracking-[-0.01em] text-black sm:text-[58px] md:text-[54px] lg:text-[68px]">
              Discover
              <br />
              <span className="font-bold tracking-[-0.01em] text-[#ED1C35]">
                We Rave You
              </span>
              <br />
              Magazine
            </h2>

            <div className="mt-10 space-y-4 text-[24px] font-light leading-[0.95] tracking-[-0.04em] text-black sm:text-[30px] md:text-[27px] lg:mt-14 lg:text-[34px]">
              <p>Gabry Ponte : Cover Story</p>
              <p>
                ILLENIUM Releases Sixth
                <br />
                Studio Album ‘Odyssey’
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <button className="rounded-[10px] bg-[#ED1C35] px-7 py-3 text-[14px] font-light text-white cursor-pointer">
                Download Magazine
              </button>

              <button className="rounded-[10px]  px-8 py-3 text-[14px] font-light text-white cursor-pointer bg-black">
                Read Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}