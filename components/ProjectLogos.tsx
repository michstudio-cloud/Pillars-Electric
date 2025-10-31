import React from 'react';

interface ProjectLogosProps {
  logos: string[];
}

const ProjectLogos: React.FC<ProjectLogosProps> = ({ logos }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-8 mt-12 px-4">
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center p-4 bg-neutral-900 rounded-lg shadow-md border-2 border-gray-800 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out">
          {/* Using a placeholder image for demonstration */}
          <img src={logo} alt={`Partner Logo ${index + 1}`} className="max-h-16 w-auto" />
        </div>
      ))}
    </div>
  );
};

export default ProjectLogos;