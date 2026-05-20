const fm = { fontFamily: "var(--font-manrope), sans-serif" };

export const TestimonialsSection: React.FC = () => (
  <section className="w-full bg-[#F3F4F5] min-h-[400px] lg:min-h-[637px] py-24">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">

      {/* Heading */}
      <div className="w-full mx-auto flex items-center justify-center mb-16">
        <h2 className="text-[24px] lg:text-[32px] font-bold leading-10 tracking-[-0.32px] text-center text-[#191C1D]" style={fm}>
          Stories from Our Travelers
        </h2>
      </div>

      {/* Cards */}
      <div className="w-full mx-auto overflow-x-auto pb-12">
        <div className="flex gap-8 min-w-max lg:min-w-0 lg:grid lg:grid-cols-3">
          {[
            { text: "AAVORide has transformed my monthly Bangalore-Chennai trips. The cars are spotless, and the drivers are incredibly professional. Best outstation experience in India!", name: "Ananya Sharma",   role: "Frequent Traveler", img: "/Ananya Sharma.svg",   bg: "/Container (11).svg" },
            { text: "Booking was seamless. I used them for a family trip to Ooty. The Innova was well-maintained and the driver knew the terrain perfectly. Highly recommended for families.",  name: "Vikram Malhotra", role: "Tech Executive",    img: "/Vikram Malhotra.svg", bg: "/Container (10).svg" },
            { text: "Transparent pricing is the best part. I knew exactly what I was paying before the trip started. No haggling with the driver for tolls. Truly premium.",                    name: "Priya Das",       role: "Digital Nomad",    img: "/Priya.svg",           bg: "/Container (11).svg" },
          ].map((t, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[350px] lg:w-auto rounded-[32px] p-6 lg:p-8 flex flex-col gap-4 backdrop-blur-[20px] shrink-0 relative overflow-hidden"
              style={{ background: "#FFFFFFB2", border: "1px solid #FFFFFF1A", boxShadow: "0px 0px 10px 1px #FFFFFF33 inset" }}
            >
              {/* Background SVG */}
              <img src={t.bg} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-4">

                {/* Stars */}
                <img src={t.bg} alt="stars" className="h-5 w-auto object-contain self-start" />

                {/* Review text */}
                <p
                  className="w-full text-[16px] font-normal leading-6 tracking-[0px] text-[#191C1D]"
                  style={fm}
                >"{t.text}"</p>

                {/* Profile */}
                <div className="flex items-center gap-4 pt-2">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover shrink-0" />
                  <div className="flex flex-col">
                    <h4 className="text-[16px] font-bold leading-6 text-[#191C1D]" style={fm}>{t.name}</h4>
                    <p className="text-[12px] font-normal leading-4 text-[#5F5E5E]" style={fm}>{t.role}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);
