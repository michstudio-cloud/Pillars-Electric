import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_AREAS_DATA } from '../constants';
import Button from './Button';
import SectionHeader from './SectionHeader';
import { Cta } from '../types';

interface InteractiveMapSectionProps {
  copy: string;
  cta: Cta;
}

const InteractiveMapSection: React.FC<InteractiveMapSectionProps> = ({ copy, cta }) => {
  return (
    <section id="service-area-map" className="py-24 px-8 bg-black"> {/* Adjusted padding */}
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader headline="Our Service Area" copy={copy} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">
          {/* Map Visual (more prominent) */}
          <div className="relative w-full aspect-video rounded-4xl shadow-2xl border-2 border-gold-accent overflow-hidden"> {/* Adjusted rounded */}
            <img
              src="https://images.unsplash.com/photo-1629858341991-3d7c57c2a74c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" // Texas map placeholder
              alt="Texas Service Area Map"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for aesthetic, not interaction */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          {/* Service Area Links (clearly separate and clickable) */}
          <div className="bg-neutral-800 p-10 rounded-4xl shadow-xl text-left"> {/* Adjusted background, padding, rounded */}
            <h3 className="text-3xl font-bold text-gold-accent mb-8">Explore Our Key Service Areas</h3> {/* Adjusted font size and margin-bottom */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-xl"> {/* Adjusted gap */}
              {SERVICE_AREAS_DATA.map((area) => (
                <li key={area.id}>
                  <Link
                    to={`/service-areas/${area.id}`}
                    className="group flex items-center text-white hover:text-gold-accent transition-colors duration-300"
                  >
                    <span className="inline-block w-3 h-3 bg-gold-accent rounded-full mr-3 group-hover:bg-light-gold-accent transition-colors duration-300"></span> {/* Adjusted size */}
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20"> {/* Increased margin-top */}
          <Button cta={cta} variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapSection;