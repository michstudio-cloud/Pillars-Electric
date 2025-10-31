import React from 'react';
import { Link } from 'react-router-dom';
import { Cta } from '../types';

interface ButtonProps {
  cta: Cta;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ cta, className = '', variant = 'primary', disabled = false }) => {
  const baseClasses = 'font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap text-xl'; // Adjusted padding and text size
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-gold-accent hover:bg-dark-gold-accent text-black shadow-lg';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-700 hover:bg-gray-600 text-white shadow-md';
      break;
    case 'outline':
      variantClasses = 'border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-black hover:border-light-gold-accent';
      break;
  }

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const classes = `${baseClasses} ${variantClasses} ${disabledClasses} ${className}`;

  if (cta.isPhone && cta.phone) {
    return (
      <a href={`tel:${cta.phone}`} className={classes} target="_blank" rel="noopener noreferrer" aria-disabled={disabled}>
        {cta.text}
      </a>
    );
  }

  if (cta.isExternal && cta.path) {
    return (
      <a href={cta.path} className={classes} target="_blank" rel="noopener noreferrer" aria-disabled={disabled}>
        {cta.text}
      </a>
    );
  }

  if (cta.path) {
    return (
      <Link to={cta.path} className={classes} aria-disabled={disabled}>
        {cta.text}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} disabled={disabled}>
      {cta.text}
    </button>
  );
};

export default Button;