
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThreeDBackground from "./ThreeDBackground";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-gradient-to-b from-navy/80 via-navy/60 to-navy/80">
      <ThreeDBackground />
      <div className="absolute inset-0 bg-navy/10 backdrop-blur-[1px] z-[-5]"></div>
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
