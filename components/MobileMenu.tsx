import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col justify-center items-center">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black dark:hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
      
      <nav className="flex flex-col gap-12 text-center">
        <a href="#work" onClick={onClose} className="text-3xl font-light tracking-tight hover:italic">Work</a>
        <a href="#writing" onClick={onClose} className="text-3xl font-light tracking-tight hover:italic">Log</a>
        <a href="#info" onClick={onClose} className="text-3xl font-light tracking-tight hover:italic">Info</a>
        <a href="mailto:toyesetunji@gmail.com" onClick={onClose} className="text-3xl font-light tracking-tight hover:italic">Contact</a>
      </nav>

      <div className="absolute bottom-12 text-gray-400 mono text-[10px] uppercase tracking-widest">
        Menu / Navigation
      </div>
    </div>
  );
};