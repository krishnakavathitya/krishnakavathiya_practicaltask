"use client";

import { useState, useEffect } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { StatsSection } from "../components/sections/StatsSection";
import { ComparisonSection } from "../components/sections/ComparisonSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { DriversSection } from "../components/sections/DriversSection";
import { AppSection } from "../components/sections/AppSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CTABanner } from "../components/sections/CTABanner";

export default function Home() {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "services", "about", "safety", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-brand/20 selection:text-brand">
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <div id="home"><HeroSection /></div>
      <StatsSection />
      <ComparisonSection />
      <div id="services"><ServicesSection /></div>
      <div id="about"><HowItWorksSection /></div>
      <div id="safety"><DriversSection /></div>
      <AppSection />
      <TestimonialsSection />
      <div id="contact"><CTABanner /></div>
      <Footer />
    </div>
  );
}
