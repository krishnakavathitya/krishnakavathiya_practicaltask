export const CTABanner: React.FC = () => (
  <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-16">
    <div
      className="w-full mx-auto rounded-[32px] px-6 sm:px-12 lg:px-20 py-12 lg:py-20 flex flex-col items-center justify-center text-center gap-8 relative overflow-hidden"
      style={{ background: "#FF3F1E", boxShadow: "0px 10px 40px -10px #FF6B004D" }}
    >
      {/* Radial glow left */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white/20 blur-[80px] pointer-events-none" />

      {/* Headline + subtitle */}
      <div className="flex flex-col gap-6 w-full max-w-[672px] mx-auto items-center relative z-10">
        <h2
          className="text-white font-extrabold text-[28px] sm:text-[36px] lg:text-[48px] leading-tight lg:leading-[56px] tracking-[-0.96px] text-center"
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
        >
          Ready to Travel Smarter?
        </h2>
        <p
          className="w-full text-[18px] font-normal leading-7 tracking-[0px] text-white/90 text-center"
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
        >
          Join 50,000+ travelers who choose AAVORide for their executive outstation journeys. Book your first ride today and get ₹500 off.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center relative z-10">
        <a
          href="#booking-widget"
          className="w-full sm:w-[266px] h-[60px] flex items-center justify-center rounded-full px-8 lg:px-12 py-4 text-[18px] font-bold leading-7 text-[#FF3F1E] hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
          style={{ background: "#FFFFFF", fontFamily: "var(--font-manrope), sans-serif" }}
        >
          Book Your Ride Now
        </a>
        <span
          className="text-[16px] font-bold leading-6 text-white whitespace-nowrap"
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
        >
          Or Call Us: 1800-AAVO-RIDE
        </span>
      </div>
    </div>
  </section>
);
