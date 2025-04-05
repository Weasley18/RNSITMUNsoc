
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/e94f3eee-c30a-479a-a870-66c5f3bd47cf.png"
                alt="RNSIT MUN Logo"
                className="h-16 mr-3"
              />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Modal United Society of R.N. Shetty Institute of Technology is dedicated to teaching diplomacy, international relations, and the United Nations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-navy-light pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-navy-light transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-navy-light transition-colors duration-300">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-navy-light transition-colors duration-300">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/prepare" className="text-gray-300 hover:text-navy-light transition-colors duration-300">
                  Prepare
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-navy-light transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-navy-light pb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-navy-light" />
                <span className="text-gray-300">
                  R.N. Shetty Institute of Technology, Bengaluru
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-navy-light" />
                <span className="text-gray-300">+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-navy-light" />
                <span className="text-gray-300">info@rnsitmun.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Modal United Society of RNSIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
