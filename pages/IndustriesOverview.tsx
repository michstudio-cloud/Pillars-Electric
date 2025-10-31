import React from 'react';
import { INDUSTRIES_OVERVIEW_CONTENT, INDUSTRIES_DATA } from '../constants';
import Hero from '../components/Hero';
import IndustryCard from '../components/IndustryCard';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const IndustriesOverview: React.FC = () => {
  const { hero, cta } = INDUSTRIES_OVERVIEW_CONTENT;

  return (
    <div className="min-h-screen">
      <Hero
        headline={hero.headline}
        subheadline={hero.subheadline}
        body={hero.body}
        imageUrl="https://cdn.envato.com/files/249009778/Preview_Image.jpg" // Industrial factory floor - Envato
        className="h-[70vh] min-h-[600px]" // Standardized hero height
      />

      <section className="py-24 px-8 bg-black">
        <div className="max-w-7xl mx-auto bg-neutral-800 p-12 rounded-4xl shadow-xl"> {/* Adjusted background, padding, rounded */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"> {/* Adjusted margin-top */}
            {INDUSTRIES_DATA.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
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

export default IndustriesOverview;