import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import { RingedPlanet, StarSparkle } from './DecorativeElements';

export const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubscribed(true);
  };

  const footerNavLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Collectibles', href: '#promos' },
    { label: 'Toy Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Collector Terms', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
  ];

  return (
    <footer id="community" className="relative w-full bg-[#EFECE6] text-[#25251E] pt-16 pb-12 overflow-hidden border-t-2 border-[#E5E0D5]">
      {/* Decorative accents */}
      <div className="absolute top-6 right-[15%] animate-float-slow opacity-60">
        <RingedPlanet size={56} planetColor="#24ACD0" ringColor="#FFCA05" />
      </div>
      <div className="absolute top-1/2 left-[25%] animate-pulse-soft opacity-50">
        <StarSparkle size={20} color="#D72968" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* UPPER FOOTER GRID: Large Character (Left, partially cropped) + Main Message (Center) + Newsletter (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-14">
          
          {/* LEFT: Large 3D Character partially cropped by the bottom edge */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-start">
            <div className="relative w-[220px] sm:w-[260px] aspect-[3/4] rounded-t-[2.5rem] rounded-b-none overflow-hidden shadow-2xl border-t-4 border-x-4 border-white bg-gradient-to-b from-white to-[#0897B4]/10 translate-y-6 hover:translate-y-2 transition-transform duration-300 flex items-end justify-center p-3">
              <img
                src="/assets/aistudio/de59d36a-f7d6-4b36-8a87-95907194165d_fb56334f.png"
                alt="Tecnolo mascota educativa 3D"
                className="w-full h-full object-contain object-bottom filter drop-shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FFCA05] text-[#25251E] text-[10px] font-black uppercase tracking-wider shadow">
                TECNOLO OFICIAL
              </div>
            </div>
          </div>

          {/* CENTER: Main Message */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left mb-6 lg:mb-4">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-black uppercase text-[#0897B4] tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMUNIDAD EDUCATIVA TECNOLO</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#25251E] uppercase tracking-tight leading-snug">
              APRENDE Y JUEGA <br className="hidden sm:inline" />
              <span className="text-[#0897B4]">SIN LÍMITES</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-sm">
              Suscríbete para recibir nuevas actividades interactivas, desafíos 3D y materiales educativos exclusivos con Tecnolo.
            </p>
          </div>

          {/* RIGHT: Newsletter Subscription Form with bright yellow 3D button */}
          <div className="lg:col-span-4 w-full mb-6 lg:mb-4">
            {subscribed ? (
              <div className="bg-white p-5 rounded-3xl shadow-sm border border-emerald-200 flex items-center gap-3 text-emerald-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-extrabold">¡Te has unido al Club!</h4>
                  <p className="text-xs text-emerald-600">
                    Revisa tu correo para acceder al primer juego interactivo de Tecnolo.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu correo educativo..."
                    className="w-full bg-white px-5 py-3.5 rounded-full text-xs font-semibold text-[#25251E] placeholder:text-neutral-400 border border-neutral-300 focus:outline-none focus:border-[#0897B4] focus:ring-2 focus:ring-[#0897B4]/20 shadow-inner"
                  />
                  <button
                    type="submit"
                    className="btn-toy-yellow sm:w-auto px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-md"
                  >
                    <span>UNIRSE</span>
                    <Send className="w-3.5 h-3.5 text-[#25251E]" />
                  </button>
                </div>
                {errorMsg && (
                  <p className="text-xs font-bold text-red-500 pl-4">{errorMsg}</p>
                )}
                <span className="text-[11px] text-neutral-500 block pl-3">
                  Sin spam. Puedes cancelar tu suscripción en cualquier momento.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM SECTION: Navigation Menu, Social Icons, Subtle Divider & Copyright */}
        <div className="pt-8 border-t border-neutral-300/80 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Horizontal Navigation Menu */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-neutral-600">
            {footerNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0897B4] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Media Links (Far Right) */}
          <div className="flex items-center gap-3">
            {[
              { label: 'Discord', icon: '🎮', url: '#' },
              { label: 'Twitter', icon: '𝕏', url: '#' },
              { label: 'Instagram', icon: '📸', url: '#' },
              { label: 'YouTube', icon: '▶', url: '#' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                aria-label={social.label}
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#FFCA05] text-[#25251E] font-extrabold flex items-center justify-center text-xs shadow-sm transition-transform hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-4 border-t border-neutral-300/40 text-center text-[11px] font-semibold text-neutral-500">
          © {new Date().getFullYear()} APRENDIENDO CON TECNOLO. TODOS LOS DERECHOS RESERVADOS.
        </div>

      </div>
    </footer>
  );
};
