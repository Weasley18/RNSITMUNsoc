
import React from "react";
import { File, Download, Book, FileText, Globe, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Prepare = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-8 text-center">Prepare for MUN</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
          We've compiled resources to help you prepare for your MUN experience. Whether you're a beginner or experienced delegate, these materials will enhance your performance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy mb-6">Downloadable Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <DocumentItem key={index} document={doc} />
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-6">Recommended Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </div>
        
        <div className="bg-navy text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Need Additional Help?</h2>
          <p className="mb-6">
            Our team is available to provide guidance and answer your questions about MUN preparation. You can schedule a one-on-one session with our experienced delegates.
          </p>
          <button className="bg-white text-navy py-2 px-6 rounded-md hover:bg-gray-200 transition-colors duration-300">
            Schedule a Session
          </button>
        </div>
      </div>
    </div>
  );
};

const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-4">
          {resource.icon}
        </div>
        <CardTitle>{resource.title}</CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {resource.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <a href="#" className="text-navy hover:underline text-sm font-medium">
          Learn more →
        </a>
      </CardFooter>
    </Card>
  );
};

const DocumentItem = ({ document }: { document: Document }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded border border-gray-200">
      <div className="mr-4 text-navy">
        <FileText className="h-8 w-8" />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium">{document.name}</h3>
        <p className="text-sm text-gray-500">{document.size}</p>
      </div>
      <button className="flex items-center text-navy hover:text-navy-dark">
        <Download className="h-5 w-5" />
      </button>
    </div>
  );
};

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0 w-12 text-navy">
        <Book className="h-8 w-8" />
      </div>
      <div>
        <h3 className="font-medium">{book.title}</h3>
        <p className="text-sm text-gray-500">{book.author}</p>
        <p className="text-sm text-gray-700 mt-1">{book.description}</p>
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
