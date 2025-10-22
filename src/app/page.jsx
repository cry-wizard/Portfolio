"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import Image from "next/image";
import landingImg from "../../public/img5.jpg";
import { Navigation } from "@/components/ui/Navigation";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

// CometCard component (unchanged)
export const CometCard = ({
  rotateDepth = 12.5,
  translateDepth = 10,
  className = "",
  children,
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 15 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`-${rotateDepth}deg`, `${rotateDepth}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`${rotateDepth}deg`, `-${rotateDepth}deg`]
  );
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 10%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0) 80%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`perspective-[1000px] ${className}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          boxShadow:
            "rgba(0,0,0,0.05) 0px 25px 60px, rgba(0,0,0,0.15) 0px 15px 20px, rgba(0,0,0,0.25) 0px 5px 8px",
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        className="relative rounded-[20px] transition-transform duration-200 bg-black border-[3px] border-gray-800"
      >
        {children}
        <motion.div
          className="pointer-events-none absolute inset-0 z-50 rounded-[20px] mix-blend-overlay"
          style={{ background: glareBackground, opacity: 0.8 }}
        />
      </motion.div>
    </div>
  );
};

// Page component
const Page = () => {
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF7B3] text-black font-sans">
      <Navigation />

      <section className="px-4 sm:px-6 py-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="border-2 border-black bg-white px-3 py-1 text-xs font-bold rounded-sm">
                LEVEL 1
              </div>
              <span className="text-gray-600 uppercase tracking-widest text-xs font-mono">
                Player Profile
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black leading-tight">
              Hi, I&apos;m <span className="text-orange-500">Siddhart Raj</span>{" "}
              —<span className="text-yellow-400"> Dev</span> &{" "}
              <span className="text-[#EA476D]">Creator</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-md">
  I build robust backend systems, dynamic web applications, and mobile apps — focusing on scalable APIs, clean UI, and seamless user experiences.
</p>


            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() =>
                  projectRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#FF5F5F] hover:bg-[#ff3f3f] text-white font-bold py-3 px-6 border-2 border-black rounded-lg shadow-md hover:-translate-y-1 transition-transform"
              >
                View Projects →
              </button>
              <button
                onClick={() =>
                  contactRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 border-2 border-black rounded-lg shadow-md hover:-translate-y-1 transition-transform"
              >
                Hire Me
              </button>
            </div>

            <div className="flex flex-wrap gap-3 pt-5">
              {[
                "Node.js",
                "MongoDB",
                "REST APIs",
                "Expo",
                "TypeScript",
                "Docker",
              ].map((skill) => (
                <div
                  key={skill}
                  className="border-2 border-black px-4 py-2 rounded-md font-semibold text-xs bg-[#FFF0A8] hover:bg-white transition"
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                { label: "Top Project", value: "Social Media App" },
                { label: "Current Goal", value: "Master JetCompose" },
                { label: "Status", value: "Open to Internships" },
                { label: "Focus Area", value: "Full-Stack Development" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border-2 border-black bg-white p-4 rounded-xl text-sm shadow hover:-translate-y-1 transition-transform"
                >
                  <div className="font-bold text-gray-600">{item.label}</div>
                  <div className="text-gray-900 font-semibold">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center h-[80%] lg:justify-end mt-10 lg:mt-0">
            <CometCard className="max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="relative rounded-[20px] border-r-8 border-b-4 border-t-2 border-gray-900 p-6 shadow-lg bg-[#A1806D]">
                <div className="absolute left-3 bg-white border-[2px] border-black px-4 py-1 pt-1 font-bold text-xs rounded-md shadow">
                  RANK S
                </div>
                <div className="p-8 border-4 rounded-3xl border-[#382726] ">
                  <div className="bg-gray-900 rounded-lg overflow-hidden h-72 sm:h-80 flex items-center justify-center mb-4">
                    <Image
                      src={landingImg}
                      alt="Character"
                      className="w-full h-full object-cover bg-[#A1806D]"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="border-2 border-black bg-[#E5486D] px-4 py-2 font-bold text-xs rounded-md shadow">
                    HP 100
                  </div>
                  <div className="border-2 border-black bg-[#1288AC] px-4 py-2 font-bold text-xs rounded-md shadow">
                    XP 59%
                  </div>
                </div>
              </div>
            </CometCard>
          </div>
        </div>
      </section>

      {/* Rest of the Sections */}
      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects" ref={projectRef}>
        <Project />
      </div>

      <div id="contact" ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </main>
  );
};

export default Page;
