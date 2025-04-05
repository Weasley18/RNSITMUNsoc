
import React from "react";
import Hero from "@/components/Hero";
import { Award, Target, Users, Globe, TrendingUp, ShieldCheck } from "lucide-react";
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
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <motion.h2 className="section-title text-center mb-16 text-white text-shadow-lg" variants={itemVariants}>
            About Our Club
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="lg:col-span-2 glass-effect p-8 white-glow"
              variants={itemVariants}
            >
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="prose max-w-none"
                >
                  <p className="text-white text-lg leading-relaxed font-medium drop-shadow-md">
                    The Model United Society at R.N. Shetty Institute of Technology is dedicated to promoting diplomacy, 
                    international relations, and the United Nations among students. Founded with the vision to create a 
                    platform for students to engage in diplomatic simulations, our society has grown to become one of the 
                    most active and successful MUN clubs in the region.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="prose max-w-none"
                >
                  <p className="text-white text-lg leading-relaxed font-medium drop-shadow-md">
                    Through our Model United Nations conferences, we provide students with an opportunity to step into the 
                    shoes of diplomats and engage in debates, negotiations, and resolution drafting on pressing global issues. 
                    Our members develop critical skills in public speaking, research, policy analysis, and conflict resolution 
                    that are valuable in both academic and professional settings.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="prose max-w-none"
                >
                  <p className="text-white text-lg leading-relaxed font-medium drop-shadow-md">
                    Beyond conferences, we organize workshops, seminars, and training sessions throughout the academic year 
                    to help students prepare for MUNs and enhance their understanding of international affairs. Our alumni 
                    have gone on to pursue successful careers in diplomacy, international organizations, and various other fields.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="glass-effect p-8 backdrop-blur-lg white-glow">
                <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">Our Vision</h3>
                <motion.div 
                  className="flex items-start mb-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 bg-white/20 p-2 rounded-full flex items-center justify-center border border-white/30">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white drop-shadow-md">Global Perspective</h4>
                    <p className="text-white text-base font-medium">To cultivate a global perspective among students and encourage them to think beyond boundaries.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start mb-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 bg-white/20 p-2 rounded-full flex items-center justify-center border border-white/30">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white drop-shadow-md">Leadership Development</h4>
                    <p className="text-white text-base font-medium">To develop the next generation of leaders equipped with diplomatic skills and international awareness.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 bg-white/20 p-2 rounded-full flex items-center justify-center border border-white/30">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white drop-shadow-md">Excellence in Debate</h4>
                    <p className="text-white text-base font-medium">To establish a tradition of excellence in debate, negotiation, and resolution drafting.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Achievements Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        ref={achievementsRef}
        initial="hidden"
        animate={achievementsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-[-1]"></div>
        <div className="container mx-auto">
          <motion.h2 className="section-title text-center text-white mb-16 text-shadow-lg" variants={itemVariants}>
            Our Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Best Delegation", 
                description: "Won Best Delegation at the National MUN Conference 2023 hosted by IIT Bombay.",
                icon: <Award className="h-6 w-6 text-white" />
              },
              { 
                title: "Outstanding Crisis Committee", 
                description: "Our crisis committee was recognized for excellence at the South India MUN 2022.",
                icon: <ShieldCheck className="h-6 w-6 text-white" />
              },
              { 
                title: "Best Conference Organization", 
                description: "Our RNSIT MUN 2023 was awarded the Best Organized Conference by the MUN Association of India.",
                icon: <TrendingUp className="h-6 w-6 text-white" />
              },
              { 
                title: "Individual Accolades", 
                description: "Our members have won over 50 individual awards at various national and international MUNs.",
                icon: <Target className="h-6 w-6 text-white" />
              },
              { 
                title: "Community Impact", 
                description: "Recognized for organizing Model UN training for underprivileged schools in Bengaluru.",
                icon: <Users className="h-6 w-6 text-white" />
              },
              { 
                title: "Conference Growth", 
                description: "Successfully scaled our annual conference from 50 to 300+ delegates in just three years.",
                icon: <Globe className="h-6 w-6 text-white" />
              }
            ].map((achievement, index) => (
              <motion.div 
                key={index}
                className="glass-effect overflow-hidden hover-scale white-glow"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative p-6">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="h-12 w-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/30">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md">{achievement.title}</h3>
                    <p className="text-white font-medium">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
