import React from 'react';
import { SERVICES_OVERVIEW_CONTENT, SERVICES_DATA } from '../constants';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const ServicesOverview: React.FC = () => {
  const { hero, cta } = SERVICES_OVERVIEW_CONTENT;

  return (
    <div className="min-h-screen">
      <Hero
        headline={hero.headline}
        body={[hero.intro]}
        imageUrl="https://cdn.envato.com/files/249009778/Preview_Image.jpg" // Industrial electrical panel - Envato
        className="h-[70vh] min-h-[600px]" // Standardized hero height
      />

      <section className="py-24 px-8 bg-black">
        <div className="max-w-7xl mx-auto bg-neutral-800 p-12 rounded-4xl shadow-xl"> {/* Adjusted background, padding, rounded */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"> {/* Adjusted margin-top */}
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-20 text-center"> {/* Adjusted margin-top */}
            <Button cta={cta} variant="primary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;