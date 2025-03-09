import React, { useState, useEffect } from 'react';
import { Code, Database, Brain, Blocks, Cloud, Monitor, Zap, Cpu, Star, Atom, Sparkles, HardDrive, Wifi, MemoryStick } from 'lucide-react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillCategories = [
    {
      icon: <Code size={28} />,
      title: 'Languages',
      color: 'from-blue-500 to-blue-600',
      glowColor: 'blue',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'CSS'],
      bgPattern: 'code'
    },
    {
      icon: <Monitor size={28} />,
      title: 'Frontend',
      color: 'from-purple-500 to-purple-600',
      glowColor: 'purple',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Streamlit'],
      bgPattern: 'frontend'
    },
    {
      icon: <Database size={28} />,
      title: 'Backend & Databases',
      color: 'from-green-500 to-green-600',
      glowColor: 'green',
      skills: ['Node.js', 'Express.js', 'Flask', 'MongoDB', 'MySQL', 'Firebase', 'REST APIs', 'JWT Auth'],
      bgPattern: 'database'
    },
    {
      icon: <Brain size={28} />,
      title: 'AI & Machine Learning',
      color: 'from-red-500 to-red-600',
      glowColor: 'red',
      skills: ['TensorFlow', 'PyTorch', 'EfficientNet', 'U-Net', 'ResNet', 'OpenCV', 'Scikit-learn', 'NumPy', 'Pandas'],
      bgPattern: 'ai'
    },
    {
      icon: <Blocks size={28} />,
      title: 'Blockchain',
      color: 'from-cyan-500 to-cyan-600',
      glowColor: 'cyan',
      skills: ['Solana', 'Jupiter Aggregator APIs', 'Anchor Framework', 'Web3.js'],
      bgPattern: 'blockchain'
    },
    {
      icon: <Cloud size={28} />,
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-orange-600',
      glowColor: 'orange',
      skills: ['Netlify', 'Render', 'Vercel', 'Git & GitHub', 'Linux', 'Nginx'],
      bgPattern: 'cloud'
    }
  ];

  const proficiencyData = [
    { skill: 'Frontend Development', level: 90, color: 'from-purple-500 to-pink-500' },
    { skill: 'Backend Development', level: 85, color: 'from-green-500 to-emerald-500' },
    { skill: 'Database Management', level: 82, color: 'from-blue-500 to-cyan-500' },
    { skill: 'AI/ML & Deep Learning', level: 80, color: 'from-red-500 to-orange-500' },
    { skill: 'Blockchain Development', level: 70, color: 'from-cyan-500 to-blue-500' },
    { skill: 'Cloud & DevOps', level: 75, color: 'from-orange-500 to-yellow-500' }
  ];

  const hardwareElements = [
    { icon: <Star size={20} />, position: 'top-32 right-32', color: 'text-cyan-400', delay: '0s' },
    { icon: <Cpu size={24} />, position: 'bottom-32 left-32', color: 'text-purple-400', delay: '2s' },
    { icon: <HardDrive size={18} />, position: 'top-1/2 right-1/4', color: 'text-pink-400', delay: '4s' },
    { icon: <MemoryStick size={22} />, position: 'bottom-1/3 left-1/4', color: 'text-yellow-400', delay: '6s' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Hardware-Themed Background */}
      <div className="absolute inset-0">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="circuit-board-pattern"></div>
        </div>
        
        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-xl animate-hardware-float"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/15 to-pink-500/15 rounded-full blur-xl animate-hardware-float animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse-gentle"></div>
        
        {/* Floating Hardware Icons */}
        {hardwareElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} ${element.color} animate-hardware-drift opacity-40`}
            style={{ animationDelay: element.delay }}
          >
            <div className="relative">
              {element.icon}
              <div className="absolute inset-0 bg-current rounded-full blur-lg scale-150 opacity-50"></div>
              <div className="absolute inset-0 animate-ping bg-current rounded-full opacity-20"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-system-startup">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative">
            <span className="text-3xl mr-3 animate-tech-bounce">💻</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-flow bg-300%">
              Tech I Work With
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl -z-10 animate-pulse-gentle"></div>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-gradient-flow"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto animate-text-fade animation-delay-700 font-light">
            A comprehensive toolkit spanning multiple domains of modern software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-xl transform-gpu"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{
                boxShadow: hoveredCategory === index 
                  ? `0 20px 35px -8px rgba(${category.glowColor === 'blue' ? '59, 130, 246' : 
                      category.glowColor === 'purple' ? '147, 51, 234' :
                      category.glowColor === 'green' ? '34, 197, 94' :
                      category.glowColor === 'red' ? '239, 68, 68' :
                      category.glowColor === 'cyan' ? '6, 182, 212' :
                      '249, 115, 22'}, 0.4)` 
                  : 'none'
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 rounded-xl`}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-${category.glowColor}-500/40`}>
                  {category.icon}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
                </div>
                
                <h3 className="text-lg font-black text-white mb-4 group-hover:text-gray-100 transition-colors duration-500">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-500 hover:scale-105 transform-gpu"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:scale-125 group-hover/skill:shadow-lg transition-all duration-500 shadow-${category.glowColor}-500/50`}></div>
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-500 font-semibold text-sm">
                        {skill}
                      </span>
                      <div className={`ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Skills Progress Visualization */}
        <div className="relative bg-gray-800/60 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 animate-text-fade animation-delay-1400 hover:shadow-xl transform-gpu">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-data-flow"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-black text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Proficiency Overview
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {proficiencyData.map((item, index) => (
                <div key={index} className="group space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-bold group-hover:text-white transition-colors duration-500">
                      {item.skill}
                    </span>
                    <span className="text-gray-400 font-black bg-gray-700/50 px-2 py-1 rounded-lg group-hover:bg-gray-600/50 transition-colors duration-500 text-sm">
                      {item.level}%
                    </span>
                  </div>
                  <div className="relative w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${item.color} h-2.5 rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                      style={{ width: `${item.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-data-scan"></div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-25 rounded-full blur-md transition-opacity duration-500`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .circuit-board-pattern {
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(147, 51, 234, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px);
          background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
          animation: circuit-flow 20s linear infinite;
        }
        
        @keyframes circuit-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes hardware-float {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1);
          }
          33% { 
            transform: translateY(-30px) rotateX(8deg) rotateY(8deg) scale(1.05);
          }
          66% { 
            transform: translateY(-15px) rotateX(-4deg) rotateY(-4deg) scale(0.95);
          }
        }
        
        @keyframes hardware-drift {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% { 
            transform: translateY(-20px) rotateX(10deg) rotateY(10deg) rotateZ(3deg);
          }
          50% { 
            transform: translateY(-10px) rotateX(-5deg) rotateY(-5deg) rotateZ(-2deg);
          }
          75% { 
            transform: translateY(-25px) rotateX(3deg) rotateY(15deg) rotateZ(4deg);
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        
        @keyframes tech-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.1); }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes system-startup {
          0% { opacity: 0; transform: translateY(60px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes text-fade {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes data-flow {
          0% { transform: translateX(-100%) skewX(15deg); }
          100% { transform: translateX(300%) skewX(15deg); }
        }
        
        @keyframes data-scan {
          0% { transform: translateX(-100%) skewX(10deg); }
          100% { transform: translateX(150%) skewX(10deg); }
        }
        
        .animate-hardware-float { animation: hardware-float 10s ease-in-out infinite; }
        .animate-hardware-drift { animation: hardware-drift 8s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 4s ease-in-out infinite; }
        .animate-tech-bounce { animation: tech-bounce 3s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 4s ease infinite; background-size: 200% 200%; }
        .animate-system-startup { animation: system-startup 1.5s ease-out; }
        .animate-text-fade { animation: text-fade 1s ease-out; }
        .animate-data-flow { animation: data-flow 5s ease-in-out infinite; }
        .animate-data-scan { animation: data-scan 1.5s ease-in-out infinite; }
        
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
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

export default Skills;