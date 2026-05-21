"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: 1,
    title:
      "Kali Audio SM-5 Review: Best 3-Way Studio Monitor for Mixing & Dolby Atmos?",
    imageUrl:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=90",
    link: "#",
  },
  {
    id: 2,
    title: "Latest artist interviews, music stories and festival updates",
    imageUrl:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=90",
    link: "#",
  },
  {
    id: 3,
    title: "Live highlights, crowd energy and behind-the-scenes moments",
    imageUrl:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=90",
    link: "#",
  },
];

export default function LatestVideosSection() {
  return (
    <section
      className="
        w-full overflow-hidden  
        [--video-card-w:300px]
        [--side-card-x:118px]
        [--video-area-h:270px]

        min-[375px]:[--video-card-w:340px]
        min-[375px]:[--side-card-x:132px]
        min-[375px]:[--video-area-h:300px]

       
        sm:[--video-card-w:560px]
        sm:[--side-card-x:220px]
        sm:[--video-area-h:450px]

       
        md:[--video-card-w:650px]
        md:[--side-card-x:255px]
        md:[--video-area-h:500px]

       
        lg:[--video-card-w:820px]
        lg:[--side-card-x:320px]
        lg:[--video-area-h:600px]

        xl:[--video-card-w:930px]
        xl:[--side-card-x:365px]
        xl:[--video-area-h:680px]

        2xl:[--video-card-w:1050px]
        2xl:[--side-card-x:410px]
        2xl:[--video-area-h:760px]
      "
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="mx-auto px-4 py-10   sm:px-6  md:py-16  lg:px-8 lg:py-20 w-full max-w-[2000px] bg-[#f5f5f5]">
        <h2
          className="
            text-center font-black uppercase leading-[0.85] tracking-[-0.065em] text-black
            text-[58px]
            sm:text-[80px]
            md:text-[100px]
            lg:text-[120px]
            xl:text-[165px]
            2xl:text-[190px]
            mb-4
          "
        >
          Latest Videos
        </h2>

        <ThreeDCarousel items={videos} />

        <div className="flex justify-center ">
          <button className="rounded-[10px] cursor-pointer bg-[#ED1C35] px-6 py-3 text-[13px] font-medium text-white transition hover:opacity-90 sm:rounded-[12px] sm:text-[14px]">
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
}

const ThreeDCarousel = ({
  items = videos,
  autoRotate = true,
  rotateInterval = 4000,
  isMobileSwipe = true,
}) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  useEffect(() => {
    if (autoRotate && isInView && !isHovering && items.length > 1) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);

      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  useEffect(() => {
    if (!carouselRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(carouselRef.current);

    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e) => {
    if (!isMobileSwipe) return;

    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e) => {
    if (!isMobileSwipe) return;

    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!isMobileSwipe) return;
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const getCardAnimationClass = (index) => {
    if (index === active) {
      return "translate-x-0 scale-100 opacity-100 z-20";
    }

    if (index === (active + 1) % items.length) {
      return "translate-x-[var(--side-card-x)] scale-[0.493] opacity-100 z-10";
    }

    if (index === (active - 1 + items.length) % items.length) {
      return "-translate-x-[var(--side-card-x)] scale-[0.493] opacity-100 z-10";
    }

    return "translate-x-0 scale-90 opacity-0";
  };

  return (
    <section
      id="ThreeDCarousel"
      className=" min-w-full mx-auto 
    flex items-center  justify-center mb-4 xl:mb-6"
    >
      <div
        className="w-full px-4 sm:px-6 lg:px-8 
      min-w-[350px] max-w-[1600px]"
      >
        <div
          className="relative h-[var(--video-area-h)]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute top-0 w-[var(--video-card-w)] transform transition-all duration-500 ${getCardAnimationClass(
                  index
                )}`}
              >
                <div className="flex flex-col items-center">
                  <a
                    href={item.link}
                    className={`group relative block w-full overflow-hidden rounded-[6px] ${
                      index === active
                        ? "shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        : "shadow-none"
                    }`}
                    tabIndex={index === active ? 0 : -1}
                    aria-label={`Watch ${item.title}`}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading={index === active ? "eager" : "lazy"}
                      decoding="async"
                      className="block aspect-[1050/681] w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/10" />

                    <div
                      className="
                        absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2
                        items-center justify-center rounded-[6px] bg-[#ED1C35]
                        h-[38px] w-[58px]
                        transition duration-200 ease-out
                        group-hover:scale-105
                        sm:h-[44px] sm:w-[66px]
                        md:h-[50px] md:w-[74px]
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          ml-[3px] block h-0 w-0 border-y-transparent border-l-white
                          border-y-[9px] border-l-[14px]
                          sm:border-y-[10px] sm:border-l-[16px]
                        "
                      />
                    </div>
                  </a>

                  {index === active && (
                    <h3
                      className="mt-5 px-5 pb-[1px] text-[15px] tracking-[-0.025em] text-black sm:text-[22px] lg:text-[23px] 2xl:text-[25px]"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
                    >
                      {item.title}
                    </h3>
                  )}
                </div>
              </div>
            ))}
          </div>

          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/90 rounded-full flex items-center justify-center  hover:bg-black z-30 shadow-xl cursor-pointer transition-all hover:scale-105"
                onClick={() =>
                  setActive((prev) => (prev - 1 + items.length) % items.length)
                }
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/90 rounded-full flex items-center justify-center  hover:bg-black z-30 shadow-xl cursor-pointer transition-all hover:scale-105"
                onClick={() => setActive((prev) => (prev + 1) % items.length)}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </>
          )}

          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  active === idx
                    ? "bg-[#ED1C35] w-5"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile;
}