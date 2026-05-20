// Shared mockup data lists for AAVORide project

export const POPULAR_CITIES = [
  "Bangalore, Karnataka",
  "Mumbai, Maharashtra",
  "Pune, Maharashtra",
  "Chennai, Tamil Nadu",
  "Hyderabad, Telangana",
  "Delhi NCR",
  "Mysore, Karnataka",
  "Coimbatore, Tamil Nadu",
  "Ooty, Tamil Nadu",
  "Goa"
];

export const VEHICLES = [
  { id: "hatch", name: "Hatchback", rate: 9, model: "Honda City or similar", seats: 4, bags: 2, icon: "🚗" },
  { id: "sedan", name: "Sedan", rate: 12, model: "Dzire or similar", seats: 4, bags: 3, icon: "🚘", recommended: true },
  { id: "suv", name: "SUV", rate: 16, model: "Ertiga or similar", seats: 6, bags: 4, icon: "🚙" },
  { id: "comfort-van", name: "Comfort Van", rate: 18, model: "Kia Carens or similar", seats: 6, bags: 5, icon: "🚐" },
  { id: "innova-crysta", name: "Innova Crysta", rate: 21, model: "Toyota Innova Crysta", seats: 7, bags: 6, icon: "🚙" },
  { id: "innova", name: "Innova", rate: 19, model: "Toyota Innova", seats: 7, bags: 5, icon: "🚙" },
];

export const SERVICES = [
  {
    id: "outstation",
    title: "Outstation Trips",
    desc: "Intercity journeys made luxurious with professional chauffeurs and guaranteed fleet availability.",
    image: "/Featured Card_ Outstation.png",
    size: "large"
  },
  {
    id: "airport",
    title: "Airport Transfers",
    desc: "Punctual pickups & drops with real-time flight tracking.",
    image: "/Airport Transfers.png",
    size: "normal"
  },
  {
    id: "wedding",
    title: "Wedding Cars",
    desc: "Make your special day grand with our luxury fleet.",
    image: "/Wedding Cars.png",
    size: "normal"
  },
  {
    id: "local",
    title: "Local Rentals",
    desc: "Hourly packages for all your city exploration needs.",
    image: "/Local Rentals.png",
    size: "normal"
  },
  {
    id: "roundtrip",
    title: "Round Trips",
    desc: "Seamless multi-day travel with zero hidden costs.",
    image: "/Round Trips.png",
    size: "normal"
  },
  {
    id: "tempo",
    title: "Tempo Travellers",
    desc: "Premium group travel with spacious, modern vans.",
    image: "/Tempo Travellers.png",
    size: "normal"
  }
];
