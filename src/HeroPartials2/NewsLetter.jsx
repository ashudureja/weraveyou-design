import React from "react";

const socialPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=90",
    title: "New Music Friday",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=700&q=90",
    title: "Innerbloom mashup",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=700&q=90",
    title: "Anyma dropped a massive ID",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=700&q=90",
    title: "Fred again releases tour video",
  },
  {
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=90",
    title: "Festival crowd moment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=700&q=90",
    title: "R3HAB returns to Ultra",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=90",
    title: "Eric Prydz unreleased track",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=700&q=90",
    title: "New Music Friday",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=90",
    title: "Rüfüs Du Sol confirms opening",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=700&q=90",
    title: "The Fred Again moment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=90",
    title: "Two generations of trance",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=90",
    title: "DJ Snake set at Ultra Miami",
  },
];

export default function NewsletterSocialSection() {
  return (
    <section
      className="w-full bg-black text-white"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      {/* Newsletter */}
      <div className="mx-auto grid max-w-[2000px] gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_1fr] md:items-start lg:px-8 lg:py-16 2xl:py-18">
        <h2 className="max-w-[720px]  text-[32px] font-light leading-[1.08]  text-white md:text-[44px] xl:text-[60px] 2xl:text-[65px] ">
          Subscribe To Our
         
          Newsletter To Stay

          Updated
        </h2>

        <form
          className="flex w-full flex-col "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border-0 border-b border-white/40 bg-transparent px-0 py-4 text-[22px] font-light text-white outline-none placeholder:text-white/70 focus:border-white md:text-[24px] xl:text-[28px] 2xl:text-[30px]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="mt-2 w-full border-0 border-b border-white/40 bg-transparent px-0 py-4 text-[22px] font-light text-white outline-none placeholder:text-white/70 focus:border-white md:text-[24px] xl:text-[28px] 2xl:text-[30px]"
          />

          <div className="mt-12 flex justify-start md:justify-end">
            <button
              type="submit"
              className="rounded-[10px] bg-white px-10 py-3 text-[14px] font-normal text-black transition hover:bg-[#ED1C35] hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Social Grid */}
      <div className="grid mx-auto grid max-w-[2000px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {socialPosts.map((post, index) => (
          <article
            key={index}
            className="group relative aspect-square overflow-hidden bg-black"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover object-center "
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <h3 className="text-[22px] font-black uppercase leading-[0.85] tracking-[-0.06em] text-white md:text-[28px]">
                {post.title}
              </h3>

              <p className="mt-2 text-[8px] font-medium uppercase tracking-[0.08em] text-white/80">
                Swipe for more
              </p>
            </div>

            <div className="absolute right-4 top-4 h-3 w-3 rounded-[3px] border border-white/90 opacity-80" />
          </article>
        ))}
      </div>
    </section>
  );
}