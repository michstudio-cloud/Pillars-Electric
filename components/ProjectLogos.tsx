import React from 'react';

interface ProjectLogosProps {
  logos: string[];
}

const ProjectLogos: React.FC<ProjectLogosProps> = ({ logos }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-10 mt-16 px-4"> {/* Adjusted gap and margin-top */}
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center p-6 bg-neutral-800 rounded-3xl shadow-md border-2 border-gray-800 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"> {/* Adjusted padding, background, rounded */}
          {/* Using a placeholder image for demonstration */}
          <img src={logo} alt={`Partner Logo ${index + 1}`} className="max-h-20 w-auto" /> {/* Adjusted max-height */}
        </div>
      ))}
    </div>
  );
};

export default ProjectLogos;