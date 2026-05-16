"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "FRONTEND ISLAND",
    icon: "🏝️",
    skills: ["React", "Next.js", "Tailwind", "TypeScript", "Redux", "A11Y"],
    color: "from-[#FF416C] to-[#FF4B2B]", // Vibrant Sunset
    shadow: "shadow-[0_0_30px_rgba(255,65,108,0.4)]",
  },
  {
    title: "BACKEND TRENCH",
    icon: "🐙",
    skills: ["Node.js", "Express", "Socket.io", "MongoDB", "REST APIs", "GraphQL"],
    color: "from-[#4776E6] to-[#8E54E9]", // Deep Purple/Blue
    shadow: "shadow-[0_0_30px_rgba(71,118,230,0.4)]",
  },
  {
    title: "CLOUD SKYPIEA",
    icon: "☁️",
    skills: ["AWS", "Linux", "Docker", "CI/CD", "Git", "Nginx"],
    color: "from-[#00B4DB] to-[#0083B0]", // Sky Blue
    shadow: "shadow-[0_0_30px_rgba(0,180,219,0.4)]",
  },
  {
    title: "UI/UX TREASURE",
    icon: "💎",
    skills: ["Framer Motion", "GSAP", "Figma", "Design Systems", "UI/UX"],
    color: "from-[#FDFC47] to-[#24FE41]", // Neon Green/Yellow
    shadow: "shadow-[0_0_30px_rgba(36,254,65,0.4)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const islandVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1, 
    transition: { type: "spring", stiffness: 80, damping: 15 } 
  },
};

// Continuous floating animation for the entire island
const floatingIsland = (delay) => ({
  animate: {
    y: [0, -15, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay: delay,
  }
});

// Floating animation for individual skill bubbles
const floatingBubble = (delay, duration) => ({
  animate: {
    y: [0, -8, 0],
    x: [0, 5, -5, 0],
  },
  transition: {
    duration: duration,
    repeat: Infinity,
    ease: "easeInOut",
    delay: delay,
  }
});

export default function Skills() {
  return (
    <section className="py-24 px-4 sm:px-10 bg-[#0F172A] min-h-screen relative overflow-hidden" id="skills">
      
      {/* Background Star/Dust Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.6 }}
          className="mb-20 flex flex-col items-center"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-2 text-xl font-bold rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] mb-4 tracking-widest uppercase">
            SKILL ARCHIPELAGO
          </div>
          <h2 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00F260] to-[#0575E6] uppercase tracking-widest text-center drop-shadow-[0_4px_10px_rgba(0,242,96,0.3)]">
            TREASURE MAP
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {skillsData.map((category, index) => (
            <motion.div
              custom={index}
              key={category.title}
              variants={islandVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <motion.div 
                {...floatingIsland(index * 0.5)}
                className={`h-full bg-[#1E293B]/80 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-[3rem] ${category.shadow} transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group`}
              >
                {/* Glowing Background Orb */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full blur-[60px] opacity-40 group-hover:opacity-70 transition-opacity duration-500`}></div>

                {/* Island Icon */}
                <div className={`text-6xl sm:text-7xl mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300 z-10`}>
                  {category.icon}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-8 tracking-wider z-10 drop-shadow-md">
                  {category.title}
                </h3>
                
                {/* Skill Bubbles */}
                <div className="flex flex-wrap justify-center gap-4 z-10 mt-auto">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      {...floatingBubble(i * 0.2, 3 + (i % 2))}
                      whileHover={{ scale: 1.15, y: -5 }}
                      className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white text-sm font-bold rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.3)] cursor-pointer backdrop-blur-md border border-white/20`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
