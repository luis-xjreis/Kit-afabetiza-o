import React from 'react';
import { Lightbulb, AlertCircle } from 'lucide-react';

export const PainSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-100 mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Identifique os sinais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Seu filho ainda trava na hora de ler e você não sabe como ajudar?
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
            Muitos pais ouvem que &ldquo;cada criança tem o seu tempo&rdquo;. Mas, enquanto esperam, a situação começa a pesar:
          </p>
        </div>

        {/* Os 3 Cards de Dor */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="text-3xl mb-3 select-none" aria-hidden="true">
              😔
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              A leitura virou um momento de tensão
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Cada tentativa termina em frustração, e a hora de estudar vira a hora mais temida do dia.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="text-3xl mb-3 select-none" aria-hidden="true">
              😣
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              A escola já deu o alerta
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              As notas caem, a professora conversa com você, e você fica sem saber por onde começar em casa.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="text-3xl mb-3 select-none" aria-hidden="true">
              💔
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              Pior: ele começa a se achar incapaz
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Sem entender o motivo, a criança passa a acreditar que &ldquo;não leva jeito&rdquo;.
            </p>
          </div>

        </div>

        {/* Virada em Destaque */}
        <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-teal-50 border-2 border-teal-200/80 shadow-xs relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <Lightbulb className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-teal-800 block mb-1">
                A Virada
              </span>
              <p className="text-base sm:text-lg text-slate-900 font-bold leading-snug">
                💡 Mas a verdade é outra: seu filho não é menos inteligente. Ele só precisa aprender com um caminho claro, simples e divertido.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
