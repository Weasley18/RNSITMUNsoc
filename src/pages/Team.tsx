
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Team = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-12 text-center">Our Team</h1>
        
        <Tabs defaultValue="core" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="core" className="text-sm sm:text-base">Core Committee</TabsTrigger>
              <TabsTrigger value="delegation" className="text-sm sm:text-base">Delegation Team</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="core">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-12">
              {Array.from({ length: 20 }).map((_, index) => (
                <MemberCard 
                  key={`core-${index}`} 
                  name={`Core Member ${index + 1}`}
                  position={getRandomPosition(true)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="delegation">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-12">
              {Array.from({ length: 25 }).map((_, index) => (
                <MemberCard 
                  key={`delegation-${index}`} 
                  name={`Delegate ${index + 1}`}
                  position={getRandomPosition(false)}
                  compact={true}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const getRandomPosition = (isCore: boolean) => {
  const corePositions = [
    "President", 
    "Vice President", 
    "Secretary General", 
    "Director General", 
    "Under Secretary General", 
    "Chargé d'Affaires", 
    "Director of Operations", 
    "Director of Outreach", 
    "Marketing Head", 
    "Logistics Head"
  ];
  
  const delegationPositions = [
    "Delegate", 
    "Head Delegate", 
    "Research Specialist", 
    "Senior Delegate"
  ];
  
  const positions = isCore ? corePositions : delegationPositions;
  return positions[Math.floor(Math.random() * positions.length)];
};

const MemberCard = ({ 
  name, 
  position, 
  compact = false 
}: { 
  name: string, 
  position: string, 
  compact?: boolean 
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-4">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src={`https://i.pravatar.cc/300?img=${Math.floor(Math.random() * 70)}`} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-navy rounded-full p-1">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <h3 className="font-bold text-navy text-center">{name}</h3>
      <p className="text-sm text-gray-600 text-center">{position}</p>
      {!compact && (
        <div className="flex justify-center mt-2 space-x-2">
          <SocialIcon type="linkedin" />
          <SocialIcon type="twitter" />
          <SocialIcon type="mail" />
        </div>
      )}
    </div>
  );
};

const SocialIcon = ({ type }: { type: string }) => {
  let icon;
  
  switch (type) {
    case 'linkedin':
      icon = (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
      break;
    case 'twitter':
      icon = (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      );
      break;
    case 'mail':
      icon = (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      );
      break;
    default:
      icon = null;
  }
  
  return (
    <a href="#" className="text-gray-400 hover:text-navy">
      {icon}
    </a>
  );
};

export default Team;
