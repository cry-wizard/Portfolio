"use client";

import React from "react";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] z-50 px-4 sm:px-6 py-3 sm:py-4 border-b-8 rounded-3xl border-black shadow-lg bg-white backdrop-blur"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition cursor-pointer flex-shrink-0"
        >
          <div className="w-10 sm:w-12 h-10 sm:h-12 bg-orange-500 rounded-full border-4 border-black flex items-center justify-center">
            <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white rounded-full" />
          </div>
        </button>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {["Home", "About", "Skills", "Projects","Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-700 font-bold hover:text-black transition text-sm lg:text-base"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Contact Me Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full border-4 border-black transition hover:scale-105 active:scale-95 text-xs sm:text-base"
        >
          Contact me
        </button>
      </div>
    </nav>
  );
}
