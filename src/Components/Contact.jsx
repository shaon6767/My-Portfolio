import React from "react";
import { FiMail, FiMapPin, FiSend, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const inputBase = "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-950 dark:text-white placeholder-gray-950 dark:placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 outline-none";

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <div className="relative inline-block group">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-950 dark:text-white pb-2">
              Let's Connect
            </h2>
            <span className="absolute bottom-0 right-0 h-[3px] w-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-950 dark:text-white">Email Me</h4>
                  <p className="text-gray-600 dark:text-gray-400">Chowdhuryshaon70@gmail.com</p>
                </div>
              </div>


              <div className="flex items-start gap-5">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-950 dark:text-white">Call Me</h4>
                  <p className="text-gray-600 dark:text-gray-400">+880 1620500105</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-950 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Social Profiles</h4>
              <div className="flex gap-4">
                {[
                  { Icon: FaFacebookF, link: "#", color: "hover:text-blue-600" },
                  { Icon: FaInstagram, link: "#", color: "hover:text-pink-600" },
                  { Icon: FaLinkedin, link: "#", color: "hover:text-blue-700" },
                  { Icon: FaGithub, link: "#", color: "hover:text-gray-950 dark:hover:text-white" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    className={`p-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color} hover:border-current`}
                  >
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Full Name" className={inputBase} />
              <input type="email" placeholder="Email Address" className={inputBase} />
            </div>
            <input type="text" placeholder="Subject" className={inputBase} />
            <textarea placeholder="Tell me about your project..." rows="5" className={inputBase}></textarea>
            
            <button className="flex items-center justify-center gap-2 w-full md:w-fit px-10 py-4 bg-gray-950 dark:bg-white cursor-pointer text-white dark:text-gray-950 font-bold rounded-xl hover:opacity-90 transition-all active:scale-95">
              Send Message <FiSend className="w-4 h-4" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;