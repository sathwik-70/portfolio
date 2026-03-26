import { useState } from 'react';
import { Code2, Blocks, Palette, CloudLightning, Brain, Star, Cpu, HardDrive, Monitor, BookOpen } from 'lucide-react';

const Learning = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const learningItems = [
    {
      icon: <Code2 size={20} />,
      title: 'Advanced Data Structures and Algorithms',
      description: 'Deepening understanding of complex algorithms and optimization techniques',
      color: 'from-blue-500 to-blue-600',
      glowColor: 'blue',
      progress: 75,
      category: 'Programming'
    },
    {
      icon: <Brain size={20} />,
      title: 'Machine Learning using Python',
      description: 'Exploring advanced ML models and deep learning frameworks',
      color: 'from-green-500 to-green-600',
      glowColor: 'green',
      progress: 80,
      category: 'AI/ML'
    },
    {
      icon: <Blocks size={20} />,
      title: 'Cross-Chain dApp Development (Solana + Ethereum)',
      description: 'Combining Solana and Ethereum ecosystems to architect and build a robust, production-grade decentralized application',
      color: 'from-purple-500 to-purple-600',
      glowColor: 'purple',
      progress: 50,
      category: 'Blockchain'
    },
    {
      icon: <Palette size={20} />,
      title: 'React Component Libraries and Animations',
      description: 'Creating beautiful, interactive user interfaces with modern React',
      color: 'from-pink-500 to-pink-600',
      glowColor: 'pink',
      progress: 85,
      category: 'Frontend'
    },
    {
      icon: <CloudLightning size={20} />,
      title: 'Salesforce Platform Development',
      description: 'Learning Apex, Lightning Web Components, and Salesforce ecosystem',
      color: 'from-cyan-500 to-cyan-600',
      glowColor: 'cyan',
      progress: 45,
      category: 'Cloud'
    }
  ];

  const hardwareElements = [
    { icon: <Cpu size={20} />, position: 'top-32 right-32', color: 'text-cyan-400', delay: '0s' },
    { icon: <HardDrive size={22} />, position: 'bottom-32 left-32', color: 'text-purple-400', delay: '2s' },
    { icon: <Monitor size={18} />, position: 'top-1/2 right-1/4', color: 'text-pink-400', delay: '4s' },
    { icon: <Star size={24} />, position: 'bottom-1/3 left-1/4', color: 'text-yellow-400', delay: '6s' },
  ];

  return (
    <section id="learning" className="py-12 sm:py-20 relative overflow-hidden">
      {/* Hardware-Themed Background */}
      <div className="absolute inset-0">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="circuit-pattern"></div>
        </div>
        
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-hardware-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-xl animate-hardware-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-xl animate-pulse-gentle"></div>
        
        {/* Floating Hardware Icons */}
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
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative flex items-center justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-cyan-500/30 animate-book-pulse">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift bg-300%">
              Currently Learning
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl -z-10 animate-pulse-glow"></div>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full animate-gradient-x"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto animate-text-fade animation-delay-500">
            Continuously expanding my knowledge and staying ahead of the curve in emerging technologies
          </p>
        </div>

        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-5">
          {learningItems.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-lg transform-gpu"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                boxShadow: hoveredItem === index 
                  ? `0 15px 30px -6px rgba(${item.glowColor === 'blue' ? '59, 130, 246' : 
                      item.glowColor === 'green' ? '34, 197, 94' :
                      '147, 51, 234'}, 0.3)` 
                  : 'none'
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                {/* Category Badge */}
                <div className="inline-block mb-3">
                  <span className={`px-2 py-1 text-xs font-bold rounded-lg bg-gradient-to-r ${item.color} text-white`}>
                    {item.category}
                  </span>
                </div>

                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${item.color} text-white mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md`}>
                  {item.icon}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
                </div>
                
                <h3 className="text-base font-black text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-3 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                  {item.description}
                </p>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Progress</span>
                    <span className="text-xs font-bold text-gray-400 bg-gray-700/50 px-2 py-1 rounded-md group-hover:bg-gray-600/50 transition-colors duration-300">{item.progress}%</span>
                  </div>
                  <div className="relative w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${item.color} h-1.5 rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                      style={{ width: `${item.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-data-scan"></div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 rounded-full blur-sm transition-opacity duration-500`}></div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl blur-lg opacity-0 group-hover:opacity-15 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-10">
          {learningItems.slice(3).map((item, index) => (
            <div
              key={index + 3}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-lg transform-gpu"
              onMouseEnter={() => setHoveredItem(index + 3)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                boxShadow: hoveredItem === index + 3 
                  ? `0 15px 30px -6px rgba(${item.glowColor === 'pink' ? '236, 72, 153' : '6, 182, 212'}, 0.3)` 
                  : 'none'
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {/* Category Badge */}
                    <div className="inline-block mb-3">
                      <span className={`px-2 py-1 text-xs font-bold rounded-lg bg-gradient-to-r ${item.color} text-white`}>
                        {item.category}
                      </span>
                    </div>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md`}>
                      {item.icon}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="text-base font-black text-white group-hover:text-gray-100 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm">
                      {item.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Progress</span>
                        <span className="text-xs font-bold text-gray-400 bg-gray-700/50 px-2 py-1 rounded-md group-hover:bg-gray-600/50 transition-colors duration-300">{item.progress}%</span>
                      </div>
                      <div className="relative w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${item.color} h-1.5 rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                          style={{ width: `${item.progress}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-data-scan"></div>
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 rounded-full blur-sm transition-opacity duration-500`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl blur-lg opacity-0 group-hover:opacity-15 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="text-center animate-text-fade animation-delay-1000">
                <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 transform-gpu shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-black text-white mb-3">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  My Learning Philosophy
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                I believe in continuous learning and staying curious about emerging technologies. 
                Each day brings new opportunities to grow, experiment, and push the boundaries of what's possible. 
                The intersection of different domains often leads to the most innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .circuit-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: circuit-drift 18s linear infinite;
        }
        
        @keyframes circuit-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        @keyframes hardware-float {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          33% { transform: translateY(-15px) rotateX(3deg) rotateY(3deg); }
          66% { transform: translateY(-8px) rotateX(-3deg) rotateY(-3deg); }
        }
        
        @keyframes hardware-drift {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(5deg); }
        }
        
        @keyframes book-pulse {
          0%, 100% { transform: rotateY(0deg) scale(1); }
          50% { transform: rotateY(180deg) scale(1.1); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes system-startup {
          0% { opacity: 0; transform: translateY(40px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes text-fade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes data-scan {
          0% { transform: translateX(-100%) skewX(10deg); }
          100% { transform: translateX(150%) skewX(10deg); }
        }
        
        .animate-hardware-float { animation: hardware-float 6s ease-in-out infinite; }
        .animate-hardware-drift { animation: hardware-drift 5s ease-in-out infinite; }
        .animate-book-pulse { animation: book-pulse 3s ease-in-out infinite; }
        .animate-gradient-shift { animation: gradient-shift 2.5s ease infinite; }
        .animate-gradient-x { animation: gradient-x 2.5s ease infinite; background-size: 200% 200%; }
        .animate-pulse-gentle { animation: pulse-gentle 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-system-startup { animation: system-startup 1s ease-out; }
        .animate-text-fade { animation: text-fade 0.8s ease-out; }
        .animate-data-scan { animation: data-scan 1.5s ease-in-out infinite; }
        
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        
        .bg-300% { background-size: 300% 300%; }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Learning;