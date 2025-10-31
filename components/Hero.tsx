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
  isHomePage?: boolean; // New prop to differentiate homepage hero layout
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
  isHomePage = false,
}) => {
  // Determine default height based on whether specific className is provided
  const defaultHeightClass = !className.includes('h-') && !className.includes('min-h-') ? 'h-[60vh] min-h-[550px]' : '';
  const finalClassName = `${defaultHeightClass} ${className}`;

  return (
    <section className={`relative flex items-center justify-center text-center overflow-hidden ${finalClassName} ${isHomePage ? 'pt-20 md:pt-0' : 'pt-20'}`}> {/* Adjusted padding top */}
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
      <div className={`relative z-20 w-full px-4 sm:px-6 lg:px-8 ${isHomePage ? 'h-full flex items-center justify-start max-w-7xl' : 'max-w-5xl'}`}>
        {isHomePage ? (
          <div className="text-left py-12 px-12 bg-black/80 rounded-4xl shadow-2xl max-w-3xl ml-0 md:ml-8 lg:ml-16 xl:ml-24"> {/* Adjusted background, padding, rounded */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gold-accent leading-tight tracking-wider mb-6 drop-shadow-lg"> {/* Increased margin-bottom */}
              {headline}
            </h1>
            {subheadline && (
              <p className="text-2xl md:text-3xl text-white mt-4 mb-10 leading-relaxed drop-shadow-md"> {/* Increased margin-bottom */}
                {subheadline}
              </p>
            )}
            {ctas && ctas.length > 0 && (
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8"> {/* Adjusted space-x */}
                {ctas.map((cta, index) => (
                  <Button key={index} cta={cta} variant={index === 0 ? 'primary' : 'outline'} />
                ))}
              </div>
            )}
          </div>
        ) : (
          // Content for internal pages (central block)
          <div className="p-10 bg-black/70 rounded-4xl shadow-2xl max-w-4xl mx-auto text-center"> {/* Adjusted padding, background, rounded */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gold-accent leading-tight tracking-wider mb-6 drop-shadow-lg"> {/* Adjusted font sizes */}
              {headline}
            </h1>
            {subheadline && (
              <p className="text-xl md:text-2xl text-white mt-4 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md"> {/* Adjusted font sizes */}
                {subheadline}
              </p>
            )}
            {body && (
              <div className="text-lg text-white mt-4 mb-8 max-w-3xl mx-auto space-y-4 leading-relaxed drop-shadow-md"> {/* Adjusted font size and space-y */}
                {body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
            {ctas && ctas.length > 0 && (
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8"> {/* Adjusted space-x */}
                {ctas.map((cta, index) => (
                  <Button key={index} cta={cta} variant={index === 0 ? 'primary' : 'outline'} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;