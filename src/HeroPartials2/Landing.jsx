import React, { useEffect, useState } from "react";

const heroPosts = [
  {
    title:
      "Hans Zimmer surprises Raye at Greek Theatre Los Angeles tour finale: Watch",
    description:
      "Hans Zimmer made a surprise appearance at Raye’s final US tour show. The German composer joined the British singer on stage at the Greek Theatre in Los Angeles on May 13, capping her 40-date ‘THIS TOUR MAY CONTAIN NEW MUSIC’ run with the live debut of their joint single ‘Click Clack Symphony’. Footage of the moment is already online.",
    image: "https://weraveyou.com/wp-content/uploads/2024/05/hans-zimmer.jpg",
    date: "27 March 2026",
    author: "Kaamin",
  },
  {
    title:
      "Avicii wax figure unveiled at Madame Tussauds Las Vegas ahead of EDC Las Vegas",
    description:
      "Madame Tussauds Las Vegas has unveiled an Avicii wax figure. The figure went live at the Las Vegas location on Thursday, May 14, just ahead of EDC Las Vegas. The festival pulls upward of 200,000 dance music fans to the city across its three-day run, plus all the adjacent parties happening on the Strip.",
    image:
      "https://weraveyou.com/wp-content/uploads/2026/02/AVICII-by--scaled.jpg",
    date: "27 March 2026",
    author: "Kaamin",
  },
  {
    title:
      "Polygon Portal opens London’s first 360° spatial audio listening room in Soho",
    description:
      "Polygon Portal has opened in Soho as London’s first dedicated 360° spatial audio listening room. Polygon Productions launched the intimate Dean Street space this week, alongside the full May and June 2026 programme of album playbacks, artist sessions, and immersive wellbeing experiences. Tickets start at £19, with free Polygon Insider membership offering early booking access.",
    image: "https://weraveyou.com/wp-content/uploads/2026/05/Polygon_11zon.jpg",
    date: "27 March 2026",
    author: "Kaamin",
  },
];

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
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const heroPost = heroPosts[activeHero];

  return (
    <section className=" w-full bg-white p-4 [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] sm:p-6 lg:p-8">
      <style>
        {`
          @keyframes heroFadeUp {
            0% {
              opacity: 0;
              transform: translateY(14px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroImageZoom {
            0% {
              transform: scale(1.06);
            }
            100% {
              transform: scale(1);
            }
          }

          .hero-slide-content {
            animation: heroFadeUp 0.7s ease both;
          }

          .hero-slide-image {
            animation: heroImageZoom 5s ease both;
          }
        `}
      </style>

      <div className="mx-auto grid max-w-500 gap-5  lg:grid-cols-[71%_29%] 2xl:grid-cols-[75%_25%] ">
        {/* Left Hero */}
        <article className="relative h-[640px] overflow-hidden rounded-[18px] lg:h-full">
          <img
            key={heroPost.image}
            src={heroPost.image}
            alt={heroPost.title}
            className="hero-slide-image absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex h-full flex-col justify-between px-8 py-10 sm:px-14  lg:px-16 2xl:px-20 ">
            <div key={activeHero} className="hero-slide-content absolute mt-10 top-1/2   max-w-[85%] 2xl:max-w-[80%] -translate-y-1/2">
              <h1
                className="whitespace-pre-line pb-[2px] md:pb-[6px] xl:pb-[6px] 2xl:pb-[8px] text-[6.5vw] font-medium leading-[0.98] tracking-[-0.02em] text-white sm:text-[4.5vw] lg:text-[50px] xl:text-[60px] 2xl:text-[85px] "
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {heroPost.title}
              </h1>

              {/* <p
                className="mt-10 whitespace-pre-line text-[5.5vw] font-light leading-[1.25] tracking-[-0.01em] text-white sm:text-[3vw] lg:text-[2.5vw] "
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {heroPost.description}
              </p> */}

              <div className="mt-8 flex sm:max-w-[88%]   items-center justify-between gap-5">
                <button className=" text-[12px] sm:text-[14px] 2xl:text-[16px] font-light text-white underline underline-offset-4">
                  Read More
                </button>

                <div className="flex items-center gap-6 text-[13px] sm:text-[14px] 2xl:text-[16px] font-light italic leading-none text-white/90">
                  <span>By {heroPost.author}</span>
                  <span>{heroPost.date}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 absolute bottom-15">
              {heroPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveHero(index)}
                  className={`flex h-6 w-6 sm:h-8 sm:w-8 2xl:h-10 2xl:w-10 items-center justify-center rounded-full text-[13px] font-light transition-all duration-300 ${
                    activeHero === index
                      ? "bg-red-600 text-white"
                      : "bg-white/15 text-white hover:bg-white/25"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </article>

        {/* Right Column */}
       {/* Right Column */}
<aside className="grid gap-5 lg:h-full lg:grid-rows-[1fr_170px_170px]">
  {/* Featured Big Card - visible on all screens */}
  <article className="overflow-hidden rounded-[18px] bg-[#f5f5f5] lg:h-full">
    <img
      src={featuredPost.image}
      alt={featuredPost.title}
      className="h-[335px] w-full rounded-[18px] object-cover object-center lg:h-[320px]"
    />

    <div className="px-5 py-5">
      <h3
        className="text-[20px] leading-[1.01] pb-[3px] tracking-[-0.03em] text-black sm:text-[22px] lg:text-[24px] 2xl:text-[27px]"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {featuredPost.title}
      </h3>

      <p className="mt-4 text-[15px] lg:text-[16px] leading-[1.08] text-black font-light">
        {featuredPost.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-5">
        <button className="text-[14px] text-black underline underline-offset-4">
          Read More
        </button>

        <div className="flex items-center gap-6 text-[12px] font-light italic leading-none text-black">
          <span>By {heroPosts[0].author}</span>
          <span>{heroPosts[0].date}</span>
        </div>
      </div>
    </div>
  </article>

  {/* Small Cards - hidden below lg, visible from lg and above */}
  {sidePosts.map((post, index) => (
    <article
      key={index}
      className="hidden overflow-hidden rounded-[18px] bg-[#f5f5f5] lg:grid lg:h-[170px] lg:grid-cols-[120px_1fr]"
    >
      <img
        src={post.image}
        alt={post.title}
        className="h-full min-h-[170px] w-full rounded-none object-cover object-center"
      />

      <div className="flex flex-col justify-between px-5 py-5">
        <div>
          <h3
            className="text-[20px] leading-[1.01] pb-[3px] tracking-[-0.025em] text-black lg:text-[20px]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.title}
          </h3>
        </div>

        <div className="flex items-center justify-between gap-5">
          <button className="text-[12px] text-black underline underline-offset-4">
            Read More
          </button>

          <div className="flex items-center gap-6 text-[12px] font-light italic leading-none text-black">
            <span>By {heroPosts[0].author}</span>
            <span>{heroPosts[0].date}</span>
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
