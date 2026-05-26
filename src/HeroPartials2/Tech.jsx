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

const sideNewsPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=90",
    title: "AI Could Bring Dead Artists Back With New Music, Says CEO",
    date: "February 26, 2026",
    author: "Kaamin",
    category: "Read More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=700&q=90",
    title: "Virality Rarely leads to Long-Term Financial Gain for Artists",
    date: "February 26, 2026",
    author: "Kaamin",
    category: "Read More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=90",
    title: "David Guetta talks about his influences and workflow",
    date: "February 23, 2026",
    author: "Kaamin",
    category: "Read More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=700&q=90",
    title: "Free Saturation Plugin from Sonible now available",
    date: "February 23, 2026",
    author: "Kaamin",
    category: "Read More",
  },
];

const topics = [
  "Tech Editors Pick",
  "Plugins",
  "Sample Packs",
  "Courses",
  "Guides",
  "Gear",
];

const TechSmallCard = ({ post }) => {
  return (
    <article className="group cursor-pointer rounded-[18px] bg-[#211f21] lg:flex lg:h-[150px] 2xl:h-[170px]">
      <div className="relative h-[260px] overflow-hidden rounded-[18px] bg-[#211f21] sm:h-[300px] lg:h-full lg:w-[40%]">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col lg:justify-between lg:px-4 lg:py-5">
        <h3
          className="mt-5 px-5 text-[20px] leading-[1.01] tracking-[-0.025em] text-white sm:text-[22px] lg:mt-0 lg:px-0 lg:text-[17px]"
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
            {post.category || "Read More"}
          </button>

          <div className="flex items-center gap-6 text-[12px] font-light italic leading-none text-white/90 2xl:text-[14px]">
            <span>{post.date}</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

const NewsDesktopCard = ({ post }) => {
  return (
    <article className="group flex h-full cursor-pointer overflow-hidden rounded-[18px] bg-[#211f21]">
      <div className="h-[150px] w-[38%] min-w-[120px] overflow-hidden rounded-[18px] bg-[#211f21] sm:h-[170px] lg:h-[150px] 2xl:h-[170px]">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between px-4 py-4 sm:px-5 sm:py-5">
        <h3
          className="text-[17px] leading-[1.02] tracking-[-0.025em] text-white sm:text-[19px] lg:text-[17px] 2xl:text-[18px]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.title}
        </h3>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2 text-[12px] font-light italic leading-none text-white/80 2xl:text-[13px]">
            <span>{post.date}</span>
            <span>By {post.author}</span>
          </div>

          <button
            aria-label={`Read ${post.title}`}
            className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition duration-300 ease-out group-hover:bg-white group-hover:text-black"
          >
            <span className="text-[22px] leading-none">→</span>
          </button>
        </div>
      </div>
    </article>
  );
};

const NewsRail = ({ title = "News", posts = [] }) => {
  return (
    <aside className="flex h-full flex-col gap-5 xl:border-l xl:border-white/15 xl:pl-7 2xl:pl-12">
      <div className="flex items-center justify-between">
        <h3 className="text-[28px] leading-none tracking-[-0.04em] text-white sm:text-[34px] lg:text-[38px]">
          {title}
        </h3>

        <button className="text-[16px] font-light text-white underline underline-offset-4">
          View All
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {topics.map((topic) => (
          <button
            key={topic}
            className="
              rounded-full border border-white/15
              px-4 py-2
              text-[13px] font-light leading-none text-white/80
              transition duration-300 ease-out
              hover:border-white/35 hover:bg-white/5 hover:text-white
            "
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Less than lg: use same small cards as the left section */}
      <div className="grid gap-[18px] md:grid-cols-2 lg:hidden">
        {posts.map((post, index) => (
          <TechSmallCard key={index} post={post} />
        ))}
      </div>

      {/* lg and above: keep current News cards exactly */}
      <div className="hidden gap-[18px] lg:grid">
        {posts.map((post, index) => (
          <NewsDesktopCard key={index} post={post} />
        ))}
      </div>
    </aside>
  );
};

export default function TechFeaturedSection() {
  return (
    <section
      className="mx-auto w-full bg-black px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="mx-auto grid max-w-[2000px] gap-10 xl:grid-cols-[1.7fr_0.63fr] lg:gap-12">
        {/* Left section */}
        <div>
          {/* Header */}
          <div className="mb-8 flex items-center justify-between sm:mb-9 lg:mb-[38px]">
            <h2 className="hidden text-[28px] leading-none tracking-[-0.04em] text-white sm:flex sm:text-[44px]">
              Latest in music technology
            </h2>

            <h2 className="flex text-[28px] leading-none tracking-[-0.04em] text-white md:hidden">
              Latest in music <br /> technology
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

                    <p
                      className="mt-4 text-[15px] font-light leading-[1.05] text-white/85 sm:text-[16.5px] lg:mt-[22px] lg:max-w-[700px] lg:text-[18px] lg:leading-[1]"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
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

            {/* Left small cards */}
            <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-1">
              {techPosts.map((post, index) => (
                <TechSmallCard key={index} post={post} />
              ))}
            </div>
          </div>
        </div>

        {/* Right news section */}
        <NewsRail title="News" posts={sideNewsPosts} />
      </div>
    </section>
  );
}