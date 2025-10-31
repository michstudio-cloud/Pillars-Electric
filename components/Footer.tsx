import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FOOTER_CONTENT } from '../constants';

const Footer: React.FC = () => {
  const { column1, column2Links, column3Areas, column4, bottomBar } = FOOTER_CONTENT;

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {/* Column 1: Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-gold-accent mb-4">{column1.name}</h3>
          <address className="not-italic space-y-2 text-white text-lg leading-relaxed">
            <p>{column1.address}</p>
            <p>{column1.dispatch}</p>
            <p>{column1.email}</p>
            <p>{column1.license}</p>
            <p>{column1.status}</p>
          </address>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-gold-accent mb-4">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            {column2Links.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-gold-accent transition-colors duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Service Areas */}
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-gold-accent mb-4">Service Areas</h3>
          <ul className="space-y-2 text-lg">
            {column3Areas.map((area) => (
              <li key={area}>
                <span className="hover:text-gold-accent transition-colors duration-300 cursor-default">
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Certifications & Legal */}
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-gold-accent mb-4">{column4.title}</h3>
          <ul className="space-y-2 mb-4 text-lg">
            {column4.certifications.map((cert) => (
              <li key={cert} className="text-white">
                {cert}
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-lg">
            {column4.links.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-gold-accent transition-colors duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-400">
        <p>{bottomBar}</p>
      </div>
    </footer>
  );
};

export default Footer;