const Banner = () => {
  return (
    <section id="banner" className="min-h-screen bg-white dark:bg-gray-950 flex items-center pt-20 relative overflow-hidden">
    <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">
                The <span className="bg-linear-to-r from-blue-700 via-purple-600 to-blue-400 bg-clip-text text-transparent">React Developer</span> For The Web
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">Creating <strong>high-quality web applications</strong> with modern tools and best practices for exceptional user experience</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"><a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 shadow-blue-200/20 dark:shadow-blue-700/10 cursor-pointer"> View Projects</a>
            <a href="#contact" className="px-8 py-3 bg-white dark:bg-black/80 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-white transition-colors ">Learn More</a></div>
        </div>
    </div>
    </section>
  )
}

export default Banner