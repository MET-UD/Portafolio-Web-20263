import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroPortfolio } from './components/HeroPortfolio';
import { ResourceExplorer } from './components/ResourceExplorer';
import { ThematicModulesSection } from './components/ThematicModulesSection';
import { ResourceViewerModal } from './components/ResourceViewerModal';
import { TecnoloAssistant } from './components/TecnoloAssistant';
import { AboutProjectSection } from './components/AboutProjectSection';
import { ContactSection } from './components/ContactSection';
import { FooterPortfolio } from './components/FooterPortfolio';
import { EDUCATIONAL_RESOURCES } from './data/resources';
import { EducationalResource } from './types/portfolio';

export default function App() {
  const [selectedResource, setSelectedResource] = useState<EducationalResource | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<string | null>(null);
  const [assistantTrigger, setAssistantTrigger] = useState(0);

  const handleOpenResource = (resource: EducationalResource) => {
    setSelectedResource(resource);
    setIsViewerOpen(true);
  };

  const handleSelectModuleFromSection = (moduleId: string) => {
    setSelectedModuleFilter(moduleId);
    const element = document.querySelector('#recursos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTriggerGuide = () => {
    setAssistantTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#25251E] flex flex-col selection:bg-[#FFCA05] selection:text-[#25251E]">
      
      {/* 1. TOP NAVIGATION BAR */}
      <Navigation
        onSearchClick={() => handleScrollTo('#recursos')}
        onOpenGuide={handleTriggerGuide}
      />

      <main className="flex-1">
        {/* 2. PÁGINA DE INICIO Y PRESENTACIÓN (HERO CON AVATAR TECNOLO) */}
        <HeroPortfolio
          onExploreClick={() => handleScrollTo('#recursos')}
          onModulesClick={() => handleScrollTo('#modulos')}
          onOpenGuide={handleTriggerGuide}
        />

        {/* 3. BIBLIOTECA DE RECURSOS DIGITALES (EXPLORA LOS RECURSOS) */}
        <ResourceExplorer
          resources={EDUCATIONAL_RESOURCES}
          onSelectResource={handleOpenResource}
          selectedModuleId={selectedModuleFilter}
          onClearModuleFilter={() => setSelectedModuleFilter(null)}
        />

        {/* 4. ORGANIZACIÓN TEMÁTICA DE LOS CONTENIDOS (6 MÓDULOS) */}
        <ThematicModulesSection
          onSelectModule={handleSelectModuleFromSection}
        />

        {/* 5. SOBRE EL PROYECTO & MARCO PEDAGÓGICO */}
        <AboutProjectSection />

        {/* 6. CONTACTO & COLABORACIÓN */}
        <ContactSection />
      </main>

      {/* 7. FOOTER */}
      <FooterPortfolio />

      {/* 8. MODAL DE VISUALIZACIÓN INTEGRADA DE RECURSOS (PDF, VIDEO, MAPA, INFOGRAFÍA, SLIDES, INTERACTIVO) */}
      <ResourceViewerModal
        resource={selectedResource}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />

      {/* 9. ASISTENTE Y GUÍA VIRTUAL FLOTANTE DE TECNOLO */}
      <TecnoloAssistant
        key={assistantTrigger}
        resources={EDUCATIONAL_RESOURCES}
        onOpenResource={handleOpenResource}
      />

    </div>
  );
}
