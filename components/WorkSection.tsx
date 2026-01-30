import React from 'react';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface WorkSectionProps {
    onProjectSelect: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onProjectSelect }) => {
    return (
        <Section id="work" title="Selected Work">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={onProjectSelect}
                        index={index}
                    />
                ))}
            </div>
        </Section>
    );
};
