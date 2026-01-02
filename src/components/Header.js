import React, { useState, useEffect } from "https://esm.sh/react@18";
import { motion } from "https://esm.sh/framer-motion";
import htm from "https://esm.sh/htm";

import Logo from "./Logo.js";

const html = htm.bind(React.createElement);

export default function Header({ onNavigateToPricing, onNavigateToHome }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (href, e) => {
    e.preventDefault();

    if (href === "pricing" && onNavigateToPricing) {
      onNavigateToPricing();
      return;
    }

    if (onNavigateToHome && href !== "pricing") {
      onNavigateToHome();
      setTimeout(() => {
        const id = href.startsWith("#") ? href.slice(1) : href;
        smoothScrollToSection(id);
      }, 100);
      return;
    }

    const id = href.startsWith("#") ? href.slice(1) : href;
    smoothScrollToSection(id);
  };

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Our Services", href: "why-choose-us" },
    { name: "Our Team", href: "team" },
    { name: "Our Projects", href: "projects" },
    { name: "Pricing", href: "pricing" },
    { name: "Contact Us", href: "contact" },
  ];

  return html`
    <${motion.header}
      initial=${{ y: -100 }}
      animate=${{ y: 0 }}
      transition=${{ duration: 0.6, ease: "easeOut" }}
      className=${`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative flex items-center justify-center h-20 pl-8 sm:pl-12 lg:pl-40">
          <div className="flex items-center gap-10">
            <div className="flex items-center">
              <${Logo}
                horizontal=${true}
                size="default"
                showAgency=${false}
              />
            </div>

            <div className="hidden md:flex items-center gap-10">
              ${navItems.map(
                (item, index) => html`
                  <${motion.button}
                    key=${item.name}
                    onClick=${(e) => handleNavClick(item.href, e)}
                    initial=${{ opacity: 0, y: -20 }}
                    animate=${{ opacity: 1, y: 0 }}
                    transition=${{ delay: index * 0.1 + 0.3 }}
                    className="px-6 py-2 rounded-lg text-2xl font-medium text-gray-300 hover:text-white transition-all duration-200 relative whitespace-nowrap hover:border-b-2 hover:border-cyan-400 bg-transparent border-none cursor-pointer"
                  >
                    ${item.name}
                  </${motion.button}>
                `
              )}
            </div>
          </div>

          <button
            onClick=${() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="absolute right-4 md:hidden p-2 rounded-lg transition-colors text-white hover:bg-purple-500/20"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              ${
                isMobileMenuOpen
                  ? html`<path d="M6 18L18 6M6 6l12 12" />`
                  : html`<path d="M4 6h16M4 12h16M4 18h16" />`
              }
            </svg>
          </button>
        </div>

        ${
          isMobileMenuOpen &&
          html`
            <${motion.div}
              initial=${{ opacity: 0, height: 0 }}
              animate=${{ opacity: 1, height: "auto" }}
              className="md:hidden py-4 border-t border-gray-800/50"
            >
              ${navItems.map(
                (item) => html`
                  <button
                    key=${item.name}
                    onClick=${(e) => {
                      handleNavClick(item.href, e);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:bg-purple-500/20 hover:text-white transition-all bg-transparent border-none cursor-pointer text-center w-full"
                  >
                    ${item.name}
                  </button>
                `
              )}
            </${motion.div}>
          `
        }
      </nav>
    </${motion.header}>
  `;
}
