import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-neutral-800 p-12 rounded-4xl shadow-2xl flex flex-col justify-between h-full"> {/* Adjusted background, padding, rounded */}
      <p className="text-3xl italic text-white mb-8 flex-grow leading-relaxed"> {/* Adjusted font size and margin-bottom */}
        {quote}
      </p>
      <p className="text-2xl font-bold text-gold-accent"> {/* Adjusted font size */}
        {author}
      </p>
    </div>
  );
};

export default TestimonialCard;