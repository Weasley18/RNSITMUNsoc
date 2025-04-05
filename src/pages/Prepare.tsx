import React from "react";
import { File, Download, Book, FileText, Globe, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Prepare = () => {
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
          Prepare for MUN
        </motion.h1>
        
        <motion.p 
          className="text-xl text-white/80 mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We've compiled resources to help you prepare for your MUN experience. Whether you're a beginner or experienced delegate, these materials will enhance your performance.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {resources.map((resource, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ResourceCard resource={resource} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 mb-16 border border-indigo-500/20 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Downloadable Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <DocumentItem key={index} document={doc} />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Recommended Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-cyan-600/30 to-blue-700/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/20 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Need Additional Help?</h2>
          <p className="text-white/80 mb-6">
            Our team is available to provide guidance and answer your questions about MUN preparation. You can schedule a one-on-one session with our experienced delegates.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-6 rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md">
            Schedule a Session
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <div className="mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/80 to-blue-600/80 flex items-center justify-center">
          {resource.icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
      <p className="text-white/70 mb-4 text-sm">{resource.description}</p>
      <ul className="space-y-2 pl-1 mb-4">
        {resource.bulletPoints.map((point, index) => (
          <li key={index} className="text-white/80 flex items-start text-sm">
            <span className="text-cyan-400 mr-2">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200 inline-flex items-center">
        Learn more <span className="ml-1">→</span>
      </a>
    </div>
  );
};

const DocumentItem = ({ document }: { document: Document }) => {
  return (
    <div className="flex items-center p-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="mr-4 text-cyan-400">
        <FileText className="h-8 w-8" />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium text-white">{document.name}</h3>
        <p className="text-sm text-white/60">{document.size}</p>
      </div>
      <button className="flex items-center text-white/80 hover:text-cyan-400 transition-colors duration-300">
        <Download className="h-5 w-5" />
      </button>
    </div>
  );
};

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex space-x-4 p-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="flex-shrink-0 w-12 text-cyan-400">
        <Book className="h-8 w-8" />
      </div>
      <div>
        <h3 className="font-medium text-white">{book.title}</h3>
        <p className="text-sm text-white/60">{book.author}</p>
        <p className="text-sm text-white/80 mt-1">{book.description}</p>
      </div>
    </div>
  );
};

interface Resource {
  title: string;
  description: string;
  icon: React.ReactNode;
  bulletPoints: string[];
}

interface Document {
  name: string;
  size: string;
}

interface Book {
  title: string;
  author: string;
  description: string;
}

const resources: Resource[] = [
  {
    title: "Rules of Procedure",
    description: "Understanding parliamentary procedure used in MUN conferences",
    icon: <File className="h-6 w-6 text-white" />,
    bulletPoints: [
      "Formal and informal debate",
      "Points and motions",
      "Voting procedures",
      "Resolution drafting process"
    ]
  },
  {
    title: "Research Methodology",
    description: "How to conduct effective research for your country and committee",
    icon: <Globe className="h-6 w-6 text-white" />,
    bulletPoints: [
      "Country position research",
      "Committee background analysis",
      "Topic exploration",
      "Finding credible sources"
    ]
  },
  {
    title: "Public Speaking",
    description: "Techniques to deliver compelling speeches and arguments",
    icon: <Users className="h-6 w-6 text-white" />,
    bulletPoints: [
      "Structuring effective speeches",
      "Persuasive speaking techniques",
      "Handling questions confidently",
      "Body language and delivery"
    ]
  }
];

const documents: Document[] = [
  { name: "MUN Rules of Procedure Handbook", size: "2.4 MB" },
  { name: "Position Paper Template", size: "345 KB" },
  { name: "Resolution Writing Guide", size: "1.8 MB" },
  { name: "Country Research Template", size: "420 KB" },
  { name: "MUN Glossary of Terms", size: "560 KB" },
  { name: "Debating Techniques Handbook", size: "3.1 MB" }
];

const books: Book[] = [
  {
    title: "The United Nations: A Very Short Introduction",
    author: "Jussi M. Hanhimäki",
    description: "A concise overview of the UN system and its functioning"
  },
  {
    title: "Model United Nations Handbook",
    author: "Gregory Julian",
    description: "Comprehensive guide for MUN delegates of all experience levels"
  },
  {
    title: "Rules of Procedure: A Delegate's Handbook",
    author: "Tanisha M. Fazal",
    description: "Detailed explanation of MUN parliamentary procedure"
  },
  {
    title: "International Relations: A Very Short Introduction",
    author: "Paul Wilkinson",
    description: "Fundamental concepts in international relations theory"
  },
  {
    title: "Public Speaking for Success",
    author: "Dale Carnegie",
    description: "Effective communication techniques for MUN speeches"
  },
  {
    title: "Negotiation: Theory and Practice",
    author: "J. William Breslin",
    description: "Strategies for successful negotiation in committee sessions"
  }
];

export default Prepare;
