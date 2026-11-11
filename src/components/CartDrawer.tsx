import React, { useState } from 'react';
import { X, Trash2, ArrowRight, CheckCircle, Sparkles, ShoppingBag } from 'lucide-react';
import { ModalToyData } from './ToyModal';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { toy: ModalToyData; quantity: number }[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onClearCart,
}) => {
  const [discountCode, setDiscountCode] = useState('TOYVIP10');
  const [discountApplied, setDiscountApplied] = useState(true);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const rawTotal = cart.reduce((acc, item) => {
    const num = parseFloat(item.toy.price.replace('$', '')) || 0;
    return acc + num * item.quantity;
  }, 0);

  const discountAmount = discountApplied ? rawTotal * 0.1 : 0;
  const finalTotal = Math.max(0, rawTotal - discountAmount);

  const handleApplyDiscount = () => {
    if (discountCode.trim().toUpperCase() === 'TOYVIP10') {
      setDiscountApplied(true);
    }
  };

  const handleSimulatedCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutSuccess(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l-4 border-[#FFCA05]">
        
        {/* Header */}
        <div className="p-6 bg-[#0897B4] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFCA05] text-[#25251E] flex items-center justify-center font-black">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg uppercase tracking-wide">
                BOLSA DE TECNOLO
              </h3>
              <span className="text-xs text-[#B9E6EF] font-bold">
                {cart.length} {cart.length === 1 ? 'Figure' : 'Figures'} in Bag
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {checkoutSuccess ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-display font-black text-xl text-[#25251E] uppercase">
                ORDER CONFIRMED!
              </h4>
              <p className="text-xs text-neutral-600 mt-2 max-w-xs">
                Your collectible vinyl figurine is being prepared and numbered in our cleanroom studio. Tracking sent to your email.
              </p>
            </div>
          ) : cart.length === 0 ? (
            <div className="py-16 text-center text-neutral-400">
              <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-3 text-neutral-300">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <p className="text-sm font-bold text-neutral-600">Your bag is empty</p>
              <p className="text-xs text-neutral-400 mt-1">
                Explore our series drops to add limited-edition figures!
              </p>
            </div>
          ) : (
            cart.map(({ toy, quantity }) => (
              <div
                key={toy.id}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors"
              >
                <img
                  src={toy.image}
                  alt={toy.name}
                  className="w-16 h-16 object-cover rounded-xl bg-white border border-neutral-100 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-black text-[#25251E] truncate uppercase">
                    {toy.name}
                  </h4>
                  <span className="text-[10px] font-bold text-[#D72968] block">
                    {toy.series} · Qty {quantity}
                  </span>
                  <span className="text-sm font-black text-[#25251E]">
                    {toy.price}
                  </span>
                </div>
                <button
                  onClick={() => onRemoveItem(toy.id)}
                  className="p-2 text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        {cart.length > 0 && !checkoutSuccess && (
          <div className="p-6 bg-neutral-50 border-t border-neutral-200/80 space-y-4">
            {/* Promo Code Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Discount code"
                className="flex-1 px-4 py-2 bg-white rounded-xl text-xs font-bold uppercase text-[#25251E] border border-neutral-200 focus:outline-none focus:border-[#0897B4]"
              />
              <button
                onClick={handleApplyDiscount}
                className="px-4 py-2 rounded-xl bg-[#25251E] text-white text-xs font-bold cursor-pointer hover:bg-neutral-800 transition-colors"
              >
                Apply
              </button>
            </div>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-[#25251E]">
                  ${rawTotal.toFixed(2)}
                </span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>VIP Collector 10% Off</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Worldwide Tracked Shipping</span>
                <span className="text-emerald-600 font-bold uppercase">
                  FREE
                </span>
              </div>
              <div className="flex justify-between text-base font-black text-[#25251E] pt-2 border-t border-neutral-200">
                <span>Total</span>
                <span className="text-[#0897B4] font-display">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleSimulatedCheckout}
              className="btn-toy-yellow w-full py-3.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#25251E]" />
              <span>CHECKOUT WITH 1-TAP</span>
              <ArrowRight className="w-4 h-4 text-[#25251E]" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
