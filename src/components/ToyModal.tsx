import React, { useState } from 'react';
import { X, RotateCw, Volume2, VolumeX, ShieldCheck, ShoppingBag, Sparkles, Star } from 'lucide-react';

export interface ModalToyData {
  id: string;
  name: string;
  series: string;
  image: string;
  color: string;
  price: string;
  description: string;
  specifications: {
    height: string;
    material: string;
    editionSize: string;
    nfcSupport: string;
  };
}

interface ToyModalProps {
  toy: ModalToyData | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (toy: ModalToyData) => void;
}

export const ToyModal: React.FC<ToyModalProps> = ({
  toy,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [added, setAdded] = useState(false);

  if (!isOpen || !toy) return null;

  // Play synthetic Web Audio API "toy pop / plastic click" sound
  const playToyPopSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.13);
    } catch {
      // AudioContext not allowed before gesture or in iframe
    }
  };

  const handleRotate = () => {
    playToyPopSound();
    setRotationAngle((prev) => (prev + 45) % 360);
  };

  const handleAdd = () => {
    playToyPopSound();
    onAddToCart(toy);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-[2.5rem] p-6 sm:p-9 shadow-2xl border-4 border-[#FFCA05] overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Top Right Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer z-20 shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 3D Toy Viewer Simulator */}
          <div className="md:col-span-6 flex flex-col items-center">
            
            {/* 3D Toy Stage with perspective */}
            <div className="relative w-full aspect-square max-w-[320px] rounded-3xl bg-gradient-to-b from-[#B9E6EF]/40 via-white to-[#F5A0BD]/30 border-2 border-neutral-100 p-4 flex items-center justify-center overflow-hidden shadow-inner">
              
              {/* Rotating Image Simulator */}
              <div
                className="w-full h-full flex items-center justify-center transition-transform duration-300 select-none"
                style={{
                  transform: `rotateY(${rotationAngle}deg)`,
                  filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.15))',
                }}
              >
                <img
                  src={toy.image}
                  alt={toy.name}
                  className="w-full h-full object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Angle Indicator Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase text-neutral-600 shadow-sm">
                VIEW: {rotationAngle}°
              </div>

              {/* Sound Toggle */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 text-neutral-600 hover:text-[#0897B4] transition-colors cursor-pointer"
                title={soundEnabled ? 'Mute toy sound' : 'Enable toy sound'}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>

            {/* Rotation Control Toolbar */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={handleRotate}
                className="btn-toy-yellow px-4 py-2 rounded-full text-xs font-black uppercase flex items-center gap-2 cursor-pointer shadow-md"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>ROTATE 45°</span>
              </button>

              <button
                onClick={() => {
                  playToyPopSound();
                  setRotationAngle(0);
                }}
                className="px-3 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 text-xs font-bold transition-colors cursor-pointer"
              >
                Reset Angle
              </button>
            </div>
          </div>

          {/* Right Column: Toy Specs, Rarity & Action */}
          <div className="md:col-span-6 flex flex-col items-start">
            
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#0897B4]/10 text-[#0897B4] text-xs font-black uppercase tracking-wider">
                {toy.series}
              </span>
              <span className="flex items-center text-xs font-bold text-[#FFCA05]">
                <Star className="w-3.5 h-3.5 fill-[#FFCA05] mr-1" />
                4.99 · Vault Verified
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#25251E] uppercase tracking-tight mb-2">
              {toy.name}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
              {toy.description}
            </p>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-2 gap-2.5 w-full mb-6">
              <div className="bg-neutral-50 p-3 rounded-2xl border border-neutral-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block">
                  HEIGHT
                </span>
                <span className="text-xs font-extrabold text-[#25251E]">
                  {toy.specifications.height}
                </span>
              </div>
              <div className="bg-neutral-50 p-3 rounded-2xl border border-neutral-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block">
                  MATERIAL
                </span>
                <span className="text-xs font-extrabold text-[#25251E]">
                  {toy.specifications.material}
                </span>
              </div>
              <div className="bg-neutral-50 p-3 rounded-2xl border border-neutral-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block">
                  RUN SIZE
                </span>
                <span className="text-xs font-extrabold text-[#0897B4]">
                  {toy.specifications.editionSize}
                </span>
              </div>
              <div className="bg-neutral-50 p-3 rounded-2xl border border-neutral-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block">
                  CHIP SECURITY
                </span>
                <span className="text-xs font-extrabold text-[#24ACD0] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  {toy.specifications.nfcSupport}
                </span>
              </div>
            </div>

            {/* Price & Add / Claim Action */}
            <div className="w-full pt-3 border-t border-neutral-100 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                  OFFICIAL PRICE
                </span>
                <span className="text-2xl font-black font-display text-[#0897B4]">
                  {toy.price}
                </span>
              </div>

              <button
                onClick={handleAdd}
                className={`btn-toy-yellow flex-1 py-3.5 px-6 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all ${
                  added ? 'bg-emerald-400 text-neutral-900 shadow-none' : ''
                }`}
              >
                {added ? (
                  <>
                    <Sparkles className="w-4 h-4 text-emerald-950" />
                    <span>ADDED TO CART!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#25251E]" />
                    <span>CLAIM COLLECTIBLE</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
