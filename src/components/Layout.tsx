
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThreeDBackground from "./ThreeDBackground";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <ThreeDBackground />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
