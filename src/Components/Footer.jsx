import React from "react";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-8 px-6 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center">
            <span className="text-xl font-extrabold text-gray-950 dark:text-white transition-colors">Shawon</span>
            <span className="text-blue-500 dark:text-green-500 text-xl ml-1">●</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Footer Navigation (Replaced Freelance Pill) */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Back to Top */}
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
        >
          Back to top 
          <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-900 group-hover:-translate-y-1 transition-transform duration-300">
            <FiArrowUp className="w-4 h-4" />
          </div>
        </button>

      </div>
    </footer>
  );
};

export default Footer;