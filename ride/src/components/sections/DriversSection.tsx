export const DriversSection: React.FC = () => (
  <section className="w-full bg-[#FFF7F2] min-h-[400px] lg:min-h-[640px] py-24">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full max-w-[1280px] mx-auto items-start">

        {/* Left — col-span-5 */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 lg:mt-[31px]">
          <h2
            className="w-full text-[24px] lg:text-[32px] font-bold leading-10 tracking-[-0.32px] text-[#191C1D]"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Our Drivers are our Heroes
          </h2>
          <p
            className="w-full h-auto text-[18px] font-normal leading-7 tracking-[0px] text-[#191C1DB2]"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Every AAVORide driver undergoes a rigorous 5-step verification process, background checks, and hospitality training.
          </p>
          {/* Verification pills */}
          <div className="flex flex-col gap-4 w-full pt-2">
            {[
              { text: "Background Verified by Top Agencies", icon: "/Verifide.svg" },
              { text: "Psychometric Safety Testing", icon: "/saftey.svg" },
              { text: "Hospitality & Professionalism Certified", icon: "/Hospitality.svg" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 w-full min-h-[58px] h-auto rounded-2xl p-4"
                style={{ background: "#191C1D0D", border: "1px solid #191C1D1A" }}
              >
                <img src={item.icon} alt={item.text} className="h-5 w-4 object-contain shrink-0" />
                <span
                  className="text-[14px] sm:text-[16px] font-bold leading-5 sm:leading-6 tracking-[0px] text-[#191C1D]"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 lg:col-span-7 relative bg-white rounded-[24px] sm:rounded-[32px]">
          <div
            className="w-full h-auto rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-8 flex flex-col gap-6 lg:gap-8 lg:mt-[2.4px] relative overflow-hidden"
            style={{ border: "0.6px solid #FF3F1E99" }}
          >
            {/* beg.png — top right decoration */}
            <img
              src="/profile.png"
              alt="profile"
              className="absolute -top-1 -right-2 sm:top-2 sm:right-2 md:top-6 md:right-6 lg:top-10 lg:right-10 w-[70px] h-[70px] sm:w-[100px] sm:h-[80px] md:w-[120px] md:h-[90px] lg:w-[150px] lg:h-[100px] object-contain opacity-20 sm:opacity-20 lg:opacity-30 pointer-events-none select-none z-0"
            />
            {/* Profile header */}
            <div className="flex items-center gap-4 lg:gap-6 w-full relative z-10">
              <img
                src="/Rajesh.svg"
                alt="Rajesh Kumar"
                className="h-28 w-28 lg:h-40 lg:w-40 rounded-full shrink-0 object-cover object-top"
              />
              <div className="flex flex-col gap-1.5">
                <h4
                  className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold leading-7 sm:leading-8 text-[#191C1D]"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >Rajesh Kumar</h4>
                <p
                  className="text-sm sm:text-base font-bold leading-6 text-[#FF3F1E]"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >Elite Partner • 5.0 ★</p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-normal text-[#FF3F1E] whitespace-nowrap"
                    style={{ background: "#FF3F1E33", fontFamily: "var(--font-manrope), sans-serif" }}
                  >VERIFIED</span>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-normal text-[#191C1D] whitespace-nowrap"
                    style={{ background: "#191C1D1A", fontFamily: "var(--font-manrope), sans-serif" }}
                  >1000+ TRIPS</span>
                </div>
              </div>
            </div>

            {/* Details 2×2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { label: "VEHICLE", val: "Toyota Innova Crysta" },
                { label: "LANGUAGE", val: "Hindi, English, Kannada" },
                { label: "BASE CITY", val: "Bangalore" },
                { label: "EXPERTISE", val: "Night Driving, Hill Stations" },
              ].map((d, i) => (
                <div
                  key={i}
                  className="h-auto lg:h-[74px] rounded-2xl p-4 flex flex-col justify-center gap-1"
                  style={{ background: "#191C1D0D", border: "1px solid #191C1D1A" }}
                >
                  <span
                    className="text-[12px] font-normal leading-4 uppercase text-[#191C1D80]"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >{d.label}</span>
                  <span
                    className="text-[14px] lg:text-[16px] font-bold leading-6 text-[#191C1D]"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >{d.val}</span>
                </div>
              ))}
            </div>

            {/* Quote bar */}
            <div
              className="flex items-center justify-between w-full h-auto lg:h-[54px] rounded-2xl px-4 py-3 lg:py-0"
              style={{ background: "#FF3F1E1A", border: "1px solid #FF3F1E33" }}
            >
              <p
                className="text-sm font-normal italic text-[#191C1D]"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >"Ensuring every traveler reaches their destination with a smile."</p>
              <img src="/symbol.svg" alt="" className="h-3 w-[17px] object-contain shrink-0 ml-4" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);
