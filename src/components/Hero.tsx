
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-navy bg-opacity-80 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/10 to-navy/80 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              <motion.div 
                className="inline-block bg-white/20 backdrop-blur-sm py-2 px-4 rounded-full mb-6 border border-white/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-sm font-semibold text-white">RNSIT Model United Nations</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-white drop-shadow-lg">Model United</span> <br />
                <span className="text-gradient font-extrabold">Society</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-white font-medium max-w-xl drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Shaping Tomorrow's Leaders Through Diplomacy, Dialogue, and Global Engagement
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/events" className="relative group overflow-hidden">
                  <span className="relative z-10 bg-white text-navy font-bold py-3 px-8 rounded-full flex items-center transition-all duration-300 group-hover:bg-navy-light group-hover:text-white shadow-lg">
                    Explore Events
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </Link>
                
                <Link to="/contact" className="relative group overflow-hidden">
                  <span className="relative z-10 border-2 border-white bg-transparent text-white font-bold py-3 px-8 rounded-full flex items-center transition-all duration-300 group-hover:bg-white group-hover:text-navy shadow-lg">
                    Get Involved
                  </span>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-navy-light/30 backdrop-blur-sm border border-white/30 animate-pulse-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-navy/70 border border-white/40 flex items-center justify-center overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/e94f3eee-c30a-479a-a870-66c5f3bd47cf.png" 
                    alt="RNSIT MUN Logo" 
                    className="w-3/4 h-3/4 object-contain animate-float"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Abstract wave separator */}
      <div className="relative h-32 -mt-16 z-10">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
          <path 
            fill="#FFFFFF" 
            fillOpacity="1" 
            d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,176C672,171,768,117,864,101.3C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
