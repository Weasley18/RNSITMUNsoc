import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTeamDropdown = () => setTeamDropdownOpen(!teamDropdownOpen);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  return (
    <nav className={`${scrolled ? 'bg-navy/95 backdrop-blur-sm' : 'bg-navy'} shadow-md sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NavLink to="/">
              <img 
                src="/lovable-uploads/e94f3eee-c30a-479a-a870-66c5f3bd47cf.png" 
                alt="RNSIT MUN Logo" 
                className="h-12"
              />
            </NavLink>
          </motion.div>
          
          <motion.div 
            className="hidden md:block"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <motion.div className="ml-10 flex items-center space-x-8" variants={navVariants}>
              <motion.div variants={itemVariants}>
                <NavLink 
                  to="/" 
                  className={({isActive}) => 
                    isActive ? "navbar-item active-nav-item" : "navbar-item"
                  }
                  end
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink 
                  to="/events" 
                  className={({isActive}) => 
                    isActive ? "navbar-item active-nav-item" : "navbar-item"
                  }
                >
                  Events
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink 
                  to="/committees" 
                  className={({isActive}) => 
                    isActive ? "navbar-item active-nav-item" : "navbar-item"
                  }
                >
                  Our Committees
                </NavLink>
              </motion.div>
              <motion.div 
                variants={itemVariants} 
                className="relative"
                onMouseEnter={() => setTeamDropdownOpen(true)}
                onMouseLeave={() => setTeamDropdownOpen(false)}
              >
                <button 
                  className="navbar-item flex items-center"
                  onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
                >
                  <span>Our Team</span>
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${teamDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {teamDropdownOpen && (
                    <motion.div 
                      className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-md border border-indigo-500/30 overflow-hidden z-50"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="py-1">
                        <Link 
                          to="/team/core" 
                          className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200"
                          onClick={() => setTeamDropdownOpen(false)}
                        >
                          Core Committee
                        </Link>
                        <Link 
                          to="/team/delegation" 
                          className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200"
                          onClick={() => setTeamDropdownOpen(false)}
                        >
                          Delegation Team
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink 
                  to="/prepare" 
                  className={({isActive}) => 
                    isActive ? "navbar-item active-nav-item" : "navbar-item"
                  }
                >
                  Prepare
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink 
                  to="/contact" 
                  className={({isActive}) => 
                    isActive ? "navbar-item active-nav-item" : "navbar-item"
                  }
                >
                  Contact
                </NavLink>
              </motion.div>
            </motion.div>
          </motion.div>
          
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
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-navy-dark"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
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
                to="/committees"
                className={({isActive}) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? "text-navy-light bg-navy-dark" : "text-white hover:text-navy-light hover:bg-navy-dark"
                  }`
                }
                onClick={toggleMenu}
              >
                Our Committees
              </NavLink>
              <div className="relative py-1">
                <button
                  onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-white hover:text-navy-light hover:bg-navy-dark"
                >
                  Our Team
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${teamDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {teamDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4"
                    >
                      <Link
                        to="/team/core"
                        className="block px-3 py-2 rounded-md text-sm text-white hover:text-navy-light"
                        onClick={toggleMenu}
                      >
                        Core Committee
                      </Link>
                      <Link
                        to="/team/delegation"
                        className="block px-3 py-2 rounded-md text-sm text-white hover:text-navy-light"
                        onClick={toggleMenu}
                      >
                        Delegation Team
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
