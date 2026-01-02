import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, MessageCircle, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e, contactMethod) => {
    e.preventDefault();

    // Contact details
    const telegramUsername = "modfluxagency_official"; // Replace with your Telegram username
    const phoneNumber = "9769559189"; // Replace with your WhatsApp number

    // Construct the message
    const message = `Hello! I'm ${formData.name}.

Email: ${formData.email}
Service Interested: ${formData.service}

Message:
${formData.message}

Sent from ModFlux Agency website.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Choose URL based on contact method
    let url;
    if (contactMethod === 'telegram') {
      url = `https://t.me/${telegramUsername}?text=${encodedMessage}`;
    } else {
      url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    }

    // Redirect to selected platform
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="relative min-h-screen  bg-gradient-to-b from-gray-900 via-black to-gray-900 -mt-32 py-20 px-12 lg:px-16 xl:px-20">

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
           Get In{' '}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <br></br>
          <p className="mt-6 text-2xl sm:text-lg md:text-2xl text-gray-300 leading-relaxed bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
          "Ready to transform your Discord community? Let's discuss your project and create something amazing together."</p>

        </motion.div>
        <br></br>
        <br></br>

        {/* Contact Form Container */}
        {/* <div className="relative z-20"> */}
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        > */}
            {/* Contact Info - Horizontal Layout */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            > */}
              {/* <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Chat with us</p> */}
                    {/* <p className="text-gray-300">Instant response</p> */}
                  {/* </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email Us</p> */}
                    {/* <p className="text-gray-300">hello@modflux.com</p> */}
                  {/* </div>
                </div>
              </div>
            </motion.div>
            <br></br>
            </motion.div>
            </div>  */}


            <div className="!ml-12 !mr-12 !lg:ml-16 !lg:mr-16 !xl:ml-20 !xl:mr-20">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="max-w-2xl w-full">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-10 py-5 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                    placeholder=""
                  />
                </div>
                <br></br>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-5 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                    placeholder=""
                  />
                </div>
                <br></br>
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                        className="w-full px-4 py-5 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="Discord Bot Development">Discord Bot Development</option>
                    <option value="Server Setup & Management">Server Setup & Management</option>
                    <option value="Community Management">Community Management</option>
                    <option value="Custom Integrations">Custom Integrations</option>
                    <option value="Complete Discord Solutions">Complete Discord Solutions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <br></br>

                {/* Contact Method Selection */}


                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full h-20 px-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                    placeholder="Tell us about your project, requirements, and timeline..."
                  />
                </div>
                <br></br>
                <div>
                  <label className="block text-white font-medium mb-4">
                    Choose how to contact us:
                  </label>
                  <div className="flex gap-3">
                    <motion.button
                      type="button"
                      onClick={(e) => handleSubmit(e, 'telegram')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      {/* <MessageCircle className="w-5 h-5" /> */}
                      <span>Send via Telegram</span>
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={(e) => handleSubmit(e, 'whatsapp')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 h-12  px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                       {/* <Phone className="w-5 h-5" /> */}
                      <span>Send via WhatsApp</span>
                    </motion.button>
                  </div>
                </div>
                <br></br>
              </div>
              </div>
            </motion.div>
        </div>

        

        </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

    </section>
  );
};

export default Contact;
