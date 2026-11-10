import React from 'react';
import { Mail, Smartphone, Infinity as InfinityIcon, Heart } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-14 sm:py-20 bg-amber-50/40 border-y border-amber-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Título */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-extrabold text-teal-700 block mb-2">
            Sem complicações
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            É simples. Em 3 passos, você já começa:
          </h2>
        </div>

        {/* 3 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Passo 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs relative">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center font-black text-xl mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl select-none" aria-hidden="true">✉️</span>
              <h3 className="text-lg font-bold text-slate-900">
                1. RECEBA
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Assim que o pagamento for confirmado, o acesso chega ao seu e-mail.
            </p>
          </div>

          {/* Passo 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs relative">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center font-black text-xl mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl select-none" aria-hidden="true">📱</span>
              <h3 className="text-lg font-bold text-slate-900">
                2. ACESSE
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Abra no celular, tablet ou computador, ou imprima, quando quiser.
            </p>
          </div>

          {/* Passo 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs relative">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center font-black text-xl mb-4">
              <InfinityIcon className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl select-none" aria-hidden="true">♾️</span>
              <h3 className="text-lg font-bold text-slate-900">
                3. É SEU PARA SEMPRE
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Acesso vitalício, sem mensalidade e sem renovação.
            </p>
          </div>

        </div>

        {/* Fecho */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-teal-200/70 shadow-2xs text-slate-700 text-sm font-bold">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>Prático, rápido e pensado para a sua rotina.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
