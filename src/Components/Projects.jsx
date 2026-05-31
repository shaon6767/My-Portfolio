import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import pic from "../assets/up.JPG"
import picc from "../assets/upp.JPG"
import piccc from "../assets/uppp.JPG"

const projects = [
  {
    title: "AI Chatbot",
    description: "An AI chatbot that can interact and assist users with any business-related queries.",
    tech: ["Next.js", "Tailwind"],
    image: pic,
    github: "https://github.com/shaon6767/ChatBot",
    live: "https://agent-beta-seven.vercel.app/",
    gradient: "from-blue-500 to-cyan-400",
    borderTheme: "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white",
  },
  {
    title: "E-Commerce Website",
    description: "A modern e-commerce website with a clean UI and seamless shopping experience.",
    tech: ["React.js", "Tailwind", "Redux"],
    image: picc,
    github: "https://github.com/shaon6767/E-Commerce",
    live: "https://marvelous-raindrop-8e707f.netlify.app/",
    gradient: "from-purple-500 to-pink-400",
    borderTheme: "border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white",
  },
  {
    title: "Dashboard",
    description: "A demo dashboard for tracking key business numbers and metrics.",
    tech: ["TypeScript", "Next.js","Tailwind"],
    image: piccc,
    github: "https://github.com/shaon6767/Dashboard",
    live: "https://dashboard-wnog.vercel.app/",
    gradient: "from-emerald-500 to-teal-400",
    borderTheme: "border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white",
  },
];

const Projects = () => {
  const btnBase = "flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold border-2 transition-all duration-300 bg-white dark:bg-transparent";

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-950 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
           Check out some of my work.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)]">
              
              {/* Image Area */}
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-6 shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <div className="mb-4 relative inline-block w-fit">
                  <h3 className="text-xl font-bold tracking-tight text-gray-950 dark:text-white pb-1">
                    {project.title}
                  </h3>
                  <span className={`absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-r ${project.gradient} transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0`}></span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1 text-sm">
                  {project.description}
                </p>

                {/* Tech Tags - Removed Colors */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-[11px] font-semibold rounded-md border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                  <a href={project.live} className={`${btnBase} ${project.borderTheme}`}>
                    Live Demo <FiExternalLink className="w-4 h-4" />
                  </a>

                  <a href={project.github} className={`${btnBase} ${project.borderTheme}`}>
                    <FiGithub className="w-4 h-4" /> Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;