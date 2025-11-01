import React from 'react';

interface SpecificationsSectionProps {
  data: string[];
  title: string;
}

const SpecificationsSection: React.FC<SpecificationsSectionProps> = ({
  data,
  title,
}) => {
  return (
    <div>
      <div className="conatiner mx-auto p-10">
        <h2 className="pb-10 text-2xl font-bold">{title}</h2>
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          {data.map((item, index) => (
            <div key={index} className="p-3 odd:bg-gray-100 even:bg-white">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificationsSection;
