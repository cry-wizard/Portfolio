"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import robotImg from "../../public/img12.png";

const About = () => {
  return (
    <section className="relative bg-[#135F40] min-h-screen w-full text-white px-6 sm:px-10 py-16 rounded-t-[2rem] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 glow-white">
          ABOUT • PLAYER
        </h2>
        <p className="text-base sm:text-lg text-[#C6F6D5] font-medium">
          🎮 Game-inspired developer • Motion-first design • Retro arcade polish
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-10">
          {/* Mission */}
          <div className="bg-[#1E684E] border-4 border-[#063927] rounded-3xl p-8 shadow-[8px_8px_0_#063927] hover:shadow-[12px_12px_0_#063927] transition-all">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
              🎯 MISSION
            </h3>
            <p className="text-[#E0FFE1] leading-relaxed mb-6">
              I craft game-inspired web experiences that are fast, tactile, and
              deliberately playful. Motion-first UI with careful performance
              optimization and interfaces that feel like a controller in your
              hands.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FFC647] hover:bg-[#FFB300] text-black font-extrabold px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] hover:-translate-y-1 transition-transform">
                VIEW PROJECTS →
              </button>
              <button className="bg-[#00E6BE] hover:bg-[#00C9A8] text-black font-bold px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] hover:-translate-y-1 transition-transform">
                CONTACT ME
              </button>
            </div>
          </div>

          {/* Core Abilities */}
          <div className="bg-[#1E684E] border-4 border-[#063927] rounded-3xl p-8 shadow-[8px_8px_0_#063927] hover:shadow-[12px_12px_0_#063927] transition-all">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
              🔧 CORE ABILITIES
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚛️", name: "React & Next.js", level: "Expert" },
                { icon: "🎨", name: "UI/UX Design", level: "Advanced" },
                { icon: "🚀", name: "Performance", level: "Expert" },
                { icon: "📘", name: "TypeScript", level: "Advanced" },
                { icon: "🎭", name: "Framer Motion", level: "Expert" },
                { icon: "⚙️", name: "GSAP Animations", level: "Advanced" },
              ].map((skill) => (
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  key={skill.name}
                  className="bg-[#2C7159] border-2 border-[#0A3E2C] rounded-2xl px-4 py-4 flex flex-col items-start shadow-[4px_4px_0_#063927]"
                >
                  <div className="text-lg">{skill.icon}</div>
                  <div className="font-bold">{skill.name}</div>
                  <div className="text-sm text-[#8AFFA2] font-semibold">
                    {skill.level}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Character Card */}
        <motion.div
          whileHover={{ rotate: 2, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
          className="relative w-[80%] flex flex-col items-center bg-[#8A929A] border-4 border-[#063927] rounded-3xl p-6 shadow-[8px_8px_0_#063927] hover:shadow-[12px_12px_0_#063927] transition-all"
        >
          {/* Tech Tags */}
          <div className="flex gap-3 mb-4 self-start">
            {["NEXT.js", "EXPO", "NODE.js"].map((tech) => (
              <motion.div
                whileHover={{ scale: 1.15 }}
                key={tech}
                className="bg-[#FFD43B] text-black font-bold text-xs px-3 py-1 rounded-md border-2 border-[#7F6221] shadow-[3px_3px_0_#4E5359]"
              >
                {tech}
              </motion.div>
            ))}
          </div>

          {/* Character Image */}
          <motion.div
            whileHover={{ rotate: -3, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-[#EEECE8] rounded-2xl overflow-hidden flex items-center justify-center p-6 w-full relative h-[400px]"
          >
            <Image
              src={robotImg}
              alt="Robot Character"
              fill // fill available space of relative parent
              style={{ objectFit: "contain" }}
              priority // optional, if you want to preload
            />
          </motion.div>

          {/* Status */}
          <div className="mt-5">
            <div className="bg-[#00E6BE] text-black font-bold text-sm px-5 py-2 rounded-full border-2 border-black shadow-[3px_3px_0_#000]">
              ⚪ AVAILABLE FOR WORK
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
