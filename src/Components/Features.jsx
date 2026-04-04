import React from "react";
import { HiOutlineCodeBracketSquare, HiOutlineSparkles } from "react-icons/hi2";
import { TbDeviceMobileCheck, TbRocket } from "react-icons/tb";

const features = [
  {
    title: "Modern UI Design",
    description: "Creating beautiful,responsive interfaces that look great on any device using the latest design trends.",
    icon: <HiOutlineSparkles className="w-8 h-8 text-blue-500" />,
    bg: "bg-blue-50/50 dark:bg-blue-900/10",
    border: "border-blue-100 dark:border-blue-800",
  },
  {
    title: "Clean Code",
    description: "Writing maintainable, efficient code following best practices and modern development standards.",
    icon: <HiOutlineCodeBracketSquare className="w-8 h-8 text-emerald-500" />,
    bg: "bg-emerald-50/50 dark:bg-emerald-900/10",
    border: "border-emerald-100 dark:border-emerald-800",
  },
  {
    title: "Performance Optimization",
    description: "Ensuring fast load times and smooth experiences through efficient code and asset optimization.",
    icon: <TbRocket className="w-8 h-8 text-amber-500" />,
    bg: "bg-amber-50/50 dark:bg-amber-900/10",
    border: "border-amber-100 dark:border-amber-800",
  },
  {
    title: "Responsive Development",
    description: "Building websites that work flawlessly across all screen sizes, from phones to large displays.",
    icon: <TbDeviceMobileCheck className="w-8 h-8 text-purple-500" />,
    bg: "bg-purple-50/50 dark:bg-purple-900/10",
    border: "border-purple-100 dark:border-purple-800",
  },
];

const Features = () => {
  return (
    <section className="py-16 pt-26 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            What's in my Toolkit?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything needed to build great products on the web.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl border ${feature.border} ${feature.bg} 
                transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 
                dark:hover:shadow-none hover:-translate-y-2`}
            >
              <div className="mb-6 p-3 inline-block rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-inherit transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;