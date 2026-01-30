import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white dark:bg-[#111] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-subtle animate-in fade-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 dark:bg-black/50 backdrop-blur rounded-full hover:bg-white dark:hover:bg-black transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl serif font-light italic">{project.title}</h2>
            <div className="flex gap-4 mono text-xs uppercase tracking-widest text-gray-500">
              <span>{project.year}</span>
              <span>{project.category}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mono text-[10px] uppercase tracking-widest text-gray-400 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="border border-subtle px-2 py-1 mono text-[10px] uppercase">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mono text-[10px] uppercase tracking-widest text-gray-400 mb-4">Role</h3>
                <p className="text-sm">Content Strategist & UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};