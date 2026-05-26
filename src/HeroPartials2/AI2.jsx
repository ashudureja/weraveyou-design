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
    title:
      "iZotope releases RX 12 with new AI-powered audio repair & source separation tools",
  },
];

const AdCard = () => {
  return (
    <article className="group flex h-[160px] md:min-h-full items-center justify-center text-center cursor-pointer flex-col overflow-hidden rounded-[30px] md:rounded-[18px] bg-[#e4e4e4]">
     
      

     
          <span className="text-[11px] font-medium uppercase tracking-[0.55em] text-black/45">
            Ad Space
          </span>

         

      

      
    </article>
  );
};

export default function Ai() {
  return (
    <section className="w-full bg-[#f5f5f5] px-4 py-12 sm:px-6 lg:px-8 xl:py-14 [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <div className="mx-auto max-w-[2000px]">
        {/* Header */}
        <div className="mb-9 flex items-center justify-between">
          <h2 className="text-[28px] leading-none tracking-[-0.04em] text-black sm:text-[36px] lg:text-[44px] 2xl:text-[50px]">
            AI In Music
          </h2>

          <button className="text-[14px] font-medium text-black underline underline-offset-4 sm:text-[16px]">
            View All
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {newsPosts.map((post, index) => (
            <article
              key={index}
              className="group cursor-pointer rounded-[18px] bg-white"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden rounded-[18px] bg-white sm:h-[300px] lg:h-[350px] 2xl:h-[400px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Red hover overlay */}
                <div className="absolute inset-0 grid place-items-center bg-red-600/70 opacity-0 transition duration-300 ease-out group-hover:opacity-100">
                  <button className="translate-y-3 text-[11px] font-bold uppercase tracking-[0.08em] text-white opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    Read More
                  </button>
                </div>
              </div>

              {/* Title */}
              <h3
                className="mt-5 px-5 pb-[3px] text-[20px] leading-[1.01] tracking-[-0.025em] text-black sm:text-[22px] lg:text-[23px] 2xl:text-[25px]"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.title}
              </h3>

              <div className="mt-5 flex items-center justify-between gap-5 px-5 pb-5">
                <button className="text-[12px] text-black underline underline-offset-4 2xl:text-[14px]">
                  Read More
                </button>

                <div className="flex items-center gap-6 text-[12px] font-light italic leading-none text-black 2xl:text-[14px]">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}

          <AdCard />
        </div>
      </div>
    </section>
  );
}