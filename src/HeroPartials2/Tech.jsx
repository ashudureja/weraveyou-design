import React from "react";

const mainTechPost = {
  image:
    "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=90",
  title:
    "Moog unveils Bob Moog tribute edition Minimoog Model D limited to 500 units",
  description:
    "Originally introduced in 1970, the Minimoog Model D helped define what a synthesizer should feel and sound like. Its layout, workflow, and unmistakable analog tone shaped decades of electronic music. This new tribute edition stays close...",
  date: "27 March 2026",
  author: "Kaamin",
};

const techPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=700&q=90",
    title: "Splice adds 3 new AI tools to the platform",
  },
  {
    image:
      "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=700&q=90",
    title:
      "Soundtoys 5.5 bundle drops to half price: plugins many electronic producers rely on",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=90",
    title:
      "Universal Audio launches UAD Labs, offering early access to experimental music tools",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&w=700&q=90",
    title: "Discogs & We Are Rewind launch limited-edition cassette player",
  },
];

const newsPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=90",
    title: "AI Could Bring Dead Artists Back With New Music, Says CEO",
    date: "February 26, 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=700&q=90",
    title: "Virality Rarely leads to Long-Term Financial Gain for Artists",
    date: "February 26, 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=90",
    title: "David Guetta talks about his influences and workflow",
    date: "February 23, 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=700&q=90",
    title: "Free Saturation Plugin from Sonible now available",
    date: "February 23, 2026",
  },
];

const topics = ["Tech Editors Pick", "Plugins", "Sample Packs", "Courses"];

export default function TechFeaturedSection() {
  return (
    <section
      className="w-full bg-black px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="mx-auto max-w-[1960px]">
        {/* Full Section Layout: 70% left + 30% right */}
        <div className="grid gap-10 lg:grid-cols-[70fr_30fr] lg:gap-8">
          {/* LEFT 70% AREA */}
          <div>
            {/* Header */}
            <div className="mb-8 flex items-center justify-between sm:mb-9 lg:mb-[38px]">
              <h2 className="text-[36px] font-light leading-none tracking-[-0.04em] text-white sm:text-[44px]">
                Latest in music technology

              </h2>

              <button className="text-[16px] font-light text-white underline underline-offset-4">
                View All
              </button>
            </div>

            {/* Main layout */}
            <div className="grid gap-[18px] lg:grid-cols-[559fr_417fr]">
              {/* Big card */}
              <article className="flex flex-col overflow-hidden rounded-[18px] bg-[#211f21] lg:aspect-[559/668]">
                {/* Big image */}
                <div className="h-[280px] w-full overflow-hidden rounded-[18px] sm:h-[330px] md:h-[360px] lg:aspect-[559/449] lg:h-auto">
                  <img
                    src={mainTechPost.image}
                    alt={mainTechPost.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Big content */}
                <div className="flex flex-1 flex-col justify-between px-5 py-5 sm:px-6 sm:py-6 lg:px-[24px] lg:py-[23px]">
                  <div>
                    <h3 className="max-w-[680px] text-[24px] font-light leading-[1] tracking-[-0.04em] text-white sm:text-[30px] lg:max-w-[512px] lg:text-[27.9px]">
                      {mainTechPost.title}
                    </h3>

                    <p className="mt-4 max-w-[720px] font-light text-[15px] leading-[1.05] text-white/85 sm:text-[16.5px] lg:mt-[22px] lg:max-w-[512px] lg:text-[17.8px] lg:leading-[1]">
                      {mainTechPost.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <button className="text-[16px] font-normal leading-none text-white/90 underline underline-offset-[6px] lg:text-[17.8px]">
                      Read More
                    </button>

                    <div className="flex items-center gap-5 text-[13px] font-light italic leading-none text-white/90 sm:gap-7 lg:text-[15.2px]">
                      <span>{mainTechPost.date}</span>
                      <span>By {mainTechPost.author}</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Small tech cards */}
              <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-4">
                {techPosts.map((post, index) => (
                  <article
                    key={index}
                    className="overflow-hidden rounded-[18px] bg-[#211f21] lg:grid lg:min-h-0 lg:grid-cols-[195fr_222fr]"
                  >
                    <div className="h-[220px] w-full overflow-hidden rounded-[18px] sm:h-[240px] md:h-[210px] lg:aspect-[195/153] lg:h-full">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="flex min-h-[125px] flex-col justify-between px-4 py-4 sm:min-h-[140px] lg:min-h-0 lg:px-[18px] lg:py-[17px]">
                      <h3 className="text-[17px] leading-[1.05] text-white sm:text-[17px] lg:text-[14px]">
                        {post.title}
                      </h3>

                      <div className="mt-8 flex items-center justify-between gap-4 text-[11px] font-light italic leading-none text-white/90 lg:mt-0 lg:text-[10px]">
                        <span>27 March 2026</span>
                        <span>By Kaamin</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT 30% NEWS AREA */}
          <aside className="lg:border-l lg:border-white/15 lg:pl-8">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between sm:mb-9 lg:mb-[38px]">
              <h2 className="text-[36px] font-light leading-none tracking-[-0.04em] text-white sm:text-[44px]">
                News
              </h2>

              <button className="text-[16px] font-light text-white underline underline-offset-4">
                View All
              </button>
            </div>

            {/* Topics */}
            <div className="mb-5 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  className="rounded-full border border-white/20 px-3 py-1.5 text-[12px] font-light text-white/80 transition hover:border-white hover:text-white"
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Small news cards */}
            <div className="grid gap-[18px]">
              {newsPosts.map((post, index) => (
                <article
                  key={index}
                  className="group grid overflow-hidden rounded-[18px] bg-[#211f21] sm:grid-cols-[150px_1fr] lg:grid-cols-[120px_1fr]"
                >
                  <div className="h-[180px] overflow-hidden rounded-[18px] sm:h-full lg:h-[135px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-center "
                    />
                  </div>

                  <div className="flex min-h-[135px] flex-col justify-between px-4 py-4">
                    <h3 className="line-clamp-3 text-[16px] font-normal leading-[1.02] tracking-[-0.035em] text-white">
                      {post.title}
                    </h3>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] font-light italic text-white/70">
                        {post.date}
                      </span>

                      <button className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-[18px] leading-none text-white transition group-hover:bg-[#ED1C35]">
                        →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}