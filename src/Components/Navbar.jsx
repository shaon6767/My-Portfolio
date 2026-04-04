import { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-[24px] font-extrabold text-gray-950 dark:text-white">Shawon</span>
            <span className="text-blue-500 dark:text-green-500 text-2xl ml-1">●</span>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative py-1 text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500 transition-colors duration-300 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-green-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="text-xl text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors"
            >
              {isDarkMode ? <FiSun /> : <IoMoon />}
            </button>

            <button 
              className="p-2 md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </nav>
        
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-64 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 dark:text-gray-300 hover:text-green-500 font-medium transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;