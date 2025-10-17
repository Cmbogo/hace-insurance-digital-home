import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import haceLogoImage from '@/assets/hace-logo.png';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Get Insurance', path: '/get-insurance' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-border shadow-sm" style={{ backgroundColor: '#d9d9d9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={haceLogoImage} alt="HACE Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop nav (pill-style) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => {
                const active = isActivePath(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'bg-[#3766e6] text-white shadow-md'
                        : 'text-gray-800 hover:bg-[#3766e6]/20 hover:text-[#3766e6]'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact button (desktop) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center px-4 py-2 rounded-full bg-[#3766e6] text-white hover:bg-blue-700 transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              Request Quote
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-[#3766e6] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#d9d9d9] border-t border-border">
            {navItems.map((item) => {
              const active = isActivePath(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    active
                      ? 'bg-[#3766e6] text-white'
                      : 'text-gray-800 hover:bg-[#3766e6]/20 hover:text-[#3766e6]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-border mt-4">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#3766e6] text-white hover:bg-blue-700 transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-2" />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
