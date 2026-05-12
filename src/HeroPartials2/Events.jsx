import React from "react";

const eventPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=90",
    title: "Lorem Ipsum - Sample text",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=90",
    title: "Lorem Ipsum - Sample text",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=90",
    title: "Lorem Ipsum - Sample text",
  },
  {
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=90",
    title: "Lorem Ipsum - Sample text",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90",
    title: "Lorem Ipsum - Sample text",
  },
];

export default function LatestEventsSection() {
  return (
    <section
      className="w-full overflow-hidden  py-14 sm:py-16 lg:py-20 "
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="mx-auto max-w-[1960px]">
        {/* Heading */}
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-[30px] font-normal leading-none tracking-[-0.04em] text-[#262626] sm:text-[36px]">
            Our Latest Events
          </h2>
        </div>

        {/* Horizontal cards */}
        <div
          className="
            mt-10 grid grid-flow-col auto-cols-[75vw] gap-4 overflow-x-auto overflow-y-hidden px-4 pb-4
            overscroll-x-contain
            sm:auto-cols-[350px] sm:gap-5 sm:px-6
            lg:auto-cols-[400px] lg:px-8
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {eventPosts.map((event, index) => (
            <article
              key={index}
              className="
                group cursor-pointer select-none
                [contain:layout_paint]
              "
            >
              <div className="h-[280px] overflow-hidden rounded-[18px] bg-white sm:h-[280px] lg:h-[350px]">
                <img
                  src={event.image}
                  alt={event.title}
                  draggable="false"
                  className="
                    h-full w-full object-cover object-center
                    transform-gpu transition-transform duration-700 ease-out
                    motion-safe:hover:scale-105
                  "
                />
              </div>

              <h3 className="mt-4 min-h-[52px] text-[22px] font-medium leading-[1.05] tracking-[-0.04em] text-black sm:text-[24px] lg:text-[26px]">
                {event.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}