import React from 'react';
import { Project } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  return (
    <ScrollReveal delay={index * 100}>
      <div
        onClick={() => onClick(project)}
        className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white rounded-lg"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(project);
          }
        }}
      >
        <div className="overflow-hidden bg-gray-100 dark:bg-white/5 mb-6 aspect-[16/10] relative">
          <div className="absolute inset-0 bg-gray-900/5 dark:bg-white/5 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-medium tracking-tight group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
            <span className="mono text-[10px] text-gray-400 uppercase tracking-widest">{project.year}</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-md">
            {project.description}
          </p>
          <div className="flex gap-3 mt-1">
            {project.tags.map(tag => (
              <span key={tag} className="mono text-[10px] uppercase tracking-wider text-gray-400 border border-subtle px-1.5 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};