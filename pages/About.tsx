import React from 'react';
import { ABOUT_PAGE_CONTENT } from '../constants';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const About: React.FC = () => {
  const { hero, valuesSection } = ABOUT_PAGE_CONTENT;

  return (
    <div className="min-h-screen pt-20"> {/* pt-20 to offset fixed header */}
      <Hero
        headline={hero.headline}
        subheadline={hero.subheadline}
        body={hero.body}
        imageUrl="https://cdn.envato.com/files/197143924/Preview_Video.mp4" // Industrial electrical room image
        className="h-[60vh] min-h-[550px]" // Standardized hero height
      />

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {hero.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <p className="text-6xl md:text-7xl font-extrabold text-gold-accent mb-2 tracking-tight">{stat.value}</p> {/* Larger stats */}
              <p className="text-xl font-medium text-white leading-relaxed">{stat.label}</p> {/* Clearer labels */}
            </div>
          ))}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <SectionHeader headline={valuesSection.headline} />
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3"> {/* Increased gap and margin-top */}
          {valuesSection.values.map((value, index) => (
            <div key={index} className="bg-neutral-900 p-8 rounded-lg shadow-xl text-center transform hover:border-gold-accent border-2 border-transparent transition-all duration-300"> {/* Added hover border */}
              <h3 className="text-2xl font-bold text-gold-accent mb-3 leading-tight">{value.title}</h3>
              <p className="text-white text-lg leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center text-xl text-white space-y-6 mt-16 leading-relaxed"> {/* Increased margin-top and text size */}
          <p>{valuesSection.copy}</p>
          {valuesSection.cta && (
            <div className="mt-10"> {/* Adjusted margin-top */}
              <Button cta={valuesSection.cta} variant="primary" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;