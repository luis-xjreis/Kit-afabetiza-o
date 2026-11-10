import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { SiteConfig } from '../config';

interface GuaranteeSectionProps {
  config: SiteConfig;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ config }) => {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-teal-50/70 border-2 border-teal-200 shadow-sm flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
          
          {/* Selo / Escudo */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-teal-600 text-white flex flex-col items-center justify-center shrink-0 shadow-md border-4 border-white">
            <ShieldCheck className="w-10 h-10 text-yellow-300" />
            <span className="text-[11px] font-black uppercase tracking-wider text-teal-100">
              {config.guaranteeDays} Dias
            </span>
          </div>

          {/* Conteúdo */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              Teste sem risco: satisfação garantida ou seu dinheiro de volta
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              🛡️ Garantia incondicional de {config.guaranteeDays} dias. Teste o kit com seu filho. Se não gostar, devolvemos 100% do valor com um único e-mail, sem perguntas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
