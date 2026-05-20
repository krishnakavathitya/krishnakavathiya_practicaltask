"use client";

import React, { useState } from "react";

interface HeaderProps {
  activeNav: string;
  setActiveNav: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeNav, setActiveNav }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", href: "#home", width: "42px" },
    { id: "services", label: "Services", href: "#services", width: "63px" },
    { id: "about", label: "About", href: "#about", width: "46px" },
    { id: "safety", label: "Safety", href: "#safety", width: "48px" },
    { id: "contact", label: "Contact", href: "#contact", width: "58px" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveNav(id);
    setMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      // Offset for header height
      const headerOffset = 105;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full flex items-center justify-between px-4 sm:px-8 transition-all duration-300"
      style={{
        height: '105px',
        paddingTop: '8px',
        paddingBottom: '8px',
        opacity: 1,
        background: "white",
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
      }}
    >
      <div className="flex items-center gap-3">
        {/* Bold Brand Logo */}
        <a
          href="/"
          className="inline-flex items-center group font-extrabold w-auto sm:w-[161px]"
          style={{
            height: '56px',
            opacity: 1,
            transform: 'rotate(0deg)',
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 800,
            fontSize: '28px', // scaled down on mobile if needed, though class handles text size usually
            lineHeight: '56px',
            letterSpacing: '-2.4px',
            verticalAlign: 'middle',
            display: 'inline-flex',
          }}
        >
          <span className="text-brand">AAVORide</span>
        </a>
      </div>

      {/* Center Nav Links */}
      <nav
        className="hidden md:flex items-center gap-4 lg:gap-[32px]"
        style={{
          width: 'auto',
          height: '30px',
          opacity: 1,
          transform: 'rotate(0deg)',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.id)}
            className="relative transition-all duration-300 flex items-center justify-center hover:text-[#FF5A2C]"
            style={{
              width: link.width,
              height: '28px',
              paddingTop: '4px',
              paddingBottom: '4px',
              opacity: 1,
              transform: 'rotate(0deg)',
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0.7px',
              verticalAlign: 'middle',
              color: activeNav === link.id ? '#FF5A2C' : '#5F5E5E',
            }}
          >
            {link.label}
            {/* Animated Bottom Border */}
            <span 
              className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#FF5A2C] transition-transform duration-300 ease-out origin-left ${
                activeNav === link.id ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </a>
        ))}
      </nav>

      {/* Right Action Button */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:inline-flex items-center whitespace-nowrap bg-brand hover:bg-brand-hover text-white px-4 lg:px-6 py-3 rounded-full font-bold text-xs lg:text-sm shadow-lg shadow-brand/20 transition-all hover:scale-105 active:scale-95 cursor-pointer">
          Join as AAVORide Partner
        </button>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-charcoal rounded-full"></span>
          <span className="w-5 h-0.5 bg-charcoal rounded-full self-end"></span>
          <span className="w-6 h-0.5 bg-charcoal rounded-full"></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col py-4 md:hidden"
          style={{ borderTop: "1px solid #F3F4F5" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className="relative px-6 py-3 text-[14px] font-semibold transition-colors hover:text-[#FF5A2C] w-fit"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                color: activeNav === link.id ? '#FF5A2C' : '#5F5E5E',
              }}
            >
              {link.label}
              <span 
                className={`absolute bottom-[8px] left-6 w-[calc(100%-48px)] h-[2px] bg-[#FF5A2C] transition-transform duration-300 ease-out origin-left ${
                  activeNav === link.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
          <div className="px-6 pt-3">
            <button className="w-full inline-flex items-center justify-center bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-brand/20 transition-all cursor-pointer">
              Join as AAVORide Partner
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
