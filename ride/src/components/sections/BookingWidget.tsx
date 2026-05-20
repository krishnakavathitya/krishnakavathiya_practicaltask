"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronDown, RefreshCw, CheckCircle2 } from "lucide-react";
import { POPULAR_CITIES, VEHICLES } from "../../utils/constants";

const fm = { fontFamily: "var(--font-manrope), sans-serif" };

export const BookingWidget: React.FC = () => {
  const [tripType, setTripType] = useState<"oneway" | "round">("oneway");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupDate, setPickupDate] = useState("24 Oct 2024");
  const [pickupTime, setPickupTime] = useState("09:00 AM");
  const [passengers, setPassengers] = useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [isSearching, setIsSearching] = useState(false);
  const [searchSuccess, setSearchSuccess] = useState(false);
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDestSuggestions, setShowDestSuggestions] = useState(false);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);

  const pickupRef = useRef<HTMLDivElement>(null);
  const destRef = useRef<HTMLDivElement>(null);
  const passengerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (pickupRef.current && !pickupRef.current.contains(e.target as Node)) setShowPickupSuggestions(false);
      if (destRef.current && !destRef.current.contains(e.target as Node)) setShowDestSuggestions(false);
      if (passengerRef.current && !passengerRef.current.contains(e.target as Node)) setShowPassengerDropdown(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup || !destination) return;
    setIsSearching(true);
    setTimeout(() => { setIsSearching(false); setSearchSuccess(true); setTimeout(() => setSearchSuccess(false), 5000); }, 2000);
  };

  const selectedCarDetails = VEHICLES.find(v => v.id === selectedVehicle) ?? VEHICLES[1];

  return (
    <div id="booking-card" className="relative mt-8 lg:mt-15 lg:mb-6 mb-3">
      <motion.div
        className="w-full max-w-full sm:max-w-[500px] mx-auto rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-8 flex flex-col gap-4 backdrop-blur-[20px] relative"
        style={{ background: "#FFFFFF", border: "1px solid #FFFFFF1A", boxShadow: "0px 6px 14.8px 0px #FF3E1D33" }}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      >
        {/* Floating car badge */}
        <div
          className="absolute -top-5 -right-5 z-20 w-16 sm:w-20 flex items-center justify-center"
        >
          <img src="/cartop.svg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* Title */}
        <h3 className="w-full h-8 text-[20px] sm:text-[24px] font-bold leading-8 tracking-[0px] text-[#191C1D]" style={fm}>
          Plan Your Trip
        </h3>

        {/* Tabs */}
        <div className="flex items-center w-full gap-4 sm:gap-8 lg:gap-[79px] border-b border-neutral-100">
          {(["oneway", "round"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setTripType(type)}
              className="relative pb-3 flex-1 h-8 text-[16px] font-bold leading-8 tracking-[0px] text-center transition-colors"
              style={{ ...fm, color: tripType === type ? "#FF3F1E" : "#6B7280", borderBottom: tripType === type ? "1px solid #FF3F1E" : "1px solid transparent" }}
            >
              {type === "oneway" ? "One Way" : "Round Trip"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSearch} className="flex flex-col gap-3">

          {/* Pickup */}
          <div className="relative mt-3" ref={pickupRef}>
            <label className="absolute -top-2.5 left-3 bg-white px-2 text-[13px] font-normal text-[#5F5E5E] z-10" style={fm}>Pickup Location</label>
            <div className="flex items-center bg-[#F5F5F5] rounded-2xl px-4 h-[56px] w-full border border-[#FF3F1E33] focus-within:border-brand transition-all">
              <img src="/circle.svg" alt="" className="h-[22px] w-[22px] object-contain mr-3 shrink-0" />
              <input type="text" placeholder="Enter City or Airport" value={pickup}
                onChange={(e) => { setPickup(e.target.value); setShowPickupSuggestions(true); }}
                onFocus={() => setShowPickupSuggestions(true)}
                className="bg-transparent border-none outline-none w-full text-[16px] text-[#191C1D] placeholder:text-[#6B7280]" style={fm} />
            </div>
            {showPickupSuggestions && (
              <div className="absolute top-[105%] left-0 right-0 bg-white border border-neutral-100 shadow-2xl rounded-2xl p-2 z-30 max-h-52 overflow-y-auto">
                {POPULAR_CITIES.filter(c => c.toLowerCase().includes(pickup.toLowerCase())).map((city, idx) => (
                  <button key={idx} type="button" onClick={() => { setPickup(city); setShowPickupSuggestions(false); }}
                    className="flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-xl hover:bg-brand-light hover:text-brand transition-colors text-sm" style={fm}>
                    <MapPin className="h-3.5 w-3.5 text-brand shrink-0" />{city}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Destination */}
          <div className="relative mt-3" ref={destRef}>
            <label className="absolute -top-2.5 left-3 bg-white px-2 text-[13px] font-normal text-[#5F5E5E] z-10" style={fm}>Destination</label>
            <div className="flex items-center bg-[#F5F5F5] rounded-2xl px-4 h-[56px] w-full border border-[#FF3F1E33] focus-within:border-brand transition-all">
              <img src="/map.svg" alt="" className="h-[22px] w-[22px] object-contain mr-3 shrink-0" />
              <input type="text" placeholder="Where are you heading?" value={destination}
                onChange={(e) => { setDestination(e.target.value); setShowDestSuggestions(true); }}
                onFocus={() => setShowDestSuggestions(true)}
                className="bg-transparent border-none outline-none w-full text-[16px] text-[#191C1D] placeholder:text-[#6B7280]" style={fm} />
            </div>
            {showDestSuggestions && (
              <div className="absolute top-[105%] left-0 right-0 bg-white border border-neutral-100 shadow-2xl rounded-2xl p-2 z-30 max-h-52 overflow-y-auto">
                {POPULAR_CITIES.filter(c => c.toLowerCase().includes(destination.toLowerCase()) && c !== pickup).map((city, idx) => (
                  <button key={idx} type="button" onClick={() => { setDestination(city); setShowDestSuggestions(false); }}
                    className="flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-xl hover:bg-brand-light hover:text-brand transition-colors text-sm" style={fm}>
                    <MapPin className="h-3.5 w-3.5 text-[#AEAEAE] shrink-0" />{city}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative mt-3">
              <label className="absolute -top-2.5 left-3 bg-white px-2 text-[13px] font-normal text-[#5F5E5E] z-10" style={fm}>Date</label>
              <div className="flex items-center bg-[#F5F5F5] rounded-2xl px-4 h-[56px] border border-[#FF3F1E33]">
                <img src="/calender.svg" alt="" className="h-5 w-5 object-contain mr-2 shrink-0" />
                <input type="text" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-[16px] text-[#191C1D]" style={fm} />
              </div>
            </div>
            <div className="relative mt-3">
              <label className="absolute -top-2.5 left-3 bg-white px-2 text-[13px] font-normal text-[#5F5E5E] z-10" style={fm}>Time</label>
              <div className="flex items-center bg-[#F5F5F5] rounded-2xl px-4 h-[56px] border border-[#FF3F1E33]">
                <img src="/clock.svg" alt="" className="h-5 w-5 object-contain mr-2 shrink-0" />
                <input type="text" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-[16px] text-[#191C1D]" style={fm} />
              </div>
            </div>
          </div>

          {/* Travellers */}
          <div className="relative mt-3" ref={passengerRef}>
            <label className="absolute -top-2.5 left-3 bg-white px-2 text-[13px] font-normal text-[#5F5E5E] z-10" style={fm}>Travellers</label>
            <button type="button" onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
              className="flex items-center justify-between w-full bg-[#F5F5F5] rounded-2xl px-4 h-[56px] text-left border border-[#FF3F1E33]">
              <div className="flex items-center">
                <img src="/contact.svg" alt="" className="h-5 w-5 object-contain mr-3 shrink-0" />
                <span className="text-sm text-[#191C1D]" style={fm}>{passengers} {passengers === 1 ? "Passenger" : "Passengers"}</span>
              </div>
              <ChevronDown className="h-4 w-4 text-[#AEAEAE]" />
            </button>
            {showPassengerDropdown && (
              <div className="absolute top-[105%] left-0 right-0 bg-white border border-neutral-100 shadow-2xl rounded-2xl p-3.5 z-30 flex items-center justify-between">
                <span className="text-xs text-[#5F5E5E]" style={fm}>Passengers</span>
                <div className="flex items-center gap-3">
                  <button type="button" disabled={passengers <= 1} onClick={() => setPassengers(p => p - 1)} className="h-7 w-7 rounded-full border border-neutral-200 flex items-center justify-center font-bold disabled:opacity-30 hover:border-brand hover:text-brand transition-colors">-</button>
                  <span className="font-bold text-sm w-4 text-center" style={fm}>{passengers}</span>
                  <button type="button" disabled={passengers >= 12} onClick={() => setPassengers(p => p + 1)} className="h-7 w-7 rounded-full border border-neutral-200 flex items-center justify-center font-bold disabled:opacity-30 hover:border-brand hover:text-brand transition-colors">+</button>
                </div>
              </div>
            )}
          </div>

          {/* Vehicle selector */}
          <div className="flex items-center gap-[17px] overflow-x-auto py-1 w-full">
            {VEHICLES.map((vehicle) => (
              <button
                key={vehicle.id}
                type="button"
                onClick={() => setSelectedVehicle(vehicle.id)}
                className="flex-none flex flex-col items-center gap-1 cursor-pointer transition-all"
                style={{ width: 57 }}
              >
                {/* Car image with border */}
                <div
                  style={{
                    width: 57, height: 46,
                    borderRadius: 10,
                    border: selectedVehicle === vehicle.id ? "0.6px solid #FF3F1E" : "0.6px solid #FF3F1E33",
                    background: selectedVehicle === vehicle.id ? "#FFF0EC" : "transparent",
                    overflow: "hidden",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <img src="/cars.svg" alt={vehicle.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                {/* Label — outside border */}
                <span
                  className="text-[10px] font-bold text-center text-[#191C1D] w-full truncate"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >{vehicle.name}</span>
              </button>
            ))}
          </div>

          {/* Recommended */}
          <div className="w-full flex flex-col gap-4 pt-4" style={{ borderTop: "1px solid #E2BFB04D" }}>
            <p className="text-[12px] font-medium leading-4 uppercase text-[#5F5E5E]" style={{ fontFamily: "var(--font-manrope), sans-serif", letterSpacing: "0.6px" }}>
              Recommended for you
            </p>
            <div
              className="flex items-center justify-between w-full min-h-[65px] rounded-2xl p-3 sm:p-4"
              style={{ background: "#FFFFFF", border: "0.6px solid  #FF3E1D33", boxShadow: "0px 1px 2px 0px #0000000D" }}
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <img src="/carcircle.svg" alt="" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-[16px] font-bold leading-6 text-[#191C1D]" style={fm}>Premium {selectedCarDetails.name}</h4>
                  <p className="text-[12px] font-normal leading-4 text-[#5F5E5E]" style={fm}>{selectedCarDetails.model}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <p className="text-[16px] font-bold leading-6 text-right text-[#FF3F1E]" style={fm}>₹{selectedCarDetails.rate}/km</p>
                <p className="text-[10px] font-normal leading-[15px] text-right text-[#5F5E5E]" style={fm}>Fastest Response</p>
              </div>
            </div>
          </div>

          {/* Search button */}
          <button type="submit" disabled={isSearching}
            className="w-full bg-brand hover:bg-brand-hover disabled:bg-neutral-300 text-white font-bold text-base py-4 rounded-2xl shadow-xl shadow-brand/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
            style={fm}>
            {isSearching ? <><RefreshCw className="h-4 w-4 animate-spin" /> Searching...</>
              : searchSuccess ? <><CheckCircle2 className="h-4 w-4" /> Cabs Found!</>
              : "Search Cabs"}
          </button>

        </form>
      </motion.div>
    </div>
  );
};
