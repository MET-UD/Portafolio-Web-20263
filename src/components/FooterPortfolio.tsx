import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';
import { RingedPlanet } from './DecorativeElements';

export const FooterPortfolio: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Explorar Recursos', href: '#recursos' },
    { label: 'Módulos Temáticos', href: '#modulos' },
    { label: 'Sobre el Proyecto', href: '#proyecto' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="relative w-full bg-[#EFECE6] text-[#25251E] pt-14 pb-10 border-t-2 border-[#E2DDD3] overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-6 right-[12%] opacity-30 pointer-events-none">
        <RingedPlanet size={64} planetColor="#0897B4" ringColor="#FFCA05" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-neutral-300/70">
          
          {/* Brand & Mascot */}
          <div className="md:col-span-5 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white p-1 shadow-md border-2 border-[#0897B4] shrink-0">
              <img
                src="/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png"
                alt="Avatar Tecnolo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-display font-black text-lg text-[#25251E] uppercase">
                APRENDIENDO CON <span className="text-[#0897B4]">TECNOLO</span>
              </h3>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Portafolio web educativo, creativo e interactivo dedicado a la difusión de 
                tecnologías para el aprendizaje, robótica y cultura maker.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-neutral-700 justify-start md:justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0897B4] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="btn-toy-yellow px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-sm"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Lower Footer Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <span>
            © {new Date().getFullYear()} <strong>Aprendiendo con Tecnolo</strong>. Diseñado como ecosistema digital de libre consulta.
          </span>
          <span className="text-[11px] font-semibold text-[#0897B4]">
            Enfoque Pedagógico STEAM & Construccionismo
          </span>
        </div>

      </div>
    </footer>
  );
};
