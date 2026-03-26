import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, Send, MapPin, Clock, Coffee, Cpu, HardDrive, Monitor } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'sathwikpamu@gmail.com',
      link: 'mailto:sathwikpamu@gmail.com',
      color: 'from-blue-500 to-blue-600',
      glowColor: 'blue'
    },
    {
      icon: <Linkedin size={20} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/sathwik-pamu',
      link: 'https://www.linkedin.com/in/sathwik-pamu',
      color: 'from-blue-600 to-blue-700',
      glowColor: 'blue'
    },
    {
      icon: <Instagram size={20} />,
      title: 'Instagram',
      value: '@sathwik_70',
      link: 'https://www.instagram.com/sathwik_70',
      color: 'from-pink-500 to-purple-600',
      glowColor: 'pink'
    }
  ];

  const quickInfo = [
    { icon: <MapPin className="w-4 h-4" />, text: 'Based in India', color: 'text-blue-600' },
    { icon: <Clock className="w-4 h-4" />, text: 'Usually responds within 24 hours', color: 'text-purple-600' },
    { icon: <Coffee className="w-4 h-4" />, text: 'Always up for a tech discussion', color: 'text-orange-600' },
  ];

  const hardwareElements = [
    { icon: <Cpu size={18} />, position: 'top-32 right-32', color: 'text-cyan-400', delay: '0s' },
    { icon: <HardDrive size={20} />, position: 'bottom-32 left-32', color: 'text-purple-400', delay: '2s' },
    { icon: <Monitor size={16} />, position: 'top-1/2 right-1/4', color: 'text-pink-400', delay: '4s' },
  ];

  return (
    <section id="contact" aria-label="Contact" className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Hardware-Themed Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="circuit-pattern"></div>
        </div>
        
        <div className="absolute top-20 left-10 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-xl animate-hardware-float"></div>
        <div className="absolute bottom-20 right-10 md:right-20 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-r from-pink-300/30 to-cyan-300/30 rounded-full blur-xl animate-hardware-float animation-delay-2000"></div>
        
        {/* Floating Hardware Icons */}
        {hardwareElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} ${element.color} animate-hardware-drift opacity-20`}
            style={{ animationDelay: element.delay }}
          >
            <div className="relative">
              {element.icon}
              <div className="absolute inset-0 bg-current rounded-full blur-lg scale-150 opacity-50"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-system-startup">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 relative flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30 animate-mail-bounce">
              <Send className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Get in Touch
            </span>
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/15 to-purple-400/15 blur-lg -z-10 animate-pulse-gentle"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-gradient-x"></div>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto animate-text-fade animation-delay-500">
            I'm always open to collaboration, internships, freelance work, or just a tech chat!  
            Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info (Hidden on Mobile) */}
          <div className="hidden md:block lg:col-span-1 space-y-4 sm:space-y-6 animate-slide-in-left">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/50 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-500 hover:scale-105 transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-black text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50/50 transition-all duration-300 hover:scale-105 transform-gpu"
                      onMouseEnter={() => setHoveredContact(index)}
                      onMouseLeave={() => setHoveredContact(null)}
                    >
                      <div 
                        className={`flex-shrink-0 p-2 bg-gradient-to-r ${info.color} text-white rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}
                        style={{
                          boxShadow: hoveredContact === index 
                            ? `0 8px 20px -4px rgba(${info.glowColor === 'blue' ? '59, 130, 246' : '236, 72, 153'}, 0.4)` 
                            : 'none'
                        }}
                      >
                        {info.icon}
                        <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-medium text-sm">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-blue-200/50 hover:shadow-xl hover:shadow-purple-500/15 transition-all duration-500 hover:scale-105 transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  {quickInfo.map((info, index) => (
                    <div key={index} className="group flex items-center space-x-2 p-2 rounded-lg hover:bg-white/50 transition-all duration-300">
                      <div className={`${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300 text-sm">{info.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/50 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-500 transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-900 mb-4">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 bg-white/80 text-gray-900 placeholder-gray-400"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1 group-hover:text-purple-700 transition-colors duration-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400 bg-white/80 text-gray-900 placeholder-gray-400"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-1 group-hover:text-cyan-700 transition-colors duration-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:border-cyan-400 bg-white/80 text-gray-900 placeholder-gray-400"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1 group-hover:text-pink-700 transition-colors duration-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 hover:border-pink-400 resize-none bg-white/80 text-gray-900 placeholder-gray-400"
                      placeholder="Tell me about your project, idea, or just say hello!"
                      required
                    ></textarea>
                  </div>

                  {submitStatus.type && (
                    <div className={`p-4 rounded-lg text-sm font-bold ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-4 rounded-lg transition-all duration-500 flex items-center justify-center space-x-2 overflow-hidden transform-gpu ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40'}`}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" />}
                    </span>
                    {!isSubmitting && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center animate-text-fade animation-delay-1000">
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white hover:shadow-xl hover:shadow-gray-900/40 transition-all duration-500 hover:scale-105 transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-3">Ready to collaborate?</h3>
              <p className="text-gray-300 mb-4">
                Whether it's a startup idea, freelance project, or just want to connect with a fellow developer,
                I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:sathwikpamu@gmail.com"
                  className="group inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Mail size={18} />
                    <span>Email Me</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </a>
                <a
                  href="https://www.linkedin.com/in/sathwik-pamu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/40 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Linkedin size={18} />
                    <span>Connect on LinkedIn</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .circuit-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: circuit-drift 12s linear infinite;
        }
        
        @keyframes circuit-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        
        @keyframes hardware-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes hardware-drift {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes mail-bounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(3deg); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes system-startup {
          0% { opacity: 0; transform: translateY(40px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes text-fade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .animate-hardware-float { animation: hardware-float 6s ease-in-out infinite; }
        .animate-hardware-drift { animation: hardware-drift 4s ease-in-out infinite; }
        .animate-mail-bounce { animation: mail-bounce 2.5s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 2.5s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 2.5s ease infinite; background-size: 200% 200%; }
        .animate-system-startup { animation: system-startup 1s ease-out; }
        .animate-text-fade { animation: text-fade 0.8s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out 0.2s both; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 0.4s both; }
        
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Contact;