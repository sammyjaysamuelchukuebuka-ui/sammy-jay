
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-800 transform transition-transform duration-500 hover:scale-105">
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
         <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">{project.category}</span>
        <h3 className="text-xl font-bold mt-1">{project.title}</h3>
        <p className="mt-2 text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out">
            {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
