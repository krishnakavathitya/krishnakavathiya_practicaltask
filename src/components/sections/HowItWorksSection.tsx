"use client";

import { motion } from "framer-motion";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    { step: "1", title: "Enter Destination", desc: "Tell us where you want to go and when you want to start.",     icon: "/Container (4).svg", bg: "/Background+Border.svg"           },
    { step: "2", title: "Compare Cabs",       desc: "Choose from a fleet of hatchbacks, sedans, and premium SUVs.", icon: "/Container (5).svg", bg: "/Background+Border+Shadow.svg"    },
    { step: "3", title: "Instant Booking",    desc: "Confirm with a small advance or pay later in full.",           icon: "/Container (6).svg", bg: "/Background+Border+Shadow_3.svg" },
    { step: "4", title: "Travel Comfortably", desc: "Experience the premium hospitality of AAVORide.",              icon: "/Container (7).svg", bg: "/Background+Border+Shadow_4.svg" },
  ];

  return (
    <section id="how-it-works" className="w-full min-h-[400px] lg:min-h-[480px] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col gap-8 lg:gap-20">

        {/* Heading */}
        <motion.div
          className="w-full mx-auto flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-[24px] lg:text-[32px] font-bold leading-10 tracking-[-0.32px] text-center text-[#191C1D]"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Your Journey in 4 Simple Steps
          </h2>
        </motion.div>

        {/* Steps wrapper */}
        <div className="w-full mx-auto relative pt-4">

          {/* Full-width gradient line (Desktop only) */}
          <div
            className="hidden lg:block absolute top-[116px] left-0 w-full h-[0.9px] z-0"
            style={{ background: "linear-gradient(to right, #FF3F1E 0%, #FF3F1E 25%, #FFD5CC 50%, #F5F5F5 100%)" }}
          />

          {/* Combined Icons + Titles + descriptions grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-y-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.15 }}
              >
                <div className="relative h-[88px] w-[88px] shrink-0 mb-6 lg:mb-[52px]">
                  <img src={step.bg} alt="" className="absolute inset-0 w-[88px] h-[88px] object-contain" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h3
                    className="text-[20px] lg:text-[24px] font-bold leading-8 text-[#191C1D]"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >{step.title}</h3>
                  <p
                    className="text-[14px] font-normal leading-5 text-[#5F5E5E] max-w-[246px]"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
