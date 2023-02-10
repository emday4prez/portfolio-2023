import Image from 'next/image';

interface Skill {
  name: string;
}

interface Props {
  skills: Skill[];
}

const SkillsDisplay: React.FC<Props> = ({ skills }) => {
  return (
    <section className="flex flex-col justify-center items-center bg-gradient-to-b from-slate-600 md:px-2 pb-10 to-slate-400">
      <h2 className="text-2xl text-slate-200 mb-2 tracking-widest">tools</h2>
      <div className="flex flex-wrap justify-center items-center  ">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="w-1/3 max-w-[144px] min-w-[90px] md:w-1/4 lg:w-1/5 xl:w-1/6 px-2 p-1"
          >
            <div className="bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-900 hover:bg-slate-300 transition-all cursor-default rounded-lg shadow hover:shadow-lg py-1 dark::hover:slate-900 md:p-2">
              <h3 className="text-sm md:text-xl font-medium text-slate-800 dark:text-slate-200 text-center">
                {skill.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsDisplay;
