import React from 'react';
import { Sparkles, CheckCircle2, GraduationCap, Code, Lightbulb, HeartHandshake } from 'lucide-react';
import { RingedPlanet, ToyCloud } from './DecorativeElements';

export const AboutProjectSection: React.FC = () => {
  const pillars = [
    {
      icon: Code,
      title: 'Construccionismo Digital',
      desc: 'El aprendizaje más profundo ocurre cuando los estudiantes construyen activamente artefactos significativos y compartibles con su comunidad.',
    },
    {
      icon: Lightbulb,
      title: 'Metodologías Activas STEAM',
      desc: 'Integración interdisciplinaria de ciencia, tecnología, ingeniería, artes y matemáticas para resolver desafíos de la vida real.',
    },
    {
      icon: GraduationCap,
      title: 'Pensamiento Crítico & Ético',
      desc: 'Desarrollar una postura analítica frente al uso de algoritmos, inteligencia artificial y huella digital en la sociedad contemporánea.',
    },
    {
      icon: HeartHandshake,
      title: 'Inclusión y Accesibilidad',
      desc: 'Recursos diseñados con múltiples formatos de representación (PDFs, videos, esquemas visuales e interactivos) para atender diversos estilos de aprendizaje.',
    },
  ];

  return (
    <section id="proyecto" className="relative w-full bg-white py-16 md:py-24 border-t border-neutral-200/80 overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-10 right-[10%] animate-float-slow opacity-40">
        <RingedPlanet size={64} planetColor="#84CC16" ringColor="#0897B4" />
      </div>
      <div className="absolute bottom-12 left-[6%] animate-float-reverse opacity-50">
        <ToyCloud width={130} height={75} fillColor="#B9E6EF" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Upper Split: About Message + Avatar Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0897B4]/10 text-[#0897B4] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MARCO PEDAGÓGICO & IDENTIDAD</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#25251E] uppercase tracking-tight">
              SOBRE EL PROYECTO <span className="text-[#0897B4]">EDUCATIVO</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              <strong>Aprendiendo con Tecnolo</strong> nace como una propuesta innovadora de portafolio 
              digital que trasciende los repositorios tradicionales de archivos. Integra recursos 
              multimedia, visores interactivos y una experiencia guiada por un avatar tridimensional 
              diseñado para motivar tanto a docentes como a estudiantes.
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Inspirado en los principios del construccionismo de Seymour Papert y el diseño universal para 
              el aprendizaje (DUA), este entorno digital organiza materiales curriculares en seis módulos 
              fundamentales que abarcan desde el pensamiento computacional hasta la inteligencia artificial ética.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-bold text-neutral-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                <span>Recursos Didácticos Abiertos (OER)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0897B4]" />
                <span>Enfoque Pedagógico STEAM</span>
              </div>
            </div>
          </div>

          {/* Visual Avatar Card Spotlight */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] bg-gradient-to-br from-[#B9E6EF]/40 via-white to-[#FFCA05]/20 rounded-3xl p-6 border-2 border-[#0897B4]/30 shadow-xl text-center">
              <div className="w-44 h-44 mx-auto mb-4 relative">
                <img
                  src="/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png"
                  alt="Tecnolo Avatar Mascota"
                  className="w-full h-full object-contain filter drop-shadow-md animate-float-slow"
                />
              </div>

              <span className="text-[10px] font-black uppercase tracking-widest text-[#0897B4] block mb-1">
                MASCOTA DEL PROYECTO
              </span>
              <h4 className="font-display font-black text-xl text-[#25251E]">
                TECNOLO
              </h4>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                "La tecnología no es un fin en sí misma, sino el lienzo donde dibujamos el futuro con nuestra imaginación."
              </p>
            </div>
          </div>

        </div>

        {/* 4 Pedagogical Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200/80 hover:border-[#0897B4] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0897B4] text-white flex items-center justify-center mb-3.5 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-display font-extrabold text-sm text-[#25251E] mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
