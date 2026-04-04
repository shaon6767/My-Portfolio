import About from "./Components/About"
import Banner from "./Components/Banner"
import Contact from "./Components/Contact"
import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Slider from "./Components/Slider"
import { ThemeProvider } from "./context/ThemeContext"

const App = () => {
  return (
    <ThemeProvider>
      <div className="font-inter text-gray-900 dark:text-white  bg-white dark:bg-black transition-colors duration-300">
        <>
          <Navbar />
          <Banner />
          <Slider />
          <Features />
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </>
      </div>
    </ThemeProvider>
  )
}

export default App