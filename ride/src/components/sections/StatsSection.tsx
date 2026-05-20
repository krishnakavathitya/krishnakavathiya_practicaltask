export const StatsSection: React.FC = () => (
  
  <section className="w-full bg-[#FFF7F2] py-12 mt-25">
   
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">

      {/* 4-col grid — w-[1152px], h-[126px], gap-6 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-[1152px] mx-auto">
        {[
          { num: "10k+", label: "Active Travelers" },
          { num: "5k+",  label: "Verified Drivers"  },
          { num: "100+", label: "Cities Covered"    },
          { num: "4.9",  label: "User Rating"       },
        ].map((stat, i) => (
          <div
            key={i}
            className="w-full lg:w-[270px] h-[126px] rounded-[32px] p-6 flex flex-col items-center justify-center gap-1 backdrop-blur-[20px]"
            style={{
              background: "#FFFFFFB2",
              border: "1px solid #FFFFFF1A",
              boxShadow: "0px 0px 10px 1px #FFFFFF33 inset",
            }}
          >
            {/* Number — Manrope ExtraBold 48px, #FF3F1E */}
            <span
              className="text-[36px] sm:text-[48px] font-extrabold leading-[56px] tracking-[-0.96px] text-center text-[#FF3F1E]"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >{stat.num}</span>

            {/* Label — Manrope SemiBold 14px, #5F5E5E, letter-spacing 0.7px */}
            <span
              className="text-[14px] font-semibold leading-5 text-center text-[#5F5E5E]"
              style={{ fontFamily: "var(--font-manrope), sans-serif", letterSpacing: "0.7px" }}
            >{stat.label}</span>
          </div>
        ))}
      </div>

    </div>
  </section>
);
