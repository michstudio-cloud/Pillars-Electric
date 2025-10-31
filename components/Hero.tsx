import React from 'react';
import Button from './Button';
import { Cta } from '../types';

interface HeroProps {
  headline: string;
  subheadline?: string;
  body?: string[];
  ctas?: Cta[];
  videoUrl?: string;
  videoPoster?: string;
  imageUrl?: string;
  className?: string; // Additional classes for the hero section
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  body,
  ctas,
  videoUrl,
  videoPoster,
  imageUrl,
  className = '',
}) => {
  // Determine default height based on whether specific className is provided
  const defaultHeightClass = !className.includes('h-') && !className.includes('min-h-') ? 'h-[60vh] min-h-[550px]' : '';
  const finalClassName = `${defaultHeightClass} ${className}`;

  return (
    <section className={`relative flex items-center justify-center text-center overflow-hidden ${finalClassName}`}>
      {/* Background Media */}
      {videoUrl ? (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoUrl}
          poster={videoPoster}
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      ) : imageUrl ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label="Hero background image"
        ></div>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-neutral-900 z-0"></div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gold-accent leading-tight tracking-wider mb-4 drop-shadow-lg">
          {headline}
        </h1>
        {subheadline && (
          <p className="text-2xl md:text-3xl text-white mt-4 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {subheadline}
          </p>
        )}
        {body && (
          <div className="text-xl text-white mt-4 mb-8 max-w-3xl mx-auto space-y-3 leading-relaxed drop-shadow-md">
            {body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
        {ctas && ctas.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            {ctas.map((cta, index) => (
              <Button key={index} cta={cta} variant={index === 0 ? 'primary' : 'outline'} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;