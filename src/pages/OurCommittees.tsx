import React from "react";
import { motion } from "framer-motion";

const OurCommittees = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const committees = [
    {
      id: 1,
      title: "Research & Intercollege Delegation",
      tasks: [
        "Participate in training sessions and mock conferences to enhance MUN skills",
        "Represent RNSIT MUNSoc at intercollege Model United Nations events",
        "Conduct workshops, curate research materials and mentor future delegates"
      ],
      color: "from-blue-600/30 to-indigo-700/30"
    },
    {
      id: 2,
      title: "Editing & Designing",
      tasks: [
        "Create visually appealing social media posts and promotional content",
        "Design professional posters, illustrations, banners and event creatives",
        "Edit videos and reels to enhance engagement and storytelling"
      ],
      color: "from-purple-600/30 to-pink-700/30"
    },
    {
      id: 3,
      title: "Photography & Videography",
      tasks: [
        "Capture memorable moments during events through high-quality photos and videos",
        "Produce engaging reels and highlight videos for social media",
        "Maintain an archive of visual media for club documentation"
      ],
      color: "from-green-600/30 to-teal-700/30"
    },
    {
      id: 4,
      title: "Content Writing & Drafting",
      tasks: [
        "Draft impactful content for events, reports, and official communication",
        "Compose blogs, opinion pieces, and articles on relevant topics",
        "Write promotional material for event outreach"
      ],
      color: "from-yellow-600/30 to-orange-700/30"
    },
    {
      id: 5,
      title: "Event Planning & Logistics",
      tasks: [
        "Organize and manage logistics during club events",
        "Coordinate with volunteers to ensure seamless execution",
        "Collaborate with team members to conceptualize and finalize event plans"
      ],
      color: "from-red-600/30 to-rose-700/30"
    },
    {
      id: 6,
      title: "Outreach & Marketing",
      tasks: [
        "Develop partnerships with sponsors and collaborators",
        "Promote events within and outside the RNSIT campus",
        "Drive participation and engagement through effective outreach campaigns"
      ],
      color: "from-cyan-600/30 to-blue-700/30"
    },
    {
      id: 7,
      title: "Accounts & Database",
      tasks: [
        "Maintain meticulous records of club finances and expenditures",
        "Organize and analyze event feedback and participant data",
        "Prepare detailed reports to inform strategies for future improvements"
      ],
      color: "from-indigo-600/30 to-violet-700/30"
    }
  ];

  return (
    <motion.div 
      className="py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-white mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Committees
        </motion.h1>

        <motion.p 
          className="text-xl text-white/80 mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The backbone of our organization consists of specialized committees, each playing a vital role in our success
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {committees.map((committee) => (
            <motion.div
              key={committee.id}
              className={`bg-gradient-to-r ${committee.color} backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white font-bold mr-4">
                  {committee.id}
                </div>
                <h2 className="text-2xl font-bold text-white">{committee.title}</h2>
              </div>
              <ul className="space-y-2 pl-6">
                {committee.tasks.map((task, index) => (
                  <li key={index} className="text-white/90 flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurCommittees; 