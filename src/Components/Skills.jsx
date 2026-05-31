import React from "react";

const skills = [
  { name: "JavaScript", color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", color: "bg-cyan-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", color: "bg-gray-800 dark:bg-white", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", color: "bg-teal-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Docker", color: "bg-blue-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "GitHub", color: "bg-gray-800 dark:bg-white", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const Skills = () => {
  return (
    <section id="Skills" className="py-16 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Technologies and tools that I use to bring products to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/40 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${skill.color} w-full transition-all duration-700 ease-in-out group-hover:opacity-80`}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;