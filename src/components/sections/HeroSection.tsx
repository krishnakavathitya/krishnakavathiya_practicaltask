"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookingWidget } from "../../components/sections/BookingWidget";

export const HeroSection: React.FC = () => (
  <section
    id="home"
    className="relative w-full overflow-hidden mt-[105px]"
    style={{ background: "linear-gradient(248.61deg, #FDE3D3 31.56%, rgba(255,255,255,0) 62.28%), linear-gradient(137.41deg, #FDE3D3 23.55%, rgba(255,255,255,0) 48.54%)" }}
  >
    {/* Car image — hidden on mobile, visible on lg */}
    <motion.div
      className="hidden lg:block absolute bottom-0 left-0 z-0 pointer-events-none select-none"
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
    >
      <img src="/car.png" alt="" className="w-full h-auto object-contain object-bottom" />
    </motion.div>

    <div className="relative z-10 w-full flex items-center px-4 sm:px-8 lg:px-16 py-12 lg:py-0 min-h-[auto] lg:min-h-[756px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">

        {/* Left copy */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center self-start gap-2 h-8 px-4 py-2 rounded-full"
            style={{ background: "#A041001A" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <img src="/Trust.svg" alt="" className="h-[15.75px] w-[16.5px] object-contain shrink-0" />
            <span
              className="text-[12px] font-medium leading-4 text-[#A04100]"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >India's Most Trusted Outstation Network</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold leading-tight lg:leading-[72px] tracking-[-1.6px] text-[#191C1D]"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            India's Smarter <br />
            <span className="text-brand">Outstation</span> Cab <br />
            Platform.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[16px] sm:text-[18px] font-semibold leading-7 text-[#191C1D] max-w-[540px]"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          >
            Experience executive-grade travel with AAVORide. Punctual arrivals,
            verified luxury fleet, and transparent pricing for your intercity journeys.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          >
            <a
              href="#booking-widget"
              className="inline-flex items-center justify-center h-[54px] px-8 rounded-full text-[14px] font-semibold text-white cursor-pointer transition-all hover:opacity-90"
              style={{ background: "#FF3E1D", letterSpacing: "0.7px", fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Start Your Journey
            </a>
            <button
              className="inline-flex items-center justify-center h-[52px] px-8 rounded-full text-[14px] font-semibold text-[#191C1D] cursor-pointer transition-all hover:opacity-90"
              style={{ background: "#FFFFFF", letterSpacing: "0.7px", fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Download App
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
          >
            <img src="/pictures.svg" alt="Happy Travelers" className="h-10 w-24 object-contain shrink-0" />
            <p
              className="text-[12px] leading-4 text-[#191C1D]"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              suppressHydrationWarning
            >
              <span className="font-bold text-[#FFF200]" suppressHydrationWarning>4.9/5 Rating </span>
              <span className="font-bold text-white" suppressHydrationWarning>from 50k+ Happy Travelers</span>
            </p>
          </motion.div>

        </div>

        {/* Right — BookingWidget */}
        <motion.div
          className="lg:col-span-5 w-full"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <BookingWidget />
        </motion.div>

      </div>
    </div>
  </section>
);
