import React from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-slate-100 transition-shadow shadow-md p-6 m-4 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
      <h3 className="text-lg font-medium">{project.title}</h3>
      <p className="text-sm mt-2">{project.description}</p>
      <Link
        href={project.url}
        target="_blank"
        className="text-slate-500 hover:text-slate-600 mt-2 transition-colors"
      >
        See Live Site
      </Link>

      <ul className="flex flex-row items-center justify-evenly">
        {project.technologies.map((technology, index) => (
          <li key={index} className="text-sm pl-1">
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
