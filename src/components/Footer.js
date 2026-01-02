import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Github, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { FaXTwitter, FaDiscord } from 'react-icons/fa6';

const Footer = ({ onNavigateToPricing }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Our Projects', href: '#projects' },
      { name: 'Our Pricing', href: 'pricing' },
    ],
    services: [
      { name: 'Discord Setup', href: '#services' },
      { name: 'Server Management', href: '#services' },
      { name: 'Bot Development', href: '#services' },
      { name: 'Custom Solutions', href: '#services' },
    ],
    // support: [
    //   { name: 'Contact Us', href: '#contact' },
    //   { name: 'Pricing', href: '#pricing' },
    //   { name: 'Documentation', href: '#docs' },
    //   { name: 'Help Center', href: '#help' },
    // ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: FaXTwitter, href: 'https://x.com/modfluxagency', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/modfluxagency', color: 'hover:text-pink-400' },
    { name: 'Telegram', icon: Send, href: 'https://t.me/modfluxagency_official', color: 'hover:text-blue-400' },
    { name: 'Discord', icon: FaDiscord, href: '#', color: 'hover:text-gray-300' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="relative bg-black border-t border-gray-800/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black/50 to-cyan-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.05),transparent_60%)]" />
      <div className="!ml-12 !mr-12 !lg:ml-16 !lg:mr-16 !xl:ml-20 !xl:mr-20">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  ModFlux Agency
                </h3>
                {/* <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                We specialize in creating exceptional Discord experiences. From server setup to advanced automation,
                we build high-quality communities that engage and grow.
              </p> */}
              </div>
              <br></br>
              {/* Contact Info */}
              <div className="space-y-3 mb-6 ">
                <div className="flex items-center text-gray-300 text-sm gap-2">
                  <Mail className="w-4 h-4 mr-3 text-purple-400" />
                  <span>contact@modfluxagency.com</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm gap-2">
                  <Phone className="w-4 h-4 mr-3 text-purple-400" />
                  <span>+919769559189</span>
                </div>
                {/* <div className="flex items-center text-gray-300 text-sm gap-2">
                <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                <span>Digital Services Worldwide</span>
              </div> */}
              </div>
              <br></br>
              {/* Social Links */}
              <div className="flex items-center gap-5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:bg-gray-700/50`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => link.name === 'Our Pricing' && onNavigateToPricing ? onNavigateToPricing() : scrollToSection(link.href.substring(1))}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support Links - Mobile Layout */}
          {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:hidden mt-8 pt-8 border-t border-gray-800/50"
        >
          <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
          <div className="grid grid-cols-2 gap-4">
            {footerLinks.support.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div> */}

          <br></br>
          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2020-{currentYear} ModFlux Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">

              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
