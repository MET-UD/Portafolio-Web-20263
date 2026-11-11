import React from 'react';
import { Sparkles, ArrowRight, Star, ShieldCheck, Flame } from 'lucide-react';
import { RingedPlanet, ToyCloud, StarSparkle, OrbitalRing } from './DecorativeElements';

interface HeroSectionProps {
  onExploreClick: () => void;
  onInspectHero: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onInspectHero,
}) => {
  return (
    <section
      id="hero"
      className="relative w-full bg-[#0897B4] text-white pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden"
    >
      {/* Background Decorative Playful Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large orbital rings */}
        <div className="absolute -top-10 -right-20 opacity-30">
          <OrbitalRing width={600} height={350} strokeColor="#FFFFFF" />
        </div>
        <div className="absolute top-1/2 -left-24 opacity-25">
          <OrbitalRing width={480} height={260} strokeColor="#FFCA05" />
        </div>

        {/* 3D Toy Clouds */}
        <div className="absolute top-16 right-[38%] animate-float-slow">
          <ToyCloud width={130} height={75} fillColor="#B9E6EF" />
        </div>
        <div className="absolute bottom-12 left-[4%] animate-float-reverse">
          <ToyCloud width={160} height={90} fillColor="#FFFFFF" />
        </div>
        <div className="absolute bottom-20 right-[5%] animate-float-slow hidden md:block">
          <ToyCloud width={140} height={80} fillColor="#B9E6EF" />
        </div>

        {/* 3D Ringed Planets */}
        <div className="absolute top-24 left-[8%] animate-float-slow">
          <RingedPlanet size={68} planetColor="#FFCA05" ringColor="#0897B4" />
        </div>
        <div className="absolute top-8 right-[12%] animate-float-reverse">
          <RingedPlanet size={80} planetColor="#F4B77B" ringColor="#24ACD0" />
        </div>

        {/* Sparkling linear stars */}
        <div className="absolute top-1/3 left-[28%] animate-pulse-soft">
          <StarSparkle size={26} color="#FFCA05" />
        </div>
        <div className="absolute bottom-1/3 right-[32%] animate-pulse-soft">
          <StarSparkle size={32} color="#FFFFFF" />
        </div>
        <div className="absolute top-12 left-[48%] animate-pulse-soft hidden sm:block">
          <StarSparkle size={20} color="#B9E6EF" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          
          {/* LEFT COLUMN: Textual Content */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Introductory Upper Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FFCA05]" />
              <span className="text-xs font-black tracking-widest uppercase text-[#FFCA05]">
                EDUCACIÓN & TECNOLOGÍA CREATIVA
              </span>
              <span className="text-white/60">·</span>
              <span className="text-xs font-semibold text-white/90">
                UNIVERSO INTERACTIVO 3D
              </span>
            </div>

            {/* Main Title: Large, Geometric, 2-lines */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] tracking-tight uppercase mb-6 text-balance drop-shadow-md">
              <span className="block text-white">APRENDIENDO CON</span>
              <span className="block text-[#FFCA05]">TECNOLO</span>
            </h1>

            {/* Brief Descriptive Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#F9F8F6]/90 max-w-xl font-normal leading-relaxed mb-8">
              ¡Explora un universo interactivo y divertido donde la tecnología, el juego y la creatividad 
              se unen para transformar el aprendizaje de la mano de Tecnolo, nuestro amigable monstruo 3D!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="btn-toy-yellow px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer group shadow-xl"
              >
                <span>EXPLORAR CON TECNOLO</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onInspectHero}
                className="px-6 py-4 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-sm tracking-wide transition-all backdrop-blur-sm cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FFCA05]" />
                <span>CONOCER A TECNOLO</span>
              </button>
            </div>

            {/* Micro Trust / Stat markers */}
            <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-10 text-white/90">
              <div className="flex items-center gap-2">
                <div className="flex text-[#FFCA05]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFCA05]" />
                  ))}
                </div>
                <span className="text-xs font-bold tracking-wide">
                  100% Diversión y Aprendizaje
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFCA05]" />
                <span className="text-xs font-bold tracking-wide">
                  Contenido Educativo Verificado
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#FFCA05]" />
                <span className="text-xs font-bold tracking-wide">
                  Mundo 3D Interactivo
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Large 3D Character (Tecnolo) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Soft Glow Ambient behind character */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#FFCA05]/25 blur-3xl -z-10" />
            <div className="absolute w-[280px] h-[280px] rounded-full bg-emerald-400/30 blur-2xl -z-10 translate-y-8" />

            {/* Character Container with Floating Motion */}
            <div
              onClick={onInspectHero}
              className="relative group cursor-pointer animate-float-slow select-none"
            >
              {/* Outer Decorative Card / Podium */}
              <div className="relative w-[300px] sm:w-[360px] md:w-[400px] aspect-[3/4] rounded-[2.5rem] p-4 bg-gradient-to-b from-white/30 via-white/15 to-white/5 backdrop-blur-md border-2 border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] flex flex-col items-center justify-between">
                
                {/* 3D Tecnolo Character Image with Drop Shadow */}
                <div className="relative w-full flex-1 flex items-center justify-center p-2">
                  <img
                    src="/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png"
                    alt="Tecnolo - Amigable Monstruo Educativo 3D"
                    className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Tactile Badge Overlay on Toy Base */}
                <div className="w-[90%] bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/60 flex items-center justify-between mb-1">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0897B4]">
                      MASCOTA OFICIAL
                    </span>
                    <span className="text-xs font-black text-[#25251E] uppercase">
                      TECNOLO 3D
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#84CC16] text-[#25251E] text-[10px] font-black uppercase tracking-wider shadow-sm">
                    ¡HOLA AMIGOS!
                  </span>
                </div>
              </div>

              {/* Floating Little Satellite / Mini Ringed Planet beside character */}
              <div className="absolute -top-6 -right-6 animate-float-reverse">
                <RingedPlanet size={64} planetColor="#FFCA05" ringColor="#0897B4" />
              </div>

              {/* Little Floating Cloud at base */}
              <div className="absolute -bottom-6 -left-8 animate-float-slow">
                <ToyCloud width={110} height={60} fillColor="#B9E6EF" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
