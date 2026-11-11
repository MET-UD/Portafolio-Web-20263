import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Play, RefreshCw, Zap } from 'lucide-react';
import { RingedPlanet, ToyCloud, StarSparkle, OrbitalRing } from './DecorativeElements';

interface HowItWorksProps {
  onTryInteractiveDemo: (stepTitle: string) => void;
  onInspectCharacter: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({
  onTryInteractiveDemo,
  onInspectCharacter,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      menuLabel: 'Choose Your Toy',
      badge: 'STEP 01 // SELECTION',
      title: 'Pick Your Limited Edition Vinyl Character',
      desc: 'Browse our seasonal blindbox series featuring hand-crafted space explorers, retro-futuristic bots, and secret chrome variants designed by world-renowned toy artists.',
      detailPoint1: 'Physical 220g weighted artisan vinyl',
      detailPoint2: 'Exclusive serial badge laser engraved',
      actionLabel: 'EXPLORE ALL FIGURES',
    },
    {
      step: '02',
      menuLabel: 'Unbox & Tap NFC',
      badge: 'STEP 02 // AUTHENTICATE',
      title: 'Instant Tap-to-Verify Security',
      desc: 'Every collectible comes with an embedded, tamper-proof cryptographic NFC chip inside its base. Tap with any smartphone to verify ownership and unlock digital provenance.',
      detailPoint1: 'Zero gas fees or complex wallets',
      detailPoint2: 'Instant proof of physical authenticity',
      actionLabel: 'TEST NFC SIMULATOR',
    },
    {
      step: '03',
      menuLabel: 'Sync Digital Twin',
      badge: 'STEP 03 // VIRTUAL TWIN',
      title: 'Unlock Your 3D Playable Avatar',
      desc: 'Bringing toys to life: your physical figure mirrors an interactive 3D companion inside the PLAYPOP web playground with custom animations, sound effects, and poses.',
      detailPoint1: 'WebGL real-time responsive 3D model',
      detailPoint2: 'Custom cosmetic skins & badges',
      actionLabel: 'LAUNCH 3D AVATAR DEMO',
    },
    {
      step: '04',
      menuLabel: 'Play & Trade',
      badge: 'STEP 04 // COMMUNITY',
      title: 'Join Challenges & Collector Trade Club',
      desc: 'Enter weekly community showcases, trade duplicate variants safely with verified collectors, and earn exclusive access to secret VIP blindbox drops.',
      detailPoint1: 'Global collector leaderboards',
      detailPoint2: 'Guaranteed safe collector trade escrow',
      actionLabel: 'JOIN COLLECTOR CLUB',
    },
  ];

