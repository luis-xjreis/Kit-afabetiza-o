import React from 'react';
import { Award, Quote, GraduationCap } from 'lucide-react';
import { AuthorConfig } from '../config';

interface AuthoritySectionProps {
  author: AuthorConfig | null;
}

export const AuthoritySection: React.FC<AuthoritySectionProps> = ({ author }) => {
  // Se não estiver preenchido em config.ts, oculta a seção
  if (!author || !author.nome || author.nome.trim() === '') {
    return null;
  }

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-amber-100/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-100 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Responsabilidade Pedagógica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quem criou este material
          </h2>
        </div>

        <div className="bg-amber-50/40 rounded-3xl p-6 sm:p-10 border border-amber-200/60 shadow-xs flex flex-col md:flex-row items-center gap-8">
          
          {/* Foto ou Avatar Ilustrado da Autora */}
          <div className="shrink-0">
            {author.foto && author.foto.trim() !== '' ? (
              <img
                src={author.foto}
                alt={author.nome}
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover border-4 border-white shadow-md"
              />
            ) : (
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-teal-600 text-white flex flex-col items-center justify-center border-4 border-white shadow-md p-4 text-center">
                <Award className="w-12 h-12 text-yellow-300 mb-2" />
                <span className="text-sm font-black">{author.nome}</span>
                <span className="text-[11px] text-teal-100 mt-0.5">Especialista</span>
              </div>
            )}
          </div>

          {/* Dados e Citação */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {author.nome}
            </h3>
            
            <p className="mt-1 text-sm sm:text-base font-semibold text-teal-700">
              {author.papel}, com {author.anosExperiencia} anos de experiência em sala de aula.
            </p>

            <div className="mt-4 pt-4 border-t border-amber-200/60 relative">
              <Quote className="w-6 h-6 text-amber-300 mb-2 inline-block -rotate-12" />
              <blockquote className="text-slate-700 italic text-sm sm:text-base leading-relaxed">
                &ldquo;{author.citacao}&rdquo;
              </blockquote>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
