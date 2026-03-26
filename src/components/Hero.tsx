import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Cpu, Blocks, Database, Brain, Star, Atom, Hexagon, Monitor, HardDrive, Wifi, Battery, MemoryStick } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);
    
    const timer = setInterval(() => setTime(Date.now()), 50);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hardwareElements = [
    { icon: <Cpu size={28} />, delay: '0s', position: 'top-20 left-10', color: 'text-cyan-400', trail: 'cyan' },
    { icon: <HardDrive size={32} />, delay: '1s', position: 'top-40 right-20', color: 'text-purple-400', trail: 'purple' },
    { icon: <MemoryStick size={30} />, delay: '2s', position: 'bottom-40 left-20', color: 'text-pink-400', trail: 'pink' },
    { icon: <Monitor size={28} />, delay: '0.5s', position: 'top-60 left-1/4', color: 'text-blue-400', trail: 'blue' },
    { icon: <Wifi size={34} />, delay: '1.5s', position: 'bottom-60 right-1/4', color: 'text-emerald-400', trail: 'emerald' },
    { icon: <Battery size={26} />, delay: '2.5s', position: 'top-1/3 right-10', color: 'text-yellow-400', trail: 'yellow' },
    { icon: <Database size={24} />, delay: '3s', position: 'bottom-1/3 left-16', color: 'text-rose-400', trail: 'rose' },
    { icon: <Code size={22} />, delay: '3.5s', position: 'top-1/4 right-1/3', color: 'text-indigo-400', trail: 'indigo' },
    { icon: <Brain size={26} />, delay: '4s', position: 'bottom-1/4 left-1/3', color: 'text-teal-400', trail: 'teal' },
    { icon: <Blocks size={24} />, delay: '4.5s', position: 'top-3/4 right-1/2', color: 'text-violet-400', trail: 'violet' },
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-20">
      {/* Computer Hardware-Inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 via-blue-950 to-purple-950">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="circuit-board-pattern"></div>
        </div>
        
        {/* Hardware Component Glow Effects */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(0, 255, 255, 0.4) 0%, 
                rgba(138, 43, 226, 0.3) 20%,
                rgba(255, 20, 147, 0.2) 40%, 
                rgba(0, 191, 255, 0.1) 60%,
                transparent 80%),
              radial-gradient(ellipse at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(147, 51, 234, 0.4) 0%, 
                rgba(236, 72, 153, 0.2) 30%,
                rgba(59, 130, 246, 0.1) 60%,
                transparent 80%)
            `
          }}
        ></div>
        
        {/* Motherboard-Style Grid Lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="motherboard-grid"></div>
        </div>
        
        {/* CPU Heat Sink Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-cyan-500/20 via-blue-500/15 via-purple-500/20 to-pink-500/15 rounded-full blur-2xl animate-cpu-heat"></div>
        <div className="absolute top-3/4 right-1/4 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-gradient-to-r from-purple-500/20 via-pink-500/15 via-rose-500/20 to-orange-500/15 rounded-full blur-2xl animate-cpu-heat animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-emerald-400/15 via-cyan-400/20 via-blue-400/15 to-indigo-400/20 rounded-full blur-2xl animate-cpu-heat animation-delay-6000"></div>
        
        {/* Data Flow Streams */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-cyan-400/60 via-purple-400/40 via-pink-400/60 to-transparent blur-sm animate-data-stream"></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-pink-400/60 via-blue-400/40 via-emerald-400/60 to-transparent blur-sm animate-data-stream animation-delay-2000"></div>
          <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-emerald-400/60 via-cyan-400/40 via-purple-400/60 to-transparent blur-sm animate-data-stream animation-delay-4000"></div>
        </div>
        
        {/* Hardware Status LEDs */}
        <div className="absolute top-10 right-10 w-6 h-6 bg-cyan-400 rounded-full blur-sm animate-led-pulse shadow-cyan-400/50 shadow-2xl"></div>
        <div className="absolute bottom-20 left-10 w-4 h-4 bg-purple-400 rounded-full blur-sm animate-led-pulse animation-delay-1500 shadow-purple-400/50 shadow-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-pink-400 rounded-full blur-sm animate-led-pulse animation-delay-3000 shadow-pink-400/50 shadow-2xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-emerald-400 rounded-full blur-sm animate-led-pulse animation-delay-4500 shadow-emerald-400/50 shadow-2xl"></div>
      </div>

      {/* Floating Hardware Components - hidden on mobile to avoid text overlap */}
      <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
        {hardwareElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} animate-hardware-float ${element.color} transition-all duration-1000`}
            style={{ 
              animationDelay: element.delay,
              transform: `translateZ(${index * 10}px)`,
              filter: `drop-shadow(0 0 20px currentColor)`
            }}
          >
            <div className="relative group">
              {element.icon}
              <div className="absolute inset-0 bg-current rounded-full blur-xl scale-150 opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
              <div className="absolute inset-0 animate-ping bg-current rounded-full opacity-15"></div>
              <div className={`absolute -inset-3 bg-gradient-to-r from-${element.trail}-400/20 to-transparent rounded-full blur-lg animate-pulse`}></div>
            </div>
          </div>
        ))}
        
        {/* Computer Terminal Panels */}
        <div className="hidden lg:block absolute top-20 right-20 w-80 h-48 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-purple-900/90 backdrop-blur-xl border border-cyan-400/40 rounded-2xl animate-terminal-glow shadow-2xl shadow-cyan-500/20">
          <div className="p-6 h-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent skew-x-12 animate-data-flow"></div>
            <div className="text-cyan-400 text-xs font-mono tracking-widest uppercase">System Monitor</div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-emerald-400/50 shadow-lg"></div>
                <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full flex-1 animate-cpu-usage relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-data-scan"></div>
                </div>
                <div className="text-xs text-cyan-300 font-mono">CPU: 87%</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-700 shadow-purple-400/50 shadow-lg"></div>
                <div className="h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-full flex-1 animate-cpu-usage animation-delay-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-data-scan animation-delay-500"></div>
                </div>
                <div className="text-xs text-purple-300 font-mono">RAM: 64%</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-1400 shadow-pink-400/50 shadow-lg"></div>
                <div className="h-2 bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 rounded-full flex-1 animate-cpu-usage animation-delay-1400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-data-scan animation-delay-1000"></div>
                </div>
                <div className="text-xs text-pink-300 font-mono">GPU: 92%</div>
              </div>
            </div>
            <div className="text-xs text-gray-400 font-mono">Hardware acceleration • Active</div>
          </div>
        </div>
        
        <div className="hidden lg:block absolute bottom-32 left-16 w-72 h-44 bg-gradient-to-br from-gray-900/90 via-purple-900/80 to-pink-900/90 backdrop-blur-xl border border-purple-400/40 rounded-2xl animate-terminal-glow animation-delay-3000 shadow-2xl shadow-purple-500/20">
          <div className="p-6 h-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent skew-x-12 animate-data-flow animation-delay-2000"></div>
            <div className="text-purple-400 text-xs font-mono tracking-widest uppercase">Neural Processing</div>
            <div className="grid grid-cols-6 gap-1">
              {[...Array(18)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-3 bg-gradient-to-t from-purple-400/70 via-pink-400/70 to-rose-400/70 rounded animate-neural-activity shadow-lg" 
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
            <div className="text-xs text-gray-400 font-mono">AI inference • 99.7% accuracy</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hardware-Themed Main Content */}
          <div className="mb-12 animate-system-boot">
            <div className="inline-block mb-8 relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center filter drop-shadow-2xl border border-cyan-500/30 animate-power-on relative z-10 mx-auto">
                <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
              </div>
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/40 via-purple-400/30 via-pink-400/40 to-rose-400/30 rounded-full blur-xl animate-hardware-glow"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-ping opacity-30"></div>
              <div className="absolute -inset-4 border border-cyan-400/30 rounded-full animate-rotate-slow"></div>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 md:mb-8 relative leading-tight">
              <span className="text-white drop-shadow-xl tracking-tight">Hi, I'm </span>
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent animate-gradient-flow bg-400% font-black tracking-tight">
                  Sathwik Pamu
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/40 via-purple-400/30 via-pink-400/40 to-rose-400/30 blur-xl -z-10 animate-name-processing"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-purple-400/15 to-pink-400/20 blur-lg animate-pulse-gentle"></div>
              </div>
            </h1>
            
            <div className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 md:mb-8 space-y-4 animate-text-render animation-delay-700">
              <p className="font-bold bg-gradient-to-r from-cyan-300 via-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent leading-relaxed">
                Full-Stack Developer | AI Explorer | Blockchain Enthusiast
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-text-render animation-delay-1400 font-light">
              Building impactful, data-driven, and futuristic applications at the intersection of 
              <span className="text-cyan-400 font-bold hardware-glow mx-2 relative">
                Web
                <div className="absolute -inset-1 bg-cyan-400/20 blur-lg rounded animate-pulse"></div>
              </span>, 
              <span className="text-purple-400 font-bold hardware-glow mx-2 relative">
                AI
                <div className="absolute -inset-1 bg-purple-400/20 blur-lg rounded animate-pulse animation-delay-500"></div>
              </span>, and 
              <span className="text-pink-400 font-bold hardware-glow mx-2 relative">
                Blockchain
                <div className="absolute -inset-1 bg-pink-400/20 blur-lg rounded animate-pulse animation-delay-1000"></div>
              </span>.
            </p>
          </div>

          {/* Hardware-Styled CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center items-center mb-10 md:mb-20 animate-text-render animation-delay-2100 w-full max-w-3xl mx-auto px-4">
            <button
              onClick={scrollToProjects}
              className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 via-blue-500 via-purple-600 to-pink-600 text-white font-bold text-sm sm:text-base rounded-2xl overflow-hidden transition-all duration-1000 hover:scale-105 transform-gpu w-full sm:w-auto"
              style={{
                boxShadow: '0 20px 40px -8px rgba(59, 130, 246, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>View Projects</span>
                <div className="w-2 h-2 bg-white rounded-full animate-ping hidden sm:block"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-700 to-pink-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-1000 -z-10"></div>
            </button>
            
            <button
              onClick={scrollToContact}
              className="group relative px-6 sm:px-10 py-4 sm:py-5 border-2 border-cyan-400/60 text-cyan-400 font-bold text-sm sm:text-base rounded-2xl transition-all duration-1000 hover:border-purple-400/60 hover:text-purple-400 hover:scale-105 backdrop-blur-xl bg-white/10 transform-gpu w-full sm:w-auto"
              style={{
                boxShadow: '0 20px 40px -8px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="relative z-10 text-center block">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-purple-400/15 to-pink-400/15 transform scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/40 via-purple-400/40 to-pink-400/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-1000 -z-10"></div>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 sm:px-10 py-4 sm:py-5 border-2 border-purple-400/60 text-purple-400 font-bold text-sm sm:text-base rounded-2xl transition-all duration-1000 hover:border-pink-400/60 hover:text-pink-400 hover:scale-105 backdrop-blur-xl bg-white/10 transform-gpu w-full sm:w-auto flex items-center justify-center"
              style={{
                boxShadow: '0 20px 40px -8px rgba(168, 85, 247, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="relative z-10 text-center block">View Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/15 via-pink-400/15 to-rose-400/15 transform scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-rose-400/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-1000 -z-10"></div>
            </a>
          </div>

          {/* Hardware-Themed Social Links */}
          <div className="flex justify-center space-x-8 mb-20 animate-text-render animation-delay-2800">
            {[
              { icon: <Mail size={28} />, href: 'mailto:sathwikpamu@gmail.com', color: 'cyan', name: 'Email', gradient: 'from-cyan-400 to-blue-500' },
              { icon: <Linkedin size={28} />, href: 'https://www.linkedin.com/in/sathwik-pamu', color: 'blue', name: 'LinkedIn', gradient: 'from-blue-400 to-purple-500' },
              { icon: <Github size={28} />, href: 'https://github.com/sathwik-70', color: 'purple', name: 'GitHub', gradient: 'from-purple-400 to-pink-500' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-xl border border-${social.color}-400/40 text-gray-400 hover:text-${social.color}-400 transition-all duration-1000 hover:scale-125 transform-gpu`}
                style={{
                  boxShadow: `0 10px 25px -5px rgba(${social.color === 'cyan' ? '6, 182, 212' : social.color === 'blue' ? '59, 130, 246' : '147, 51, 234'}, 0.3)`
                }}
              >
                <div className="relative z-10">{social.icon}</div>
                <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-1000`}></div>
                <div className={`absolute -inset-2 bg-gradient-to-r ${social.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-1000 -z-10`}></div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900/95 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none backdrop-blur-sm border border-gray-700/50">
                  {social.name}
                </div>
              </a>
            ))}
          </div>

          {/* Hardware-Themed Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="group animate-hardware-pulse text-gray-400 hover:text-cyan-400 transition-all duration-1000 hover:scale-150 transform-gpu"
          >
            <div className="relative">
              <ChevronDown size={40} className="group-hover:drop-shadow-2xl filter" />
              <div className="absolute inset-0 bg-cyan-400/50 rounded-full blur-xl scale-0 group-hover:scale-300 transition-transform duration-1000"></div>
              <div className="absolute -inset-4 border border-cyan-400/40 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        .circuit-board-pattern {
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(147, 51, 234, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px);
          background-size: 60px 60px, 60px 60px, 20px 20px, 20px 20px;
          animation: circuit-flow 25s linear infinite;
        }
        
        .motherboard-grid {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.2) 2px, transparent 2px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.2) 2px, transparent 2px);
          background-size: 100px 100px;
          animation: grid-pulse 8s ease-in-out infinite;
        }
        
        @keyframes circuit-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes cpu-heat {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          33% { 
            transform: translateY(-30px) scale(1.1) rotate(120deg);
            opacity: 0.8;
          }
          66% { 
            transform: translateY(-15px) scale(0.9) rotate(240deg);
            opacity: 0.7;
          }
        }
        
        @keyframes data-stream {
          0%, 100% { 
            transform: translateX(0) scaleY(1);
            opacity: 0.4;
          }
          25% { 
            transform: translateX(20px) scaleY(1.2);
            opacity: 0.8;
          }
          50% { 
            transform: translateX(-15px) scaleY(0.8);
            opacity: 0.6;
          }
          75% { 
            transform: translateX(25px) scaleY(1.3);
            opacity: 0.9;
          }
        }
        
        @keyframes led-pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.8;
          }
          25% { 
            transform: scale(1.5);
            opacity: 1;
          }
          50% { 
            transform: scale(1.2);
            opacity: 0.9;
          }
          75% { 
            transform: scale(1.8);
            opacity: 1;
          }
        }
        
        @keyframes hardware-float {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% { 
            transform: translateY(-25px) rotateX(15deg) rotateY(15deg) rotateZ(5deg);
          }
          50% { 
            transform: translateY(-15px) rotateX(-10deg) rotateY(-10deg) rotateZ(-5deg);
          }
          75% { 
            transform: translateY(-30px) rotateX(5deg) rotateY(20deg) rotateZ(10deg);
          }
        }
        
        @keyframes terminal-glow {
          0%, 100% { 
            transform: translateY(0px) rotateX(2deg) rotateY(2deg);
            box-shadow: 0 20px 40px -10px rgba(6, 182, 212, 0.3);
          }
          50% { 
            transform: translateY(-15px) rotateX(-1deg) rotateY(-1deg);
            box-shadow: 0 25px 50px -10px rgba(6, 182, 212, 0.5);
          }
        }
        
        @keyframes data-flow {
          0% { transform: translateX(-100%) skewX(15deg); }
          100% { transform: translateX(300%) skewX(15deg); }
        }
        
        @keyframes data-scan {
          0% { transform: translateX(-100%) skewX(10deg); }
          100% { transform: translateX(150%) skewX(10deg); }
        }
        
        @keyframes cpu-usage {
          0%, 100% { 
            transform: scaleX(0.8);
            opacity: 0.8;
          }
          50% { 
            transform: scaleX(1.2);
            opacity: 1;
          }
        }
        
        @keyframes neural-activity {
          0%, 100% { 
            height: 12px;
            opacity: 0.6;
            transform: scaleY(1);
          }
          50% { 
            height: 20px;
            opacity: 1;
            transform: scaleY(1.3);
          }
        }
        
        @keyframes power-on {
          0%, 100% { 
            transform: rotate(0deg) scale(1);
            filter: brightness(1);
          }
          25% { 
            transform: rotate(15deg) scale(1.1);
            filter: brightness(1.3);
          }
          50% { 
            transform: rotate(-8deg) scale(0.95);
            filter: brightness(0.9);
          }
          75% { 
            transform: rotate(20deg) scale(1.05);
            filter: brightness(1.2);
          }
        }
        
        @keyframes hardware-glow {
          0%, 100% { 
            opacity: 0.5;
            transform: scale(1);
          }
          33% { 
            opacity: 0.9;
            transform: scale(1.1);
          }
          66% { 
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 200% 50%; }
          75% { background-position: 300% 50%; }
        }
        
        @keyframes name-processing {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
          }
          33% { 
            opacity: 0.9;
            transform: scale(1.05);
          }
          66% { 
            opacity: 0.8;
            transform: scale(1.02);
          }
        }
        
        @keyframes system-boot {
          0% { 
            opacity: 0; 
            transform: translateY(60px) scale(0.8);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes text-render {
          0% { 
            opacity: 0; 
            transform: translateY(40px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes hardware-pulse {
          0%, 100% { 
            transform: translateY(0) scale(1);
          }
          50% { 
            transform: translateY(-15px) scale(1.1);
          }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-cpu-heat { animation: cpu-heat 14s ease-in-out infinite; }
        .animate-data-stream { animation: data-stream 8s ease-in-out infinite; }
        .animate-led-pulse { animation: led-pulse 3s ease-in-out infinite; }
        .animate-hardware-float { animation: hardware-float 10s ease-in-out infinite; }
        .animate-terminal-glow { animation: terminal-glow 8s ease-in-out infinite; }
        .animate-data-flow { animation: data-flow 4s ease-in-out infinite; }
        .animate-data-scan { animation: data-scan 1.5s ease-in-out infinite; }
        .animate-cpu-usage { animation: cpu-usage 2s ease-in-out infinite; }
        .animate-neural-activity { animation: neural-activity 1.8s ease-in-out infinite; }
        .animate-power-on { animation: power-on 3s ease-in-out infinite; }
        .animate-hardware-glow { animation: hardware-glow 4s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 5s ease infinite; }
        .animate-name-processing { animation: name-processing 3s ease-in-out infinite; }
        .animate-system-boot { animation: system-boot 1.8s ease-out; }
        .animate-text-render { animation: text-render 1s ease-out; }
        .animate-hardware-pulse { animation: hardware-pulse 3s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate-slow 6s linear infinite; }
        
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
        .animation-delay-2100 { animation-delay: 2.1s; }
        .animation-delay-2800 { animation-delay: 2.8s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-4500 { animation-delay: 4.5s; }
        .animation-delay-6000 { animation-delay: 6s; }
        
        .bg-400% { background-size: 400% 400%; }
        
        .hardware-glow {
          text-shadow: 
            0 0 10px currentColor,
            0 0 20px currentColor,
            0 0 40px currentColor;
        }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Hero;