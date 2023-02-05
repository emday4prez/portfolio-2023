import React from 'react';

interface Education {
  type: string;
  institution: string;
  program: string;
  startDate: string;
  endDate: string;
}

interface Props {
  educations: Education[];
}

const Education: React.FC<Props> = ({ educations }) => {
  return (
    <>
      {' '}
      <h2 className="text-xl font-medium text-slate-900 mt-10 mb-5 ">
        Education
      </h2>
      <div className="bg-white p-5 rounded">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3">
          {educations.map((education, index) => (
            <div key={index} className="mb-5">
              <h3 className="text-base font-medium">{education.program}</h3>
              <p className="text-sm text-gray-700">
                {education.institution} ({education.type})
              </p>
              {index === 0 && (
                <p className="text-sm text-gray-700">
                  {education.startDate} - {education.endDate}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
