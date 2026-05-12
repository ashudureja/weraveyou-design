import React from "react";

const musicStyles = [
  {
    title: "House",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Progressive House",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Big Room",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Deep House",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Tropical House",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Tech House",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Techno",
    image:
      "https://images.unsplash.com/photo-1485872299829-c673f5194813?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Trance",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Dance / Pop",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Drum & Bass",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Moombahton",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Dubstep",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Bass House",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Trap",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Disco / Nu Disco",
    image:
      "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=900&q=90",
  },
  {
    title: "Indie",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=90",
  },
];

export default function MusicStylesSection() {
  const leftStyles = musicStyles.slice(0, 8);
  const rightStyles = musicStyles.slice(8);

  return (
    <section
      className="w-full overflow-hidden bg-black px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="mx-auto max-w-[1960px]">
        <h2 className="mb-10 text-[24px] font-normal leading-none tracking-[-0.03em] text-white sm:text-[28px] lg:mb-12">
          Music Styles
        </h2>

        <div className="grid gap-x-24 gap-y-8 md:grid-cols-2 xl:gap-x-[190px]">
          <div className="space-y-[24px]">
            {leftStyles.map((style, index) => (
              <MusicStyleItem
                key={style.title}
                title={style.title}
                image={style.image}
                number={String(index + 1).padStart(2, "0")}
                imagePosition="right"
              />
            ))}
          </div>

          <div className="space-y-[24px]">
            {rightStyles.map((style, index) => (
              <MusicStyleItem
                key={style.title}
                title={style.title}
                image={style.image}
                number={String(index + 9).padStart(2, "0")}
                imagePosition="left"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MusicStyleItem({ title, number, image, imagePosition = "right" }) {
  return (
    <div className="group relative flex cursor-pointer items-center justify-between gap-8">
      <h3 className="text-[30px] font-normal leading-none tracking-[-0.045em] text-white transition  group-hover:text-white/70 sm:text-[34px] lg:text-[36px]">
        <span className="inline-block border-b border-white/70 leading-[0.95] transition  group-hover:border-white/70">
          {title}
        </span>
      </h3>

      <span className="shrink-0 text-[18px] font-normal leading-none tracking-[-0.03em] text-white transition  group-hover:text-white/70 sm:text-[20px]">
        {number}
      </span>

      {/* Floating image on hover */}
      <div
        className={`
          pointer-events-none absolute top-1/2 z-50 hidden h-[180px] w-[260px]
          -translate-y-1/2 overflow-hidden rounded-[18px]
          opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.55)]
          transition-all  ease-out group-hover:scale-100 group-hover:opacity-100
          md:block
          ${imagePosition === "right" ? "left-[52%]" : "left-[52%]"}
        `}
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}