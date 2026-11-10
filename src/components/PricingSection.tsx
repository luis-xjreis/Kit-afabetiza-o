import React from 'react';
import { Check, Star, ShieldCheck, Lock, Gift, ArrowRight } from 'lucide-react';
import { SiteConfig } from '../config';

interface PricingSectionProps {
  config: SiteConfig;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ config }) => {
  return (
    <section id="ofertas" className="py-14 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-extrabold text-teal-700 block mb-2">
            Escolha a melhor opção para seu filho
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Comece hoje mesmo com acesso imediato
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Pagamento único, sem mensalidades. Acesso vitalício em PDF pronto para imprimir.
          </p>
        </div>

        {/* 
          Grid de Ofertas: 
          No mobile, o Card Premium aparece PRIMEIRO (destaque).
          No desktop, ficam lado a lado.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          
          {/* CARD PREMIUM (Destaque, aparece primeiro no mobile via order ou posicionamento) */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative">
            
            {/* Faixa Superior: ⭐ Mais escolhido */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-black text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap z-10 border border-amber-300">
              <Star className="w-4 h-4 fill-slate-950" />
              <span>⭐ Mais escolhido pelas famílias</span>
            </div>

            <div className="p-6 sm:p-9 rounded-3xl bg-linear-to-b from-teal-50/60 via-white to-amber-50/30 border-3 border-teal-500 shadow-xl relative overflow-hidden">
              
              {/* Header do Card */}
              <div className="pt-2 text-center lg:text-left">
                <span className="text-xs font-black uppercase tracking-wider text-teal-800 bg-teal-100/90 px-3 py-1 rounded-md inline-block mb-2">
                  Experiência Completa
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  {config.premium.nome}
                </h3>
              </div>

              {/* Bloco de Bônus inclusos */}
              <div className="mt-5 p-4 rounded-2xl bg-white border border-teal-100/90 shadow-2xs">
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug mb-3">
                  Você leva o kit completo e ainda recebe, sem pagar nada a mais por eles:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Gift className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Gêneros Textuais</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Gift className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Consciência Fonológica</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Gift className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Sílabas Simples</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Gift className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>100 Textos de Interpretação</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Gift className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Avaliação Diagnóstica (1º ao 5º ano)</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Gift className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Gramática e Ortografia</span>
                  </div>
                </div>
              </div>

              {/* Itens Essenciais */}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-teal-900 font-bold px-1">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-teal-600 stroke-3" />
                  Garantia de {config.guaranteeDays} dias
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-teal-600 stroke-3" />
                  Acesso vitalício
                </span>
              </div>

              {/* Preço Premium */}
              <div className="mt-6 pt-5 border-t border-teal-100 text-center lg:text-left">
                <div className="flex items-baseline justify-center lg:justify-start gap-2">
                  <span className="text-sm text-slate-400 line-through">
                    De R$ {config.premium.precoCheio}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-teal-700">
                    por R$ {config.premium.precoAtual}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  💳 Em até {config.premium.parcelasMax}x no cartão
                </div>
              </div>

              {/* Âncora de Valor */}
              <div className="mt-4 p-3 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs sm:text-sm text-slate-700 leading-relaxed text-center lg:text-left">
                Menos que uma hora de aula particular para ter, em casa, o caminho completo da alfabetização, com 6 bônus e acesso para sempre.
              </div>

              {/* Botão Grande de Compra */}
              <div className="mt-5">
                <a
                  href={config.CHECKOUT_URL_PREMIUM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 active:scale-[0.99] text-white text-base sm:text-lg font-black shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                  style={{ backgroundColor: '#FF5A36' }}
                >
                  <span>Quero o Pacote Premium</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </a>
                <div className="mt-2.5 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-teal-600" />
                  <span>🔒 Acesso imediato após o pagamento</span>
                </div>
              </div>

            </div>
          </div>

          {/* CARD BÁSICO (Visual mais discreto, botão menor e neutro) */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              
              <div className="text-center lg:text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Opção Essencial
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mt-1">
                  {config.basico.nome}
                </h3>
              </div>

              <div className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-3" />
                  <span>Kit completo de alfabetização</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-3" />
                  <span>Mais de 2.500 exercícios</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-3" />
                  <span>Mais de 2.000 páginas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-3" />
                  <span>Garantia de {config.guaranteeDays} dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-3" />
                  <span>Acesso vitalício</span>
                </div>
              </div>

              {/* Preço Básico */}
              <div className="mt-6 pt-5 border-t border-slate-200 text-center lg:text-left">
                <div className="flex items-baseline justify-center lg:justify-start gap-2">
                  <span className="text-xs text-slate-400 line-through">
                    De R$ {config.basico.precoCheio}
                  </span>
                  <span className="text-2xl font-extrabold text-slate-900">
                    por R$ {config.basico.precoAtual}
                  </span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  💳 Em até {config.basico.parcelasMax}x no cartão
                </div>
              </div>

              {/* Botão Básico Neutro */}
              <div className="mt-5">
                <a
                  href={config.CHECKOUT_URL_BASICO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-sm font-bold shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <span>Quero só o kit</span>
                </a>
                <div className="mt-2 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>🔒 Acesso imediato após o pagamento</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
