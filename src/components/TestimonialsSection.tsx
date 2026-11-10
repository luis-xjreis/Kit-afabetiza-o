import React from 'react';
import { Star, MessageCircle, Heart } from 'lucide-react';
import { TestimonialItem } from '../config';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  // Renderizar só se houver itens em config.ts
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-14 sm:py-20 bg-amber-50/30 border-y border-amber-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-100 mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Relatos Reais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Famílias que já aplicaram em casa
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Veja a experiência de pais e mães que utilizaram o material com seus filhos.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Estrelinhas */}
                <div className="flex text-amber-400 gap-1 mb-3">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{item.texto}&rdquo;
                </p>
              </div>

              {/* Autor do Depoimento */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-3">
                {item.foto && item.foto.trim() !== '' ? (
                  <img
                    src={item.foto}
                    alt={item.nome}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0">
                    <MessageCircle className="w-4 h-4 text-teal-700" />
                  </div>
                )}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.nome}
                  </h4>
                  <span className="text-[11px] text-teal-700 font-medium">
                    Família verificada
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
