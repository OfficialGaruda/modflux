import { motion } from 'framer-motion';
import { Crown, Users, Shield, User, Github, Twitter, Linkedin, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import image4 from '../assets/image4.webp';
import image5 from '../assets/image5.webp';
import image6 from '../assets/image6.webp';


const Team = () => {
  const [showMore, setShowMore] = useState(false);

  const teamMembers = [
    {
      name: "SAM",
      role: "Founder CEO",
      description: "Responsible for all server operations, including major and minor decision-making. Reports directly to the Server Owners",
      avatar: image1,
      social: {
        github: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "WARRIOR",
      role: "Community Admin  Server Manager",
      description: "Handles all raid protection and anti-nuke security measures. Reports directly to SAM",
      avatar: image2,
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "ANSH ",
      role: "Community Server Admin Manager",
      description: " Manages all affiliate-related operations and tasks. Reports directly to SAM.",
      avatar: image3,
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "𝐀𝐆𝐀𝐒𝐓𝐘𝐀",
      role: "Community Server Manager",
      description: "Oversees all server-related management and organizational responsibilities. Reports directly to SAM.",
      avatar: image4,
      social: {
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "SHIKHA ",
      role: "Community Moderator",
      description: " Staff member responsible for chat moderation and handling girl-verification processes. Reports directly to Warrior, Ansh & Agastya.",
      avatar: image5,
      social: {
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "NANU",
      role: " Community Moderator",
      description: "Staff member assisting with ticket support and general moderation tasks. Reports directly to Ansh & Agastya.",
      avatar: image6,
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  const additionalMembers = [
    {
      name: "ALEX",
      role: "Technical Lead",
      description: "Leads technical development and oversees all coding projects and implementations.",
      avatar: image1,
      social: {
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "SARA",
      role: "Community Support",
      description: "Provides dedicated support to community members and handles user assistance requests.",
      avatar: image2,
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "MIKE",
      role: "Event Coordinator",
      description: "Organizes and manages community events, tournaments, and special activities.",
      avatar: image3,
      social: {
        twitter: "#"
      }
    }
  ];

  const visibleMembers = showMore ? [...teamMembers, ...additionalMembers] : teamMembers;

  return (
    <section id="team" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">

    {/* Top fade effect - blends with hero section */}
    <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/50 to-transparent z-10" />

    {/* Background effects */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(100, 116, 139, 0.15),transparent_70%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(71, 85, 105, 0.1),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30, 41, 59, 0.2),transparent_80%)]" />

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
         Meet Our {' '}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            Team
          </span>
        </h2>  
             {/* <h2 className="flex items-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
<span className="flex-grow border-t border-gray-300 "></span>

<span className="mx-4 bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
  Meet Our Team
</span>

<span className="flex-grow border-t border-gray-300"></span>
</h2> */}

        <br></br>
        <p className="mt-6 text-2xl sm:text-lg md:text-2xl text-gray-300 leading-relaxed  bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
        "Meet the team that is behind ModFlux Agency. Team of developers, designers, and community managers who create a better Discord community."</p>

      </motion.div>
      <br></br>
      <br   ></br>

      {/* Team Members Grid */}
      <div className="!ml-12 !mr-12 !lg:ml-16 !lg:mr-16 !xl:ml-20 !xl:mr-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className=" rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl">
                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>

                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 font-medium">{member.role}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                  {member.description}
                </p>

                {/* Social Links */}
                {/* <div className="flex justify-center space-x-4">
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      <Github size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      <Linkedin size={18} />
                    </a>
                  )}
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
<br></br>
        {/* Show More/Less Button */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-8"
          >
             <motion.a
               onClick={() => setShowMore(!showMore)}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-8 py-10 min-h-[38px] w-65 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-center rounded-full text-2xl font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-200 hover:from-purple-500 hover:to-cyan-500 min-w-[150px]"
             >
              {showMore ? 'Show Less Members' : 'Show More Members'}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade effect */}
             <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
             <br></br>

    </section>
  


  );
};

export default Team;
