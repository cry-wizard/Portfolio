import React, { useState } from "react";

const projects = [
  {
  title: "Finance Tracker App",
  description:
    "📱 Mobile App + 🖥 Backend API — A clean, efficient solution to track income and expenses, featuring authentication, charts, and secure data storage.",
  image: "/Project1.png",
  techs: [
    "Expo",
    "React Native",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Clerk",
    "Redis",
    "Upstash",
    "Tailwind CSS",
    "Cron Jobs",
    "GitHub",
  ],
  features: [
    "✅ Add, edit, delete, and categorize income & expenses.",
    "🔐 Secure user auth with Clerk (frontend & backend integration).",
    "📊 Visualize spending with charts and breakdowns.",
    "☁️ Backend powered by Express.js + PostgreSQL (NeonDB).",
    "🚀 Rate limiting and background tasks via Upstash Redis & Cron.",
    "📱 Built with Expo Router for scalable navigation structure.",
  ],
  link: "https://github.com/cry-wizard/Finance_tracker-App",
},
  {
    title: "Report It App",
    description:
      "📱 A mobile app for reporting incidents with media, GPS, and real-time tracking. Built with Expo, Clerk authentication, TensorFlow.js, and MongoDB backend.",
    image: "/Project2.png",
    techs: [
      "Expo",
      "React Native",
      "Clerk",
      "MongoDB",
      "Node.js",
      "TensorFlow.js",
      "Cloudinary",
      "Tailwind CSS",
      "React Navigation",
      "Expo Camera",
      "Expo Maps",
      "Redis",
    ],
    features: [
      "✅ Capture and report incidents with image, video, and location.",
      "📍 Real-time map view using Expo Maps.",
      "🔐 Clerk-powered authentication and role-based access.",
      "🧠 TensorFlow.js model integration for smart classification.",
      "☁️ Cloud storage via Cloudinary.",
      "🔔 Push notifications and reminders (via Redis + Cron).",
    ],
    link: "https://github.com/cry-wizard/Report-It-App",
  },
  {
  title: "X‑Clone App",
  description:
    "📱 A mobile social feed app inspired by X (formerly Twitter) — built with React Native (Expo), full backend API, media uploads and real‑time feed mechanics.",
  image: "/Project3.png",
  techs: [
    "Expo",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Cloudinary",
    "Tailwind CSS / NativeWind",
    "React Query",
    "Axios",
    "Clerk",
    "GitHub",
  ],
  features: [
    "✅ User authentication and profiles (via Clerk).",
    "🖼️ Media upload (images/videos) integrated with Cloudinary.",
    "🔄 Real‑time feed and posts (like X/Twitter style).",
    "📬 Follow/unfollow users, like/comment posts.",
    "📲 Use of React Query and Axios for efficient data fetching & caching.",
  ],
  link: "https://github.com/burakorkmez/x‑clone‑rn",  
}
];

const Project = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto"
    >
      <div className="text-center mb-8 sm:mb-12" data-animate="up">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 text-white"
          style={{
            WebkitTextStroke: "2px black",
            color: "white",
          }}
        >
          PROJECTS
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-light">
          Showcasing my work with a retro game twist ⚡
        </p>
      </div>

      <div
        className="border-4 border-black bg-white rounded-3xl overflow-hidden"
        data-animate="up"
        data-hover="true"
      >
        {/* Window Header */}
        <div className="bg-yellow-200 border-b-4 border-black px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-5">
          <div className="flex gap-2">
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-red-500 border-2 border-black rounded-full" />
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-yellow-500 border-2 border-black rounded-full" />
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-green-500 border-2 border-black rounded-full" />
          </div>
          <span className="font-bold text-xs sm:text-sm">
            RETRO PROJECT WINDOW
          </span>
          <div className="ml-auto">
            <span className="font-mono text-xs text-gray-700 hidden sm:inline">
              arrow keys • click here
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Image */}
          <div
            className="border-4 border-black bg-yellow-100 rounded-2xl h-48 sm:h-64 flex items-center justify-center overflow-hidden"
            data-animate="left"
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-3 sm:space-y-4" data-animate="right">
            <h3 className="text-2xl sm:text-3xl font-black text-orange-500">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <div
                  key={tech}
                  className="border-2 border-black px-2 sm:px-3 py-1 bg-white font-bold text-xs sm:text-sm rounded hover:scale-110 transform transition"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t-2 border-black pt-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm"
                >
                  <span className="text-lg">■</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-bold py-2 px-3 sm:px-4 border-2 border-black rounded transition hover:scale-105 active:scale-95 text-xs sm:text-sm"
              >
                VIEW PROJECT <span>📂</span>
              </a>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-yellow-200 border-t-4 border-black px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={prevProject}
              className="border-2 border-black px-2 sm:px-3 py-1 bg-white font-bold text-xs sm:text-sm hover:bg-gray-100 transition cursor-pointer hover:scale-105 active:scale-95"
            >
              ◀ PREV
            </button>
            <button
              onClick={nextProject}
              className="border-2 border-black px-2 sm:px-3 py-1 bg-white font-bold text-xs sm:text-sm hover:bg-gray-100 transition cursor-pointer hover:scale-105 active:scale-95"
            >
              NEXT ▶
            </button>
          </div>
          <div className="flex gap-2">
            {projects.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 sm:w-3 h-2 sm:h-3 border-2 border-black rounded-full ${
                  idx === currentProject ? "bg-black" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
