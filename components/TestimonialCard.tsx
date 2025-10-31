import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-neutral-900 p-10 rounded-lg shadow-2xl flex flex-col justify-between h-full">
      <p className="text-2xl italic text-white mb-6 flex-grow leading-relaxed">
        {quote}
      </p>
      <p className="text-xl font-bold text-gold-accent">
        {author}
      </p>
    </div>
  );
};

export default TestimonialCard;