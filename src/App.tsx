import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Prepare from "./pages/Prepare";
import Contact from "./pages/Contact";
import CoreCommittee from './pages/CoreCommittee';
import DelegationTeam from './pages/DelegationTeam';
import NotFound from "./pages/NotFound";
import EditingTeam from './pages/EditingTeam';
import EventTeam from './pages/EventTeam';
import ContentTeam from './pages/ContentTeam';
import OurCommittees from './pages/OurCommittees';

const queryClient = new QueryClient();

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="team">
            <Route index element={<Team />} />
            <Route path="core" element={<CoreCommittee />} />
            <Route path="delegation" element={<DelegationTeam />} />
            <Route path="editing" element={<EditingTeam />} />
            <Route path="event" element={<EventTeam />} />
            <Route path="content" element={<ContentTeam />} />
          </Route>
          <Route path="committees" element={<OurCommittees />} />
          <Route path="prepare" element={<Prepare />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <AnimatedRoutes />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
