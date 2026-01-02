import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import fxImage from "../assets/fx.webp";
import tp from "../assets/fa.webp";
import fa from "../assets/TradersParadise.webp";
import fx from "../assets/p2p.webp";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const servers = [
    {
      id: 1,
    
      image: fa,
      link: "https://discord.gg/tradersparadise"
    },
    {
      id: 2,
   
      image: tp,
      link: " https://discord.gg/ajfx"
    },
    {
      id: 3,
    
      image: fxImage,
      link: "https://discord.gg/fxnation"
    },
    {
      id: 4,
     
      image: fx,
      link: "https://discord.gg/eTSeqmkXTr"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === servers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servers.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 -mt-32 py-20 px-12 lg:px-16 xl:px-20">

      {/* Top fade effect - blends with hero section */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/50 to-transparent z-10" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(100, 116, 139, 0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(71, 85, 105, 0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgb(0, 0, 0),transparent_80%)]" />

      <div className="relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our {' '}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <br />
          <p className="mt-6 text-2xl sm:text-lg md:text-2xl text-gray-300 leading-relaxed bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            "Discover the Discord communities we've built and transformed."</p>
        </motion.div>
        <br></br> 
        <br></br>

        {/* Discord Preview Carousel */}
        <div className="!ml-12 !mr-12 !lg:ml-16 !lg:mr-16 !xl:ml-20 !xl:mr-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Carousel Container */}
            <div className="relative overflow-hidden">
              <div className="relative h-[500px] flex items-center justify-center">
                {/* Previous Card (Blurred) - Hidden on Mobile */}
                {(() => {
                  const prevIndex = currentIndex === 0 ? servers.length - 1 : currentIndex - 1;
                  return (
                    <motion.div
                      className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 opacity-60 scale-75 blur-sm pointer-events-none"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 0.6 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.a
                        href={servers[prevIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block cursor-pointer"
                      >
                        <motion.img
                          src={servers[prevIndex].image}
                          alt={servers[prevIndex].name}
                          width="200"
                          height="250"
                          className="rounded-lg shadow-md mx-auto"
                        />
                      </motion.a>
                    </motion.div>
                  );
                })()}

                {/* Current Card (Clear) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.a
                        href={servers[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.img
                          src={servers[currentIndex].image}
                          alt={servers[currentIndex].name}
                          width="315"
                          height="400"
                          className="rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 mx-auto"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        />
                      </motion.a>
                      <motion.div
                        className="mt-6 text-white"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {/* Desktop Slide Name */}
                        <h3 className="hidden md:block text-2xl font-bold mb-2">{servers[currentIndex].name}</h3>
                        <p className="text-gray-300 max-w-md mx-auto mb-4">{servers[currentIndex].description}</p>

                        {/* Join Server Button */}
                   
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Next Card (Blurred) - Hidden on Mobile */}
                {(() => {
                  const nextIndex = currentIndex === servers.length - 1 ? 0 : currentIndex + 1;
                  return (
                    <motion.div
                      className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 opacity-60 scale-75 blur-sm pointer-events-none"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 0.6 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.a
                        href={servers[nextIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block cursor-pointer"
                      >
                        <motion.img
                          src={servers[nextIndex].image}
                          alt={servers[nextIndex].name}
                          width="200"
                          height="250"
                          className="rounded-lg shadow-md mx-auto"
                        />
                      </motion.a>
                    </motion.div>
                  );
                })()}
              </div>
      
              {/* Navigation Arrows - Desktop */}
              <button
                onClick={prevSlide}
                className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm hover:scale-110 z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm hover:scale-110 z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dot Indicators */}
            {/* <div className="flex justify-center space-x-3 mt-8">
              {servers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-purple-500 scale-125 shadow-lg shadow-purple-500/50'
                      : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
                  }`}
                />
              ))}
            </div> */}

            {/* Slide Counter */}
            <div className="text-center mt-4">
              <span className="text-gray-400 text-sm">
                {currentIndex + 1} / {servers.length}
              </span>
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="md:hidden flex justify-center items-center gap-6 mt-6 relative z-20">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-purple-600/80 hover:bg-purple-600 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg relative z-30"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-purple-600/80 hover:bg-purple-600 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg relative z-30"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

    </section>
  );
};

export default Projects;
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Users, MessageSquare, Bot, Shield, Star, ChevronLeft, ChevronRight } from 'lucide-react';
// import tp from '../assets/tp.png';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       name: "Traders Paradise Discord Server",
//       description: "A vibrant Discord server for gamers featuring automated matchmaking, tournament management, and community-driven events.",
//       image: tp,
//       members: "15,000+",
//       features: ["Auto Matchmaking", "Tournament System", "Voice Channels", "Custom Bots"],
//       category: "Trading",
//       rating: 4.9,
//       color: "from-purple-500 to-pink-500"
//     },
//    {
//         id: 1,
//         name: "Trading Community Hub",
//         description: "A vibrant Discord server for gamers featuring automated matchmaking, tournament management, and community-driven events.",
//         image: tp,
//         members: "15,000+",
//         features: ["Auto Matchmaking", "Tournament System", "Voice Channels", "Custom Bots"],
//         category: "Gaming",
//         rating: 4.9,
//         color: "from-purple-500 to-pink-500"
//       }
//   ];

//   return (
//     <section id="projects" className="relative min-h-screen  bg-gradient-to-b from-gray-900 via-black to-gray-900 -mt-32 py-20 px-12 lg:px-16 xl:px-20">
//       <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/50 to-transparent z-10" />

//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1),transparent_70%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.1),transparent_70%)]" />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
//           >
//             Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
//           </motion.h2>
// <br></br> 
//         </motion.div>
//         </div>
//         <div className="!ml-12 !mr-12 !lg:ml-16 !lg:mr-16 !xl:ml-20 !xl:mr-20">
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-8"
//           >
//             <motion.a
//               href="#projects"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-10 min-h-[45px] text-white text-2xl font-semibold shadow-2xl transition-all duration-200 hover:from-purple-500 hover:to-cyan-500 min-w-[150px]"
//             >
//              See Discord Servers We've Built!
//             </motion.a>
//                                                                                                 </motion.div>
//         </div>
//         <div className="!ml-12 !mr-12 !lg:ml-16 !lg:mr-16 !xl:ml-20 !xl:mr-20">

//         {/* Projects Carousel */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           viewport={{ once: true }}
//           className="relative"
//         >
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             centeredSlides={true}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             navigation={{
//               nextEl: '.swiper-button-next-custom',
//               prevEl: '.swiper-button-prev-custom',
//             }}
//             className="pb-16"
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 1,
//                 spaceBetween: 30,
//               },
//               1024: {
//                 slidesPerView: 1,
//                 spaceBetween: 40,
//               },
//             }}
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={project.id}>
//                 <div className="flex justify-center">
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 w-full max-w-2xl"
//                   >
//                   {/* Project Image */}
//                   <div className="relative h-72 sm:h-80 overflow-hidden" style={{ aspectRatio: '1813/873' }}>
//                     <div
//                       className="absolute inset-0 bg-cover bg-center"
//                       style={{
//                         backgroundImage: `url(${project.image})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center'
//                       }}
//                     />
//                     <br></br>
//                     <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`} />

//                     {/* Category Badge */}
//                     <div className="absolute top-4 left-4">
//                       <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-gray-600/50">
//                         {project.category}
//                       </span>
//                     </div>

//                     {/* Rating */}
//                     <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-600/50">
//                       <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                       <span className="text-white text-sm font-medium">{project.rating}</span>
//                     </div>
//                   </div>
//                   <br></br>
//                   {/* Project Content */}
//                   <div className="p-6 sm:p-8">
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.name}</h3>
//                       {/* <div className="flex items-center gap-2 text-gray-400">
//                         <Users className="w-5 h-5" />
//                         <span className="text-sm font-medium">{project.members}</span>
//                       </div> */}
//                     </div>
//                     <br></br>
//                     <p className="text-gray-300 text-lg mb-6 leading-relaxed">
//                       {project.description}
//                     </p>
//                     <br></br>
//                     {/* Features */}
//                     {/* <div className="mb-6">
//                       <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
//                         <Bot className="w-5 h-5 text-purple-400" />
//                         Key Features
//                       </h4>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                         {project.features.map((feature, featureIndex) => (
//                           <div
//                             key={featureIndex}
//                             className="flex items-center gap-2 text-gray-300 text-sm"
//                           >
//                             <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex-shrink-0" />
//                             {feature}
//                           </div>
//                         ))}
//                       </div>
//                     </div> */}
//                     <br></br>
//                     {/* CTA Button */}
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
//                     >
//                       View Server Details
//                     </motion.button>
//                   </div>
//                   </motion.div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm border border-gray-600/50 rounded-full p-3 text-white hover:bg-purple-600/50 transition-all duration-200">
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm border border-gray-600/50 rounded-full p-3 text-white hover:bg-purple-600/50 transition-all duration-200">
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </motion.div>

//         {/* Stats Section */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
//         >
//           <div>
//             <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
//               50+
//             </div>
//             <div className="text-gray-400 text-sm sm:text-base">Servers Built</div>
//           </div>
//           <div>
//             <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
//               100K+
//             </div>
//             <div className="text-gray-400 text-sm sm:text-base">Active Members</div>
//           </div>
//           <div>
//             <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
//               99%
//             </div>
//             <div className="text-gray-400 text-sm sm:text-base">Uptime</div>
//           </div>
//           <div>
//             <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
//               24/7
//             </div>
//             <div className="text-gray-400 text-sm sm:text-base">Support</div>
//           </div>
//         </motion.div> */}
//       </div>
//     </section>
//   );
// };

// export default Projects;