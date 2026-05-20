"use client";

import React, { useState } from "react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#F1F1F1]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 pt-20 pb-10">

        {/* Main row: w-[1152px] auto, pb-16, border-b, space-between */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16 pb-16 border-b border-neutral-300">

          {/* ── Brand Column ── max-w-[320px], gap-6, h-[241px] */}
          <div className="flex flex-col gap-6 max-w-[320px] w-full">

            {/* Logo — h-10 */}
            <div className="h-10 flex items-center">
              <a href="#" className="text-[32px] font-bold leading-10 tracking-[-0.32px] font-manrope text-[#FF5133]">
                AAVORide
              </a>
            </div>

            {/* Description — h-10 */}
            <div className="h-auto lg:h-10">
              <p className="text-sm text-[#191C1D] leading-5 font-manrope">
                Redefining outstation travel across India with safety, luxury, and transparency at its core.
              </p>
            </div>

            {/* Social icons — 40×40, border-radius: 9999px, gap-4 */}
            <div className="flex items-center gap-4">
              {[
                { src: "/Link (1).svg", label: "Social 1" },
                { src: "/Link.svg", label: "Social 2" },
                { src: "/Link.png", label: "Social 3" },
              ].map(({ src, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="h-10 w-10 shrink-0"
                >
                  <img src={src} alt={label} className="h-10 w-10 object-contain" />
                </a>
              ))}
            </div>

          </div>

          {/* ── Company Column ── */}
          <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-16 w-full lg:w-auto">
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              {/* Heading: Manrope, Bold, 16px, lh-24px */}
              <h4 className="w-auto h-6 text-base font-bold leading-6 tracking-[0px] font-manrope text-charcoal whitespace-nowrap">
                Company
              </h4>
              <ul className="flex flex-col gap-4">
                {["Partner with Us", "Careers", "Press Kit", "Luxury Fleet"].map((link) => (
                  <li key={link}>
                    <a href="#" className="block w-auto h-10 text-sm font-normal leading-5 tracking-[0px] font-manrope text-[#191C1D] hover:text-brand transition-colors flex items-center">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Resources Column ── same spec as Company */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <h4 className="w-auto h-6 text-base font-bold leading-6 tracking-[0px] font-manrope text-[#191C1D] whitespace-nowrap">
                Resources
              </h4>
              <ul className="flex flex-col gap-4">
                {["Safety Protocol", "Help Center", "Travel Blog", "Sitemap"].map((link) => (
                  <li key={link}>
                    <a href="#" className="block w-auto h-10 text-sm font-normal leading-5 tracking-[0px] font-manrope text-[#191C1D] hover:text-brand transition-colors flex items-center">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Newsletter Column ── */}
            <div className="flex flex-col gap-4 w-full sm:w-auto lg:max-w-[280px]">
              <h4 className="w-auto h-6 text-base font-bold leading-6 tracking-[0px] font-manrope text-[#191C1D] whitespace-nowrap">
                Newsletter
              </h4>
              <p className="w-full text-xs font-normal leading-4 tracking-[0px] font-manrope text-[#191C1D]">
                Get travel tips and exclusive luxury offers.
              </p>
              <form
                onSubmit={handleNewsletter}
                className="flex items-center gap-2 w-full sm:w-[227.92px] h-10"
              >
                <input
                  type="email"
                  placeholder={subscribed ? "Subscribed!" : "Your email"}
                  disabled={subscribed}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-[168.92px] h-10 px-4 pt-[9px] pb-[10px] rounded-[48px] border border-[#191C1D1A] bg-[#191C1D0D] text-sm font-normal font-manrope text-[#191C1D] placeholder:text-[#191C1D80] outline-none"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  aria-label="Subscribe"
                  className="shrink-0 flex items-center justify-center"
                >
                  <img src="/Button.svg" alt="Subscribe" className="h-10 w-[51px] shrink-0 object-contain" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* ── Bottom bar — w-[1152px], h-4 (16px), justify-between ── */}
        <div className="w-full max-w-[1152px] flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 h-auto lg:h-4">
          <p className="w-full h-auto sm:h-4 text-xs font-normal leading-4 tracking-[0px] font-manrope text-[#191C1D] text-center sm:text-left">
            © 2024 AAVORide Premium Mobility. All rights reserved. Driven by Excellence.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 w-full h-auto sm:h-4">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((link) => (
              <a key={link} href="#" className="text-xs font-normal leading-4 tracking-[0px] font-manrope text-[#191C1D] hover:text-brand transition-colors whitespace-nowrap h-4 flex items-center cursor-pointer">
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
