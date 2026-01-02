import { motion } from 'framer-motion';
import { Shield, Clock, Users, Zap, Award, Headphones, Target, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Expert Moderation",
      description: "Professional moderation team ensuring a safe and positive community environment with 24/7 oversight."
    },
    {
      icon: Clock,
      title: "Fast Setup",
      description: "Quick server setup and configuration within 24 hours of order, getting your community running instantly."
    },
    {
      icon: Users,
      title: "Community Growth",
      description: "Proven strategies to grow your Discord server with targeted marketing and engagement techniques."
    },
    {
      icon: Zap,
      title: "Custom Bots",
      description: "Tailored Discord bots built specifically for your server's needs, from moderation to entertainment."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful server management with hundreds of satisfied clients and growing communities."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to handle any issues or questions that may arise."
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Personalized Discord solutions designed around your specific community goals and requirements."
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Detailed analytics and insights to track server growth and member engagement metrics."
    }
  ];

  return (
    <section id="why-choose-us" className="relative min-h-[87vh] bg-gradient-to-b from-gray-900 via-black to-gray-900 -mt-32 py-20 px-12 lg:px-16 xl:px-20">

      {/* Top fade effect - blends with hero section */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/50 to-transparent z-10" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(67, 12, 219, 0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(12, 203, 236, 0.1),transparent_60%)]" />

      <div className="relative z-20 px-12 lg:px-16 xl:px-20">
        {/* Header */}
      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Us?
            </span>
          </h2>  
               {/* <h2 className="flex items-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
  <span className="flex-grow border-t border-gray-300 "></span>

  <span className="mx-4 bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
    Why Choose Us?
  </span>

  <span className="flex-grow border-t border-gray-300"></span>
</h2> */}

          <br></br>
          <p className="mt-6 text-2xl sm:text-lg md:text-2xl text-gray-300 leading-relaxed  bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
          Our team is highly experienced in Discord server development and professional server management, delivering secure, scalable, and premium-quality communities."</p>

        </motion.div>
        </div>
     

        <br /> <br />    

        {/* Features Grid */}
        <div className="!ml-12 !mr-12 !lg:ml-16 !lg:mr-16 !xl:ml-20 !xl:mr-20">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-15">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
            <div className="pl-4 lg:pl-20 pr-4 lg:pr-20">
              {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover effect */}
                 {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

    </section>
  );
};

export default WhyChooseUs;

