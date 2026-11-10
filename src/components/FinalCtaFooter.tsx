import React, { useState } from 'react';
import { ArrowRight, Lock, ShieldCheck, Heart, BookOpen } from 'lucide-react';
import { SiteConfig } from '../config';
import { LegalModal } from './LegalModals';

interface FinalCtaFooterProps {
  config: SiteConfig;
}

export const FinalCtaFooter: React.FC<FinalCtaFooterProps> = ({ config }) => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <>
      {/* Bloco de CTA Final */}
      <section className="py-14 sm:py-20 bg-linear-to-b from-white to-amber-50/50 border-t border-amber-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-br from-teal-500 via-teal-600 to-teal-700 text-white shadow-xl relative overflow-hidden">
            
            {/* Decorações sutis */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-amber-400/20 rounded-full blur-xl pointer-events-none"></div>

            <span className="text-xs uppercase font-extrabold tracking-wider bg-white/20 text-white px-3.5 py-1.5 rounded-full inline-block mb-4 backdrop-blur-xs">
              Último Passo
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-xl mx-auto leading-tight text-balance">
              Comece hoje. Em poucos minutos por dia, seu filho dá o primeiro passo.
            </h2>

            <p className="mt-3.5 text-sm sm:text-base text-teal-100 max-w-lg mx-auto">
              Garanta o Pacote Premium com todos os 6 bônus exclusivos inclusos e acesso vitalício.
            </p>

            {/* Repetição do Botão do Premium */}
            <div className="mt-8 max-w-md mx-auto">
              <a
                href={config.CHECKOUT_URL_PREMIUM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 active:scale-[0.99] text-white text-base sm:text-lg font-black shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                style={{ backgroundColor: '#FF5A36' }}
              >
                <span>Quero o Pacote Premium</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>

              <div className="mt-3 flex items-center justify-center gap-4 text-xs text-teal-100">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-amber-300" />
                  Acesso imediato
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                  Garantia de {config.guaranteeDays} dias
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Rodapé Institucional */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
            
            {/* Marca */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-500 text-white flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-slate-100 text-base">
                  {config.brandName}
                </span>
                <span className="text-xs text-slate-500 block">
                  Alfabetização com afeto e método científico
                </span>
              </div>
            </div>

            {/* Links Legais */}
            <div className="flex items-center gap-6 text-xs sm:text-sm">
              <button
                type="button"
                onClick={() => setModalType('privacy')}
                className="hover:text-white transition-colors cursor-pointer underline underline-offset-4"
              >
                Política de Privacidade
              </button>
              <button
                type="button"
                onClick={() => setModalType('terms')}
                className="hover:text-white transition-colors cursor-pointer underline underline-offset-4"
              >
                Termos de Uso
              </button>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
            <p>
              Todos os direitos reservados — {config.brandName} © {new Date().getFullYear()}
            </p>
            <p className="flex items-center gap-1">
              <span>Feito para apoiar famílias em todo o Brasil</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </p>
          </div>
        </div>
      </footer>

      {/* Modais Legais */}
      <LegalModal
        type={modalType}
        onClose={() => setModalType(null)}
        config={config}
      />
    </>
  );
};
