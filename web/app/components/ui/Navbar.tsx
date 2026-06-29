"use client";
import React, { useEffect, useState } from "react";

interface NavRoute {
  label: string;
  url: string;
}

const routes: NavRoute[] = [
  { label: "Home", url: "#hero" },
  { label: "Skills", url: "#skills" },
  { label: "Projects", url: "#projects" },
  { label: "Experience", url: "#experience" },
  { label: "Education", url: "#education" },
  { label: "Contact", url: "#contact" },
];

export const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = routes.map((r) => r.url.substring(1));
      let currentSection = "hero";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-sky-600 tracking-wider uppercase font-mono">
              VJ
            </span>
            <span className="hidden sm:inline text-xs font-semibold text-slate-400 group-hover:text-sky-600 transition-colors">
              / PORTFOLIO
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {routes.map((route) => {
            const sectionId = route.url.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={route.url}
                href={route.url}
                className={`text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-sky-500/10 text-sky-700 border border-sky-500/20"
                    : "text-slate-500 hover:text-slate-900 border border-transparent"
                }`}
              >
                {route.label}
              </a>
            );
          })}
        </nav>

        {/* Hire Me CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-xs font-semibold bg-sky-500/10 hover:bg-sky-600 border border-sky-500/20 hover:border-sky-600 text-sky-700 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 px-6 py-4 space-y-2 absolute top-16 left-0 w-full shadow-lg transition-all duration-300">
          {routes.map((route) => (
            <a
              key={`mobile-${route.url}`}
              href={route.url}
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-sky-600 block py-2 border-b border-slate-50 last:border-0"
            >
              {route.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
