import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-white mt-12 lg:mt-24 lg:py-32 py-32 bg-gradient-to-b from-slate-800 to-slate-600 p-2 md:p-8 h-full">
      <div className="container mx-auto px-4 pb-24">
        <h1 className="text-4xl font-medium mb-4"> Welcome</h1>
        <p className="md:text-xl md:font-medium mb-8 ">
          I'm Emerson, a full stack JavaScript web developer with a strong
          desire to learn and grow in the industry. I have a passion for
          creating dynamic and visually appealing web applications and have been
          working with React and Node to bring my ideas to life. I am highly
          motivated and committed to continuously improving my skills and
          delivering top-notch results. I am eager to work on projects that will
          challenge me and help me further my knowledge and expertise in the
          field.
        </p>

        <Link
          href="/contact"
          className="bg-slate-800 hover:bg-slate-300 transition-colors hover:text-slate-900 text-white font-medium py-2 px-4 rounded-full"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
};

export default Hero;
