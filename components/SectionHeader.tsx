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
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gold-accent leading-tight tracking-tight mb-16"> {/* Adjusted margin-bottom */}
        {headline}
      </h2>
      {copy && (
        <div className="text-2xl lg:text-3xl text-white space-y-6 leading-relaxed"> {/* Adjusted font size and space-y */}
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