import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const DelegationTeam = () => {
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

  // College Delegation Team
  const delegationTeam = [
    // First image members
    {
      name: "Aaditya Raj",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Adith D H",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Aditi Revankar",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Agasti Sri Chandralekha",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Alankrita Singh",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Arckit Arihant",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "J V Benakasree",
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Kartik Prasad",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Lavanya Rao",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Kushi D",
      image: "https://images.unsplash.com/photo-1564463836146-4e30522c2984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mansi A Hiremath",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    
    // Second image members
    {
      name: "Zeyan Shahid Khan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Varun A",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Tanmayee Suresh",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Nishita Bhat",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Yamini C",
      image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Vedha K",
      image: "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Surabhi Rao",
      image: "https://images.unsplash.com/photo-1525735765456-7f67273a9d93?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Sinchana DV",
      image: "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "R J Varsha",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Samartha DN",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Prajwal Gupta",
      image: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          College Delegation Team
        </motion.h1>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-indigo-500/20">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {delegationTeam.map((member, index) => (
              <motion.div 
                key={`delegation-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <MemberCard 
                  name={member.name}
                  image={member.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ 
  name, 
  image 
}: { 
  name: string, 
  image?: string
}) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className="relative mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gray-200 overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl border-2 border-white/30">
          <img 
            src={image || `https://i.pravatar.cc/300?img=${Math.floor(Math.random() * 70)}`} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </motion.div>
      <motion.h3 
        className="text-xl font-bold text-white text-center drop-shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {name}
      </motion.h3>
      <div className="flex space-x-4 mt-3">
        <a href="#" className="text-white hover:text-blue-400 transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="#" className="text-white hover:text-pink-400 transition-colors">
          <Instagram size={18} />
        </a>
      </div>
    </div>
  );
};

export default DelegationTeam; 