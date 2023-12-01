import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learning />
      <Contact />
      
      {/* Ultra-Premium Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-12 animate-fade-in-up">
              <h3 className="text-5xl font-black mb-6 relative">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-flow bg-300%">
                  Sathwik Pamu
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-2xl -z-10 animate-pulse-gentle"></div>
              </h3>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed font-light">
                Building the future one line of code at a time. Always learning, always growing, always innovating.
              </p>
            </div>
            
            {/* Enhanced Divider */}
            <div className="border-t border-gradient-to-r from-transparent via-gray-600 to-transparent pt-12 mb-8">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 via-purple-400/50 to-transparent animate-gradient-flow"></div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 animate-fade-in-up animation-delay-500">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                <p className="text-gray-400 text-sm font-medium">
                  © 2024 Sathwik Pamu. Crafted with ❤️ and lots of ☕
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span>Available for opportunities</span>
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-8">
                <a 
                  href="#hero" 
                  className="group flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-500 font-medium hover:scale-110"
                >
                  <span>Back to Top</span>
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                    <div className="w-2 h-2 border-t-2 border-r-2 border-current rotate-[-135deg] group-hover:rotate-45 transition-transform duration-500"></div>
                  </div>
                </a>
                
                {/* Social Links in Footer */}
                <div className="flex items-center space-x-4">
                  {[
                    { href: 'mailto:sathwikpamu@gmail.com', label: 'Email', color: 'hover:text-cyan-400' },
                    { href: 'https://www.linkedin.com/in/sathwik-pamu', label: 'LinkedIn', color: 'hover:text-blue-400' },
                    { href: 'https://github.com/sathwik-70', label: 'GitHub', color: 'hover:text-purple-400' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-500 ${social.color} transition-all duration-300 hover:scale-125 text-sm font-medium`}
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Enhanced Tech Stack Badge */}
            <div className="mt-12 pt-8 border-t border-gray-700/50 animate-fade-in-up animation-delay-1000">
              <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Built with React.js</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-300"></div>
                  <span>Styled with Tailwind CSS</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-600"></div>
                  <span>Powered by Vite</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-900"></div>
                  <span>Deployed on Netlify</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          
          @keyframes gradient-flow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes pulse-gentle {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
          .animate-gradient-flow { animation: gradient-flow 4s ease infinite; background-size: 200% 200%; }
          .animate-pulse-gentle { animation: pulse-gentle 3s ease-in-out infinite; }
          .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
          
          .animation-delay-500 { animation-delay: 0.5s; }
          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-300 { animation-delay: 0.3s; }
          .animation-delay-600 { animation-delay: 0.6s; }
          .animation-delay-900 { animation-delay: 0.9s; }
          
          .bg-300% { background-size: 300% 300%; }
        `}</style>
      </footer>
    </div>
  );
}

export default App;