import React from 'react';
import { ArrowUpRight, Sparkles, Plus } from 'lucide-react';
import { StarSparkle, RingedPlanet } from './DecorativeElements';

interface FeatureCardItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  badge: string;
  color: string;
}

interface FeaturesSectionProps {
  onSelectFeature: (feature: FeatureCardItem) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  onSelectFeature,
}) => {
  const features: FeatureCardItem[] = [
    {
      id: 'controller',
      tag: 'GEAR 01',
      title: 'HAPTIC JOYPAD TOY',
      desc: 'Chunky silicone and vinyl game controller equipped with playful bubble buttons and tactile retro clickers.',
      image: '/src/assets/images/feature_toy_controller_1794357503275.jpg',
      badge: 'TACTILE FEEL',
      color: '#24ACD0',
    },
    {
      id: 'mystery-box',
      tag: 'DROP 02',
      title: 'COSMIC STAR BLINDBOX',
      desc: 'Limited mystery capsule containing randomized chrome variations, holographic foil collector cards, and pins.',
      image: '/src/assets/images/feature_mystery_box_1794357503691.jpg',
      badge: '1/50 CHASE',
      color: '#D72968',
    },
    {
      id: 'companions',
      tag: 'SERIES 03',
      title: 'ROBO COMPANIONS',
      desc: 'Artisan vinyl figurines with built-in NFC tap-to-play sensors that unlock live 3D companions in the web sandbox.',
      image: '/src/assets/images/promo_card_character_1794357502555.jpg',
      badge: 'NFC ENABLED',
      color: '#F4B77B',
    },
  ];

  return (
    <section id="features" className="relative w-full bg-[#F9F8F6] py-20 md:py-32 overflow-hidden border-t border-neutral-200/60">
      {/* Background Micro Accents */}
      <div className="absolute top-8 right-[8%] animate-float-slow opacity-60">
        <RingedPlanet size={60} planetColor="#FFCA05" ringColor="#D72968" />
      </div>
      <div className="absolute bottom-10 left-[6%] animate-pulse-soft opacity-70">
        <StarSparkle size={24} color="#24ACD0" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header: Intro tag + Main Title left-aligned */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24ACD0]/10 text-[#24ACD0] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCLUSIVE TOY PERKS & ACCESSORIES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#25251E] uppercase tracking-tight">
            DISEÑADO PARA <span className="text-[#0897B4]">APRENDER</span> Y JUGAR
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Cada recurso y objeto 3D en el universo de Tecnolo fomenta la creatividad, el razonamiento lógico y la diversión táctil.
          </p>
        </div>

        {/* 3 Horizontal Cards in a Single Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch pt-4 pb-8">
          {features.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectFeature(item)}
              className="relative group bg-white rounded-[2.5rem] p-7 shadow-[0_15px_40px_rgba(37,37,30,0.06)] hover:shadow-[0_25px_60px_rgba(37,37,30,0.12)] border border-neutral-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Card Top: Tag + Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black tracking-widest uppercase text-neutral-400">
                    {item.tag}
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-display font-black text-xl text-[#25251E] uppercase tracking-tight mb-2 group-hover:text-[#0897B4] transition-colors">
                  {item.title}
                </h3>

                {/* Card Short Description */}
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* 3D Toy Object Illustration */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-100 shadow-inner group-hover:border-[#FFCA05]/50 transition-colors">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual tactile badge overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* DISTINCTIVE DETAIL: Small Circular Yellow 3D Button Overlapping Bottom Edge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                <button
                  type="button"
                  aria-label={`Inspect ${item.title}`}
                  className="btn-toy-circle w-11 h-11 rounded-full flex items-center justify-center font-black cursor-pointer group-hover:rotate-45 transition-transform"
                >
                  <ArrowUpRight className="w-5 h-5 text-[#25251E]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
