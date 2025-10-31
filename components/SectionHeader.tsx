import React from 'react';

interface SectionHeaderProps {
  headline: string;
  copy?: string | string[];
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ headline, copy, align = 'center', className = '' }) => {
  const textAlignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`max-w-5xl mx-auto ${textAlignClass} ${className}`}>
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gold-accent leading-tight tracking-tight mb-6">
        {headline}
      </h2>
      {copy && (
        <div className="text-xl lg:text-2xl text-white space-y-4 leading-relaxed">
          {Array.isArray(copy) ? (
            copy.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <p>{copy}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;