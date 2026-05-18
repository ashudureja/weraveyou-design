import React from "react";

const newsPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=90",
    category: "Category",
    date: "27 MARCH 2026",
    author: "KAAMIN",
    title: "Ultra Miami 2026 weather forecast: latest update",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90",
    category: "Category",
    date: "27 MARCH 2026",
    author: "KAAMIN",
    title:
      "Chicane celebrates 30 years with orchestral show at Royal Festival Hall",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=90",
    category: "Category",
    date: "27 MARCH 2026",
    author: "KAAMIN",
    title: "Fatboy Slim celebrates 40 years with huge extended Coachella set",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=90",
    category: "Category",
    date: "27 MARCH 2026",
    author: "KAAMIN",
    title:
      "Armin van Buuren talks AI, trance revival and DJ culture with Apple Music",
  },
];

export default function NewsFeaturedSection() {
  return (
    <section className="w-full bg-[#f5f5f5]  px-4 py-12 [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <div className="mb-9 flex items-center justify-between">
          <h2 className="text-[28px]  leading-none tracking-[-0.04em] text-black sm:text-[44px]">
            News &amp; Featured
          </h2>

          <button className="text-[14px] sm:text-[16px] font-medium text-black underline underline-offset-4">
            View All
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {newsPosts.map((post, index) => (
            <article key={index} className="group  bg-white rounded-[18px] cursor-pointer">
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden rounded-[18px] bg-white sm:h-[300px] lg:h-[350px]">
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

              {/* Meta */}
              

              {/* Title */}
               <h3
                className="mt-5 px-5 text-[20px]  leading-[1.01] pb-[3px] tracking-[-0.025em] text-black sm:text-[22px] lg:text-[24px]"
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
                <button className="text-[14px]  text-black underline underline-offset-4">
                {post.category}
                </button>

                <div className="flex items-center gap-6 text-[12px] font-light italic leading-none text-black">
                   <span>By {post.author}</span>
                  <span>{post.date}</span>
                 
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}