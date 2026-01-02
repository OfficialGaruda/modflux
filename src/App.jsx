import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
// import Reviews from './components/Reviews';
function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'pricing'
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Navigation functions
  const navigateToPricing = () => {
    setCurrentPage('pricing');
    // Scroll to top will be handled by Pricing component
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    // Scroll to top when returning to home
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);


  // Render pricing page
  if (currentPage === 'pricing') {
    return <Pricing onBackToHome={navigateToHome} />;
  }

  // Render landing page
  return (
    <div ref={containerRef} className="relative">
      <Header onNavigateToPricing={navigateToPricing} />

      {/* Hero Section with Parallax */}
      <section
        id="home"
        // className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        className="relative min-h-[93vh] flex items-center justify-center overflow-hidden bg-black" //uncomment to increase height of the herosection
      >
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          {/* Background Image - Replace with your own image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              // backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')`,
              // backgroundImage: `url('https://images.unsplash.com/photo-1492573637402-25691cd9eac2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              // backgroundImage: `url('https://images.unsplash.com/photo-1502921935-be74c0dc50fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              //backgroundImage: `url('https://images.unsplash.com/photo-1679057001914-59ab4131dfff?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              backgroundImage: `url('https://images.unsplash.com/photo-1636487658623-eb8f5ae60770?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              // Alternative: Use a local image by placing it in public folder and using:
              // backgroundImage: `url('/hero-bg.jpg')`,
            }}
          />

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Purple/Blue gradient overlay for brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/50 to-cyan-900/20" />

          {/* Radial glow effects for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(28, 32, 32, 0.2),transparent_60%)]" />

          {/* Subtle animated glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15),transparent_70%)]"
          />
        </motion.div>

        {/* Floating particles effect with cyan/blue tint */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => {
            const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
            const height = typeof window !== 'undefined' ? window.innerHeight : 1080;
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/30 rounded-full blur-sm"
                initial={{
                  x: Math.random() * width,
                  y: Math.random() * height,
                }}
                animate={{
                  y: [null, Math.random() * height],
                  x: [null, Math.random() * width],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            );
          })}
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
            style={{ textShadow: '0 0 30px rgba(147, 51, 234, 0.3)' }}
          >
            We’re here to build
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              best Discord servers.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-200 mb-16 max-w-4xl mx-auto drop-shadow-lg sm:whitespace-nowrap"
          >
            "From setup to automation — we build high-quality Discord experiences."
          </motion.p>
          <br></br>
          <br></br>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-10 min-h-[38px] bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full text-2xl font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-200 hover:from-purple-500 hover:to-cyan-500 min-w-[150px]"
            >
              Contact Us
            </motion.a>
            {/* <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-10 min-h-[45px] bg-white/5 backdrop-blur-md text-gray-200 rounded-full text-xl font-semibold border-2 border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-400/50 hover:text-white transition-all duration-200 max-w-[200px]"
            >
              View Our Work
            </motion.a> */}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div> */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
      </section>

      {/* Placeholder sections for future pages */}
      <WhyChooseUs />
      <Team />
      < Projects />

      <Contact />
      {/* <Reviews /> */}

      <Footer onNavigateToPricing={navigateToPricing} />

    </div>
  );
}

export default App;
