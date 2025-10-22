import React, { useState } from "react";

const skillTabs = [
  { key: "foundations", label: "Foundations", color: "bg-yellow-400" },
  { key: "frontend", label: "Frontend", color: "bg-green-400" },
  { key: "motion", label: "Motion & Scroll", color: "bg-pink-400" },
  { key: "build", label: "Build & Backend", color: "bg-blue-400" },
];

const skillContent = {
  foundations: {
    title: "FOUNDATIONS",
    equipment: ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "A11Y", "TESTING"],
    achievements: [
      "Semantic HTML with ARIA patterns and component tokens.",
      "CSS architecture with utility layering and theming.",
      "Typed pipelines with strict lint gates and CI checks.",
    ],
    level: 1,
    maxLevel: 4,
  },
  frontend: {
    title: "FRONTEND",
    equipment: ["React", "Next.js", "Tailwind", "Storybook"],
    achievements: ["Component-driven development", "Atomic Design Systems"],
    level: 2,
    maxLevel: 4,
  },
  motion: {
    title: "MOTION & SCROLL",
    equipment: ["Framer Motion", "ScrollTrigger", "GSAP"],
    achievements: ["Smooth animations", "Trigger-based effects"],
    level: 3,
    maxLevel: 4,
  },
  build: {
    title: "BUILD & BACKEND",
    equipment: ["Node.js", "Express", "CI/CD", "Testing"],
    achievements: ["API handling", "Automation with GitHub Actions"],
    level: 1,
    maxLevel: 4,
  },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("foundations");

  const { title, equipment, achievements, level, maxLevel } =
    skillContent[activeTab];

  return (
    <section className="bg-[#135F40] text-white min-h-screen px-6 sm:px-12 py-12 flex flex-col lg:flex-row gap-8">
      {/* Left Tabs */}
      <div className="lg:w-1/5 flex flex-col gap-4">
        {skillTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`py-4 px-4 text-left rounded-lg font-semibold transition-all border
              ${
                activeTab === tab.key
                  ? `${tab.color} text-black scale-105 shadow-lg`
                  : "bg-[#0F4A34] hover:bg-yellow-300 hover:text-black"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Panel */}
      <div className="lg:w-3/5 bg-[#0F4A34] p-6 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-yellow-300">{title}</h2>

        {/* Equipment */}
        <div className="flex flex-wrap gap-3 mb-6">
          {equipment.map((item, index) => (
            <span
              key={index}
              className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl mb-4 text-white font-bold">Achievements Unlocked</h3>
          <ul className="space-y-2">
            {achievements.map((ach, idx) => (
              <li
                key={idx}
                className="bg-[#194D39] p-4 rounded-lg border border-[#2F7F5C]"
              >
                {ach}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Progress Panel */}
      <div className="lg:w-1/5 bg-[#0F4A34] p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-6 text-white">Progress</h3>
        {skillTabs.map((tab) => {
          const levelData = skillContent[tab.key];
          const percent = (levelData.level / levelData.maxLevel) * 100;
          return (
            <div key={tab.key} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{tab.label}</span>
                <span className="text-sm">{levelData.level} / {levelData.maxLevel}</span>
              </div>
              <div className="w-full h-3 bg-[#194D39] rounded-full">
                <div
                  className={`h-full rounded-full ${tab.color}`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
