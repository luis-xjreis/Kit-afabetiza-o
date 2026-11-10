import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { SiteConfig } from '../config';

interface HeaderProps {
  config: SiteConfig;
}

export const Header: React.FC<HeaderProps> = ({ config }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single element wordmark */}
        <a 
          href="#topo" 
          className="flex items-center gap-2.5 text-slate-900 group"
        >
          <div className="w-9 h-9 rounded-xl bg-teal-500 text-white flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-tight">
              {config.brandName}
            </span>
            <span className="text-[11px] font-medium text-teal-700 -mt-0.5">
              Método {config.methodName}
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#como-funciona" className="hover:text-teal-600 transition-colors whitespace-nowrap">
            Como Funciona
          </a>
          <a href="#solucao" className="hover:text-teal-600 transition-colors whitespace-nowrap">
            O Material
          </a>
          <a href="#bonus" className="hover:text-teal-600 transition-colors whitespace-nowrap">
            6 Bônus Inclusos
          </a>
          <a href="#faq" className="hover:text-teal-600 transition-colors whitespace-nowrap">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: Primary CTA button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#ofertas"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 active:scale-95 rounded-xl shadow-xs transition-all whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ver Oferta</span>
          </a>
        </div>
      </div>
    </header>
  );
};
