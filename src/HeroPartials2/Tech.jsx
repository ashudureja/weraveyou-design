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
      "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=700&q=90",
    title:
      "Soundtoys 5.5 bundle drops to half price: plugins many electronic producers rely on",
    date: "27 March 2026",
    author: "Kaamin",
    category: "Read More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=700&q=90",
    title:
      "Soundtoys 5.5 bundle drops to half price: plugins many electronic producers rely on",
    date: "27 March 2026",
    author: "Kaamin",
    category: "Read More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=90",
    title:
      "Universal Audio launches UAD Labs, offering early access to experimental music tools",
    date: "27 March 2026",
    author: "Kaamin",
    category: "Read More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&w=700&q=90",
    title: "Discogs & We Are Rewind launch limited-edition cassette player",
    date: "27 March 2026",
    author: "Kaamin",
    category: "Read More",
  },
];

export default function TechFeaturedSection() {
  return (
    <section
      className="mx-auto w-full  bg-black px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="grid gap-10 max-w-[2000px] mx-auto xl:grid-cols-[minmax(0,1fr)_385px]  lg:gap-8">
        {/* Left section */}
        <div>
          {/* Header */}
          <div className="mb-8 flex  items-center justify-between sm:mb-9 lg:mb-[38px]">
            <h2 className="text-[28px] hidden sm:flex  leading-none tracking-[-0.04em] text-white sm:text-[44px]">
              Latest in music technology

            </h2>
            <h2 className="text-[28px] flex md:hidden leading-none tracking-[-0.04em] text-white sm:text-[44px]">
              Latest in music <br/> technology

            </h2>

            <button className="text-[16px] font-light text-white underline underline-offset-4">
              View All
            </button>
          </div>

          {/* Content */}
          <div className="grid gap-[18px] lg:grid-cols-[60%_40%] 2xl:grid-cols-[55fr_45fr]">
            {/* Main card */}
            <div className="lg:flex lg:items-center lg:justify-center">
              <article className="flex flex-col overflow-hidden rounded-[18px] bg-[#211f21] lg:h-[90%]">
                <div className="h-[280px] w-full overflow-hidden rounded-[18px] sm:h-[330px] md:h-[360px] lg:h-auto">
                  <img
                    src={mainTechPost.image}
                    alt={mainTechPost.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between px-5 py-5 sm:px-6 sm:py-6 lg:px-[24px] lg:py-[24px]">
                  <div>
                    <h3
                      className="pb-[3px] text-[20px] leading-[1.01] tracking-[-0.03em] text-white sm:text-[22px] lg:max-w-[700px] lg:text-[24px] 2xl:text-[27px]"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {mainTechPost.title}
                    </h3>

                    <p className="mt-4 lg:max-w-[720px] text-[15px] font-light leading-[1.05] text-white/85 sm:text-[16.5px] lg:mt-[22px] lg:max-w-[700px] lg:text-[18px] lg:leading-[1]" style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}>
                      {mainTechPost.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <button className="text-[16px] font-normal leading-none text-white/90 underline underline-offset-[6px]">
                      Read More
                    </button>

                    <div className="flex items-center gap-5 text-[13px] font-light italic leading-none text-white/90 sm:gap-7 lg:text-[14px]">
                      <span>{mainTechPost.date}</span>
                      <span>By {mainTechPost.author}</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Small cards */}
            <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-1">
              {techPosts.map((post, index) => (
                <article
                  key={index}
                  className="group cursor-pointer rounded-[18px] bg-[#211f21] lg:flex lg:h-[150px] 2xl:h-[170px]"
                >
                  <div className="relative h-[260px] overflow-hidden rounded-[18px] bg-[#211f21] sm:h-[300px] lg:h-full lg:w-[40%]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col lg:justify-between lg:px-4 lg:py-5">
                    <h3
                      className="mt-5 px-5  text-[20px] leading-[1.01] tracking-[-0.025em] text-white sm:text-[22px] lg:mt-0 lg:px-0 lg:text-[17px]"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.title}
                    </h3>

                    <div className="mt-5 flex items-center justify-between gap-5 px-5 pb-5 lg:mt-0 lg:px-0 lg:pb-0">
                      <button className="text-[12px] text-white underline underline-offset-4 lg:hidden 2xl:block 2xl:text-[14px]">
                        {post.category}
                      </button>

                      <div className="flex items-center gap-6 text-[12px] font-light italic leading-none text-white/90 2xl:text-[14px]">
                        <span>By {post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Right ad space */}
        <aside className="h-full  flex flex-col gap-3 lg:gap-5 lg:pt-[76px]">
          <div className="grid h-[160px] sm:h-[170px] xl:h-[45%] w-full place-items-center rounded-[18px] lg:rounded-[30px] bg-[#d9ddde]">
            <span className="text-[11px]  tracking-[0.6em] text-black/70">
              AD SPACE
            </span>
          </div>

          <div className="grid h-[160px] sm:h-[170px] xl:h-[55%] w-full place-items-center rounded-[18px] bg-[#d9ddde] lg:rounded-[30px]">
            <span className="text-[11px]  tracking-[0.6em] text-black/70">
              AD SPACE
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}