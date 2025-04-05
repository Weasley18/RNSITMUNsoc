
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-navy bg-opacity-90 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            opacity: "0.2"
          }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Modal United Society
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Shaping Tomorrow's Leaders Through Diplomacy and Dialogue
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/events" className="btn-primary">
                Explore Events
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-md hover:bg-white hover:text-navy transition-colors duration-300">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
