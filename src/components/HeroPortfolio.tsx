import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Layers, Volume2, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { RingedPlanet, ToyCloud, StarSparkle, OrbitalRing } from './DecorativeElements';

interface HeroPortfolioProps {
  onExploreClick: () => void;
  onModulesClick: () => void;
  onOpenGuide: () => void;
}

export const HeroPortfolio: React.FC<HeroPortfolioProps> = ({
  onExploreClick,
  onModulesClick,
  onOpenGuide,
}) => {
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  // Play pleasant playful synth chime greeting via Web Audio API
  const playGreetingAudio = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      setIsPlayingVoice(true);

      const notes = [261.63, 329.63, 392.0, 523.25, 659.25]; // C4, E4, G4, C5, E5
      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.12);

        gain.gain.setValueAtTime(0.2, ctx.currentTime + index * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.12 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + index * 0.12);
        osc.stop(ctx.currentTime + index * 0.12 + 0.36);
      });

      setTimeout(() => setIsPlayingVoice(false), 1200);
    } catch {
      setIsPlayingVoice(false);
    }
  };

  const statCards = [
    { label: 'Recursos Digitales', count: '24+', desc: 'PDFs, videos e interactivos' },
    { label: 'Módulos Temáticos', count: '6', desc: 'Rutas curriculares STEAM' },
    { label: 'Formatos Multimedia', count: '7', desc: 'Visores integrados 100%' },
    { label: 'Aprendizaje Activo', count: '100%', desc: 'Enfoque práctico y lúdico' },
  ];

  return (
    <section
      id="inicio"
      className="relative w-full bg-[#0897B4] text-white pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden"
    >
      {/* Background Playful Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orbital rings */}
        <div className="absolute -top-12 -right-20 opacity-30">
          <OrbitalRing width={600} height={350} strokeColor="#FFFFFF" />
        </div>
        <div className="absolute top-1/2 -left-20 opacity-25">
          <OrbitalRing width={460} height={240} strokeColor="#FFCA05" />
        </div>

        {/* 3D Toy Clouds */}
        <div className="absolute top-12 right-[42%] animate-float-slow">
          <ToyCloud width={130} height={75} fillColor="#B9E6EF" />
        </div>
        <div className="absolute bottom-10 left-[4%] animate-float-reverse">
          <ToyCloud width={150} height={85} fillColor="#FFFFFF" />
        </div>

        {/* Ringed Planets */}
        <div className="absolute top-16 left-[6%] animate-float-slow">
          <RingedPlanet size={64} planetColor="#FFCA05" ringColor="#0897B4" />
        </div>
        <div className="absolute top-8 right-[10%] animate-float-reverse">
          <RingedPlanet size={76} planetColor="#84CC16" ringColor="#FFCA05" />
        </div>

        {/* Stars */}
        <div className="absolute top-1/3 left-[26%] animate-pulse-soft">
          <StarSparkle size={26} color="#FFCA05" />
        </div>
        <div className="absolute bottom-1/4 right-[28%] animate-pulse-soft">
          <StarSparkle size={30} color="#FFFFFF" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* UPPER HERO SPLIT: Presentation Content (Left) + Interactive Avatar Stage (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[540px]">
          
          {/* LEFT: Text & Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] animate-pulse" />
              <span className="text-xs font-black tracking-widest uppercase text-[#FFCA05]">
                PORTAFOLIO EDUCATIVO DIGITAL
              </span>
              <span className="text-white/50">·</span>
              <span className="text-xs font-bold text-white/90">
                INNOVACIÓN & CREATIVIDAD
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[3.8rem] leading-[1.08] tracking-tight uppercase mb-5 text-balance drop-shadow-md">
              <span className="block text-white">APRENDIENDO CON</span>
              <span className="block text-[#FFCA05]">TECNOLO</span>
            </h1>

            {/* Presentation & Philosophy */}
            <p className="text-base sm:text-lg text-[#F9F8F6]/95 max-w-xl font-normal leading-relaxed mb-6">
              Bienvenido al ecosistema interactivo de recursos pedagógicos. Un espacio creado 
              para explorar, experimentar y construir conocimiento a través del pensamiento 
              computacional, la robótica educativa y las nuevas narrativas digitales.
            </p>

            {/* Interactive Speech Bubble from Tecnolo */}
            <div className="relative bg-white text-[#25251E] p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-[#FFCA05] mb-8 max-w-xl">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#84CC16]/20 flex items-center justify-center shrink-0 text-[#65A30D] font-black text-base">
                  💡
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black uppercase text-[#0897B4] tracking-wider">
                      MENSAJE DE TECNOLO
                    </span>
                    <button
                      onClick={playGreetingAudio}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-500 hover:text-[#0897B4] cursor-pointer"
                      title="Escuchar saludo sonoro"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${isPlayingVoice ? 'text-[#0897B4] animate-bounce' : ''}`} />
                      <span>{isPlayingVoice ? 'Sonando...' : 'Escuchar'}</span>
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-snug">
                    "¡Hola! Soy Tecnolo, tu avatar y compañero de ruta. En este portafolio podrás 
                    consultar PDFs en nuestro visor integrado, ver clases en video, ampliar mapas 
                    conceptuales y probar simuladores en vivo. ¡Comencemos a explorar!"
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="btn-toy-yellow px-7 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer group shadow-xl"
              >
                <BookOpen className="w-4 h-4 text-[#25251E]" />
                <span>EXPLORAR RECURSOS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onModulesClick}
                className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-xs sm:text-sm tracking-wide transition-all backdrop-blur-sm cursor-pointer flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-[#FFCA05]" />
                <span>VER 6 MÓDULOS</span>
              </button>

              <button
                onClick={onOpenGuide}
                className="px-5 py-3.5 rounded-full bg-[#84CC16] hover:bg-[#65A30D] text-[#25251E] font-black text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-md flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#25251E]" />
                <span>CONSEJOS DE TECNOLO</span>
              </button>
            </div>

          </div>

          {/* RIGHT: Avatar Visual Showcase with 3D Depth */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Back Glow */}
            <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#FFCA05]/25 blur-3xl -z-10" />
            <div className="absolute w-[260px] h-[260px] rounded-full bg-[#84CC16]/30 blur-2xl -z-10 translate-y-8" />

            {/* Avatar Card Podium with Float Animation */}
            <div
              onClick={onOpenGuide}
              className="relative group cursor-pointer animate-float-slow select-none"
            >
              <div className="relative w-[280px] sm:w-[350px] aspect-[3/4] rounded-[2.5rem] p-4 bg-gradient-to-b from-white/30 via-white/15 to-white/5 backdrop-blur-md border-2 border-white/40 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] flex flex-col items-center justify-between">
                
                {/* 3D Tecnolo Character Image with Drop Shadow */}
                <div className="relative w-full flex-1 flex items-center justify-center p-3">
                  <img
                    src="/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png"
                    alt="Avatar Oficial Tecnolo"
                    className="w-full h-full object-contain filter drop-shadow-[0_18px_25px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Tactile Information Badge */}
                <div className="w-[92%] bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/70 flex items-center justify-between mb-1">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0897B4]">
                      GUÍA DEL PORTAFOLIO
                    </span>
                    <span className="text-xs font-black text-[#25251E] uppercase">
                      TECNOLO 3D
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#84CC16] text-[#25251E] text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#25251E]" />
                    ACTIVO
                  </span>
                </div>
              </div>

              {/* Floating Mini Planet beside avatar */}
              <div className="absolute -top-5 -right-5 animate-float-reverse">
                <RingedPlanet size={62} planetColor="#FFCA05" ringColor="#0897B4" />
              </div>

              {/* Floating Cloud */}
              <div className="absolute -bottom-5 -left-6 animate-float-slow">
                <ToyCloud width={110} height={60} fillColor="#B9E6EF" />
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM METRIC STRIP (4 KPI Cards in a row) */}
        <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/15 flex flex-col items-start"
            >
              <span className="font-display font-black text-2xl sm:text-3xl text-[#FFCA05]">
                {stat.count}
              </span>
              <span className="text-xs font-extrabold text-white uppercase tracking-wider mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#B9E6EF] font-medium mt-0.5">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
