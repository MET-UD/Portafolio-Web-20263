import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, HelpCircle, Shuffle, Lightbulb, Compass, ArrowRight } from 'lucide-react';
import { EducationalResource } from '../types/portfolio';

interface TecnoloAssistantProps {
  resources: EducationalResource[];
  onOpenResource: (resource: EducationalResource) => void;
  onFilterCategory?: (type: string) => void;
}

export const TecnoloAssistant: React.FC<TecnoloAssistantProps> = ({
  resources,
  onOpenResource,
  onFilterCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'tips' | 'routes' | 'about'>('tips');
  const [tipIndex, setTipIndex] = useState(0);

  const tips = [
    {
      title: 'Visores Integrados',
      content:
        'Puedes abrir cualquier documento PDF o presentación directamente en el portafolio. ¡Usa los botones de página y zoom para una lectura cómoda!',
    },
    {
      title: 'Búsqueda Inteligente',
      content:
        'Escribe palabras como "Robótica", "Algoritmos" o "STEAM" en la barra de búsqueda para filtrar al instante todos los materiales.',
    },
    {
      title: 'Mapas Conceptuales',
      content:
        'Los mapas conceptuales se pueden ampliar y desglosar por nodos para entender las conexiones entre la IA y la educación.',
    },
    {
      title: 'Autoevaluaciones Interactivas',
      content:
        'En la sección de recursos interactivos encontrarás cuestionarios y simuladores con retroalimentación inmediata para medir tu progreso.',
    },
  ];

  const learningRoutes = [
    {
      title: 'Ruta 1: Iniciación al Código',
      desc: 'Comienza con la Guía de Pensamiento Computacional, sigue con el video de Laberinto y practica en Scratch.',
      targetCategory: 'computational_thinking',
    },
    {
      title: 'Ruta 2: Maker y Robótica',
      desc: 'Estudia el Manual de Robótica, mira el video del Seguidor de Luz y simula en Tinkercad.',
      targetCategory: 'robotics',
    },
    {
      title: 'Ruta 3: Inteligencia Artificial Ética',
      desc: 'Consulta el Marco Ético en PDF, analiza el Mapa Conceptual y entrena tu modelo en Teachable Machine.',
      targetCategory: 'ai_education',
    },
  ];

  const handleSurpriseMe = () => {
    if (resources.length === 0) return;
    const randomItem = resources[Math.floor(Math.random() * resources.length)];
    onOpenResource(randomItem);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      
      {/* Expanded Modal Window */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border-4 border-[#0897B4] overflow-hidden animate-in slide-in-from-bottom duration-200">
          
          {/* Header */}
          <div className="bg-[#0897B4] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white p-0.5 overflow-hidden shadow">
                <img
                  src="/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png"
                  alt="Avatar Tecnolo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-display font-black text-xs uppercase tracking-wide">
                  GUÍA VIRTUAL TECNOLO
                </h4>
                <span className="text-[10px] text-[#B9E6EF] block">
                  Tu asistente de aprendizaje
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex border-b border-neutral-100 bg-neutral-50 p-1 text-[11px] font-bold">
            <button
              onClick={() => setActiveTab('tips')}
              className={`flex-1 py-1.5 rounded-xl transition-colors cursor-pointer ${
                activeTab === 'tips' ? 'bg-white text-[#0897B4] shadow-sm' : 'text-neutral-500'
              }`}
            >
              Consejos
            </button>
            <button
              onClick={() => setActiveTab('routes')}
              className={`flex-1 py-1.5 rounded-xl transition-colors cursor-pointer ${
                activeTab === 'routes' ? 'bg-white text-[#0897B4] shadow-sm' : 'text-neutral-500'
              }`}
            >
              Rutas STEAM
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`flex-1 py-1.5 rounded-xl transition-colors cursor-pointer ${
                activeTab === 'about' ? 'bg-white text-[#0897B4] shadow-sm' : 'text-neutral-500'
              }`}
            >
              Acerca de mí
            </button>
          </div>

          {/* Content Body */}
          <div className="p-4 max-h-[300px] overflow-y-auto space-y-3">
            {activeTab === 'tips' && (
              <div className="space-y-3">
                <div className="bg-[#B9E6EF]/25 border border-[#0897B4]/20 p-3.5 rounded-2xl">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#0897B4] mb-1">
                    <Lightbulb className="w-3.5 h-3.5 text-[#FFCA05]" />
                    <span>{tips[tipIndex].title}</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {tips[tipIndex].content}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <button
                    onClick={() => setTipIndex((prev) => (prev + 1) % tips.length)}
                    className="text-[11px] font-black text-[#0897B4] hover:underline cursor-pointer"
                  >
                    Siguiente consejo →
                  </button>

                  <button
                    onClick={handleSurpriseMe}
                    className="btn-toy-yellow px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm"
                  >
                    <Shuffle className="w-3 h-3" />
                    <span>¡Sorpréndeme!</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'routes' && (
              <div className="space-y-2.5">
                {learningRoutes.map((route, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#0897B4] transition-colors"
                  >
                    <h5 className="font-display font-extrabold text-xs text-[#25251E] mb-1">
                      {route.title}
                    </h5>
                    <p className="text-[11px] text-neutral-600 leading-snug">
                      {route.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'about' && (
              <div className="text-center py-2 space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-neutral-100 p-1 border-2 border-[#0897B4]">
                  <img
                    src="/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png"
                    alt="Tecnolo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h5 className="font-display font-black text-sm text-[#25251E]">
                  ¡Hola, soy Tecnolo!
                </h5>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Soy la mascota y avatar interactivo de este portafolio pedagógico. 
                  Represento la curiosidad, la innovación y el poder de aprender divirtiéndose.
                </p>
              </div>
            )}
          </div>

        </div>
      )}

      {/* Floating Avatar Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 p-1.5 pr-4 rounded-full bg-white text-[#25251E] shadow-2xl border-3 border-[#0897B4] hover:border-[#FFCA05] transition-all hover:scale-105 cursor-pointer"
        aria-label="Abrir asistente Tecnolo"
      >
        {/* Animated Avatar circle */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B9E6EF] to-white p-1 overflow-hidden shadow-inner flex items-center justify-center">
          <img
            src="/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png"
            alt="Tecnolo"
            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform"
          />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[10px] font-black uppercase text-[#0897B4] tracking-wider -mb-0.5">
            ¿NECESITAS AYUDA?
          </span>
          <span className="font-display font-black text-xs uppercase text-[#25251E]">
            GUÍA TECNOLO
          </span>
        </div>

        {/* Pulsing Attention Badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FFCA05] border-2 border-white animate-bounce" />
      </button>

    </div>
  );
};
