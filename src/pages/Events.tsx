
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

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
                title="RNSIT MUN 2024"
                date="September 15-16, 2024"
                location="R.N. Shetty Institute of Technology"
                description="Our flagship annual conference featuring six exciting committees with diverse agendas. Open to delegates from all colleges and universities."
                image="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
              <EventCard 
                title="Diplomacy Workshop"
                date="July 24, 2024"
                location="Virtual Event"
                description="A comprehensive workshop on diplomatic skills, procedure, and resolution drafting for beginners and intermediate delegates."
                image="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
              <EventCard 
                title="Inter-College Debate Competition"
                date="August 5, 2024"
                location="R.N. Shetty Institute of Technology"
                description="A platform for students to showcase their debating skills on international issues and policy matters."
                image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="ongoing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EventCard 
                title="Training Series: Public Speaking"
                date="April 1-30, 2024"
                location="R.N. Shetty Institute of Technology"
                description="A month-long training program to enhance public speaking skills for MUN delegates. Sessions held every Saturday."
                image="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
              <EventCard 
                title="Model UN Delegation Selection"
                date="April 10-20, 2024"
                location="R.N. Shetty Institute of Technology"
                description="Selection process for the RNSIT delegation to represent our institution at upcoming national MUN conferences."
                image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EventCard 
                title="RNSIT MUN 2023"
                date="September 10-11, 2023"
                location="R.N. Shetty Institute of Technology"
                description="Our annual conference with over 250 delegates from 20+ institutions across South India."
                image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
              <EventCard 
                title="International Relations Seminar"
                date="January 15, 2023"
                location="R.N. Shetty Institute of Technology"
                description="A seminar on current international relations challenges featuring speakers from diplomatic services."
                image="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
              <EventCard 
                title="Freshers' Orientation MUN"
                date="August 20, 2023"
                location="R.N. Shetty Institute of Technology"
                description="An introductory MUN session for first-year students to familiarize them with MUN procedures and protocols."
                image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
              <EventCard 
                title="Regional Schools' MUN"
                date="February 25-26, 2023"
                location="R.N. Shetty Institute of Technology"
                description="A Model UN conference organized for high school students to introduce them to the world of MUNs."
                image="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
              <EventCard 
                title="UN Day Celebration"
                date="October 24, 2023"
                location="R.N. Shetty Institute of Technology"
                description="A day-long event with panel discussions, quizzes, and cultural performances celebrating the founding of the UN."
                image="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
              <EventCard 
                title="Crisis Committee Workshop"
                date="November 15, 2023"
                location="R.N. Shetty Institute of Technology"
                description="A specialized workshop on handling crisis committees in MUNs, featuring simulation exercises."
                image="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <p className="text-sm font-medium text-gray-700 mb-2">{location}</p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="btn-primary text-sm">Learn More</button>
      </div>
    </div>
  );
};

export default Events;
