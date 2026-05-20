"use client";

import { motion } from "framer-motion";
import { SERVICES } from "../../utils/constants";

export const ServicesSection: React.FC = () => (
  <section id="services" className="w-full bg-[#FFF7F2] py-24">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">

      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span
          className="inline-flex items-center h-[26px] px-4 py-1 rounded-full text-[12px] font-medium leading-4 text-[#FF3F1E]"
          style={{ background: "#FF3F1E1A", border: "1px solid #FF3F1E", fontFamily: "var(--font-manrope), sans-serif" }}
        >
          Services
        </span>
        <h2
          className="w-full h-auto text-[28px] sm:text-[36px] lg:text-[48px] font-extrabold leading-tight lg:leading-[56px] tracking-[-0.96px] text-center text-[#191C1D]"
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
        >
          Travel Solutions for Every Journey
        </h2>
        <p
          className="w-full max-w-[672px] h-auto text-[18px] font-normal leading-7 tracking-[0px] text-center text-[#5F5E5E] mx-auto"
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
        >
          From airport rides to outstation adventures — experience smarter, safer, and more comfortable travel with AAVORide.
        </p>
        <div className="w-24 h-1 rounded-full bg-[#FF3F1E] mx-auto" />
      </motion.div>

      {/* Grid — w-[1152px], 3×3, gap-6 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1152px] mx-auto">
        {/* Large card — col-span-2, row-span-2 */}
        <motion.div
          className="md:col-span-2 md:row-span-2 relative rounded-[32px] overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src="/Tripscar.png" alt="Outstation Trips" className="w-full h-full lg:h-auto object-cover lg:object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
        </motion.div>

        {/* Small cards */}
        {SERVICES.filter(s => s.size !== "large").map((srv, idx) => (
          <motion.div
            key={srv.id}
            className="relative rounded-[32px] overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
          >
            <img src={srv.image} alt={srv.title} className="w-full h-full lg:h-auto object-cover lg:object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
            <div className="absolute inset-0" />
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);
