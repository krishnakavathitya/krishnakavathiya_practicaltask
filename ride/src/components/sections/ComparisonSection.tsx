export const ComparisonSection: React.FC = () => (
  <section id="why-us" className="w-full py-24">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col gap-16">
      <div className="flex flex-col items-center gap-4 w-full lg:w-[1152px] mx-auto">
        <h2 className="text-[32px] font-bold leading-10 tracking-[-0.32px] text-center text-[#191C1D]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
          Why AAVORide is Smarter?
        </h2>
        <p className="w-full max-w-[672px] text-[16px] font-normal leading-6 text-center text-[#5F5E5E] mx-auto" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
          We've redesigned outstation travel from the ground up to solve every pain point of traditional cab bookings.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full lg:w-[1152px] mx-auto">
        <div className="w-full bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 relative overflow-hidden border border-brand/50">
          <div className="absolute top-0 right-0 w-[140px] sm:w-[200px] h-[44px] sm:h-[58px] p-2 sm:p-6 rounded-bl-[32px] sm:rounded-bl-[48px] flex items-center justify-center" style={{ background: "#E5E2E1" }}>
            <img src="/TraditionalCabs.svg" alt="Traditional Cabs" className="h-40 sm:h-20 object-contain" />
          </div>
          <ul className="space-y-4 mt-12 sm:mt-6 relative z-10">
            {[
              { title: "Last Minute Cancellations", desc: "Drivers often cancel just before the trip starts." },
              { title: "Hidden Tolls & Charges", desc: "Vague pricing that changes at the end of the trip." },
              { title: "Unverified Drivers", desc: "Lack of safety standards and background checks." },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <img src="/WrongIcon.svg" alt="wrong" className="h-6 w-6 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[16px] font-bold leading-6 text-[#5F5E5E]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>{item.title}</h4>
                  <p className="text-[14px] font-normal leading-5 text-[#5F5E5E] mt-1" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 relative overflow-hidden border border-brand/50 shadow-[0_15px_40px_rgba(255,68,27,0.04)]">
          <div className="absolute top-0 right-0 overflow-hidden rounded-bl-[32px] sm:rounded-bl-2xl">
            <img src="/AAVORide Experience.svg" alt="AAVORide Experience" className="w-[140px] sm:w-auto h-auto sm:h-[60px] object-contain" />
          </div>
          <ul className="space-y-4 mt-12 sm:mt-6 relative z-10">
            {[
              { title: "Zero Cancellation Policy", desc: "Confirmed rides, guaranteed every single time." },
              { title: "Fixed & Transparent", desc: "Pay exactly what you see. No hidden toll surprises." },
              { title: "Luxury Fleet & Elite Drivers", desc: "5-point background checks for premium safety." },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <img src="/RightIcon.svg" alt="right" className="h-6 w-6 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[16px] font-bold leading-6 text-[#5F5E5E]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>{item.title}</h4>
                  <p className="text-[14px] font-normal leading-5 text-[#5F5E5E] mt-1" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);