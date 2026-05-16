"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "CertED Technologies",
    duration: "2 Months",
    description: "Developed responsive web interfaces using React and Next.js. Improved page load speed by 20% through code splitting and asset optimization. Collaborated with the UX team to implement modern design systems.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "bg-[#EA476D]", // Pink
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Centennial Infotech",
    duration: "3 Months",
    description: "Assisted in building full-stack applications. Created reusable UI components and integrated RESTful APIs. Participated in daily stand-ups and agile workflows.",
    tech: ["JavaScript", "HTML/CSS", "Node.js", "API Integration"],
    color: "bg-[#00E6BE]", // Mint
  },
];

// Continuous floating animation helper
const floatingAnimation = (duration, yOffset, xOffset, rotOffset) => ({
  animate: {
    y: [0, yOffset, 0],
    x: [0, xOffset, 0],
    rotate: [0, rotOffset, -rotOffset, 0],
  },
  transition: {
    duration: duration,
    repeat: Infinity,
    ease: "easeInOut",
  }
});

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -15 : 15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.02, rotateZ: index % 2 === 0 ? 1 : -1, translateY: -5 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
      className="relative flex flex-col md:flex-row gap-6 md:gap-8 bg-white/10 backdrop-blur-xl border border-white/40 p-6 sm:p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_48px_rgba(0,180,255,0.3)] transition-all duration-500 transform-gpu z-10 group"
    >
      {/* "Stage" / "Island" Badge */}
      <div className="absolute -top-6 -left-6 bg-gradient-to-br from-[#FFC647] to-[#FF9D00] border-2 border-white/50 px-4 py-2 text-[#382726] font-black text-xl rounded-xl shadow-lg rotate-[-8deg] group-hover:rotate-[0deg] transition-transform z-20">
        ISLAND {index + 1} 🏴‍☠️
      </div>

      <div className="md:w-1/4 shrink-0 mt-4 md:mt-0 flex flex-col justify-center">
        <div className="bg-white/80 backdrop-blur-sm border border-white/50 px-3 py-1 text-gray-900 font-bold text-sm mb-3 inline-block rounded-md shadow-sm self-start">
          ⏳ {exp.duration}
        </div>
        <h3 className="text-2xl font-black text-white drop-shadow-md">{exp.company}</h3>
      </div>
      
      <div className="md:w-3/4">
        <h4 className="text-2xl md:text-3xl font-black text-[#FFE600] mb-3 drop-shadow-md">
          {exp.role}
        </h4>
        <p className="text-white/90 font-medium mb-6 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/10 shadow-inner">
          {exp.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((tech) => (
            <motion.span
              whileHover={{ scale: 1.1, y: -2 }}
              key={tech}
              className={`px-3 py-1 ${exp.color} text-black text-xs font-black rounded-full border border-white/50 shadow-md`}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const containerRef = useRef(null);
  
  const { scrollYProgress: trackProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const trackHeight = useTransform(trackProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-32 px-4 sm:px-6 w-full overflow-hidden bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]" id="experience">
      
      {/* --- TOP HIGH QUALITY WAVE DIVIDER --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-[80px] sm:h-[150px] block">
          <path fill="#FFF7B3" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,149.3C384,149,480,203,576,213.3C672,224,768,192,864,181.3C960,171,1056,181,1152,197.3C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          <path fill="#FFEA8C" fillOpacity="0.5" d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,224C672,245,768,235,864,208C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* --- CONTINUOUS LIVING OCEAN ELEMENTS --- */}
      <motion.div {...floatingAnimation(6, -30, 20, 5)} className="absolute top-[15%] left-[8%] text-7xl opacity-90 z-0 drop-shadow-xl select-none">
        ⛵
      </motion.div>
      <motion.div {...floatingAnimation(5, -20, -10, 10)} className="absolute top-[35%] right-[15%] text-6xl opacity-90 z-0 drop-shadow-xl select-none">
        🦀
      </motion.div>
      <motion.div {...floatingAnimation(8, -40, 30, 0)} className="absolute top-[55%] left-[12%] text-8xl opacity-60 z-0 drop-shadow-2xl select-none">
        🌊
      </motion.div>
      <motion.div {...floatingAnimation(4, -15, 10, 2)} className="absolute bottom-[25%] right-[8%] text-8xl opacity-80 z-0 drop-shadow-xl select-none">
        🌴
      </motion.div>
      <motion.div {...floatingAnimation(7, -25, -20, 8)} className="absolute bottom-[10%] left-[30%] text-6xl opacity-90 z-0 drop-shadow-xl select-none">
        🏴‍☠️
      </motion.div>
      <motion.div {...floatingAnimation(6, -10, 15, -5)} className="absolute top-[20%] right-[30%] text-5xl opacity-80 z-0 drop-shadow-xl select-none">
        📦
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 mt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="mb-24 flex flex-col items-center relative z-20"
        >
          <div className="bg-white/20 backdrop-blur-md border border-white/50 text-white px-8 py-2 text-xl font-bold rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] mb-4 tracking-widest uppercase">
            GRAND LINE
          </div>
          <h2 className="text-5xl sm:text-7xl font-black text-white uppercase tracking-widest text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
            JOURNEY LOG
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pt-10 pb-10">
          {/* Background Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-2 bg-white/20 -translate-x-1/2 rounded-full z-0"></div>
          
          {/* Animated Fill Track */}
          <motion.div 
            style={{ height: trackHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-2 bg-gradient-to-b from-[#FFE600] to-[#FF9D00] shadow-[0_0_15px_#FFE600] -translate-x-1/2 rounded-full z-0 origin-top"
          ></motion.div>

          {/* Experience Items */}
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative z-10 w-full flex flex-col md:flex-row items-center">
                
                {/* Center Node / Compass Marker */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="absolute left-6 md:left-1/2 w-14 h-14 bg-gradient-to-br from-white to-gray-200 border-4 border-[#382726] rounded-full -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(0,0,0,0.3)] flex items-center justify-center text-2xl"
                >
                  🧭
                </motion.div>
                 
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "pl-20 md:pl-0 md:pr-20 md:ml-0" : "pl-20 md:pl-20 md:ml-auto"}`}>
                  <ExperienceCard exp={exp} index={index} />
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BOTTOM HIGH QUALITY WAVE DIVIDER --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-[80px] sm:h-[150px] block">
          <path fill="#0F172A" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,202.7C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#1E293B" fillOpacity="0.5" d="M0,256L48,229.3C96,203,192,149,288,149.3C384,149,480,203,576,213.3C672,224,768,192,864,181.3C960,171,1056,181,1152,197.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

    </section>
  );
}
