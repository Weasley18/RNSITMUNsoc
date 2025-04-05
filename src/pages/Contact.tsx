import React from "react";
import { Mail, Phone, MapPin, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
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
          Contact Us
        </motion.h1>
        
        <motion.p 
          className="text-xl text-white/80 mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have questions about our events or how to get involved? We'd love to hear from you. Reach out to the Modal United Society through any of the methods below.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/20 shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Your Name</Label>
                    <Input id="name" placeholder="Full Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    className="min-h-32 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                
                <Button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-none shadow-md">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <motion.div variants={itemVariants}>
                <ContactCard 
                  icon={<MapPin className="h-6 w-6 text-cyan-400" />}
                  title="Visit Us"
                  content={<p>R.N. Shetty Institute of Technology<br />Channasandra, Bengaluru<br />Karnataka, India - 560098</p>}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <ContactCard 
                  icon={<Phone className="h-6 w-6 text-cyan-400" />}
                  title="Call Us"
                  content={<p>+91 1234567890<br />+91 9876543210</p>}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <ContactCard 
                  icon={<Mail className="h-6 w-6 text-cyan-400" />}
                  title="Email Us"
                  content={<p>info@rnsitmun.org<br />president@rnsitmun.org<br />secretary@rnsitmun.org</p>}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <ContactCard 
                  icon={<Users className="h-6 w-6 text-cyan-400" />}
                  title="Join Us"
                  content={<p>We welcome new members throughout the academic year. Fill out our membership form to join our society.</p>}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <ContactCard 
                  icon={<Calendar className="h-6 w-6 text-cyan-400" />}
                  title="Meeting Times"
                  content={<p>General Body Meetings:<br />Every Saturday, 2:00 PM - 4:00 PM<br />Committee Room, Main Building</p>}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/20 shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
          <p className="text-white/80 mb-6">
            Stay updated with our latest events and activities by following us on social media.
          </p>
          <div className="flex justify-center space-x-6">
            <SocialLink type="facebook" />
            <SocialLink type="twitter" />
            <SocialLink type="instagram" />
            <SocialLink type="linkedin" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ContactCard = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode, 
  title: string, 
  content: React.ReactNode 
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start">
        <div className="mr-4 mt-1">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
          <div className="text-white/80">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ type }: { type: string }) => {
  let icon;
  
  switch (type) {
    case 'facebook':
      icon = (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      );
      break;
    case 'twitter':
      icon = (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      );
      break;
    case 'instagram':
      icon = (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      );
      break;
    case 'linkedin':
      icon = (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
      break;
    default:
      icon = null;
  }
  
  return (
    <a 
      href="#" 
      className="text-white/70 hover:text-cyan-400 transition-colors duration-300"
      aria-label={`${type} link`}
    >
      {icon}
    </a>
  );
};

export default Contact;
