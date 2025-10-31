import React from 'react';
import { useParams } from 'react-router-dom';
import { INDUSTRIES_DATA } from '../constants';
import Hero from '../components/Hero';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const IndustryDetailPage: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = INDUSTRIES_DATA.find((i) => i.id === industryId);

  // Helper to provide a relevant image based on industry ID
  const getIndustryImageUrl = (id: string) => {
    const foundIndustry = INDUSTRIES_DATA.find(i => i.id === id);
    return foundIndustry?.imageUrl || `https://picsum.photos/1920/1080?random=${id.length + 101}`;
  };

  if (!industry) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold text-gold-accent">Industry Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero
        headline={industry.heroHeadline}
        subheadline={industry.heroSubheadline}
        imageUrl={getIndustryImageUrl(industry.id)}
        className="h-[70vh] min-h-[600px]" // Standardized hero height
      />

      <section className="py-24 px-8 bg-black">
        <div className="max-w-4xl mx-auto bg-neutral-800 p-12 rounded-4xl shadow-xl text-xl text-white space-y-8 leading-relaxed"> {/* Adjusted background, padding, rounded, font size */}
          {industry.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {industry.capabilities && industry.capabilities.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16 p-12 bg-neutral-800 rounded-4xl shadow-xl"> {/* Adjusted padding and margin-top */}
            <h2 className="text-3xl font-bold text-gold-accent mb-8 text-center leading-tight">Our Capabilities</h2> {/* Adjusted font size and margin-bottom */}
            <ul className="list-disc list-inside text-xl text-white space-y-4 leading-relaxed"> {/* Adjusted font size and space-y */}
              {industry.capabilities.map((cap, index) => (
                <li key={index}>{cap}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-20 text-center">
          {industry.ctas.map((cta, index) => (
            <Button key={index} cta={cta} variant="primary" className="mx-3 my-3" /> {/* Adjusted margin */}
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustryDetailPage;