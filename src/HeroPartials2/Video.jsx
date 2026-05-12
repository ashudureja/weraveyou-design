import React from "react";

const videos = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=90",
    title: "Main video",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=90",
    title: "Left preview video",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=90",
    title: "Right preview video",
  },
];

export default function LatestVideosSection() {
  return (
    <section
      className="
        w-full overflow-hidden bg-[#f3f3f3] px-4 py-10
        [--main-video-w:80vw]
        [--side-video-w:48vw]
        sm:px-6
        sm:[--main-video-w:70vw]
        sm:[--side-video-w:38vw]
        md:py-16
        md:[--main-video-w:66vw]
        md:[--side-video-w:31vw]
        lg:px-8
        lg:py-20
        lg:[--main-video-w:55vw]
        lg:[--side-video-w:30vw]
       
       
      "
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="mx-auto max-w-[1960px]">
        {/* Heading */}
        <h2
          className="text-center font-black uppercase leading-[0.85] tracking-[-0.065em] text-black"
          style={{
            fontSize: "clamp(3.8rem, 12vw, 10.5rem)",
          }}
        >
          Latest Videos
        </h2>

        {/* Video area */}
        <div className="relative mx-auto mt-4 flex min-h-[260px] items-center justify-center sm:min-h-[330px] md:min-h-[390px] lg:min-h-[460px] xl:min-h-[520px]">
          {/* Left video */}
          <div
            className="
              absolute left-[-24vw] top-1/2 z-0 w-[var(--side-video-w)]
              -translate-y-1/2 overflow-hidden rounded-[10px]
              sm:left-[-12vw]
              md:left-[-3vw]
              lg:left-[1vw]
              xl:left-[2.5%]
              xl:rounded-[14px]
            "
          >
            <img
              src={videos[1].image}
              alt={videos[1].title}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          {/* Right video */}
          <div
            className="
              absolute right-[-24vw] top-1/2 z-0 w-[var(--side-video-w)]
              -translate-y-1/2 overflow-hidden rounded-[10px]
              sm:right-[-12vw]
              md:right-[-3vw]
              lg:right-[1vw]
              xl:right-[2.5%]
              xl:rounded-[14px]
            "
          >
            <img
              src={videos[2].image}
              alt={videos[2].title}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          {/* Main center video */}
          <div className="relative z-10 w-[var(--main-video-w)] max-w-full">
            <div className="overflow-hidden rounded-[12px] shadow-[0_0_50px_rgba(0,0,0,0.5)] sm:rounded-[16px] xl:rounded-[18px]">
              <img
                src={videos[0].image}
                alt={videos[0].title}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            {/* Play button */}
            <button
              aria-label="Play video"
              className="
                absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2
                items-center justify-center rounded-[12px] bg-[#ED1C35]
                transition hover:scale-105
                h-[46px] w-[68px]
                sm:h-[56px] sm:w-[82px]
                md:h-[64px] md:w-[94px]
                xl:h-[72px] xl:w-[104px]
              "
            >
              <span
                className="
                  ml-1 block h-0 w-0 border-y-transparent border-l-white
                  border-y-[11px] border-l-[17px]
                  sm:border-y-[14px] sm:border-l-[22px]
                  xl:border-y-[18px] xl:border-l-[28px]
                "
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center sm:mt-8 md:mt-10">
          <button className="rounded-[10px] bg-[#ED1C35] px-6 py-3 text-[13px] font-medium text-white transition hover:opacity-90 sm:rounded-[12px] sm:text-[14px]">
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
}