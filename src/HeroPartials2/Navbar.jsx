import React, { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";

const musicGenres = [
  "House",
  "Progressive House",
  "Mainstage Music",
  "Deep House",
  "Future House",
  "Tropical House",
  "Tech House",
  "Techno",
  "Trance",
  "Dance / Pop",
  "Drum and Bass",
  "Moombahton",
  "Dubstep",
  "Bass House",
  "Trap",
  "Disco / Nu Disco",
  "Indie",
];

const newsDropdownItems = [
  "Featured",
  "Editorials",
  "Interviews",
  "Events",
  "Exclusive",
  "Industry",
  "Metaverse",
  "Blog",
];

const navItems = [
  { label: "Tech" },
  { label: "News" },
  { label: "Music", dropdown: true },
  { label: "Advertise" },
  { label: "Featured" },
  { label: "Editorials" },
  { label: "Interviews" },
  { label: "Events" },
  { label: "Exclusive" },
  { label: "Industry" },
  { label: "Metaverse" },
  { label: "Blog" },
];

const PremiumHoverText = ({ children }) => {
  return (
    <span
      className="
        relative inline-block leading-[0.95]

        before:absolute before:left-0 before:-bottom-[5px]
        before:h-[6px] before:w-full before:origin-left before:scale-x-0
        before:bg-black/15 before:blur-md before:content-['']
        before:transition-transform before:duration-700
        before:ease-[cubic-bezier(0.22,1,0.36,1)]

        after:absolute after:left-0 after:-bottom-[2px]
        after:h-[1px] after:w-full after:origin-left after:scale-x-0
        after:bg-black after:content-['']
        after:transition-transform after:duration-700
        after:ease-[cubic-bezier(0.22,1,0.36,1)]

        group-hover:before:scale-x-100
        group-hover:after:scale-x-100
      "
    >
      {children}
    </span>
  );
};

export default function WeRaveYouNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMusicOpen, setMobileMusicOpen] = useState(false);
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <style>{`
        .premium-dropdown {
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          pointer-events: none;
          transition:
            opacity 220ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility 220ms linear;
        }

        .nav-group:hover .premium-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }

        .nav-group:hover .nav-chevron {
          transform: rotate(180deg);
        }

        .premium-dropdown::before {
          content: "";
          position: absolute;
          top: -18px;
          left: 0;
          width: 100%;
          height: 18px;
        }
      `}</style>

      <div className="mx-auto w-full max-w-[2000px] px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex items-center justify-between py-[15px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              className="h-10 xl:h-12"
              src="https://weraveyou.com/wp-content/uploads/2023/08/weraveyou2018_mobile1.png"
              alt="We Rave You"
            />
          </a>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-[18px] lg:flex">
            <button
              className="
                cursor-pointer rounded-[10px] bg-[#ed1c35] px-7 py-3
                text-[12px] text-white transition duration-200
                hover:bg-[#dc132b] xl:text-[14px]
              "
            >
              Download Magazine
            </button>

            <div
              className="
                flex w-[214px] items-center gap-3 rounded-[10px]
                bg-[#f5f5f5] py-3 pr-7 pl-4 text-[#333]
              "
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={2} />
              <input
                type="text"
                placeholder="Search"
                className="
                  w-full bg-transparent text-[12px] text-[#333]
                  outline-none placeholder:text-[#333] xl:text-[14px]
                "
              />
            </div>
          </div>

          {/* Mobile / Tablet Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="
              flex size-11 items-center justify-center rounded-[12px]
              bg-[#f5f5f5] text-[#333]
              shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]
              transition duration-200 hover:bg-[#eeeeee]
              lg:hidden
            "
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={2.2} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2.2} />
            )}
          </button>
        </div>

        {/* Desktop Main Nav */}
        <nav
          className="
            relative hidden h-[57px] w-full items-center justify-between
            rounded-[18px] bg-[#f5f5f5] px-8 lg:flex xl:px-16
          "
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              className="nav-group relative flex h-full items-center"
            >
              <a
                href="#"
                className="
                  flex h-full items-center gap-1 text-[14px]
                  text-black transition-colors duration-200
                  hover:text-[#ed1c35] xl:text-[16px]
                "
              >
                {item.label}

                {item.dropdown && (
                  <ChevronDown
                    className="
                      nav-chevron mt-[2px] h-[13px] w-[13px]
                      transition-transform duration-300
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                    "
                    strokeWidth={2}
                  />
                )}
              </a>

              {/* Desktop Music Dropdown */}
              {item.label === "Music" && (
                <div
                  className="
                    premium-dropdown absolute left-[100%] top-[calc(100%+0px)]
                    w-[400px] -translate-x-1/2 px-5 py-5
                  "
                >
                  <div
                    className="
                      grid grid-cols-2 gap-x-3 gap-y-1 rounded-[18px]
                      border border-black/[0.07] bg-[#f5f5f5] px-5 py-5
                      shadow-[0_22px_60px_rgba(0,0,0,0.10)]
                    "
                  >
                    {musicGenres.map((genre) => (
                      <a
                        key={genre}
                        href="#"
                        className="
                          group px-3.5 py-2 text-[13px] leading-none
                          tracking-[-0.01em] text-black/80
                          transition duration-200 hover:text-black xl:text-[15px]
                        "
                      >
                        <PremiumHoverText>{genre}</PremiumHoverText>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile / Tablet Menu - Absolute, does not push content */}
      <div
        className={`
          absolute left-0 right-0 top-full z-50 px-4 sm:px-6 lg:hidden
          transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-3 opacity-0 pointer-events-none"
          }
        `}
      >
        <div
          className="
            mx-auto w-full max-w-[2000px]
            rounded-[22px] border border-black/[0.06]
            bg-[#f5f5f5] p-4
            shadow-[0_18px_50px_rgba(0,0,0,0.08)]
          "
        >
          {/* Mobile Search */}
          <div
            className="
              mb-3 flex items-center gap-3 rounded-[14px]
              bg-white px-4 py-3 text-[#333]
              shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]
            "
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={2} />
            <input
              type="text"
              placeholder="Search"
              className="
                w-full bg-transparent text-[14px] text-[#333]
                outline-none placeholder:text-[#333]
              "
            />
          </div>

          {/* Mobile CTA */}
          <button
            className="
              mb-4 w-full cursor-pointer rounded-[14px]
              bg-[#ed1c35] px-5 py-3 text-[14px] text-white
              transition duration-200 hover:bg-[#dc132b]
            "
          >
            Download Magazine
          </button>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col">
            {navItems.map((item) => {
              const isNews = item.label === "News";
              const isMusic = item.label === "Music";

              // On mobile/tablet, Featured → Blog goes inside News dropdown
              if (newsDropdownItems.includes(item.label)) {
                return null;
              }

              if (isNews) {
                return (
                  <div key={item.label} className="border-t border-black/[0.06]">
                    <button
                      type="button"
                      onClick={() => setMobileNewsOpen((prev) => !prev)}
                      className="
                        flex w-full items-center justify-between
                        py-3.5 text-left text-[15px] text-black
                        transition duration-200 hover:text-[#ed1c35]
                      "
                    >
                      <span>{item.label}</span>

                      <ChevronDown
                        className={`
                          h-[15px] w-[15px]
                          transition-transform duration-300
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${mobileNewsOpen ? "rotate-180" : "rotate-0"}
                        `}
                        strokeWidth={2}
                      />
                    </button>

                    <div
                      className={`
                        overflow-hidden transition-all duration-300
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${mobileNewsOpen ? "max-h-[360px] pb-3" : "max-h-0"}
                      `}
                    >
                      <div
                        className="
                          grid grid-cols-1 gap-y-1 rounded-[16px]
                           p-3
                         -mt-3
                          sm:grid-cols-2
                        "
                      >
                        {newsDropdownItems.map((newsItem) => (
                          <a
                            key={newsItem}
                            href="#"
                            className="
                              group px-3 py-2 text-[14px] leading-none
                              tracking-[-0.01em] text-black/50
                              transition duration-200 hover:text-black
                            "
                          >
                            <PremiumHoverText>{newsItem}</PremiumHoverText>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (isMusic) {
                return (
                  <div key={item.label} className="border-t border-black/[0.06]">
                    <button
                      type="button"
                      onClick={() => setMobileMusicOpen((prev) => !prev)}
                      className="
                        flex w-full items-center justify-between
                        py-3.5 text-left text-[15px] text-black
                        transition duration-200 hover:text-[#ed1c35]
                      "
                    >
                      <span>{item.label}</span>

                      <ChevronDown
                        className={`
                          h-[15px] w-[15px]
                          transition-transform duration-300
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${mobileMusicOpen ? "rotate-180" : "rotate-0"}
                        `}
                        strokeWidth={2}
                      />
                    </button>

                    <div
                      className={`
                        overflow-hidden transition-all duration-300
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${mobileMusicOpen ? "max-h-[520px] pb-3" : "max-h-0"}
                      `}
                    >
                      <div
                        className="
                          grid grid-cols-1 gap-y-1 
                          -mt-3 p-3
                         
                          sm:grid-cols-2
                        "
                      >
                        {musicGenres.map((genre) => (
                          <a
                            key={genre}
                            href="#"
                            className="
                              group px-3 py-2 text-[14px] leading-none
                              tracking-[-0.01em] text-black/50
                              transition duration-200 hover:text-black
                            "
                          >
                            <PremiumHoverText>{genre}</PremiumHoverText>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href="#"
                  className="
                    border-t border-black/[0.06] py-3.5
                    text-[15px] text-black transition duration-200
                    hover:text-[#ed1c35]
                  "
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}