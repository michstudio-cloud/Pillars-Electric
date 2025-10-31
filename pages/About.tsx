import React from 'react';
import { ABOUT_PAGE_CONTENT } from '../constants';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const About: React.FC = () => {
  const { hero, valuesSection } = ABOUT_PAGE_CONTENT;

  return (
    <div className="min-h-screen">
      <Hero
        headline={hero.headline}
        subheadline={hero.subheadline}
        body={hero.body}
        imageUrl="https://cdn.envato.com/files/197143924/Preview_Image.jpg" // Industrial electrical room image
        className="h-[70vh] min-h-[600px]" // Standardized hero height, adjusted for content block
      />

      {/* Stats Section */}
      <section className="py-24 px-8 bg-black text-center">
        <div className="max-w-7xl mx-auto bg-neutral-800 p-12 rounded-4xl shadow-xl"> {/* Adjusted background, padding, rounded */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {hero.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4">
                <p className="text-6xl md:text-7xl font-extrabold text-gold-accent mb-2 tracking-tight">{stat.value}</p>
                <p className="text-xl font-medium text-white leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-8 bg-black">
        <SectionHeader headline={valuesSection.headline} />
        <div className="max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3"> {/* Increased gap and margin-top */}
          {valuesSection.values.map((value, index) => (
            <div key={index} className="bg-neutral-800 p-10 rounded-4xl shadow-xl text-center transform hover:border-gold-accent border-2 border-transparent transition-all duration-300"> {/* Adjusted background, padding, rounded */}
              <h3 className="text-2xl font-bold text-gold-accent mb-4 leading-tight">{value.title}</h3> {/* Adjusted margin-bottom */}
              <p className="text-white text-xl leading-relaxed">{value.description}</p> {/* Adjusted font size */}
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center bg-neutral-800 p-12 rounded-4xl shadow-lg text-xl text-white space-y-6 mt-20 leading-relaxed"> {/* Adjusted background, padding, rounded, margin-top */}
          <p>{valuesSection.copy}</p>
          {valuesSection.cta && (
            <div className="mt-12"> {/* Adjusted margin-top */}
              <Button cta={valuesSection.cta} variant="primary" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;