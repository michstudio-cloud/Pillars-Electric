import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAVIGATION_LINKS, COMPANY_NAME, DISPATCH_PHONE } from '../constants';
import { NavLink as NavLinkType } from '../types';

const Dropdown: React.FC<{ subLinks: NavLinkType[] }> = ({ subLinks }) => (
  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-neutral-900 ring-1 ring-white ring-opacity-5 z-20">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      {subLinks.map((subLink) => (
        <NavLink
          key={subLink.path}
          to={subLink.path}
          className={({ isActive }) =>
            `block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-gold-accent
            ${isActive ? 'text-gold-accent bg-gray-800' : ''}`
          }
          role="menuitem"
        >
          {subLink.name}
        </NavLink>
      ))}
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (linkName: string) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName);
  };

  return (
    <header className="bg-black shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-gold-accent hover:text-light-gold-accent transition-colors duration-300">
              {COMPANY_NAME.split(',')[0]}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-10">
            {NAVIGATION_LINKS.map((link) => (
              <div key={link.name} className="relative">
                {link.subLinks ? (
                  <button
                    onClick={() => handleDropdownToggle(link.name)}
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="flex items-center text-white hover:text-gold-accent font-medium py-5 focus:outline-none transition-colors duration-300"
                    aria-expanded={activeDropdown === link.name}
                  >
                    {link.name}
                    <svg
                      className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-white hover:text-gold-accent font-medium transition-colors duration-300
                      ${isActive ? 'text-gold-accent' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
                {link.subLinks && activeDropdown === link.name && (
                  <Dropdown subLinks={link.subLinks} />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAVIGATION_LINKS.map((link) => (
            <div key={link.name}>
              {link.subLinks ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(link.name)}
                    className="flex items-center justify-between w-full text-left text-white hover:bg-gray-800 hover:text-gold-accent block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {link.name}
                    <svg
                      className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {activeDropdown === link.name && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-800 rounded-md mt-1">
                      {link.subLinks.map((subLink) => (
                        <NavLink
                          key={subLink.path}
                          to={subLink.path}
                          onClick={() => setIsOpen(false)} // Close menu on sublink click
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-light-gold-accent rounded-md
                            ${isActive ? 'text-gold-accent bg-gray-700' : ''}`
                          }
                        >
                          {subLink.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  className={({ isActive }) =>
                    `text-white hover:bg-gray-800 hover:text-gold-accent block px-3 py-2 rounded-md text-base font-medium
                    ${isActive ? 'bg-gray-800 text-gold-accent' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
       {/* Sticky Call Dispatch Button for Mobile */}
       <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gold-accent p-3 text-center z-40 shadow-xl">
        <a
          href={`tel:${DISPATCH_PHONE}`}
          className="block text-black font-bold text-lg"
          aria-label={`Call Dispatch ${DISPATCH_PHONE}`}
        >
          Call Dispatch {DISPATCH_PHONE}
        </a>
      </div>
    </header>
  );
};

export default Header;