import React from 'react';
import Button from './Button';
import { Cta } from '../types';

interface CallToActionBannerProps {
  headline: string;
  copy: string;
  ctas: Cta[];
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ headline, copy, ctas }) => {
  return (
    <section className="bg-neutral-800 py-24 px-8 rounded-4xl text-center shadow-inner mt-16"> {/* Adjusted background, padding, rounded, margin-top */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gold-accent leading-tight mb-8"> {/* Adjusted margin-bottom */}
          {headline}
        </h2>
        <p className="mt-4 text-xl lg:text-2xl text-white leading-relaxed mb-12 max-w-2xl mx-auto"> {/* Adjusted margin-bottom */}
          {copy}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"> {/* Adjusted space-x */}
          {ctas.map((cta, index) => (
            <Button key={index} cta={cta} variant={index === 0 ? 'primary' : 'outline'} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;