import React, { useState } from 'react';
import { Sparkles, Menu, X, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onOpenCart?: () => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCart, cartCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Collectibles', href: '#promos' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Community', href: '#community' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-40 w-full bg-[#0897B4] text-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-8">
        {/* LOGO: Left Zone */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          {/* 3D Toy Icon Badge */}
          <div className="w-10 h-10 rounded-2xl bg-[#FFCA05] flex items-center justify-center shadow-[0_4px_0_#C99E00] transform transition-transform group-hover:scale-105 group-hover:-rotate-3">
            <Sparkles className="w-6 h-6 text-[#25251E] fill-[#25251E]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-white drop-shadow-sm uppercase">
              APRENDIENDO CON <span className="text-[#FFCA05]">TECNOLO</span>
            </span>
            <span className="text-[10px] tracking-widest text-[#B9E6EF] uppercase font-bold -mt-0.5">
              AVENTURA EDUCATIVA 3D
            </span>
          </div>
        </a>

        {/* NAVIGATION: Center Zone (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-semibold tracking-wide text-white/90 hover:text-[#FFCA05] transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus:text-[#FFCA05]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* ACTION: Right Zone */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#FFCA05] text-[#25251E] font-black text-xs flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          <button
            onClick={() => handleNavClick('#promos')}
            className="btn-toy-yellow px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider cursor-pointer whitespace-nowrap"
          >
            JOIN CLUB
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-xl bg-white/10 text-white"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FFCA05] text-[#25251E] font-black text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#077990] border-t border-white/10 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-bold text-white hover:text-[#FFCA05] py-2 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/15">
              <button
                onClick={() => handleNavClick('#promos')}
                className="w-full btn-toy-yellow py-3 rounded-2xl text-xs font-black uppercase tracking-wider text-center"
              >
                JOIN THE CLUB NOW
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
