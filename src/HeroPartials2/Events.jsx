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
      className="w-full overflow-hidden  py-12 pb-18 md:pb-20 lg:pb-20  xl:py-14 xl:pb-24 2xl:pb-30"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <style>{`
        .events-marquee-viewport {
          --gap: 16px;
          --duration: 28s;
        }

        .events-marquee-track {
          display: flex;
          width: max-content;
          animation: eventsMarquee var(--duration) linear infinite;
          will-change: transform;
        }

        .events-marquee-viewport:hover .events-marquee-track {
          animation-play-state: paused;
        }

        .events-marquee-group {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 75vw;
          gap: var(--gap);
          padding-right: var(--gap);
        }

        @keyframes eventsMarquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (min-width: 640px) {
          .events-marquee-viewport {
            --gap: 20px;
            --duration: 32s;
          }

          .events-marquee-group {
            grid-auto-columns: 350px;
          }
        }

        @media (min-width: 1024px) {
          .events-marquee-viewport {
            --duration: 36s;
          }

          .events-marquee-group {
            grid-auto-columns: 400px;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[2000px]">
   <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] leading-none tracking-[-0.04em] text-black sm:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[50px]">
            Our Latest Events
          </h2>
    
</div>
        <div
          className="
            events-marquee-viewport
            mt-10 overflow-hidden 
          "
        >
          <div className="events-marquee-track">
            <div className="events-marquee-group">
              {eventPosts.map((event, index) => (
                <EventCard key={`first-${index}`} event={event} />
              ))}
            </div>

            <div className="events-marquee-group" aria-hidden="true">
              {eventPosts.map((event, index) => (
                <EventCard key={`second-${index}`} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }) {
  return (
    <article className="cursor-pointer select-none">
      <div className="h-[260px] overflow-hidden rounded-[18px] bg-white  lg:h-[280px]  xl:h-[325px] 2xl:h-[350px] ">
        <img
          src={event.image}
          alt={event.title}
          draggable="false"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <h3 className="mt-4  text-[20px] leading-[1.05] tracking-[-0.04em] text-black sm:text-[22px] lg:text-[24px]">
        {event.title}
      </h3>
    </article>
  );
}