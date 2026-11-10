import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SiteConfig } from '../config';

interface FaqItem {
  id: string;
  pergunta: string;
  resposta: string;
}

interface FaqSectionProps {
  config: SiteConfig;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ config }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'item-1': true, // Primeiro aberto por padrão para incentivar leitura
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Monta lista de FAQ conforme instrução estrita
  const faqList: FaqItem[] = [
    {
      id: 'item-1',
      pergunta: 'Quais as formas de pagamento?',
      resposta: 'PIX e cartão de crédito.',
    },
    {
      id: 'item-2',
      pergunta: 'Como recebo o material?',
      resposta: 'Por e-mail, logo após a confirmação do pagamento.',
    },
    {
      id: 'item-3',
      pergunta: 'Preciso pagar mensalidade?',
      resposta: 'Não. O pagamento é único e o acesso é vitalício.',
    },
    {
      id: 'item-4',
      pergunta: 'Posso usar no celular?',
      resposta: 'Sim, no celular, tablet ou computador, e também dá para imprimir.',
    },
    {
      id: 'item-5',
      pergunta: 'A compra é segura?',
      resposta: 'Sim, o pagamento é processado em ambiente protegido.',
    },
    {
      id: 'item-6',
      pergunta: 'Preciso saber ensinar para aplicar?',
      resposta: 'Não. O passo a passo é guiado, e as atividades têm instruções claras para qualquer pai ou mãe.',
    },
    {
      id: 'item-7',
      pergunta: 'A partir de que idade posso usar?',
      resposta: 'Indicado para crianças de 4 a 8 anos. Comece pela etapa em que seu filho está.',
    },
    {
      id: 'item-8',
      pergunta: 'E se meu filho não gostar?',
      resposta: `Você tem ${config.guaranteeDays} dias de garantia. Se não funcionar para vocês, devolvemos o valor integral.`,
    },
  ];

  // Se houver data real em config.ts, inclui a pergunta sobre o prazo da oferta
  if (config.offerEndDate && config.offerEndDate.trim() !== '') {
    faqList.push({
      id: 'item-9',
      pergunta: 'Até quando vale essa oferta?',
      resposta: `O valor promocional com os 6 bônus inclusos é válido até ${config.offerEndDate}. Após este período, o kit retornará ao preço integral de R$ ${config.premium.precoCheio}.`,
    });
  }

  return (
    <section id="faq" className="py-14 sm:py-20 bg-amber-50/40 border-t border-amber-100/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-100 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire suas dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Respostas claras e transparentes sobre o kit e o acesso.
          </p>
        </div>

        {/* Acordeão Acessível */}
        <div className="space-y-3.5">
          {faqList.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-2xs overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-teal-700 transition-colors focus-visible:outline-2 focus-visible:outline-teal-500 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base leading-snug">
                      {item.pergunta}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-600 bg-teal-50' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  hidden={!isOpen}
                  className={`px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <p className="pt-3">{item.resposta}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
