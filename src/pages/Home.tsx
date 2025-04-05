
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import { Award, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [achievementsRef, achievementsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h2 className="section-title">About Our Club</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Modal United Society at R.N. Shetty Institute of Technology is dedicated to promoting diplomacy, 
                international relations, and the United Nations among students. Founded with the vision to create a 
                platform for students to engage in diplomatic simulations, our society has grown to become one of the 
                most active and successful MUN clubs in the region.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Through our Model United Nations conferences, we provide students with an opportunity to step into the 
                shoes of diplomats and engage in debates, negotiations, and resolution drafting on pressing global issues. 
                Our members develop critical skills in public speaking, research, policy analysis, and conflict resolution 
                that are valuable in both academic and professional settings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond conferences, we organize workshops, seminars, and training sessions throughout the academic year 
                to help students prepare for MUNs and enhance their understanding of international affairs. Our alumni 
                have gone on to pursue successful careers in diplomacy, international organizations, and various other fields.
              </p>
            </motion.div>
            <motion.div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-navy mb-6">Our Vision</h3>
              <motion.div 
                className="flex items-start mb-6"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mr-4 mt-1">
                  <Target className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Global Perspective</h4>
                  <p className="text-gray-700 text-sm">To cultivate a global perspective among students and encourage them to think beyond boundaries.</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start mb-6"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mr-4 mt-1">
                  <Users className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Leadership Development</h4>
                  <p className="text-gray-700 text-sm">To develop the next generation of leaders equipped with diplomatic skills and international awareness.</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mr-4 mt-1">
                  <Award className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Excellence in Debate</h4>
                  <p className="text-gray-700 text-sm">To establish a tradition of excellence in debate, negotiation, and resolution drafting.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Achievements Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        ref={achievementsRef}
        initial="hidden"
        animate={achievementsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <motion.h2 className="section-title text-center" variants={itemVariants}>Our Achievements</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Best Delegation", description: "Won Best Delegation at the National MUN Conference 2023 hosted by IIT Bombay." },
              { title: "Outstanding Crisis Committee", description: "Our crisis committee was recognized for excellence at the South India MUN 2022." },
              { title: "Best Conference Organization", description: "Our RNSIT MUN 2023 was awarded the Best Organized Conference by the MUN Association of India." },
              { title: "Individual Accolades", description: "Our members have won over 50 individual awards at various national and international MUNs." },
              { title: "Community Impact", description: "Recognized for organizing Model UN training for underprivileged schools in Bengaluru." },
              { title: "Conference Growth", description: "Successfully scaled our annual conference from 50 to 300+ delegates in just three years." }
            ].map((achievement, index) => (
              <motion.div 
                key={index}
                className="card p-6 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="h-12 w-12 bg-navy rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{achievement.title}</h3>
                <p className="text-center text-gray-700">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
