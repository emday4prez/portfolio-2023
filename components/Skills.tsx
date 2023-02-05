import Image from 'next/image';

interface Skill {
  name: string;
  logoUrl: string;
}

interface Props {
  skills: Skill[];
}

const SkillsDisplay: React.FC<Props> = ({ skills }) => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-gradient-to-b from-slate-600 md:px-2 pb-10 to-slate-400 ">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="w-1/3 max-w-[144px] min-w-[90px] md:w-1/4 lg:w-1/5 xl:w-1/6 px-2 p-1"
        >
          <div className="bg-slate-100 rounded-lg shadow-lg py-1 md:p-2">
            <h3 className="text-sm md:text-xl font-medium  text-center">
              {skill.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsDisplay;
