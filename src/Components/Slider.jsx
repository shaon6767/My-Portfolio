import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const techs = [
  {
    name: "HTML",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-200 dark:border-orange-800",
    text: "text-gray-700 dark:text-orange-300",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-gray-700 dark:text-blue-300",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-yellow-200 dark:border-yellow-800",
    text: "text-gray-700 dark:text-yellow-300",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    border: "border-cyan-200 dark:border-cyan-800",
    text: "text-gray-700 dark:text-cyan-300",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    bg: "bg-gray-100 dark:bg-gray-800",
    border: "border-gray-300 dark:border-gray-700",
    text: "text-gray-700 dark:text-gray-300",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    border: "border-teal-200 dark:border-teal-800",
    text: "text-gray-700 dark:text-teal-300",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const Slider = () => {
  return (
    <div className="w-full py-5 -mt-18 md:-mt-26"> 
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
        freeMode={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        className="flex items-center"
      >
        {techs.map((tech) => (
          <SwiperSlide key={tech.name} className="flex justify-center">
            <div
              className={`${tech.bg} ${tech.border} border-2 rounded-2xl p-6 w-full flex flex-col items-center gap-3 transition-all duration-300 dark:shadow-lg dark:shadow-black/20`}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 md:w-16 md:h-16 object-contain dark:brightness-90"
              />
              <p className={`text-xs md:text-sm font-bold uppercase tracking-wider ${tech.text}`}>
                {tech.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
};

export default Slider;