
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import ProjectCard from './ProjectCard';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>(ProjectCategory.ALL);

  const categories = Object.values(ProjectCategory);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ProjectCategory.ALL) {
      return PROJECTS;
    }
    return PROJECTS.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          My Work
        </h2>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300
                ${activeFilter === category 
                  ? 'bg-cyan-500 text-white shadow-lg' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;