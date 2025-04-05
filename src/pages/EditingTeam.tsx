import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const EditingTeam = () => {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      } 
    }
  };

  // Editing & Designing Team
  const editingTeam = [
    {
      name: "Anagha M R",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Vivek Vagale",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Kushi D",
      image: "https://images.unsplash.com/photo-1564463836146-4e30522c2984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Siri A",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <motion.div 
      className="py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-white mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Team
        </motion.h1>
        
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-lg px-2 py-2 rounded-2xl shadow-lg border border-indigo-500/30 w-full max-w-5xl overflow-x-auto scrollbar-hide">
            <div className="flex flex-nowrap justify-center space-x-2">
              {[
                { value: "core", label: "Core Committee", path: "/team/core" },
                { value: "editing", label: "Editing & Designing", path: "/team/editing" },
                { value: "event", label: "Event Management", path: "/team/event" },
                { value: "content", label: "Content Writing", path: "/team/content" }
              ].map((tab) => (
                <button 
                  key={tab.value}
                  className={`whitespace-nowrap text-base sm:text-lg font-medium py-2 px-3 sm:px-4 rounded-xl transition-all duration-300 text-cyan-100 hover:text-white hover:bg-gradient-to-br hover:from-cyan-500/30 hover:to-blue-700/30 ${tab.value === 'editing' ? 'bg-gradient-to-br from-cyan-500/60 to-blue-700/60 shadow-lg text-white font-semibold' : ''} relative overflow-hidden group`}
                  onClick={() => navigate(tab.path)}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {tab.value === 'editing' && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-cyan-400 rounded-full"
                      layoutId="underline"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-indigo-500/20">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {editingTeam.map((member) => (
              <motion.div 
                key={member.name}
                className="flex flex-col items-center"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden shadow-md mb-4 border-2 border-white/30">
                  <img 
                    src={member.image}
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <span className="text-center text-lg text-white font-semibold">{member.name}</span>
                <div className="flex space-x-4 mt-3">
                  <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-white hover:text-pink-400 transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EditingTeam; 