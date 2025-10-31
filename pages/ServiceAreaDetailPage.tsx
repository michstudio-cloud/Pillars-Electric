import React from 'react';
import { useParams } from 'react-router-dom';
import { SERVICE_AREAS_DATA, COMPANY_ADDRESS, DISPATCH_PHONE } from '../constants';
import Hero from '../components/Hero';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { Cta } from '../types';

const ServiceAreaDetailPage: React.FC = () => {
  const { areaId } = useParams<{ areaId: string }>();
  const serviceArea = SERVICE_AREAS_DATA.find((a) => a.id === areaId);

  const getAreaImageUrl = (id: string) => {
    const foundArea = SERVICE_AREAS_DATA.find(sa => sa.id === id);
    return foundArea?.imageUrl || `https://picsum.photos/1920/1080?random=${id.length + 201}`;
  };

  if (!serviceArea) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold text-gold-accent">Service Area Not Found</h1>
      </div>
    );
  }

  // Combine default CTAs with any specific ones for the area
  const defaultCta1: Cta = { text: `Request ${serviceArea.name} Service`, path: '/contact' };
  const defaultCta2: Cta = { text: `Call ${DISPATCH_PHONE}`, isPhone: true, phone: DISPATCH_PHONE };
  const combinedCtas = serviceArea.ctas.length > 0 ? serviceArea.ctas : [defaultCta1, defaultCta2];

  return (
    <div className="min-h-screen">
      <Hero
        headline={serviceArea.heroHeadline}
        subheadline={serviceArea.heroSubheadline}
        body={serviceArea.description}
        imageUrl={getAreaImageUrl(serviceArea.id)}
        className="h-[70vh] min-h-[600px]" // Standardized hero height
      />

      <section className="py-24 px-8 bg-black">
        <div className="max-w-4xl mx-auto p-12 bg-neutral-800 rounded-4xl shadow-xl"> {/* Adjusted background, padding, rounded */}
          <h2 className="text-3xl font-bold text-gold-accent mb-8 text-center leading-tight">{serviceArea.name} Services Include:</h2> {/* Adjusted font size and margin-bottom */}
          <ul className="list-disc list-inside text-xl text-white space-y-4 leading-relaxed"> {/* Adjusted font size and space-y */}
            {serviceArea.servicesIncluded.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="mt-20 text-center">
          {combinedCtas.map((cta, index) => (
            <Button key={index} cta={cta} variant={index === 0 ? 'primary' : 'outline'} className="mx-3 my-3" /> {/* Adjusted margin */}
          ))}
        </div>
      </section>

      {/* Local CTA Footer Block */}
      <div className="py-16 px-8 bg-black"> {/* Wrapper for the CTA block */}
        <div className="max-w-7xl mx-auto bg-neutral-800 text-white py-16 px-8 rounded-4xl shadow-xl text-center text-xl leading-relaxed"> {/* Adjusted background, padding, rounded */}
          <p className="mb-4">Pillars Electrical — {COMPANY_ADDRESS}</p> {/* Increased margin */}
          <p className="mb-4">Call {DISPATCH_PHONE}</p> {/* Increased margin */}
          <p>Serving {serviceArea.name} and surrounding areas.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaDetailPage;