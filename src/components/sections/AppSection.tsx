"use client";

export const AppSection: React.FC = () => (
  <section className="w-full max-w-[1280px] mx-auto py-24">
    <div className="px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">

        {/* Left: phone + pills */}
        <div className="flex justify-center w-full lg:w-auto">
          <div className="relative w-[280px] sm:w-[320px] lg:w-[380px]">
            {/* Phone */}
            <div
              className="w-full h-auto lg:h-[690px] rounded-[40px] overflow-hidden relative z-10 shrink-0"
            >
              <img src="/screen.png" alt="AAVORide App" className="w-full h-full object-top" />
            </div>

            {/* LiveLink — bottom-left, overlapping phone */}
            <div
              className="absolute bottom-[10%] lg:bottom-[15%] -left-4 sm:-left-12 lg:-left-31 z-20 w-[130px] sm:w-[150px] lg:w-[200px] h-[65px] sm:h-[75px] lg:h-[100px] rounded-2xl overflow-hidden"
            >
              <img src="/LiveLink.png" alt="Live Link Shared" className="w-full h-full object-contain" />
            </div>

            {/* Payment — middle-right, overlapping phone */}
            <div
              className="absolute top-[20%] lg:top-[25%] -right-4 sm:-right-12 lg:-right-38 z-20 w-[140px] sm:w-[160px] lg:w-[240px] h-[65px] sm:h-[75px] lg:h-[100px] rounded-2xl overflow-hidden"
            >
              <img src="/Payment.png" alt="Payment Success" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="flex flex-col gap-6 w-full lg:pt-[106px]">

          <h2
            className="text-[24px] lg:text-[32px] font-bold leading-10 tracking-[-0.32px] text-[#191C1D]"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Control Your Journey from Your Pocket
          </h2>

          <p
            className="text-sm font-normal leading-relaxed text-[#5F5E5E]"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Our cutting-edge app offers real-time tracking, SOS security features, and one-tap booking history. Share your live location with family for absolute peace of mind.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "/Tracking.svg", title: "Live Tracking", desc: "Precisely track your ride's ETA." },
              { icon: "/Sos.svg", title: "SOS Safety", desc: "Instant emergency assistance." },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src={f.icon} alt={f.title} className="h-8 w-8 object-contain shrink-0 mt-0.5" />
                <div>
                  <h4
                    className="text-sm font-bold text-[#191C1D]"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >{f.title}</h4>
                  <p
                    className="text-[14px] font-normal leading-5 text-[#5F5E5E] mt-0.5"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 pt-2 w-full">
            {[
              { src: "/Button (1).svg", label: "Google Play" },
              { src: "/Button (2).svg", label: "App Store" },
            ].map((b) => (
              <button
                key={b.label}
                className="w-[136px] sm:w-[200px] h-[48px] sm:h-[64px] rounded-[48px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shrink-0"
                style={{ background: "#191C1D" }}
              >
                <img src={b.src} alt={b.label} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  </section>
);
