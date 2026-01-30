import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { POSTS } from '../constants';

export const LogSection: React.FC = () => {
    return (
        <Section id="writing" title="Log">
            <div className="space-y-1">
                {POSTS.map((post, index) => (
                    <ScrollReveal key={post.id} delay={index * 100}>
                        <div className="group cursor-pointer border-t border-subtle py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors px-4 -mx-4">
                            <div className="flex flex-col gap-2">
                                <span className="mono text-[10px] text-gray-400 uppercase tracking-widest">{post.date}</span>
                                <h3 className="text-xl serif italic group-hover:not-italic transition-all duration-300">
                                    {post.title}
                                </h3>
                            </div>
                            <div className="flex items-center gap-6 mt-4 md:mt-0">
                                <span className="mono text-[10px] text-gray-400 uppercase tracking-widest">{post.readTime}</span>
                                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 group-hover:rotate-0 duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    );
};
