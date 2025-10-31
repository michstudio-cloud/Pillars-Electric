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
    const foundService = SERVICES_DATA.find(s => s.id === id);
    return foundService?.imageUrl || `https://picsum.photos/1920/1080?random=${id.length + 1}`;
  };

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold text-gold-accent">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero
        headline={service.heroHeadline}
        subheadline={service.heroSubheadline}
        imageUrl={getServiceImageUrl(service.id)}
        className="h-[70vh] min-h-[600px]" // Standardized hero height
      />

      <section className="py-24 px-8 bg-black">
        <div className="max-w-4xl mx-auto bg-neutral-800 p-12 rounded-4xl shadow-xl text-xl text-white space-y-8 leading-relaxed"> {/* Adjusted background, padding, rounded, font size */}
          {service.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {service.commonCalls && service.commonCalls.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16 p-12 bg-neutral-800 rounded-4xl shadow-xl"> {/* Adjusted padding and margin-top */}
            <h2 className="text-3xl font-bold text-gold-accent mb-8 text-center leading-tight">Common Emergency Calls</h2> {/* Adjusted font size and margin-bottom */}
            <ul className="list-disc list-inside text-xl text-white space-y-4 leading-relaxed"> {/* Adjusted font size and space-y */}
              {service.commonCalls.map((call, index) => (
                <li key={index}>{call}</li>
              ))}
            </ul>
          </div>
        )}

        {service.capabilities && service.capabilities.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16 p-12 bg-neutral-800 rounded-4xl shadow-xl"> {/* Adjusted padding and margin-top */}
            <h2 className="text-3xl font-bold text-gold-accent mb-8 text-center leading-tight">Our Capabilities</h2> {/* Adjusted font size and margin-bottom */}
            <ul className="list-disc list-inside text-xl text-white space-y-4 leading-relaxed"> {/* Adjusted font size and space-y */}
              {service.capabilities.map((cap, index) => (
                <li key={index}>{cap}</li>
              ))}
            </ul>
          </div>
        )}

        {service.bullets && service.bullets.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16 p-12 bg-neutral-800 rounded-4xl shadow-xl"> {/* Adjusted padding and margin-top */}
            <h2 className="text-3xl font-bold text-gold-accent mb-8 text-center leading-tight">{service.title} Includes</h2> {/* Adjusted font size and margin-bottom */}
            <ul className="list-disc list-inside text-xl text-white space-y-4 leading-relaxed"> {/* Adjusted font size and space-y */}
              {service.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-20 text-center">
          {service.ctas.map((cta, index) => (
            <Button key={index} cta={cta} variant={index === 0 ? 'primary' : 'outline'} className="mx-3 my-3" /> {/* Adjusted margin */}
          ))}
        </div>
        {service.id === 'emergency-electrical-repair' && (
          <p className="max-w-4xl mx-auto text-center text-gray-500 text-xl mt-12 italic leading-relaxed"> {/* Adjusted margin-top */}
            Every repair is handled with safety and precision. No shortcuts, no guesswork — just dependable power restoration done right.
          </p>
        )}
      </section>
    </div>
  );
};

export default ServiceDetailPage;