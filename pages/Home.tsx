import React from 'react';
import {
  HOME_PAGE_CONTENT,
  SERVICES_DATA,
  INDUSTRIES_DATA,
  COMPANY_ADDRESS,
  DISPATCH_PHONE,
} from '../constants';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import IndustryCard from '../components/IndustryCard';
import TestimonialCard from '../components/TestimonialCard';
import ProjectLogos from '../components/ProjectLogos';
import InteractiveMapSection from '../components/InteractiveMapSection';
import CallToActionBanner from '../components/CallToActionBanner';
import Button from '../components/Button';

const Home: React.FC = () => {
  const {
    hero,
    introText,
    servicesSection,
    whoWeServeSection,
    serviceAreaSection,
    trustedBySection,
    testimonialsSection,
    finalCtaBanner,
  } = HOME_PAGE_CONTENT;

  return (
    <div className="min-h-screen">
      <Hero
        headline={hero.headline}
        subheadline={hero.subheadline}
        ctas={hero.ctas}
        videoUrl={hero.mainHeroBackground}
        videoPoster={hero.videoPoster}
        className="h-screen" // Keep h-screen for the main homepage hero
        isHomePage={true} // Indicate this is the homepage hero
      />

      {/* Intro Section */}
      <section className="py-24 px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center bg-neutral-800 p-12 rounded-4xl shadow-xl text-2xl text-white space-y-8 leading-relaxed"> {/* Adjusted background, padding, rounded, shadow */}
          {introText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 px-8 bg-black"> {/* Adjusted padding */}
        <SectionHeader
          headline={servicesSection.headline}
          copy={servicesSection.copy}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-20 max-w-7xl mx-auto"> {/* Adjusted gap and margin-top */}
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-20 text-center"> {/* Adjusted margin-top */}
          <Button cta={servicesSection.cta} variant="primary" />
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-24 px-8 bg-black"> {/* Adjusted padding */}
        <SectionHeader
          headline={whoWeServeSection.headline}
          copy={whoWeServeSection.copy}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-20 max-w-7xl mx-auto"> {/* Adjusted gap and margin-top */}
          {INDUSTRIES_DATA.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
        <div className="mt-20 text-center"> {/* Adjusted margin-top */}
          <Button cta={whoWeServeSection.cta} variant="primary" />
        </div>
      </section>

      {/* Service Area Section */}
      <InteractiveMapSection copy={serviceAreaSection.copy} cta={serviceAreaSection.cta} />

      {/* Trusted By Section */}
      <section className="py-24 px-8 bg-black"> {/* Adjusted padding */}
        <SectionHeader headline={trustedBySection.headline} copy={trustedBySection.copy} />
        <ProjectLogos logos={trustedBySection.logos} />
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8 bg-black"> {/* Adjusted padding */}
        <SectionHeader headline={testimonialsSection.headline} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 max-w-7xl mx-auto"> {/* Adjusted gap and margin-top */}
          {testimonialsSection.testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} />
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <div className="py-16 px-8 bg-black"> {/* Wrapper for the CTA banner to center it */}
        <div className="max-w-7xl mx-auto">
          <CallToActionBanner
            headline={finalCtaBanner.headline}
            copy={finalCtaBanner.copy}
            ctas={finalCtaBanner.ctas}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;