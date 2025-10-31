import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAVIGATION_LINKS, COMPANY_NAME, DISPATCH_PHONE } from '../constants';
import { NavLink as NavLinkType } from '../types';

const Dropdown: React.FC<{ subLinks: NavLinkType[] }> = ({ subLinks }) => (
  <div className="absolute left-0 mt-3 w-64 rounded-xl shadow-lg bg-neutral-800 ring-1 ring-white ring-opacity-5 z-20 overflow-hidden"> {/* Adjusted rounded, bg, width */}
    <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu"> {/* Adjusted padding */}
      {subLinks.map((subLink) => (
        <NavLink
          key={subLink.path}
          to={subLink.path}
          className={({ isActive }) =>
            `block px-5 py-3 text-lg text-white hover:bg-gray-700 hover:text-gold-accent rounded-lg mx-2 my-1
            ${isActive ? 'text-gold-accent bg-gray-700' : ''}`
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
    <header className="fixed w-full z-50 top-0 left-0 right-0 p-4"> {/* Added padding around the floating card */}
      <div className="max-w-7xl mx-auto bg-neutral-900 shadow-xl rounded-5xl h-20 px-8 flex justify-between items-center"> {/* Main header as a floating card */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-3xl font-extrabold tracking-tight text-gold-accent hover:text-light-gold-accent transition-colors duration-300"> {/* Increased font size */}
            {COMPANY_NAME.split(',')[0]}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          {NAVIGATION_LINKS.map((link) => (
            <div
              key={link.name}
              className="relative flex items-center h-full" // Ensure div takes full height for hover area
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.subLinks ? (
                <button
                  className="flex items-center text-white hover:text-gold-accent font-medium text-lg focus:outline-none transition-colors duration-300 h-full" // Increased font size, added h-full
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
                    `text-white hover:text-gold-accent font-medium text-lg transition-colors duration-300 h-full flex items-center
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

      {/* Mobile Menu Content (inside the fixed header, but relative to the entire page) */}
      {/* This ensures the mobile menu slides down OVER the main content card, not pushing it */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden fixed inset-x-0 top-20 mt-4 px-4 pb-4 z-40`}> {/* Adjusted position for floating card */}
        <div className="bg-neutral-900 shadow-xl rounded-4xl py-2"> {/* Mobile menu as a floating card */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className="flex items-center justify-between w-full text-left text-white hover:bg-gray-800 hover:text-gold-accent block px-3 py-3 rounded-xl text-lg font-medium" // Adjusted padding, rounded, font size
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
                      <div className="pl-6 pr-2 py-1 space-y-1 bg-gray-800 rounded-xl mt-1 mx-2"> {/* Adjusted rounded, padding, margin */}
                        {link.subLinks.map((subLink) => (
                          <NavLink
                            key={subLink.path}
                            to={subLink.path}
                            onClick={() => setIsOpen(false)} // Close menu on sublink click
                            className={({ isActive }) =>
                              `block px-3 py-2 text-base text-gray-300 hover:bg-gray-700 hover:text-light-gold-accent rounded-lg
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
                      `text-white hover:bg-gray-800 hover:text-gold-accent block px-3 py-3 rounded-xl text-lg font-medium
                      ${isActive ? 'bg-gray-800 text-gold-accent' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
          {/* Sticky Call Dispatch Button for Mobile - now inside the floating menu card */}
          <div className="bg-gold-accent p-3 text-center rounded-b-4xl mt-4 mx-2 shadow-xl"> {/* Adjusted rounded, margin, shadow */}
            <a
              href={`tel:${DISPATCH_PHONE}`}
              className="block text-black font-bold text-xl" // Increased font size
              aria-label={`Call Dispatch ${DISPATCH_PHONE}`}
            >
              Call Dispatch {DISPATCH_PHONE}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;