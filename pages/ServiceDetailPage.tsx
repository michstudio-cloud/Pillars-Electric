import React from 'react';
import { useParams } from 'react-router-dom';
import { SERVICES_DATA, DISPATCH_PHONE, INFO_EMAIL } from '../constants';
import Hero from '../components/Hero';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  // Helper to provide a relevant image based on service ID
  const getServiceImageUrl = (id: string) => {
    switch (id) {
      case 'emergency-electrical-repair':
        return 'https://cdn.envato.com/files/320150904/Preview_Video.mp4'; // Crew working in a large electrical room
      case 'power-distribution-switchgear-upgrades':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Electrical Power Station at Sunset
      case 'lighting-energy-retrofits':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Electricians Install Led Lamps on Entertainment Center Ceiling
      case 'new-construction-tenant-build-outs':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Construction site
      case 'preventive-maintenance-testing':
        return 'https://cdn.envato.com/files/249009778/Preview_Image.jpg'; // Maintenance Engineers checking electricity
      default:
        return `https://picsum.photos/1920/1080?random=${service.id.length + 1}`; // Fallback random
    }
  };

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold text-gold-accent">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20"> {/* pt-20 to offset fixed header */}
      <Hero
        headline={service.heroHeadline}
        subheadline={service.heroSubheadline}
        imageUrl={getServiceImageUrl(service.id)}
        className="h-[60vh] min-h-[550px]" // Standardized hero height
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-xl text-white space-y-8 leading-relaxed"> {/* Increased text size and spacing */}
          {service.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {service.commonCalls && service.commonCalls.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16 p-10 bg-neutral-900 rounded-lg shadow-xl"> {/* Increased padding and margin-top */}
            <h2 className="text-3xl font-bold text-gold-accent mb-6 text-center leading-tight">Common Emergency Calls</h2>
            <ul className="list-disc list-inside text-xl text-white space-y-4 leading-relaxed"> {/* Increased text size and spacing */}
              {service.commonCalls.map((call, index) => (
                <li key={index}>{call}</li>
              ))}
            </ul>
          </div>
        )}

        {service.capabilities && service.capabilities.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16 p-10 bg-neutral-900 rounded-lg shadow-xl"> {/* Increased padding and margin-top */}
            <h2 className="text-3xl font-bold text-gold-accent mb-6 text-center leading-tight">Our Capabilities</h2>
            <ul className="list-disc list-inside text-xl text-white space-y-4 leading-relaxed"> {/* Increased text size and spacing */}
              {service.capabilities.map((cap, index) => (
                <li key={index}>{cap}</li>
              ))}
            </ul>
          </div>
        )}

        {service.bullets && service.bullets.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16 p-10 bg-neutral-900 rounded-lg shadow-xl"> {/* Increased padding and margin-top */}
            <h2 className="text-3xl font-bold text-gold-accent mb-6 text-center leading-tight">{service.title} Includes</h2>
            <ul className="list-disc list-inside text-xl text-white space-y-4 leading-relaxed"> {/* Increased text size and spacing */}
              {service.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-20 text-center">
          {service.ctas.map((cta, index) => (
            <Button key={index} cta={cta} variant={index === 0 ? 'primary' : 'outline'} className="mx-2 my-2" />
          ))}
        </div>
        {service.id === 'emergency-electrical-repair' && (
          <p className="max-w-4xl mx-auto text-center text-gray-500 text-xl mt-10 italic leading-relaxed"> {/* Increased text size and margin-top */}
            Every repair is handled with safety and precision. No shortcuts, no guesswork — just dependable power restoration done right.
          </p>
        )}
      </section>
    </div>
  );
};

export default ServiceDetailPage;