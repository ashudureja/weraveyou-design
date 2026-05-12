import React from "react";

const newsPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?auto=format&fit=crop&w=900&q=90",
    date: "27 March 2026",
    author: "Kaamin",
    title: "Spotify is now showing AI credits in song info",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=90",
    date: "27 March 2026",
    author: "Kaamin",
    title: "Splice Sounds is now available inside Claude via MCP",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=90",
    date: "27 March 2026",
    author: "Kaamin",
    title: "iZotope releases RX 12 with new AI-powered audio repair & source separation tools",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=90",
    date: "27 March 2026",
    author: "Kaamin",
    title: "I tried Suno as an electronic music producer and I’m not sure how to feel about it",
  },
];

export default function AI() {
  return (
    <section className="w-full px-4 py-8 [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1960px]">
        {/* Header */}
        <div className="mb-9 flex items-center justify-between">
          <h2 className="text-[36px] font-normal leading-none tracking-[-0.04em] text-[#262626] sm:text-[44px]">
            AI In Music
          </h2>

          <button className="text-[16px] font-medium text-black underline underline-offset-4">
            View All
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {newsPosts.map((post, index) => (
            <article
              key={index}
              className="group cursor-pointer rounded-[18px]  bg-[#f5f5f5]"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden rounded-[18px] bg-white sm:h-[300px] lg:h-[350px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title - 2 lines only */}
              <h3
                className="mt-5 px-5 text-[20px] font-light leading-[1.01] pb-[3px] tracking-[-0.025em] text-[#2f2f2f] sm:text-[22px] lg:text-[24px]"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.title}
              </h3>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between gap-5 px-5 pb-5">
                <button className="text-[14px] font-light text-black underline underline-offset-4">
                  Read More
                </button>

                <div className="flex items-center gap-6 text-[12px] font-light italic leading-none text-[#2f2f2f]">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}