import React from 'react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onMobileMenuOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMobileMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-subtle">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#" className="font-medium text-sm tracking-widest uppercase mono" aria-label="Home">Olutoyese Oyedepo</a>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <a href="#work" className="hover:text-black dark:hover:text-white transition-colors">Work</a>
            <a href="#writing" className="hover:text-black dark:hover:text-white transition-colors">Log</a>
            <a href="#info" className="hover:text-black dark:hover:text-white transition-colors">Info</a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={onMobileMenuOpen}
              className="md:hidden p-2 text-gray-500 hover:text-black dark:hover:text-white"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
