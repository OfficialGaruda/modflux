import React, { useEffect, useRef, useState } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18/client";
import { motion, useScroll, useTransform } from "https://esm.sh/framer-motion";
import htm from "https://esm.sh/htm";

import Header from "./components/Header.js";
import WhyChooseUs from "./components/WhyChooseUs.js";
import Team from "./components/Team.js";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects.js";
import Pricing from "./components/Pricing.js";
import Footer from "./components/Footer.js";

const html = htm.bind(React.createElement);

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const navigateToPricing = () => setCurrentPage("pricing");
  const navigateToHome = () => {
    setCurrentPage("home");
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  if (currentPage === "pricing") {
    return html`<${Pricing} onBackToHome=${navigateToHome} />`;
  }

  return html`
    <div ref=${containerRef} className="relative">
      <${Header} onNavigateToPricing=${navigateToPricing} />

      <section
        id="home"
        className="relative min-h-[93vh] flex items-center justify-center overflow-hidden bg-black"
      >
        <${motion.div}
          style=${{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style=${{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1636487658623-eb8f5ae60770?q=80&w=1172&auto=format&fit=crop')",
            }}
          ></div>

          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/50 to-cyan-900/20"></div>

          <${motion.div}
            animate=${{ opacity: [0.3, 0.5, 0.3] }}
            transition=${{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15),transparent_70%)]"
          />
        </${motion.div}>

        <${motion.div}
          initial=${{ opacity: 0, y: 30 }}
          animate=${{ opacity: 1, y: 0 }}
          transition=${{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <${motion.h1}
            initial=${{ opacity: 0, y: 20 }}
            animate=${{ opacity: 1, y: 0 }}
            transition=${{ duration: 0.8, delay: 0.4 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
          >
            We’re here to build<br />
            <span
              className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              best Discord servers.
            </span>
          </${motion.h1}>

          <${motion.p}
            initial=${{ opacity: 0, y: 20 }}
            animate=${{ opacity: 1, y: 0 }}
            transition=${{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-200 mb-16"
          >
            "From setup to automation — we build high-quality Discord
            experiences."
          </${motion.p}>

          <${motion.a}
            href="#contact"
            whileHover=${{ scale: 1.05 }}
            whileTap=${{ scale: 0.95 }}
            className="px-8 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full text-2xl font-semibold"
          >
            Contact Us
          </${motion.a}>
        </${motion.div}>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      <${WhyChooseUs} />
      <${Team} />
      <${Projects} />
      <${Contact} />
      <${Footer} onNavigateToPricing=${navigateToPricing} />
    </div>
  `;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(html`<${App} />`);
