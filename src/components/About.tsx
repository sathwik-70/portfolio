import React from 'react';
import { MapPin, Calendar, TrendingUp, BookOpen, Heart, Target, Sparkles, Zap, Star, Atom, Cpu, HardDrive, Monitor } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <BookOpen size={20} />, label: 'Status', value: 'Final Year B.Tech Student', color: 'from-blue-500 to-cyan-500', glow: 'blue' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'India 🇮🇳', color: 'from-green-500 to-emerald-500', glow: 'emerald' },
    { icon: <TrendingUp size={20} />, label: 'Focus', value: 'Web Dev, AI/ML, Blockchain', color: 'from-purple-500 to-pink-500', glow: 'purple' },
    { icon: <Calendar size={20} />, label: 'Learning Since', value: '2021', color: 'from-orange-500 to-red-500', glow: 'orange' },
  ];

  const highlights = [
    { icon: <Target className="w-4 h-4" />, text: 'Developed 95.8% accurate Diabetic Retinopathy CNN', color: 'bg-red-500', glow: 'red' },
    { icon: <Heart className="w-4 h-4" />, text: 'Built an AI-driven Smart Placement Portal', color: 'bg-blue-500', glow: 'blue' },
    { icon: <Sparkles className="w-4 h-4" />, text: 'Engineered QuRe: QR-powered health records', color: 'bg-purple-500', glow: 'purple' },
    { icon: <Zap className="w-4 h-4" />, text: 'Created Jupymate: Solana DeFi Dashboard', color: 'bg-cyan-500', glow: 'cyan' },
  ];

  const hardwareElements = [
    { icon: <Star size={18} />, position: 'top-20 right-20', color: 'text-cyan-400', delay: '0s' },
    { icon: <Cpu size={20} />, position: 'bottom-32 left-16', color: 'text-purple-400', delay: '2s' },
    { icon: <HardDrive size={16} />, position: 'top-1/2 right-16', color: 'text-pink-400', delay: '4s' },
    { icon: <Monitor size={18} />, position: 'bottom-1/3 right-1/3', color: 'text-yellow-400', delay: '6s' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/40 to-purple-50/40 relative overflow-hidden">
      {/* Hardware-Themed Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="circuit-pattern"></div>
        </div>
        
        <div className="absolute top-20 left-10 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-xl animate-hardware-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-cyan-400/15 to-pink-400/15 rounded-full blur-xl animate-hardware-float animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse-gentle"></div>
        
        {/* Floating Hardware Elements */}
        {hardwareElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} ${element.color} animate-hardware-drift opacity-30`}
            style={{ animationDelay: element.delay }}
          >
            <div className="relative">
              {element.icon}
              <div className="absolute inset-0 bg-current rounded-full blur-lg scale-150 opacity-50"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-system-startup">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative">
            <span className="text-3xl mr-3 animate-wave-pulse">👨‍💻</span>
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 via-purple-800 to-pink-800 bg-clip-text text-transparent">
              About Me
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl -z-10 animate-pulse-gentle"></div>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-gradient-flow"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Description */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="group relative bg-white/90 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-500 hover:scale-105 transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl text-white mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md shadow-red-500/30">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 group-hover:text-blue-800 transition-colors duration-500">My Journey</h3>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-500 font-medium">
                  A passionate student developer from India 🇮🇳. I love transforming ideas into scalable, 
                  practical solutions through code. My journey spans across web development, AI-based 
                  applications, and blockchain technology.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-50/90 to-purple-50/90 backdrop-blur-xl rounded-xl p-6 border border-blue-200/50 hover:shadow-xl hover:shadow-purple-500/15 transition-all duration-500 hover:scale-105 transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl text-white mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md shadow-purple-500/30">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 group-hover:text-purple-800 transition-colors duration-500">Current Exploration</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Cross-Chain dApps', 'Deep Learning Models', 'Scalable MERN Architectures', 'Next.js & Supabase'].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 group/item p-2 rounded-lg hover:bg-white/50 transition-all duration-500">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover/item:scale-125 group-hover/item:shadow-lg transition-all duration-500"></div>
                      <span className="text-gray-700 font-semibold group-hover/item:text-purple-700 transition-colors duration-500 text-sm md:text-xs xl:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-purple-50/90 to-pink-50/90 backdrop-blur-xl rounded-xl p-6 border border-purple-200/50 hover:shadow-xl hover:shadow-pink-500/15 transition-all duration-500 hover:scale-105 transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
              <div className="relative z-10">
                <blockquote className="text-center">
                  <p className="text-lg font-black text-gray-800 italic mb-3 group-hover:text-purple-800 transition-colors duration-500">
                    "Every great idea starts with a single line of code."
                  </p>
                  <footer className="text-gray-600 font-bold group-hover:text-purple-600 transition-colors duration-500 text-sm">— My Development Philosophy</footer>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="group relative bg-white/90 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-500 hover:scale-105 transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black text-gray-900 mb-6 text-center group-hover:text-blue-800 transition-colors duration-500">Quick Stats</h3>
                <div className="grid grid-cols-1 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="group/stat flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-gray-50/90 to-blue-50/90 border border-gray-200/50 hover:shadow-md hover:shadow-blue-500/15 transition-all duration-500 hover:scale-105 transform-gpu">
                      <div className={`flex-shrink-0 p-2 bg-gradient-to-br ${stat.color} rounded-lg text-white group-hover/stat:scale-110 group-hover/stat:rotate-3 transition-all duration-500 shadow-md shadow-${stat.glow}-500/30`}>
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-xs font-black text-gray-600 uppercase tracking-wider group-hover/stat:text-gray-800 transition-colors duration-500 mb-1">{stat.label}</p>
                        <p className="text-sm font-black text-gray-900 group-hover/stat:text-blue-800 transition-colors duration-500">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="group relative bg-gradient-to-br from-green-50/90 to-emerald-50/90 backdrop-blur-xl rounded-xl p-6 border border-green-200/50 hover:shadow-xl hover:shadow-emerald-500/15 transition-all duration-500 hover:scale-105 transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-black text-gray-900 mb-4 text-center group-hover:text-emerald-800 transition-colors duration-500">Key Highlights</h3>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="group/highlight flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-all duration-500 hover:scale-105 transform-gpu">
                      <div className={`${highlight.color} p-1.5 rounded-lg text-white group-hover/highlight:scale-110 group-hover/highlight:rotate-3 transition-all duration-500 shadow-md shadow-${highlight.glow}-500/30`}>
                        {highlight.icon}
                      </div>
                      <span className="text-gray-700 font-semibold group-hover/highlight:text-gray-900 transition-colors duration-500 text-sm">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .circuit-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: circuit-drift 15s linear infinite;
        }
        
        @keyframes circuit-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        
        @keyframes hardware-float {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1);
          }
          33% { 
            transform: translateY(-25px) rotateX(15deg) rotateY(15deg) scale(1.05);
          }
          66% { 
            transform: translateY(-12px) rotateX(-10deg) rotateY(-10deg) scale(0.95);
          }
        }
        
        @keyframes hardware-drift {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% { 
            transform: translateY(-15px) rotateX(8deg) rotateY(8deg) rotateZ(3deg);
          }
          50% { 
            transform: translateY(-8px) rotateX(-4deg) rotateY(-4deg) rotateZ(-2deg);
          }
          75% { 
            transform: translateY(-20px) rotateX(2deg) rotateY(12deg) rotateZ(4deg);
          }
        }
        
        @keyframes wave-pulse {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          50% { transform: translateY(-8px) rotate(5deg) scale(1.1); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes system-startup {
          0% { opacity: 0; transform: translateY(50px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .animate-hardware-float { animation: hardware-float 8s ease-in-out infinite; }
        .animate-hardware-drift { animation: hardware-drift 6s ease-in-out infinite; }
        .animate-wave-pulse { animation: wave-pulse 2.5s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 3s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 3s ease infinite; background-size: 200% 200%; }
        .animate-system-startup { animation: system-startup 1.2s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out 0.2s both; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out 0.4s both; }
        
        .animation-delay-3000 { animation-delay: 3s; }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default About;