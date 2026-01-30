import React from 'react';
import { Section } from './Section';
import { ScrollReveal } from './ScrollReveal';
import { BIO, EXPERIENCE, EDUCATION } from '../constants';

export const InfoSection: React.FC = () => {
    return (
        <Section id="info" title="Information">
            <ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-6 space-y-16">
                        <p className="text-2xl md:text-3xl serif leading-snug italic font-light">
                            "{BIO}"
                        </p>
                        <div className="space-y-8">
                            <h4 className="mono text-[10px] uppercase tracking-[0.3em] text-gray-400">Experience</h4>
                            <div className="space-y-6">
                                {EXPERIENCE.map((exp, i) => (
                                    <div key={i} className="flex justify-between items-baseline border-b border-subtle pb-4">
                                        <div>
                                            <div className="font-medium text-sm tracking-tight">{exp.company}</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{exp.role}</div>
                                        </div>
                                        <div className="mono text-[10px] text-gray-400">{exp.period}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 lg:offset-1 space-y-12">
                        <div className="space-y-8">
                            <h4 className="mono text-[10px] uppercase tracking-[0.3em] text-gray-400">Education</h4>
                            <div className="space-y-6">
                                {EDUCATION.map((edu, i) => (
                                    <div key={i} className="flex justify-between items-baseline border-b border-subtle pb-4">
                                        <div>
                                            <div className="font-medium text-sm tracking-tight">{edu.institution}</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{edu.degree}</div>
                                        </div>
                                        <div className="mono text-[10px] text-gray-400">{edu.period}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-white/5 p-8 border border-subtle">
                            <h4 className="mono text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">Connect</h4>
                            <div className="grid grid-cols-2 gap-8 text-sm font-medium">
                                <div className="flex flex-col gap-3">
                                    <a href="mailto:toyesetunji@gmail.com" className="hover:text-gray-500 transition-colors">Email</a>
                                    <a href="#" className="hover:text-gray-500 transition-colors">LinkedIn</a>
                                    <a href="#" className="hover:text-gray-500 transition-colors">Portfolio</a>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="text-gray-400 text-xs mt-1">Based in:</div>
                                    <div>Sandyford, Dublin</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </Section>
    );
};
