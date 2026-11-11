import React from 'react';
import {
  Layers,
  ArrowRight,
  Cpu,
  Bot,
  Sparkles,
  ShieldCheck,
  Lightbulb,
  BookOpen,
} from 'lucide-react';
import { ThematicModule } from '../types/portfolio';
import { THEMATIC_MODULES } from '../data/modules';

interface ThematicModulesProps {
  onSelectModule: (moduleId: string) => void;
}

export const ThematicModulesSection: React.FC<ThematicModulesProps> = ({
  onSelectModule,
}) => {
  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return Cpu;
      case 'Bot':
        return Bot;
      case 'Sparkles':
        return Sparkles;
      case 'Layers':
        return Layers;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Lightbulb':
        return Lightbulb;
      default:
        return BookOpen;
    }
  };

  return (
    <section
      id="modulos"
      className="relative w-full bg-[#0897B4] text-white py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#FFCA05]" />
            <span className="text-xs font-black tracking-widest uppercase text-[#FFCA05]">
              ITINERARIO DE APRENDIZAJE ESTRUCTURADO
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            ORGANIZACIÓN <span className="text-[#FFCA05]">TEMÁTICA</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/90">
            Explora las seis unidades pedagógicas diseñadas para guiar el desarrollo de competencias 
            digitales, robótica y metodologías activas.
          </p>
        </div>

        {/* 6 Thematic Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {THEMATIC_MODULES.map((moduleItem) => {
            const Icon = getModuleIcon(moduleItem.iconName);

            return (
              <div
                key={moduleItem.id}
                onClick={() => onSelectModule(moduleItem.id)}
                className="group relative bg-white text-[#25251E] rounded-[2rem] p-6 shadow-xl border-2 border-white/40 hover:border-[#FFCA05] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Header: Code Badge + Resource Count */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-black tracking-wider uppercase px-3 py-1 rounded-full text-white shadow-sm"
                      style={{ backgroundColor: moduleItem.color }}
                    >
                      {moduleItem.code}
                    </span>

                    <span className="text-xs font-bold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full">
                      {moduleItem.resourceCount} Recursos
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-transform"
                    style={{ backgroundColor: moduleItem.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-lg text-[#25251E] group-hover:text-[#0897B4] transition-colors leading-snug mb-2">
                    {moduleItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    {moduleItem.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-black text-[#0897B4] uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    <span>EXPLORAR MÓDULO</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>

                  <span className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-[#FFCA05] text-[#25251E] flex items-center justify-center font-bold text-xs transition-colors">
                    →
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
