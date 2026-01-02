import { motion } from 'framer-motion';
import { Check, Crown, Shield, Users, Star, ArrowLeft, Wrench, Package, Zap, Award } from 'lucide-react';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
const Pricing = ({ onBackToHome }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigateToHome = () => {
    if (onBackToHome) {
      onBackToHome();
    }
  };

  const plans = [
    {
      name: "Server Development Only",
      price: "₹*,999",
      period: "One-Time",
      icon: Wrench,
      emoji: "🔧",
      color: "orange",
      features: [
        "Complete Discord server setup",
        "Professional channel & role structure",
        "Permissions configuration",
        "Basic moderation & security setup",
        "Ready-to-launch server"
      ]
    },
    {
      name: "Basic Package",
      price: "₹*,999 + ₹**,999/month",
      period: "",
      icon: Package,
      emoji: "🚀",
      color: "green",
      features: [
        "Simple & clean server structure",
        "Basic moderation system",
        "Role & permission setup",
        "Community management"
      ],
      staff: "1 Admin + 2 Moderators"
    },
    {
      name: "Standard Package",
      price: "₹*,999 + ₹**,999/month",
      period: "",
      icon: Shield,
      emoji: "⚡",
      color: "blue",
      features: [
        "Everything in Basic Package",
        "Advanced server structure",
        "Lifetime Premium Bot Hosting",
        "Automation & moderation bots",
        "Anti-spam & security setup",
        "Event & engagement support"
      ],
      staff: "2 Admins + 3 Moderators"
    },
    {
      name: "Premium Package",
      price: "₹*,999 + ₹**,999/month",
      period: "",
      icon: Crown,
      emoji: "👑",
      color: "purple",
      features: [
        "Everything in Standard Package",
        "Fully custom & scalable server architecture",
        "Advanced automation & anti-nuke protection",
        "Custom moderation & management systems",
        "High-priority support",
        "Dedicated growth & engagement strategy"
      ],
      staff: "3 Admins + 5 Moderators"
    }
  ];

  const whyChooseUs = [
    "Trusted & experienced Discord developers",
    "Professional moderation team",
    "Lifetime bot hosting (no hidden costs)",
    "Enterprise-grade security & anti-nuke protection",
    "Perfect for traders, creators, funded firms & communities"
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: {
        bg: 'from-orange-500 to-red-500',
        border: 'border-orange-500/50',
        text: 'text-orange-400',
        cardBg: 'from-orange-900/10 to-red-900/10'
      },
      green: {
        bg: 'from-green-500 to-emerald-600',
        border: 'border-green-500/50',
        text: 'text-green-400',
        cardBg: 'from-green-900/10 to-emerald-900/10'
      },
      blue: {
        bg: 'from-blue-500 to-cyan-600',
        border: 'border-blue-500/50',
        text: 'text-blue-400',
        cardBg: 'from-blue-900/10 to-cyan-900/10'
      },
      purple: {
        bg: 'from-purple-500 to-pink-600',
        border: 'border-purple-500/50',
        text: 'text-purple-400',
        cardBg: 'from-purple-900/10 to-pink-900/10'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <Header onNavigateToHome={handleNavigateToHome} />

      {/* Spacer to clear fixed header */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12">
          <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
         Choose Your {' '}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            Plan
          </span>
        </h2>  
        <br></br>
        <p className="mt-6 text-2xl sm:text-lg md:text-2xl text-gray-300 leading-relaxed  bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
        "Professional Discord server management and development services tailored to your community's needs."</p>
        </motion.div>
      

        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(67, 12, 219, 0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(12, 203, 236, 0.1),transparent_60%)]" />
      </section>

      <br></br>
      <div className="!ml-12 !mr-12 !lg:ml-16 !lg:mr-16 !xl:ml-20 !xl:mr-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center p-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-2xl"
          >
            {/* <div className="text-4xl mb-4">🔧</div> */}
            <h3 className="text-2xl font-bold text-white mb-4">Custom Development</h3>
            <p className="text-gray-300 mb-4">
              Need something special? We offer fully custom Discord server development and management solutions for prop firms, trading communities, YouTubers, and enterprises.
            </p>
            <p className="text-purple-400 font-bold text-xl">
              💰 Pricing: Negotiable (Depends on Your Requirements)
            </p>
          </motion.div>
      </div>

      <br></br>
      {/* Pricing Cards */}
      <div className="!ml-12 !mr-12 !lg:ml-16 !lg:mr-16 !xl:ml-20 !xl:mr-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const colors = getColorClasses(plan.color);
              const isHighlighted = plan.name === "Standard Package";

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-gradient-to-br ${colors.cardBg} border ${colors.border} rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${isHighlighted ? 'ring-2 ring-blue-400/50' : ''}`}
                >
                  {/* Popular Badge */}
                  {/* {isHighlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star size={16} />
                        Most Popular
                      </div>
                    </div>
                  )} */}
                  {/* Header */}
                  <div className="text-center mb-8">
                    {/* <div className={`w-16 h-16 bg-gradient-to-r ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                      {plan.emoji}
                    </div> */}
                    <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>{plan.name}</h3>
                    <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                    {plan.period && <div className="text-gray-400 text-sm">{plan.period}</div>}
                    {plan.staff && <div className="text-gray-400 text-sm mt-2">👥 {plan.staff}</div>}
                  </div>

                  {/* Features */}
                  <div className="!ml-6 !mr-12 !lg:ml-16 !lg:mr-16 !xl:ml-20 !xl:mr-20">
                  <div className="space-y-4 mb-12">
                    <h4 className="text-white font-semibold text-lg mb-4">What's Included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                    <br></br>
                  </div>
                  </div>
                  {/* CTA Button */}
                  {/* <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 bg-gradient-to-r ${colors.bg} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200`}
                  >
                    Get Started
                  </motion.button> */}
                </motion.div>
              );
            })}
          </div>
      
      </div>
      <br></br>
      <br></br>
      {/* Custom Development */}


      {/* Why Choose Us */}
      {/* <section className="relative py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                ModFlux?
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 flex items-center gap-3"
              >
                <Award className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">{reason}</span>
              </motion.div>
            ))}
          </div> */}

          {/* Important Note */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6 text-center"
          >
            <h3 className="text-yellow-400 font-bold text-lg mb-3">📝 Important Note</h3>
            <p className="text-gray-300">
              All prices mentioned above are base charges. Custom features, additional bots, or special requirements may affect the final cost.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="relative py-12 px-6 sm:px-8 lg:px-12 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            <button
              onClick={onBackToHome}
              className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
            >
            </button>{' '}
          </p>
        </div>
      </footer>
    <Footer />
    </div>
 
  );
};

export default Pricing;
