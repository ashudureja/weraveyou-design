import React from "react";

const heroPost = {
  title: "Stay In The Groove",
  subtitle:
    " Discover The Latest\nNews, Features, Music & Editorials Within\nThe Electronic Music Culture",
  image:
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=90",
  date: "27 March 2026",
  author: "Kaamin",
};

const featuredPost = {
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90",
  title:
    "Chicane celebrates 30 years with orchestral show at Royal Festival Hall",
  description:
    "The show will feature a full orchestra and live band, recreating some of the British producer’s most iconic tracks in a new cinematic format. Following the success of last year’s sold-out orchestral performance",
};

const sidePosts = [
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=90",
    title: "Fatboy Slim celebrates 40 years with huge extended Coachella set",
    description:
      "A huge milestone performance celebrating decades of electronic music, dance culture and unforgettable live festival moments.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=90",
    title:
      "Armin van Buuren talks AI, trance revival and DJ culture with Apple Music",
    description:
      "The trance icon shares thoughts on the future of DJ culture, music technology and the next chapter of electronic sound.",
  },
];

export default function Landing() {
  return (
    <section className="min-h-screen w-full bg-white p-4 [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] sm:p-6 lg:p-8">
      <div className="mx-auto grid max-w-[1960px] gap-5 lg:h-[925px] lg:grid-cols-[1fr_470px]">
        {/* Left Hero */}
        <article className="relative h-[640px] overflow-hidden rounded-[18px] lg:h-full">
          <img
            src={heroPost.image}
            alt={heroPost.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex h-full flex-col justify-between px-8 py-10 sm:px-14 lg:px-[90px] lg:py-[110px]">
            <div>
              <h1 className="whitespace-pre-line text-[72px] font-medium leading-[0.9] tracking-[-0.06em] text-white sm:text-[110px] lg:text-[158px]">
                {heroPost.title}
              </h1>

              <p className="mt-10 whitespace-pre-line text-[25px] font-light leading-[1.25] tracking-[-0.03em] text-white sm:text-[34px] lg:text-[40px]">
                {heroPost.subtitle}
              </p>

              {/* <div className="mt-10 flex max-w-[720px] items-center justify-between text-[15px] text-white">
                <button className="font-semibold underline-offset-4 hover:underline">
                  Read More
                </button>

                <div className="flex items-center gap-8 text-white/95">
                  <span>{heroPost.date}</span>
                  <span className="italic">By {heroPost.author}</span>
                </div>
              </div> */}
            </div>

            <button className="text-[16px] flex items-center font-medium text-white underline underline-offset-4 cursor-pointer">
              Discover All
            </button>
          </div>
        </article>

        {/* Right Column */}
        <aside className="grid gap-5 lg:h-full lg:grid-rows-[1fr_170px_170px]">
          {/* Featured Big Card */}
          <article className="overflow-hidden rounded-[18px] bg-[#f5f5f5] lg:h-full">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="h-[335px] w-full rounded-[18px] object-cover object-center lg:h-[320px]"
            />

            <div className="px-5 py-5">
              <h3
                    className=" text-[20px] leading-[1.01] pb-[3px] tracking-[-0.025em] text-[#2f2f2f] sm:text-[22px] lg:text-[24px]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {featuredPost.title}
                  </h3>

              <p className="mt-4 text-[15px] font-light leading-[1.08] tracking-[-0.01em] text-[#2f2f2f]">
                {featuredPost.description}
              </p>

               <div className="mt-5 flex items-center justify-between gap-5 ">
                  <button className="text-[14px]  text-black underline underline-offset-4">
                    Read More
                  </button>

                  <div className="flex items-center gap-6 text-[12px] font-light italic leading-none text-[#2f2f2f]">
                    <span>By {heroPost.author}</span>
                    <span>{heroPost.date}</span>
                  </div>
                </div>
            </div>
          </article>

          {/* Small Cards: big card style on mobile/tablet, compact on desktop */}
          {sidePosts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[18px] bg-[#f5f5f5] lg:grid lg:h-[170px] lg:grid-cols-[120px_1fr]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-[335px] w-full rounded-[18px] object-cover object-center lg:h-full lg:min-h-[170px] lg:rounded-none"
              />

              <div className="flex flex-col justify-between px-5 py-5">
                <div>
                  <h3
                    className=" text-[20px]  leading-[1.01] pb-[3px] tracking-[-0.025em] text-[#2f2f2f] sm:text-[22px] lg:text-[24px]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {featuredPost.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.08] tracking-[-0.025em] text-[#565656] lg:hidden">
                    {post.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-5 ">
                  <button className="text-[14px]  text-black underline underline-offset-4">
                    Read More
                  </button>

                  <div className="flex items-center gap-6 text-[12px] font-light italic leading-none text-[#2f2f2f]">
                    <span>By {heroPost.author}</span>
                    <span>{heroPost.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
