import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Server Owner",
      rating: 5,
      content: "Outstanding service! Our Discord server went from 50 to over 1000 members in just 2 months. The moderation team is incredibly professional and the custom bots work flawlessly.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      role: "Community Manager",
      rating: 5,
      content: "The automation setup they implemented saved us countless hours. Our community engagement increased by 300% and member retention is at an all-time high.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      role: "Gaming Guild Leader",
      rating: 5,
      content: "From the initial consultation to ongoing support, everything has been exceptional. They understood our vision perfectly and delivered beyond expectations.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Alex Rodriguez",
      role: "Business Owner",
      rating: 5,
      content: "Professional, reliable, and innovative. Our Discord server now serves as the central hub for our entire business operations. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Wang",
      role: "Content Creator",
      rating: 5,
      content: "The custom integrations they built for our content workflow are game-changing. Our subscriber engagement has never been better.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Tech Community Lead",
      rating: 5,
      content: "Incredible attention to detail and technical expertise. They transformed our basic server into a professional community platform that scales beautifully.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/50 to-transparent z-10" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(12,203,236,0.1),transparent_60%)]" />

      <div className="relative z-20 !ml-12 !mr-12 !lg:ml-16 !lg:mr-16 !xl:ml-20 !xl:mr-20">
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
           What Our{' '}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <br></br>
          <p className="mt-6 text-2xl sm:text-lg md:text-2xl text-gray-300 leading-relaxed bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
          "Don't just take our word for it. Here's what our satisfied clients have to say about our Discord server development and management services."</p>

        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">

                {/* Quote Icon */}
                <div className="flex justify-start mb-4">
                  <Quote className="w-8 h-8 text-purple-400/60" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  "{review.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30 mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{review.role}</p>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
      
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default Reviews;
