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
    <section className="bg-neutral-900 py-20 px-4 sm:px-6 lg:px-8 text-center shadow-inner">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gold-accent leading-tight mb-6">
          {headline}
        </h2>
        <p className="mt-4 text-xl lg:text-2xl text-white leading-relaxed mb-10 max-w-2xl mx-auto">
          {copy}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {ctas.map((cta, index) => (
            <Button key={index} cta={cta} variant={index === 0 ? 'primary' : 'outline'} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;