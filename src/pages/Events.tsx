import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-12 text-center">Events</h1>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="upcoming" className="text-sm sm:text-base">Upcoming</TabsTrigger>
              <TabsTrigger value="ongoing" className="text-sm sm:text-base">Ongoing</TabsTrigger>
              <TabsTrigger value="past" className="text-sm sm:text-base">Past</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EventCard 
                title="Concorde 25"
                date="October 5-7, 2025"
                location="R.N. Shetty Institute of Technology"
                description="Our flagship inter-college event bringing together talented students to compete and collaborate in exciting competitions across multiple domains."
                image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
              <EventCard 
                title="Nexus'25"
                date="August 15-16, 2025"
                location="R.N. Shetty Institute of Technology"
                description="An intra-college Model United Nations conference focusing on diplomatic skills and addressing global challenges through thoughtful debate and collaboration."
                image="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="ongoing">
            <div className="flex flex-col items-center justify-center py-16">
              <div className="glass-effect p-8 white-glow max-w-2xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">No Ongoing Events</h3>
                <p className="text-white text-lg">
                  There are no ongoing events at the moment. Check back soon or see our upcoming events.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <MilestoneCard 
                title="Nexus- Intra College MUN"
                date="October 2023"
                description="An internal Model United Nations conference for RNSIT students, providing a platform to practice diplomatic skills and debate international issues."
                image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                link="/milestone/nexus-mun"
              />
              <MilestoneCard 
                title="Atlas- Inter College Quiz Event"
                date="February 2023"
                description="A competitive quiz event focused on international relations, geopolitics, and current affairs, open to participants from colleges across the region."
                image="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                link="/milestone/atlas-quiz"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const EventCard = ({ 
  title, 
  date, 
  location, 
  description, 
  image 
}: { 
  title: string, 
  date: string, 
  location: string, 
  description: string, 
  image: string 
}) => {
  return (
    <div className="card h-full">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="btn-primary text-sm">Learn More</button>
      </div>
    </div>
  );
};

const MilestoneCard = ({ 
  title, 
  date, 
  description, 
  image,
  link
}: { 
  title: string, 
  date: string, 
  description: string, 
  image: string,
  link: string
}) => {
  return (
    <div className="card h-full overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link to={link} className="inline-flex items-center text-navy font-semibold text-sm hover:underline">
          Read More <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Events;
