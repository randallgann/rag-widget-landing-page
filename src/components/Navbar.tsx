import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated: boolean;
  userProfile?: {
    name?: string;
    picture?: string;
  };
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, userProfile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Company
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
          <Link to="/features" className="text-gray-700 hover:text-primary">Features</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-primary">Pricing</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              {userProfile?.picture && (
                <img 
                  src={userProfile.picture} 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div className="text-sm font-medium">
                {userProfile?.name || 'User'}
              </div>
              <a 
                href="http://localhost:3001/api/admin" 
                className="btn btn-primary"
              >
                API Service
              </a>
              <a 
                href="/logout" 
                className="btn btn-outline"
              >
                Logout
              </a>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <a 
                href="http://localhost:3001/api/auth/login" 
                className="btn btn-outline"
              >
                Log In
              </a>
              <a 
                href="http://localhost:3001/api/auth/login?screen_hint=signup" 
                className="btn btn-primary"
              >
                Sign Up
              </a>
            </div>
          )}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-primary focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-4 py-2">
                  {userProfile?.picture && (
                    <img 
                      src={userProfile.picture} 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div className="text-sm font-medium">
                    {userProfile?.name || 'User'}
                  </div>
                </div>
                <a 
                  href="http://localhost:3001/api/admin" 
                  className="btn btn-primary w-full text-center"
                >
                  API Service
                </a>
                <a 
                  href="/logout" 
                  className="btn btn-outline w-full text-center"
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <a 
                  href="http://localhost:3001/api/auth/login" 
                  className="btn btn-outline w-full text-center"
                >
                  Log In
                </a>
                <a 
                  href="http://localhost:3001/api/auth/login?screen_hint=signup" 
                  className="btn btn-primary w-full text-center"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;