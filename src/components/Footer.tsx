import React, { useEffect, useState } from "react";

const PatternBackground = ({ children }) => (
  <div
    style={{
      backgroundImage: `repeating-linear-gradient(
        0deg,
        rgba(0,0,0,0.05),
        rgba(0,0,0,0.05) 1px,
        transparent 1px,
        transparent 40px
      )`,
    }}
  >
    {children}
  </div>
);

const Footer = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now
        .toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
        .replace(/\s(AM|PM)/i, "");

      setLocalTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PatternBackground>
      {/* Top bar */}
      <div className="flex justify-between p-4 text-sm font-mono text-gray-600 border-b ">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Online
        </div>
        <div>Local time: {localTime}</div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-20">
          {/* Main CTA */}
          <div className="space-y-4">
            <h2
              className="text-center font-black uppercase leading-none tracking-tight"
              style={{
                WebkitTextStroke: "4px black",
                color: "white",
              }}
            >
              <div className="text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl">
                LET&apos;S BUILD
              </div>
              <div className="text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl">
                SOMETHING
              </div>
              <div className="text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl">
                EPIC
              </div>
            </h2>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center">
            <a
              href="mailto:hello@example.com"
              className="border-4 border-black px-8 py-4 bg-white hover:bg-black hover:text-white transition duration-300 transform hover:scale-105 inline-flex items-center justify-center font-mono text-lg font-bold"
              style={{
                boxShadow: "4px 4px 0px #000",
              }}
            >
              HELLO@EXAMPLE.COM
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end  text-sm font-mono">
            <div className="text-gray-700 font-medium">
              © 2025 All rights reserved.
            </div>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="border-4 border-black px-4 py-2 bg-white hover:bg-black hover:text-white transition duration-300 transform inline-flex items-center font-bold text-black"
              style={{
                boxShadow: "4px 4px 0px #000",
              }}
            >
              BACK TO TOP
            </button>
          </div>
        </div>
      </footer>
    </PatternBackground>
  );
};

export default Footer;
