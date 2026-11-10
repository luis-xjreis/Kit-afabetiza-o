import React from 'react';
import { Lock, ShieldCheck, CheckCircle2, Star, Sparkles, ArrowRight } from 'lucide-react';
import { SiteConfig } from '../config';

interface HeroProps {
  config: SiteConfig;
  heroRef?: React.RefObject<HTMLDivElement | null>;
}

export const Hero: React.FC<HeroProps> = ({ config, heroRef }) => {
  return (
    <section 
      id="topo" 
      ref={heroRef}
      className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 bg-linear-to-b from-amber-50/70 via-white to-amber-50/30 border-b border-amber-100/50"
    >
      {/* Decorative playful elements */}
      <div className="absolute top-6 left-4 text-amber-200/50 font-extrabold text-4xl select-none pointer-events-none -rotate-12 hidden sm:block">
        Aa
      </div>
      <div className="absolute bottom-10 right-8 text-teal-200/50 font-extrabold text-4xl select-none pointer-events-none rotate-12 hidden sm:block">
        Bb
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna de Conteúdo */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Selo: só se preenchido */}
            {config.approvedFamiliesCount && config.approvedFamiliesCount.trim() !== '' && (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-200/80 text-xs sm:text-sm font-bold shadow-2xs mb-4 animate-fade-in">
                <span>✨ Aprovado por {config.approvedFamiliesCount} famílias</span>
              </div>
            )}

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] text-balance">
              Ajude seu filho a ler e escrever com mais segurança, no ritmo dele.
            </h1>

            {/* Subtítulo */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl text-balance">
              Com o Método <strong className="font-bold text-teal-700">{config.methodName}</strong>, seu filho aprende em 4 etapas simples: do som à sílaba, da sílaba à palavra, da palavra à frase. Só 10 minutos por dia, sem estresse e sem cobrança.
            </p>

            {/* Avaliação: só se preenchido */}
            {config.ratingScore && config.ratingScore.trim() !== '' && (
              <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-semibold bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200/70 shadow-2xs">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span>
                  {config.ratingScore} com base em {config.ratingCount || 'muitas'} avaliações
                </span>
              </div>
            )}

            {/* Bloco de Preço no Hero */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white/90 border border-teal-100 shadow-sm w-full max-w-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 pb-3 border-b border-slate-100">
                <div className="text-center sm:text-left">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                    Acesso Completo + Atividades em PDF
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5 justify-center sm:justify-start">
                    <span className="text-xs sm:text-sm text-slate-400 line-through">
                      De R$ {config.premium.precoCheio}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-teal-600">
                      por R$ {config.premium.precoAtual}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-600 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100/80">
                  💳 Parcele em até {config.premium.parcelasMax}x no cartão
                </div>
              </div>

              {/* Botão de Compra Principal */}
              <div className="mt-4">
                <a
                  href="#ofertas"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-coral-500 hover:bg-coral-600 active:scale-[0.99] text-white text-base sm:text-lg font-extrabold shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer text-center"
                  style={{ backgroundColor: '#FF5A36' }}
                >
                  <span>Quero ver meu filho lendo!</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </a>
              </div>

              {/* Microcopy */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 text-[11px] sm:text-xs text-slate-500 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center">
                <span className="inline-flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  Acesso imediato após o pagamento
                </span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  Compra segura
                </span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  Garantia de {config.guaranteeDays} dias
                </span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  Seus dados protegidos
                </span>
              </div>
            </div>

          </div>

          {/* Coluna da Imagem */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Moldura com fundo lúdico */}
              <div className="absolute -inset-3 bg-linear-to-tr from-teal-200/50 via-amber-200/40 to-coral-200/40 rounded-3xl -rotate-2 -z-10 blur-xs"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/src/assets/images/hero_child_reading_1794100810048.jpg"
                  alt="Criança sorridente aprendendo a ler e escrever com atividades lúdicas"
                  className="w-full h-auto object-cover aspect-4/3"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Tag de destaque na foto */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-amber-100 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-black text-sm shrink-0">
                    10m
                  </div>
                  <div className="text-left text-xs leading-tight">
                    <p className="font-bold text-slate-900">10 minutos diários em casa</p>
                    <p className="text-slate-500 mt-0.5">Atividades práticas prontas para imprimir em PDF</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
