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
    switch (id) {
      case 'houston':
        return 'https://images.unsplash.com/photo-1574577174092-d6c6a4d7d11f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'; // Houston cityscape at dusk
      case 'galveston':
        return 'https://cdn.envato.com/files/320150904/Preview_Video.mp4'; // Crew working in a large electrical room
      case 'the-woodlands':
        return 'https://images.unsplash.com/photo-1596700810356-32d80d285a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZSUyMHdvb2RsYW5kcyUyMHRleGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'; // The Woodlands cityscape
      case 'katy':
        return 'https://cdn.envato.com/files/420718507/Preview_Image.jpg'; // Warehouse in Katy Envato
      case 'sugar-land':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Commercial building Envato
      case 'richmond':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // New construction Envato
      case 'college-station-bryan':
        return 'https://images.unsplash.com/photo-1579547196627-c1d0f8d9f1b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlZ2UlMjBzdGF0aW9uJTIwdGV4YXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'; // College Station campus
      case 'beaumont':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Industrial area Beaumont Envato
      case 'baytown':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Industrial area Baytown Envato
      case 'port-arthur':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Industrial area Port Arthur Envato
      default:
        return `https://picsum.photos/1920/1080?random=${serviceArea.id.length + 201}`; // Fallback unique random image
    }
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
    <div className="min-h-screen pt-20"> {/* pt-20 to offset fixed header */}
      <Hero
        headline={serviceArea.heroHeadline}
        subheadline={serviceArea.heroSubheadline}
        body={serviceArea.description}
        imageUrl={getAreaImageUrl(serviceArea.id)}
        className="h-[60vh] min-h-[550px]" // Standardized hero height
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto p-10 bg-neutral-900 rounded-lg shadow-xl"> {/* Increased padding */}
          <h2 className="text-3xl font-bold text-gold-accent mb-6 text-center leading-tight">{serviceArea.name} Services Include:</h2>
          <ul className="list-disc list-inside text-xl text-white space-y-4 leading-relaxed"> {/* Increased text size and spacing */}
            {serviceArea.servicesIncluded.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="mt-20 text-center">
          {combinedCtas.map((cta, index) => (
            <Button key={index} cta={cta} variant={index === 0 ? 'primary' : 'outline'} className="mx-2 my-2" />
          ))}
        </div>
      </section>

      {/* Local CTA Footer Block */}
      <div className="bg-neutral-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center text-xl leading-relaxed"> {/* Increased padding and text size */}
        <p className="mb-3">Pillars Electrical — {COMPANY_ADDRESS}</p> {/* Increased margin */}
        <p className="mb-3">Call {DISPATCH_PHONE}</p> {/* Increased margin */}
        <p>Serving {serviceArea.name} and surrounding areas.</p>
      </div>
    </div>
  );
};

export default ServiceAreaDetailPage;