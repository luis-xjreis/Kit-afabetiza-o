import React from 'react';
import { Sparkles } from 'lucide-react';

interface BenefitItem {
  emoji: string;
  title: string;
  color: string;
}

const BENEFITS: BenefitItem[] = [
  { emoji: "📖", title: "Mais fluência na leitura", color: "bg-teal-50 border-teal-200/70" },
  { emoji: "✍️", title: "Escrita mais organizada", color: "bg-amber-50 border-amber-200/70" },
  { emoji: "❤️", title: "Mais autoconfiança", color: "bg-rose-50 border-rose-200/70" },
  { emoji: "🧠", title: "Mais foco e atenção", color: "bg-indigo-50 border-indigo-200/70" },
  { emoji: "🎯", title: "Mais concentração", color: "bg-sky-50 border-sky-200/70" },
  { emoji: "⚡", title: "Aprendizado mais rápido e leve", color: "bg-emerald-50 border-emerald-200/70" },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-100 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transformação real em casa</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
          Com a prática, seu filho pode ganhar:
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl border ${item.color} shadow-2xs hover:shadow-xs transition-shadow flex flex-col items-center justify-center text-center`}
            >
              <span className="text-3xl sm:text-4xl mb-3 select-none" aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
