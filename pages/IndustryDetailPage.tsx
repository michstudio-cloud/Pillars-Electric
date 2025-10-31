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
    switch (id) {
      case 'warehouses-distribution':
        return 'https://cdn.envato.com/files/420718507/Preview_Image.jpg'; // Warehouse Envato
      case 'data-centers-technology':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Data center Envato
      case 'manufacturing-industrial':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Manufacturing Envato
      case 'multifamily-mixed-use':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Apartment complex Envato
      case 'retail-commercial-property':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Retail interior Envato
      default:
        return `https://picsum.photos/1920/1080?random=${industry.id.length + 101}`; // Fallback random
    }
  };

  if (!industry) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold text-gold-accent">Industry Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20"> {/* pt-20 to offset fixed header */}
      <Hero
        headline={industry.heroHeadline}
        subheadline={industry.heroSubheadline}
        imageUrl={getIndustryImageUrl(industry.id)}
        className="h-[60vh] min-h-[550px]" // Standardized hero height
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-xl text-white space-y-8 leading-relaxed"> {/* Increased text size and spacing */}
          {industry.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {industry.capabilities && industry.capabilities.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16 p-10 bg-neutral-900 rounded-lg shadow-xl"> {/* Increased padding and margin-top */}
            <h2 className="text-3xl font-bold text-gold-accent mb-6 text-center leading-tight">Our Capabilities</h2>
            <ul className="list-disc list-inside text-xl text-white space-y-4 leading-relaxed"> {/* Increased text size and spacing */}
              {industry.capabilities.map((cap, index) => (
                <li key={index}>{cap}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-20 text-center">
          {industry.ctas.map((cta, index) => (
            <Button key={index} cta={cta} variant="primary" className="mx-2 my-2" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustryDetailPage;