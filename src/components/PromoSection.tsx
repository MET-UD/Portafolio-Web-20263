import React, { useState } from 'react';
import { Star, Sparkles, CheckCircle2, ChevronRight, Box, Cpu, Award } from 'lucide-react';
import { StarSparkle, RingedPlanet } from './DecorativeElements';

interface PromoSectionProps {
  onClaimToy: (toyName: string) => void;
  onInspectPromo: () => void;
}

export const PromoSection: React.FC<PromoSectionProps> = ({
  onClaimToy,
  onInspectPromo,
}) => {
  const [activeTab, setActiveTab] = useState<'standard' | 'glow'>('standard');

  const backCardItems = [
    {
      icon: Box,
      title: 'Solid Vinyl Cast',
      desc: 'Hand-poured 220g weighted vinyl figurine with satin finish.',
    },
    {
      icon: Cpu,
      title: 'Smart NFC Chip',
      desc: 'Tap with mobile phone to unlock in-game avatar & authenticity certificate.',
    },
    {
      icon: Award,
      title: 'Numbered Certificate',
      desc: 'Laser-etched metal authenticity card inside custom collector blindbox.',
    },
  ];

  return (
    <section id="promos" className="relative w-full bg-[#F9F8F6] py-20 md:py-32 overflow-hidden">
      {/* Subtle Floating Ambient Background Details */}
      <div className="absolute top-12 left-[10%] animate-float-slow opacity-60">
        <RingedPlanet size={52} planetColor="#F5A0BD" ringColor="#24ACD0" />
      </div>
      <div className="absolute bottom-16 right-[12%] animate-float-reverse opacity-70">
        <StarSparkle size={28} color="#FFCA05" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0897B4]/10 text-[#0897B4] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FIGURAS Y COMPAÑEROS 3D</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#25251E] uppercase tracking-tight">
            DESCUBRE A <span className="text-[#0897B4]">STARBOT 01</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#25251E]/70">
            Diseñado para incentivar la curiosidad tecnológica a través del juego, la robótica y el arte 3D.
          </p>
        </div>

        {/* LAYERED FLOATING CARDS CONTAINER */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* 1. CYAN BACK CARD (Layered behind, shifted right & slightly rotated/offset) */}
          <div className="relative lg:absolute lg:top-8 lg:-right-6 lg:w-[68%] bg-[#0897B4] text-white rounded-[2.5rem] p-8 sm:p-10 shadow-[0_25px_50px_rgba(8,151,180,0.3)] border-4 border-white/40 z-0 mb-8 lg:mb-0 transition-transform hover:translate-x-1">
            <div className="lg:pl-48">
              <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#FFCA05]">
                  ARQUITECTURA DE APRENDIZAJE
                </span>
                <span className="text-xs font-bold text-[#B9E6EF]">
                  SERIES 1 / 01
                </span>
              </div>

              {/* 3 Informational Items */}
              <div className="space-y-5">
                {backCardItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      {/* Circular icon badge */}
                      <div className="w-10 h-10 rounded-full bg-[#FFCA05] text-[#25251E] flex items-center justify-center shrink-0 shadow-[0_3px_0_#C99E00]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-white tracking-wide">
                          {item.title}
                        </h4>
                        <p className="text-xs text-white/80 leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Back Card Secondary Button */}
              <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/70">
                  Global Shipping Included
                </span>
                <button
                  onClick={onInspectPromo}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#FFCA05] hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>VIEW FULL SPECS</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. MAIN FRONT WHITE CARD (Dominant, floating above with rounded corners and drop shadow) */}
          <div className="relative z-10 bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-[0_30px_70px_rgba(37,37,30,0.12)] border border-neutral-100 max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: 3D Character Illustration */}
              <div className="md:col-span-5 flex justify-center">
                <div
                  onClick={onInspectPromo}
                  className="relative group cursor-pointer w-full max-w-[260px] aspect-square rounded-3xl overflow-hidden shadow-lg border-2 border-neutral-100 transition-transform group-hover:scale-105"
                >
                  <img
                    src="/src/assets/images/promo_card_character_1794357502555.jpg"
                    alt="Starbot Vinyl Collectible Toy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#24ACD0] text-white text-[10px] font-black uppercase tracking-wider shadow">
                    STARBOT #01
                  </div>
                  {/* Tactile prompt overlay on hover */}
                  <div className="absolute inset-0 bg-[#24ACD0]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white text-[#25251E] font-black text-xs shadow-md">
                      TAP TO INSPECT
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Rating, Title, Description, Yellow 3D Button */}
              <div className="md:col-span-7 flex flex-col items-start">
                
                {/* Rating Indicator */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-[#FFCA05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFCA05]" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-[#25251E]">
                    9.8 / 10
                  </span>
                  <span className="text-xs text-neutral-400">·</span>
                  <span className="text-xs font-semibold text-neutral-500">
                    Collector Choice
                  </span>
                </div>

                {/* Prominent Title */}
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#25251E] uppercase tracking-tight mb-2">
                  STARBOT EDITION 01
                </h3>

                {/* Description Text */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Artisan vinyl robot companion with custom high-gloss turquoise body, 
                  carrying a glitter-infused golden star core. Includes interactive 
                  digital twin authentication.
                </p>

                {/* Interactive Edition Selector */}
                <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-neutral-100 mb-6">
                  <button
                    onClick={() => setActiveTab('standard')}
                    className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      activeTab === 'standard'
                        ? 'bg-white text-[#25251E] shadow-sm'
                        : 'text-neutral-500 hover:text-[#25251E]'
                    }`}
                  >
                    Classic Turquoise
                  </button>
                  <button
                    onClick={() => setActiveTab('glow')}
                    className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      activeTab === 'glow'
                        ? 'bg-white text-[#25251E] shadow-sm'
                        : 'text-neutral-500 hover:text-[#25251E]'
                    }`}
                  >
                    Glow-in-the-Dark Star
                  </button>
                </div>

                {/* Price and Bright Yellow 3D Button */}
                <div className="flex items-center gap-5 w-full">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                      PRICE
                    </span>
                    <span className="text-2xl font-black font-display text-[#0897B4]">
                      $89.00
                    </span>
                  </div>

                  <button
                    onClick={() => onClaimToy('Starbot Edition 01')}
                    className="btn-toy-yellow flex-1 py-3.5 px-6 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>CLAIM YOURS</span>
                    <CheckCircle2 className="w-4 h-4 text-[#25251E]" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
