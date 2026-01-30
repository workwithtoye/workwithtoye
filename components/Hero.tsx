import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { LiveClock } from './LiveClock';

export const Hero: React.FC = () => {
    return (
        <Section id="hero" className="pt-48 pb-32">
            <ScrollReveal>
                <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="mono text-[10px] uppercase tracking-[0.3em] text-gray-500">Available for projects</span>
                        <span className="text-gray-300 dark:text-gray-700">|</span>
                        <LiveClock />
                    </div>
                    <h1 className="text-4xl md:text-7xl serif italic font-light leading-[1.05] tracking-tight mb-12">
                        Content Strategist & <br />
                        <span className="not-italic text-black dark:text-white">UX Designer.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl font-light">
                        Driving engagement through strategic content, persuasion psychology, and data-driven user experiences. Currently at Penthel.
                    </p>
                </div>
            </ScrollReveal>
        </Section>
    );
};