  const currentStep = steps[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative w-full bg-[#0897B4] text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Background Decorative Playful Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orbital Strokes */}
        <div className="absolute top-1/4 -right-16 opacity-30">
          <OrbitalRing width={500} height={280} strokeColor="#FFCA05" />
        </div>
        <div className="absolute bottom-8 -left-20 opacity-25">
          <OrbitalRing width={400} height={220} strokeColor="#FFFFFF" />
        </div>

        {/* 3D Toy Clouds */}
        <div className="absolute top-10 left-[20%] animate-float-slow">
          <ToyCloud width={120} height={68} fillColor="#FFFFFF" />
        </div>
        <div className="absolute bottom-16 right-[30%] animate-float-reverse">
          <ToyCloud width={140} height={80} fillColor="#B9E6EF" />
        </div>

        {/* 3D Ringed Planets */}
        <div className="absolute top-16 right-[14%] animate-float-slow">
          <RingedPlanet size={64} planetColor="#24ACD0" ringColor="#FFCA05" />
        </div>
        <div className="absolute bottom-20 left-[8%] animate-float-reverse">
          <RingedPlanet size={56} planetColor="#F4B77B" ringColor="#24ACD0" />
        </div>

        {/* Stars */}
        <div className="absolute top-1/2 left-[18%] animate-pulse-soft">
          <StarSparkle size={24} color="#FFCA05" />
        </div>
        <div className="absolute top-20 right-[40%] animate-pulse-soft">
          <StarSparkle size={28} color="#FFFFFF" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Title on Top Left */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFCA05]" />
            <span className="text-xs font-black tracking-widest uppercase text-[#FFCA05]">
              STEP BY STEP JOURNEY
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            HOW IT <span className="text-[#FFCA05]">WORKS</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/80 max-w-xl">
            From the moment your tactile vinyl package arrives to unlocking your interactive 3D digital companion.
          </p>
        </div>

        {/* Main Content Layout: Vertical Menu on Left + Central Card overlapping with 3D Character on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Vertical Menu on the Left */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none z-10">
            {steps.map((s, idx) => {
              const isSelected = idx === activeStep;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal ${
                    isSelected
                      ? 'bg-white text-[#25251E] font-black shadow-[0_10px_25px_rgba(0,0,0,0.18)] translate-x-0 lg:translate-x-2'
                      : 'bg-white/10 hover:bg-white/20 text-white font-bold'
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-display font-extrabold text-xs shrink-0 ${
                      isSelected
                        ? 'bg-[#FFCA05] text-[#25251E]'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {s.step}
                  </span>
                  <span className="text-xs sm:text-sm tracking-wide">
                    {s.menuLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Central Horizontal White Card + Overlapping Large 3D Character */}
          <div className="lg:col-span-9 relative">
            
            {/* The Horizontal White Card */}
            <div className="relative bg-white text-[#25251E] rounded-[2.5rem] p-7 sm:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.25)] border border-white/50 lg:mr-36 z-10">
              
              {/* Badge & Step indicator */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-black tracking-widest uppercase text-[#0897B4] bg-[#0897B4]/10 px-3 py-1 rounded-full">
                  {currentStep.badge}
                </span>
                <span className="text-xs font-bold text-neutral-400">
                  Step {activeStep + 1} of {steps.length}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-[#25251E] mb-3 max-w-md">
                {currentStep.title}
              </h3>

              {/* Explanatory Text */}
              <p className="text-sm text-neutral-600 leading-relaxed mb-6 max-w-lg">
                {currentStep.desc}
              </p>

              {/* 2 Key Bullet Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-700 bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-[#24ACD0] shrink-0" />
                  <span>{currentStep.detailPoint1}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-700 bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
                  <Zap className="w-4 h-4 text-[#FFCA05] shrink-0" />
                  <span>{currentStep.detailPoint2}</span>
                </div>
              </div>

              {/* Bottom Bright Yellow 3D Button */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onTryInteractiveDemo(currentStep.actionLabel)}
                  className="btn-toy-yellow px-7 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>{currentStep.actionLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#25251E]" />
                </button>

                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="px-4 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-black uppercase text-neutral-600 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Next Step</span>
                </button>
              </div>

            </div>

            {/* Large 3D Character on the Right Side (Partially overlapping / superimposed over the card) */}
            <div
              onClick={onInspectCharacter}
              className="mt-6 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-4 w-[240px] sm:w-[280px] lg:w-[320px] aspect-[3/4] z-20 mx-auto lg:mx-0 group cursor-pointer animate-float-slow select-none"
            >
              {/* Outer soft shadow ring */}
              <div className="relative w-full h-full rounded-[2.5rem] p-2.5 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-md border-2 border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/src/assets/images/how_it_works_character_1794357503540.jpg"
                  alt="Nova Explorer 3D Toy Figure"
                  className="w-full h-full object-cover rounded-[2rem]"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid tactile toy tag */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[88%] bg-white/95 px-3 py-2 rounded-xl shadow-md border border-white flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase text-[#0897B4]">
                      COMPANION 01
                    </span>
                    <span className="text-[11px] font-black text-[#25251E] uppercase">
                      NOVA EXPLORER
                    </span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFCA05] animate-ping" />
                </div>
              </div>

              {/* Decorative mini planet hovering above */}
              <div className="absolute -top-5 -left-5 animate-float-reverse">
                <RingedPlanet size={52} planetColor="#24ACD0" ringColor="#FFCA05" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
