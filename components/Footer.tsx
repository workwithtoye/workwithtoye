import React from 'react';

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 px-6 md:px-12 border-t border-subtle">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="mono text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                    © 2026 Olutoyese Oyedepo
                </div>
                <button
                    onClick={scrollToTop}
                    className="mono text-[10px] text-gray-400 uppercase tracking-[0.2em] hover:text-black dark:hover:text-white transition-colors"
                >
                    Back to Top ↑
                </button>
            </div>
        </footer>
    );
};
