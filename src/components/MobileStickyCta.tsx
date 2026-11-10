import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { SiteConfig } from '../config';

interface MobileStickyCtaProps {
  config: SiteConfig;
  heroRef?: React.RefObject<HTMLDivElement | null>;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ config, heroRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef?.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        // Aparece após o hero rolar para fora da tela
        setIsVisible(heroBottom < 60);
      } else {
        // Fallback: aparece após rolar 450px
        setIsVisible(window.scrollY > 450);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroRef]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-amber-200/80 px-3 py-2.5 shadow-xl animate-slide-up transition-transform duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        
        {/* Info de Preço Compacta */}
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1 text-[10px] font-bold text-amber-700 leading-none">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            <span className="truncate">Pacote Premium</span>
          </div>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-[11px] text-slate-400 line-through">
              R$ {config.premium.precoCheio}
            </span>
            <span className="text-base font-black text-teal-700 leading-tight">
              R$ {config.premium.precoAtual}
            </span>
          </div>
        </div>

        {/* CTA Principal de Alta Conversão */}
        <a
          href={config.CHECKOUT_URL_PREMIUM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[210px] py-2.5 px-3 rounded-xl bg-coral-500 hover:bg-coral-600 active:scale-95 text-white font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap text-center"
          style={{ backgroundColor: '#FF5A36' }}
        >
          <span>Quero o Premium</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </a>

      </div>
    </div>
  );
};
