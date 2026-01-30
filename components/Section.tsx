import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 max-w-[1200px] mx-auto ${className}`}>
      {title && (
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-12 border-b border-gray-100 dark:border-white/10 pb-4">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};