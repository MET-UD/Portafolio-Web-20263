import React, { useState } from 'react';
import { Sparkles, Menu, X, Search, Compass, BookOpen, Layers, Info, Mail } from 'lucide-react';

interface NavigationProps {
  onSearchClick?: () => void;
  onOpenGuide?: () => void;
  activeSection?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  onSearchClick,
  onOpenGuide,
  activeSection = 'inicio',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio', icon: Compass },
    { label: 'Explorar Recursos', href: '#recursos', icon: BookOpen },
    { label: 'Módulos Temáticos', href: '#modulos', icon: Layers },
    { label: 'Sobre el Proyecto', href: '#proyecto', icon: Info },
    { label: 'Contacto', href: '#contacto', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0897B4] text-white shadow-md border-b-2 border-[#077990]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-6">
        
        {/* BRAND ZONE (Left) */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none shrink-0"
        >
          {/* Avatar Icon Badge */}
          <div className="w-11 h-11 rounded-2xl bg-white p-1 shadow-[0_4px_0_#077990] flex items-center justify-center transform transition-transform group-hover:scale-105 group-hover:-rotate-3 overflow-hidden">
            <img
              src="/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png"
              alt="Avatar Tecnolo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white drop-shadow-sm uppercase">
              APRENDIENDO CON <span className="text-[#FFCA05]">TECNOLO</span>
            </span>
            <span className="text-[10px] tracking-widest text-[#B9E6EF] uppercase font-bold -mt-0.5">
              PORTAFOLIO EDUCATIVO & RECURSOS 3D
            </span>
          </div>
        </a>

        {/* NAV LINKS (Center Desktop) */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-white/90 hover:text-[#FFCA05] transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus:text-[#FFCA05]"
              >
                <Icon className="w-3.5 h-3.5 text-[#FFCA05]" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* ACTION ZONE (Right) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onSearchClick}
            className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer flex items-center gap-2 text-xs font-bold"
            title="Buscar recursos"
          >
            <Search className="w-4 h-4 text-[#FFCA05]" />
            <span className="hidden sm:inline">Buscar</span>
          </button>

          {/* Guide CTA Button */}
          <button
            onClick={onOpenGuide}
            className="btn-toy-yellow px-4 sm:px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#25251E]" />
            <span>GUÍA TECNOLO</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/15 text-white hover:bg-white/25 focus:outline-none lg:hidden"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#077990] border-t border-white/15 px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center gap-3 text-left text-sm font-bold text-white hover:text-[#FFCA05] py-2 transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#FFCA05]" />
                  <span>{link.label}</span>
                </button>
              );
            })}
            <div className="pt-3 border-t border-white/15 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onSearchClick) onSearchClick();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 text-[#FFCA05]" />
                <span>Buscar en el Portafolio</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenGuide) onOpenGuide();
                }}
                className="w-full btn-toy-yellow py-3 rounded-2xl text-xs font-black uppercase tracking-wider text-center"
              >
                HABLAR CON TECNOLO GUÍA
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
