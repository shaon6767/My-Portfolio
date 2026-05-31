import React from "react";
import me from "../assets/me.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed"> I'm a frontend developer focused on crafting clean and user-friendly experinece. 
          </p>
          <p className="text-lg mt-8 text-gray-800 dark:text-gray-400 leading-relaxed">
            I build responsive websites that are fast, easy to use and follow best coding practices. My expertise includes HTML, CSS, JavaScript, React, Next.js, Tailwind CSS to create dynamic, engaging interfaces with clean and optimized code.
          </p>
          
          <div className="pt-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 shadow-blue-200/20 dark:shadow-blue-700/10 cursor-pointer">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full dark:blur-3xl opacity-0 dark:opacity-30 dark:group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-full shadow-2xl">
              <img
                src={me}
                alt="Your Name"
                className="rounded-full w-58 h-48 md:w-74 md:h-74 object-cover object-left "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;