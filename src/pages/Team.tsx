import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Team = () => {
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

  // Core committee members
  const coreCommitteeMembers = [
    {
      name: "Nikhil Nayak",
      position: "President & Initiator",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "V Koushik",
      position: "Head of Finance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Jeshtha Bari",
      position: "Head of Editing & Designing",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Harsh Ringsia",
      position: "",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Aditi Maktedar",
      position: "",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Vamshi Ganesh B",
      position: "",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Shivam Sharma",
      position: "",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Tasmiya Afreen",
      position: "",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Sunanditha B S",
      position: "",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Dhruthi T Y",
      position: "",
      image: "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Editing & Designing team
  const editingTeam = [
    {
      name: "Anagha M R",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Vivek Vagale",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Kushi D",
      image: "https://images.unsplash.com/photo-1564463836146-4e30522c2984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Siri A",
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Event Management team
  const eventTeam = [
    {
      name: "Sai Raksha",
      image: "https://images.unsplash.com/photo-1525735765456-7f67273a9d93?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Tanmayi Prashanth",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Malla Varshini",
      image: "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Yamini C",
      image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Content Writing team
  const contentTeam = [
    {
      name: "Aditi Revankar",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Nihal N",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Roshna",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

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
          Our Team
        </motion.h1>
        
        <Tabs defaultValue="core" className="w-full">
          <motion.div 
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <TabsList className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-lg p-2 rounded-2xl shadow-lg border border-indigo-500/30 w-full max-w-2xl">
              {[
                { value: "core", label: "Core Committee" },
                { value: "delegation", label: "Delegation Team" },
                { value: "editing", label: "Editing Team" },
                { value: "event", label: "Event Management" },
                { value: "content", label: "Content Writing" }
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value} 
                  className="text-base sm:text-lg font-medium py-3 px-4 rounded-xl transition-all duration-300 text-cyan-100 hover:text-white data-[state=active]:bg-gradient-to-br data-[state=active]:from-cyan-500/60 data-[state=active]:to-blue-700/60 data-[state=active]:shadow-lg data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:scale-105 relative overflow-hidden group"
                >
                  <span className="relative z-10">{tab.label}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-cyan-400 rounded-full"
                    layoutId="underline"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>
          
          <TabsContent value="core">
            <motion.h2 
              className="text-3xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Core Committee Members
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 gap-y-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {coreCommitteeMembers.map((member, index) => (
                <motion.div 
                  key={`core-${index}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <MemberCard 
                    name={member.name}
                    position={member.position}
                    image={member.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="delegation">
            <motion.h2 
              className="text-3xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              College Delegation Team
            </motion.h2>
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
                    position=""
                    image={member.image}
                    compact={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="editing">
            <motion.h2 
              className="text-3xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Editing & Designing
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {editingTeam.map((member, index) => (
                <motion.div 
                  key={`editing-${index}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <MemberCard 
                    name={member.name}
                    position=""
                    image={member.image}
                    compact={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="event">
            <motion.h2 
              className="text-3xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Event Management
            </motion.h2>
            <motion.div className="text-xl text-white/80 mb-3 text-center font-medium">
              (Accounts, Database, Marketing and Logistics)
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-16 mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {eventTeam.map((member, index) => (
                <motion.div 
                  key={`event-${index}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <MemberCard 
                    name={member.name}
                    position=""
                    image={member.image}
                    compact={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="content">
            <motion.h2 
              className="text-3xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Content Writing
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 gap-y-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {contentTeam.map((member, index) => (
                <motion.div 
                  key={`content-${index}`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <MemberCard 
                    name={member.name}
                    position=""
                    image={member.image}
                    compact={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const MemberCard = ({ 
  name, 
  position, 
  image,
  compact = false 
}: { 
  name: string, 
  position: string,
  image?: string,
  compact?: boolean 
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
      {position && (
        <motion.p 
          className="text-base text-white/80 text-center font-medium mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {position}
        </motion.p>
      )}
    </div>
  );
};

export default Team;
