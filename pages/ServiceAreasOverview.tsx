import React from 'react';
import { SERVICE_AREAS_OVERVIEW_CONTENT, SERVICE_AREAS_DATA } from '../constants';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ServiceAreasOverview: React.FC = () => {
  const { hero, cta } = SERVICE_AREAS_OVERVIEW_CONTENT;

  // Split service areas into Greater Houston & Gulf Coast and Statewide
  const localAreas = SERVICE_AREAS_DATA; // All areas are local in this context
  const statewideAreas = ['Austin', 'Dallas', 'San Antonio']; // From prompt copy

  return (
    <div className="min-h-screen">
      <Hero
        headline={hero.headline}
        subheadline={hero.subheadline}
        body={hero.body}
        imageUrl="https://images.unsplash.com/photo-1629858341991-3d7c57c2a74c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" // Texas map or industrial landscape
        className="h-[70vh] min-h-[600px]" // Standardized hero height
      />

      <section className="py-24 px-8 bg-black">
        <SectionHeader headline="Our Local Coverage" copy="Pillars Electrical serves commercial and industrial clients across the Greater Houston metro and Gulf Coast region. Our crews are strategically positioned for rapid response." />

        <div className="max-w-7xl mx-auto bg-neutral-800 p-12 rounded-4xl shadow-xl mt-16"> {/* Adjusted background, padding, rounded, margin-top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"> {/* Adjusted gap */}
            {localAreas.map((area) => (
              <Link
                to={`/service-areas/${area.id}`}
                key={area.id}
                className="block bg-black p-8 rounded-3xl shadow-lg hover:shadow-xl group transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-center" // Adjusted background, padding, rounded, shadow
              >
                <h3 className="text-2xl font-bold text-gold-accent mb-3 group-hover:text-light-gold-accent transition-colors duration-300 leading-tight"> {/* Adjusted font size */}
                  {area.name}
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  {area.id === 'houston' ? 'Headquarters' : 'Local Services'}
                </p>
                <span className="mt-4 inline-block text-gold-accent group-hover:text-light-gold-accent font-semibold transition-colors duration-300">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-24"> {/* Increased margin-top */}
          <SectionHeader headline="Statewide Capabilities" copy="For larger commercial projects, we also deploy crews statewide to support critical infrastructure and development." />
          <div className="max-w-7xl mx-auto mt-16 bg-neutral-800 p-12 rounded-4xl shadow-xl flex flex-wrap justify-center gap-8"> {/* Adjusted background, padding, rounded, margin-top */}
            {statewideAreas.map((area, index) => (
              <div key={index} className="bg-black px-10 py-5 rounded-3xl shadow-md text-2xl font-bold text-white"> {/* Adjusted background, padding, rounded, font size */}
                {area}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center"> {/* Adjusted margin-top */}
          <Button cta={cta} variant="primary" />
        </div>
      </section>
    </div>
  );
};

export default ServiceAreasOverview;