import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
  FaSpotify,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    title: "WE RAVE YOU",
    links: ["About Us", "Contact"],
  },
  {
    title: "OTHER INFO",
    links: ["Join The Team", "VST Plugin Delas", "Privacy", "Cookies", "Term of Use"],
  },
  {
    title: "NEWS",
    links: ["Featured", "Editorials", "Interviews", "Events", "Exclusive", "Industry", "Metaverse"],
  },
  {
    title: "TECH",
    links: ["Featured", "Editor Picks", "Plugin Deals", "Gear", "Sample Packs", "Courses"],
  },
];

const socials = [
  { icon: <FaFacebookF /> },
  { icon: <FaInstagram /> },
  { icon: <FaXTwitter /> },
  { icon: <FaYoutube /> },
  { icon: <FaSoundcloud /> },
  { icon: <FaSpotify /> },
  { icon: <FaLinkedinIn /> },
  { icon: <FaPinterestP /> },
  { icon: <FaTiktok /> },
];

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#1d1d1d] text-white"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="mx-auto max-w-[1960px] px-4 pt-16 sm:px-6 lg:px-8 lg:py-16 2xl:py-18">
        {/* Top Row */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-[#ED1C35]">
              <span className="text-[22px] font-black leading-none text-white">
                Y
              </span>
            </div>

            <div className="text-[24px] font-black uppercase leading-none tracking-[-0.08em] text-white">
              WE RAVE YOU
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <p className="text-[22px] font-light tracking-[-0.03em] text-white/90 sm:text-[24px]">
              Follow us on Social Media for the latest updates
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[16px] text-white">
              {socials.map((social, index) => (
                <button
                  key={index}
                  className="transition hover:text-[#ED1C35]"
                  aria-label="Social media link"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-14 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          {/* Contact Form */}
          <div>
            <h3 className="text-[22px] font-light tracking-[-0.03em] text-white sm:text-[24px]">
              Advertise &amp; Promote on We Rave You
            </h3>

            <form className="mt-4 lg:mt-12 max-w-[720px]" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Write Us"
                className="w-full border-0 border-b border-white/35 bg-transparent py-4 text-[22px] font-light text-white outline-none placeholder:text-white/55 focus:border-white  md:text-[24px] xl:text-[28px] 2xl:text-[30px]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="mt-4 w-full border-0 border-b border-white/35 bg-transparent py-4 text-[22px] font-light text-white outline-none placeholder:text-white/55 focus:border-white md:text-[24px] xl:text-[28px] 2xl:text-[30px]"
              />
            </form>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10  sm:grid-cols-4 lg:pt-2">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.02em] text-white">
                  {column.title}
                </h4>

                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[16px] font-light leading-none text-white/85 transition hover:text-[#ED1C35]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#171817]">
        <div className="mx-auto flex max-w-[1960px] flex-row gap-3 px-4 py-3 text-[14px] font-light text-white/25 sm:px-6 items-center justify-between lg:px-8">
          <p>We Rave You Ltd.</p>
          <p>All Rights Reserved © 2026</p>
        </div>
      </div>
    </footer>
  );
}