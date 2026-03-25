import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Debounced scroll listener for performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          
          const sections = ['hero', 'about', 'skills', 'projects', 'learning', 'contact'];
          const scrollPosition = window.scrollY + 100; // Offset for navbar height
          
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsTransitioning(true);
    setIsMobileMenuOpen(false);
    
    // Create cinematic transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'cinematic-transition-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(30,41,59,0.95) 50%, rgba(0,0,0,0.95) 100%);
      z-index: 9998;
      pointer-events: none;
      opacity: 0;
      backdrop-filter: blur(10px);
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;
    
    // Add cinematic bars
    const topBar = document.createElement('div');
    topBar.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 15%;
      background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 100%);
      transform: translateY(-100%);
      transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;
    
    const bottomBar = document.createElement('div');
    bottomBar.style.cssText = `
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 15%;
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 100%);
      transform: translateY(100%);
      transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;
    
    // Add loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      opacity: 0;
      transition: opacity 0.5s ease;
    `;
    loadingIndicator.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div style="width: 3px; height: 40px; background: linear-gradient(to bottom, #06b6d4, #8b5cf6); animation: loading-bar 1.5s ease-in-out infinite;"></div>
        <div style="width: 3px; height: 40px; background: linear-gradient(to bottom, #8b5cf6, #ec4899); animation: loading-bar 1.5s ease-in-out infinite 0.2s;"></div>
        <div style="width: 3px; height: 40px; background: linear-gradient(to bottom, #ec4899, #06b6d4); animation: loading-bar 1.5s ease-in-out infinite 0.4s;"></div>
        <span style="margin-left: 1rem; background: linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          Transitioning to ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}...
        </span>
      </div>
    `;
    
    overlay.appendChild(topBar);
    overlay.appendChild(bottomBar);
    overlay.appendChild(loadingIndicator);
    document.body.appendChild(overlay);
    
    // Add loading animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes loading-bar {
        0%, 100% { transform: scaleY(0.3); opacity: 0.5; }
        50% { transform: scaleY(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    // Trigger transition
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      topBar.style.transform = 'translateY(0)';
      bottomBar.style.transform = 'translateY(0)';
      
      setTimeout(() => {
        loadingIndicator.style.opacity = '1';
      }, 300);
    });
    
    // Scroll to section after transition
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      // Fade out transition
      setTimeout(() => {
        overlay.style.opacity = '0';
        topBar.style.transform = 'translateY(-100%)';
        bottomBar.style.transform = 'translateY(100%)';
        
        setTimeout(() => {
          document.body.removeChild(overlay);
          document.head.removeChild(style);
          setIsTransitioning(false);
        }, 800);
      }, 1200);
    }, 600);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'learning', label: 'Learning' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Fixed Navigation Header with Enhanced Colors */}
      <nav className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-slate-900/98 via-gray-900/98 via-blue-900/98 to-purple-900/98 backdrop-blur-md shadow-xl shadow-cyan-500/20 border-b border-cyan-500/20 lg:py-1' 
          : 'bg-gradient-to-r from-slate-900/80 via-gray-900/80 via-blue-900/80 to-purple-900/80 backdrop-blur-sm shadow-md shadow-blue-500/10 py-3'
      }`}>
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient-shift"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo with Impressive Effects */}
            <div 
              className="flex-shrink-0 group cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative">
                <span className="text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 via-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent animate-gradient-flow bg-400% group-hover:scale-110 transition-all duration-700 drop-shadow-2xl">
                  Sathwik Pamu
                </span>
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 animate-pulse-glow"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-border-glow"></div>
                <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-cyan-400 animate-sparkle opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
              </div>
            </div>
            
            {/* Enhanced Desktop Navigation with Impressive Colors */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    disabled={isTransitioning}
                    className={`relative px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-700 group overflow-hidden transform-gpu ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-cyan-500/25 via-blue-500/25 via-purple-500/25 to-pink-500/25 backdrop-blur-sm border border-cyan-400/50 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700/40 hover:via-blue-700/40 hover:to-purple-700/40 hover:shadow-lg hover:shadow-blue-500/20'
                    } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {activeSection === item.id && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-blue-400/15 via-purple-400/15 to-pink-400/15 animate-pulse-gentle rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer-slow rounded-2xl"></div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 via-purple-400/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse-bright shadow-lg shadow-cyan-400/50"></div>
                    )}
                    {/* Hover glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Mobile menu button with Impressive Effects */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="group relative p-4 rounded-2xl bg-gradient-to-r from-gray-800/60 via-blue-800/60 to-purple-800/60 backdrop-blur-sm border border-cyan-400/30 text-gray-300 hover:text-white hover:border-cyan-400/60 transition-all duration-700 hover:scale-110 transform-gpu shadow-lg hover:shadow-cyan-500/30"
              >
                <div className="relative z-10 transition-transform duration-500">
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-700"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation with Impressive Colors */}
          {isMobileMenuOpen && (
            <div className="md:hidden animate-slide-down">
              <div className="px-3 pt-3 pb-6 space-y-2 bg-gradient-to-br from-gray-900/98 via-blue-900/98 to-purple-900/98 backdrop-blur-3xl rounded-3xl mt-4 border border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    disabled={isTransitioning}
                    className={`group relative w-full text-left px-6 py-4 rounded-2xl text-base font-bold transition-all duration-700 overflow-hidden transform-gpu ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-cyan-500/25 via-blue-500/25 via-purple-500/25 to-pink-500/25 border border-cyan-400/50 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700/40 hover:via-blue-700/40 hover:to-purple-700/40 hover:shadow-lg hover:shadow-blue-500/20'
                    } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative z-10 flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full transition-all duration-700 ${
                        activeSection === item.id 
                          ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse-bright shadow-lg shadow-cyan-400/50' 
                          : 'bg-gray-600 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400'
                      }`}></div>
                      <span>{item.label}</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 via-purple-400/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                    {/* Mobile hover glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/15 via-purple-400/15 to-pink-400/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-20"></div>

      <style>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 200% 50%; }
          75% { background-position: 300% 50%; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slide-down {
          0% { opacity: 0; transform: translateY(-20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse-bright {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes border-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes sparkle {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.6; }
          25% { transform: rotate(90deg) scale(1.2); opacity: 1; }
          50% { transform: rotate(180deg) scale(0.8); opacity: 0.8; }
          75% { transform: rotate(270deg) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes shimmer-slow {
          0% { transform: translateX(-100%) skewX(15deg); }
          100% { transform: translateX(200%) skewX(15deg); }
        }
        
        .animate-gradient-flow { 
          animation: gradient-flow 4s ease infinite; 
          background-size: 400% 400%; 
        }
        
        .animate-gradient-shift { 
          animation: gradient-shift 6s ease infinite; 
          background-size: 200% 200%; 
        }
        
        .animate-slide-down { 
          animation: slide-down 0.5s ease-out; 
        }
        
        .animate-pulse-glow { 
          animation: pulse-glow 3s ease-in-out infinite; 
        }
        
        .animate-pulse-gentle { 
          animation: pulse-gentle 2s ease-in-out infinite; 
        }
        
        .animate-pulse-bright { 
          animation: pulse-bright 2s ease-in-out infinite; 
        }
        
        .animate-border-glow { 
          animation: border-glow 2.5s ease-in-out infinite; 
        }
        
        .animate-sparkle { 
          animation: sparkle 3s ease-in-out infinite; 
        }
        
        .animate-shimmer-slow { 
          animation: shimmer-slow 3s ease-in-out infinite; 
        }
        
        .bg-400% { 
          background-size: 400% 400%; 
        }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </>
  );
};

export default Navigation;