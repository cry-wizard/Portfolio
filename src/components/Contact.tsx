import React, { useState, useEffect, useRef, useCallback } from "react";
import ProfilrImge from "../../public/Profile.jpg"
import Image from "next/image";

// ==========================
// 1️⃣ Fade-in Scroll Animation
// ==========================
const FadeInOnScroll = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transitionStyle = {
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    transitionDelay: `${delay}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  };

  return (
    <div ref={ref} style={transitionStyle} className={className}>
      {children}
    </div>
  );
};

// ==========================
// 2️⃣ Animated HP / XP Counter
// ==========================
const AnimatedStatBox = ({ label, targetValue, duration = 2000, suffix = "", className }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const animationStarted = useRef(false);
  const startTimestamp = useRef(null);

  // Counting animation using requestAnimationFrame
  const countUp = useCallback(
    (timestamp) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const elapsed = timestamp - startTimestamp.current;
      const progress = Math.min(1, 1 - Math.pow(1 - elapsed / duration, 3)); // ease-out
      const value = Math.floor(targetValue * progress);
      setCurrentValue(value);

      if (progress < 1) {
        requestAnimationFrame(countUp);
      } else {
        setCurrentValue(targetValue);
      }
    },
    [duration, targetValue]
  );

  // Start animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true;
          requestAnimationFrame(countUp);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [countUp]);

  return (
    <div ref={ref} className={className}>
      {label} {currentValue}
      {suffix}
    </div>
  );
};

// ==========================
// 3️⃣ Main Contact Page
// ==========================
const Contact = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="min-h-screen bg-[#fff6b3] p-8 font-sans">
      <div className="mx-auto max-w-6xl w-full">
        {/* Header */}
        <FadeInOnScroll delay={0} className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <button className="border-2 border-black px-3 py-1 bg-white font-bold text-sm shadow-[2px_2px_0_0_#000]">
              CONTACT
            </button>
            <p className="text-black font-semibold">// Insert Coin</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-black font-semibold mr-2 text-sm">Status:</p>
            <div className="w-2 h-2 border-2 border-black bg-red-500"></div>
            <div className="w-2 h-2 border-2 border-black bg-yellow-400"></div>
            <div className="w-2 h-2 border-2 border-black bg-green-600"></div>
          </div>
        </FadeInOnScroll>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Contact Form */}
          <FadeInOnScroll delay={100} className="flex-1 lg:w-[60%]">
            <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#000]">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold mb-1">Your name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#fff6b3] border-2 border-black p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#fff6b3] border-2 border-black p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Message</label>
                  <textarea
                    className="w-full bg-[#fff6b3] border-2 border-black p-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white border-2 border-black font-bold py-2 px-5 shadow-[2px_2px_0_0_#000] hover:bg-orange-600 active:scale-[0.98] transition"
                  >
                    Send
                  </button>
                  <button
                    type="reset"
                    className="bg-white border-2 border-black font-bold py-2 px-5 shadow-[2px_2px_0_0_#000] hover:bg-gray-100 active:scale-[0.98] transition"
                  >
                    Reset
                  </button>
                </div>

                <div className="flex justify-end gap-3 mt-[-40px] mr-1">
                  <button className="border-2 border-black bg-white px-3 py-1 font-semibold text-sm shadow-[2px_2px_0_0_#000] hover:bg-gray-100">
                    Email
                  </button>
                  <button className="border-2 border-black bg-white px-3 py-1 font-semibold text-sm shadow-[2px_2px_0_0_#000] hover:bg-gray-100">
                    Discord
                  </button>
                </div>
              </form>
            </div>
          </FadeInOnScroll>

          {/* Right: Profile + Connect + HP/XP */}
          <div className="flex flex-col gap-6 lg:w-[40%]">
            {/* Profile Card */}
            <FadeInOnScroll delay={200}>
              <div className="border-4 border-black bg-white p-5 shadow-[8px_8px_0_0_#000]">
                <div className="flex gap-3 mb-3">
                  <div className="w-16 h-16 border-2 border-black overflow-hidden flex items-center justify-center">
                    <Image
                      src={ProfilrImge}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Siddharth Raj</h3>
                    <p className="text-sm text-gray-600">B.Tech CSE Student</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Currently pursuing B.Tech in Computer Science and Engineering. I'm passionate
                  about coding, learning new technologies, and building meaningful projects.
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 border-2 border-black bg-[#fff6b3] font-bold py-2 text-sm shadow-[2px_2px_0_0_#000] hover:bg-yellow-200 transition">
                    Projects
                  </button>
                  <button className="flex-1 border-2 border-black bg-[#fff6b3] font-bold py-2 text-sm shadow-[2px_2px_0_0_#000] hover:bg-yellow-200 transition">
                    Resume
                  </button>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Connect Section */}
            <FadeInOnScroll delay={300}>
              <div className="border-4 border-black bg-white p-4 shadow-[8px_8px_0_0_#000]">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-sm">CONNECT</h4>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 border-2 border-black bg-orange-500"></div>
                    <div className="w-2 h-2 border-2 border-black bg-white"></div>
                  </div>
                </div>

                {/* Animated Progress Bars */}
                <div className="space-y-3">
                  <AnimatedProgressBar color="bg-orange-500" targetWidth={98} />
                  <AnimatedProgressBar color="bg-yellow-400" targetWidth={65} />
                </div>
              </div>
            </FadeInOnScroll>

            {/* HP & XP Animated Boxes */}
            <FadeInOnScroll delay={400} className="flex flex-col items-end gap-2">
              <AnimatedStatBox
                label="HP"
                targetValue={95}
                className="border-4 border-black bg-white text-center px-4 py-2 w-28 font-bold text-lg shadow-[4px_4px_0_0_#000]"
              />
              <AnimatedStatBox
                label="XP"
                targetValue={59}
                suffix="%"
                className="border-4 border-black bg-white text-center px-4 py-2 w-28 font-bold text-lg shadow-[4px_4px_0_0_#000]"
              />
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================
// 4️⃣ Animated Progress Bar
// ==========================
const AnimatedProgressBar = ({ color, targetWidth }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = () => {
            start += 2;
            setWidth(Math.min(start, targetWidth));
            if (start < targetWidth) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetWidth]);

  return (
    <div ref={ref} className="h-4 border-2 border-black bg-gray-200">
      <div
        className={`h-full ${color} transition-all duration-500`}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default Contact;
