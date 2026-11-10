import React from 'react';
import { Gift, BookMarked, Music, FileText, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface BonusItem {
  id: number;
  title: string;
  originalPrice: string;
  description: string;
  icon: React.ReactNode;
}

const BONUSES: BonusItem[] = [
  {
    id: 1,
    title: "Gêneros Textuais",
    originalPrice: "R$ 29,90",
    description: "Atividades para a criança conhecer e entender diferentes tipos de texto.",
    icon: <BookMarked className="w-5 h-5 text-teal-600" />
  },
  {
    id: 2,
    title: "Consciência Fonológica",
    originalPrice: "R$ 29,90",
    description: "Brincadeiras com sons, rimas e sílabas, a base de toda a alfabetização.",
    icon: <Music className="w-5 h-5 text-amber-500" />
  },
  {
    id: 3,
    title: "Sílabas Simples",
    originalPrice: "R$ 19,90",
    description: "Passo a passo para formar sílabas, montar palavras e começar a ler e escrever.",
    icon: <Sparkles className="w-5 h-5 text-rose-500" />
  },
  {
    id: 4,
    title: "100 Textos de Interpretação",
    originalPrice: "R$ 29,90",
    description: "Textos com atividades, do mais simples ao mais desafiador.",
    icon: <FileText className="w-5 h-5 text-indigo-500" />
  },
  {
    id: 5,
    title: "Avaliação Diagnóstica do 1º ao 5º Ano",
    originalPrice: "R$ 19,90",
    description: "Para descobrir onde estão as dificuldades e acompanhar a evolução.",
    icon: <Award className="w-5 h-5 text-emerald-600" />
  },
  {
    id: 6,
    title: "Gramática e Ortografia",
    originalPrice: "R$ 29,90",
    description: "Atividades para aprender as regras e escrever com mais segurança.",
    icon: <CheckCircle2 className="w-5 h-5 text-sky-600" />
  }
];

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="py-14 sm:py-20 bg-linear-to-b from-white via-amber-50/20 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-100 mb-3 shadow-2xs">
            <Gift className="w-4 h-4 text-rose-500" />
            <span>Presentes Exclusivos no Pacote Premium</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            🎁 E ainda leva 6 bônus para turbinar a alfabetização!
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Materiais complementares prontos para imprimir que aceleram a evolução do seu filho.
          </p>
        </div>

        {/* Grid de Bônus (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    {bonus.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 line-through font-medium">
                      de {bonus.originalPrice}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-black">
                      GRÁTIS
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  Bônus {bonus.id}: {bonus.title}
                </h3>
                
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Material em PDF Imprimível</span>
                <span className="text-emerald-700 font-bold">100% Incluso</span>
              </div>
            </div>
          ))}
        </div>

        {/* Faixa Final com Preço dos Bônus */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-slate-900 text-white text-center shadow-lg border border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <div className="text-base sm:text-lg font-extrabold tracking-wide">
            Valor total dos bônus: <span className="line-through text-slate-400 font-normal">R$ 159,40</span> <span className="text-amber-300">→ Hoje: R$ 0,00</span>
          </div>
          <a
            href="#ofertas"
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-extrabold rounded-xl transition-all shadow-xs cursor-pointer whitespace-nowrap"
          >
            Garantir com os 6 Bônus
          </a>
        </div>

      </div>
    </section>
  );
};
