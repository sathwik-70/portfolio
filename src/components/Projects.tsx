import React, { useState } from 'react';
import { Github, ExternalLink, CheckCircle2, Clock, Mic, Brain, Coins, BookOpen, Home, QrCode, Star, Cpu, HardDrive, Monitor, Eye, GraduationCap } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      icon: <BookOpen size={28} />,
      name: 'BookHub — E-Library Management Application',
      description: 'A React.js-based digital library platform for browsing, borrowing, and managing digital books. Includes an admin dashboard for inventory control, user authentication, and responsive design for mobile-friendly book browsing.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Authentication'],
      status: 'Completed',
      github: 'https://github.com/sathwik-70/BookHub',
      live: 'https://dbookhub.netlify.app',
      color: 'from-emerald-500 to-teal-500',
      glowColor: 'emerald',
      isUpcoming: false,
      progress: 100
    },
    {
      icon: <Home size={28} />,
      name: 'HomeStead Haven — Home Rentals Web Application',
      description: 'A property rental platform built with React.js, featuring property listings, search filters, booking management, and an admin dashboard for property owners.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Real Estate'],
      status: 'Completed',
      github: 'https://github.com/sathwik-70/HomeStead-Haven',
      live: 'https://homesteadhaven.netlify.app/',
      color: 'from-orange-500 to-red-500',
      glowColor: 'orange',
      isUpcoming: false,
      progress: 100
    },
    {
      icon: <QrCode size={28} />,
      name: 'QuRe — QR Code Powered Health Report Management System',
      description: 'An online health record management system that allows users to securely create accounts and store their medical reports digitally. Each user account is linked to a unique QR code, which hospitals and clinics can scan to instantly access the patient\'s health records.',
      tech: ['React.js', 'Node.js', 'QR Code API', 'Healthcare', 'Security'],
      status: 'Completed',
      github: 'https://github.com/sathwik-70/QuRe',
      live: 'https://qure.netlify.app',
      color: 'from-blue-500 to-indigo-500',
      glowColor: 'blue',
      isUpcoming: false,
      progress: 100
    },
    {
      icon: <Eye size={28} />,
      name: 'IDRiD — Diabetic Retinopathy Analysis System',
      description: 'A comprehensive Deep Learning solution for automated diagnosis of Diabetic Retinopathy using the IDRiD dataset. Features disease severity grading (95.88% accuracy), lesion segmentation with U-Net, and optic disc/fovea localization with ResNet-18.',
      tech: ['Python', 'EfficientNet-B0', 'U-Net', 'ResNet-18', 'Streamlit', 'Deep Learning'],
      status: 'Completed',
      github: 'https://github.com/sathwik-70/Diabetic-Retinopathy',
      live: 'https://diabeticretinopathy404.streamlit.app/',
      color: 'from-rose-500 to-pink-600',
      glowColor: 'red',
      isUpcoming: false,
      progress: 100
    },
    {
      icon: <GraduationCap size={28} />,
      name: 'Smart Placement Portal — Next-Gen Edition',
      description: 'A production-ready MERN stack placement portal featuring AI-driven job recommendations via Python/Flask ML service, role-based dashboards for Students, Companies & Admins, JWT authentication with OTP verification, and a premium glassmorphic UI.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask', 'Machine Learning'],
      status: 'Completed',
      github: 'https://github.com/sathwik-70/smartplacement',
      live: 'https://cseplacement.onrender.com',
      color: 'from-violet-500 to-purple-600',
      glowColor: 'purple',
      isUpcoming: false,
      progress: 100
    },
    {
      icon: <Coins size={28} />,
      name: 'Jupymate — Solana DeFi Dashboard',
      description: 'A decentralized finance app for the Solana ecosystem integrating Jupiter APIs for token swaps, portfolio analytics, DCA, and limit order management.',
      tech: ['React.js', 'Solana Web3.js', 'Jupiter APIs', 'TypeScript', 'DeFi'],
      status: 'Completed',
      github: 'https://github.com/sathwik-70/jupymate',
      live: 'https://jupymate.netlify.app',
      color: 'from-purple-500 to-cyan-500',
      glowColor: 'purple',
      isUpcoming: false,
      progress: 100
    },
    {
      icon: <Brain size={28} />,
      name: 'Kidney CT Scan Analyser',
      description: 'A deep learning-based diagnostic tool for analyzing kidney CT scans, predicting abnormalities using CNNs, with a real-time visual feedback system.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Medical Imaging'],
      status: 'Completed',
      github: 'https://github.com/sathwik-70/KidneyScanAnalysis',
      live: 'https://kidneyscananalysis.netlify.app',
      color: 'from-red-500 to-pink-500',
      glowColor: 'red',
      isUpcoming: false,
      progress: 100
    },
    {
      icon: <Mic size={28} />,
      name: 'Voice-Controlled Android Assistant (Siri Clone)',
      description: 'A full-fledged Android voice assistant app with wake word detection, voice command execution, system automation, and smart home integration.',
      tech: ['Android', 'Java/Kotlin', 'Speech Recognition', 'NLP', 'Machine Learning'],
      status: 'Upcoming',
      github: 'https://github.com/sathwik-70',
      live: null,
      color: 'from-indigo-500 to-purple-500',
      glowColor: 'indigo',
      isUpcoming: true,
      progress: 15
    },
  ];

  const hardwareElements = [
    { icon: <Star size={20} />, position: 'top-32 right-32', color: 'text-cyan-400', delay: '0s' },
    { icon: <Cpu size={24} />, position: 'bottom-32 left-32', color: 'text-purple-400', delay: '2s' },
    { icon: <HardDrive size={22} />, position: 'top-1/2 right-1/4', color: 'text-pink-400', delay: '4s' },
    { icon: <Monitor size={18} />, position: 'bottom-1/3 left-1/4', color: 'text-yellow-400', delay: '6s' },
  ];

  return (
    <section id="projects" aria-label="Projects" className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Hardware-Themed Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="circuit-pattern"></div>
        </div>
        
        <div className="absolute top-20 left-10 md:left-20 w-64 h-64 md:w-[400px] md:h-[400px] bg-gradient-to-r from-purple-300/30 to-blue-300/30 rounded-full blur-xl animate-hardware-float"></div>
        <div className="absolute bottom-20 right-10 md:right-20 w-72 h-72 md:w-[500px] md:h-[500px] bg-gradient-to-r from-pink-300/30 to-indigo-300/30 rounded-full blur-xl animate-hardware-float animation-delay-4000"></div>
        
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-system-startup">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative">
            <span className="text-3xl mr-3 animate-project-pulse">🚀</span>
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 via-purple-800 to-pink-800 bg-clip-text text-transparent">
              Projects I've Built
            </span>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl -z-10 animate-pulse-gentle"></div>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-gradient-flow"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto animate-text-fade animation-delay-700 font-light">
            A showcase of innovative solutions spanning AI, web development, blockchain, and mobile applications
          </p>
        </div>

        {/* Projects Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-white/60 hover:border-gray-200/60 hover:scale-105 transform-gpu p-4 sm:p-0"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                boxShadow: hoveredProject === index 
                  ? `0 25px 50px -12px rgba(${project.glowColor === 'red' ? '239, 68, 68' : 
                      project.glowColor === 'blue' ? '59, 130, 246' :
                      project.glowColor === 'purple' ? '147, 51, 234' :
                      project.glowColor === 'emerald' ? '34, 197, 94' :
                      project.glowColor === 'orange' ? '249, 115, 22' :
                      '99, 102, 241'}, 0.4)` 
                  : 'none'
              }}
            >
              {/* Project Header */}
              <div className={`relative p-4 sm:p-6 bg-gradient-to-r ${project.color} text-white overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative bg-white/20 p-2 rounded-xl backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      {project.icon}
                      <div className="absolute inset-0 bg-white/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-black mb-1">{project.name}</h3>
                      <div className="flex items-center space-x-2">
                        {project.isUpcoming ? (
                          <>
                            <Clock size={14} className="animate-spin-slow" />
                            <span className="text-xs opacity-90 font-bold">Upcoming</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 size={14} className="animate-pulse-gentle" />
                            <span className="text-xs opacity-90 font-bold">Completed</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar for Upcoming Projects */}
                {project.isUpcoming && (
                  <div className="relative z-10 mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold opacity-90">Progress</span>
                      <span className="text-xs font-black">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5">
                      <div
                        className="bg-white h-1.5 rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
                        style={{ width: `${project.progress}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 animate-data-flow"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="relative p-4 sm:p-6 space-y-4">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/40 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
                
                <div className="relative z-10">
                  <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-500 font-medium mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3 group-hover:text-gray-800 transition-colors duration-500">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`group/tech px-3 py-1 text-xs font-bold rounded-lg bg-gradient-to-r ${project.color} text-white hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-md relative overflow-hidden`}
                        >
                          <span className="relative z-10">{tech}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/tech:translate-x-full transition-transform duration-500"></div>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-200/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-all duration-500 font-bold hover:scale-105 text-sm"
                    >
                      <Github size={16} className="group-hover/link:scale-110 group-hover/link:rotate-12 transition-all duration-500" />
                      <span>
                        {project.isUpcoming ? 'Coming Soon' : 'Repository'}
                      </span>
                    </a>
                    
                    {project.live && !project.isUpcoming && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/live flex items-center space-x-2 text-white px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} hover:scale-105 transition-all duration-500 font-bold shadow-sm hover:shadow-md relative overflow-hidden text-sm`}
                      >
                        <span className="relative z-10 flex items-center space-x-2">
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover/live:translate-x-full transition-transform duration-500"></div>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-text-fade animation-delay-1400">
          <div className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-xl rounded-2xl p-10 border border-blue-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 animate-data-flow"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-gray-900 mb-4">Want to see more?</h3>
              <p className="text-gray-600 text-lg mb-6 font-medium">I'm constantly working on new projects and exploring cutting-edge technologies.</p>
              <a
                href="#contact"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 text-white px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/40 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Let's Connect</span>
                  <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
              </a>
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
          animation: circuit-drift 20s linear infinite;
        }
        
        @keyframes circuit-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
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
            transform: translateY(-10px) rotateX(-5deg) rotateY(-5deg) rotateZ(-3deg);
          }
          75% { 
            transform: translateY(-25px) rotateX(3deg) rotateY(15deg) rotateZ(5deg);
          }
        }
        
        @keyframes project-pulse {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-10px) rotate(8deg) scale(1.1); }
          50% { transform: translateY(-5px) rotate(-4deg) scale(1.05); }
          75% { transform: translateY(-15px) rotate(12deg) scale(1.15); }
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
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-hardware-float { animation: hardware-float 10s ease-in-out infinite; }
        .animate-hardware-drift { animation: hardware-drift 8s ease-in-out infinite; }
        .animate-project-pulse { animation: project-pulse 3s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 4s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 4s ease infinite; background-size: 200% 200%; }
        .animate-system-startup { animation: system-startup 1.5s ease-out; }
        .animate-text-fade { animation: text-fade 1s ease-out; }
        .animate-data-flow { animation: data-flow 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 2s linear infinite; }
        
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Projects;