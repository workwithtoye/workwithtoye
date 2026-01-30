import React, { useState } from 'react';
import { MobileMenu } from './components/MobileMenu';
import { ProjectModal } from './components/ProjectModal';
import { AIAssistant } from './components/AIAssistant';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { LogSection } from './components/LogSection';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { Project } from './types';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <Header onMobileMenuOpen={() => setMobileMenuOpen(true)} />

      <Hero />

      <WorkSection onProjectSelect={setSelectedProject} />

      <LogSection />

      <InfoSection />

      <Footer />

      <AIAssistant />
    </div>
  );
};

export default App;