import React from 'react';

interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-slate-100  shadow-md p-6 m-4 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
      <h3 className="text-lg font-medium">{project.title}</h3>
      <p className="text-sm mt-2">{project.description}</p>
      <a href={project.url} className="text-blue-500 mt-2">
        See live
      </a>

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
