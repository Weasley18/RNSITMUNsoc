
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-navy shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/">
              <img 
                src="/lovable-uploads/e94f3eee-c30a-479a-a870-66c5f3bd47cf.png" 
                alt="RNSIT MUN Logo" 
                className="h-12"
              />
            </NavLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  isActive ? "navbar-item active-nav-item" : "navbar-item"
                }
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/events" 
                className={({isActive}) => 
                  isActive ? "navbar-item active-nav-item" : "navbar-item"
                }
              >
                Events
              </NavLink>
              <NavLink 
                to="/team" 
                className={({isActive}) => 
                  isActive ? "navbar-item active-nav-item" : "navbar-item"
                }
              >
                Team
              </NavLink>
              <NavLink 
                to="/prepare" 
                className={({isActive}) => 
                  isActive ? "navbar-item active-nav-item" : "navbar-item"
                }
              >
                Prepare
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({isActive}) => 
                  isActive ? "navbar-item active-nav-item" : "navbar-item"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-navy-light focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-dark animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-navy-light bg-navy-dark" : "text-white hover:text-navy-light hover:bg-navy-dark"
                }`
              }
              end
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-navy-light bg-navy-dark" : "text-white hover:text-navy-light hover:bg-navy-dark"
                }`
              }
              onClick={toggleMenu}
            >
              Events
            </NavLink>
            <NavLink
              to="/team"
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-navy-light bg-navy-dark" : "text-white hover:text-navy-light hover:bg-navy-dark"
                }`
              }
              onClick={toggleMenu}
            >
              Team
            </NavLink>
            <NavLink
              to="/prepare"
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-navy-light bg-navy-dark" : "text-white hover:text-navy-light hover:bg-navy-dark"
                }`
              }
              onClick={toggleMenu}
            >
              Prepare
            </NavLink>
            <NavLink
              to="/contact"
              className={({isActive}) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-navy-light bg-navy-dark" : "text-white hover:text-navy-light hover:bg-navy-dark"
                }`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
