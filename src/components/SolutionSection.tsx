import React, { useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Eye, Layers, Sparkles, X } from 'lucide-react';

interface ActivityItem {
  id: number;
  title: string;
  stage: string;
  color: string;
  tag: string;
  description: string;
  previewPrompt: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 1,
    stage: "Etapa 1: O Som",
    tag: "Consciência Fonológica",
    title: "1. O Som das Letras & Fichas Fonéticas",
    color: "bg-teal-500",
    description: "Identificação dos sons das vogais e consoantes com associações visuais cotidianas.",
    previewPrompt: "Exemplo: Descubra o som da letra 'A' de Abelha e pinte apenas as figuras que começam com o mesmo som."
  },
  {
    id: 2,
    stage: "Etapa 1: O Som",
    tag: "Treino Sensorial",
    title: "2. Caça-Vogais Ilustrado Divertido",
    color: "bg-teal-600",
    description: "Atividade lúdica para fixar A, E, I, O, U sem confusão visual ou auditiva.",
    previewPrompt: "Exemplo: Encontre as vogais escondidas no desenho e complete a trilha mágica das letras."
  },
  {
    id: 3,
    stage: "Etapa 1: O Som",
    tag: "Coordenação Motora",
    title: "3. Traçado Guiado & Grafomotricidade",
    color: "bg-teal-700",
    description: "Linhas tracejadas amplas e setas direcionais para a criança segurar o lápis com firmeza.",
    previewPrompt: "Exemplo: Siga as setas numeradas para traçar a letra com perfeição, sem forçar a mãozinha."
  },
  {
    id: 4,
    stage: "Etapa 2: A Sílaba",
    tag: "Sílabas Simples",
    title: "4. Fábrica de Sílabas (B + A = BA)",
    color: "bg-amber-500",
    description: "A união dos sons explicada visualmente com vagões de trem e blocos de montar.",
    previewPrompt: "Exemplo: O som do B encontrou o som do A e formou BA de Balão. Junte e leia em voz alta!"
  },
  {
    id: 5,
    stage: "Etapa 2: A Sílaba",
    tag: "Lógica e Associação",
    title: "5. Quebra-Cabeça Silábico Recortável",
    color: "bg-amber-600",
    description: "Atividade prática de recortar e unir sílabas para compor imagens conhecidas.",
    previewPrompt: "Exemplo: Recorte as peças CA-CHOR-RO e monte a figura no caderno."
  },
  {
    id: 6,
    stage: "Etapa 3: A Palavra",
    tag: "Leitura Inicial",
    title: "6. Ligue a Palavra ao Desenho Real",
    color: "bg-coral-500",
    description: "Transição suave para leitura independente de palavras de duas e três sílabas.",
    previewPrompt: "Exemplo: Leia 'BOLO', 'SAPATO', 'PIPOCA' e faça a ligação com a ilustração correspondente."
  },
  {
    id: 7,
    stage: "Etapa 3: A Palavra",
    tag: "Vocabulário",
    title: "7. Alfabeto Móvel para Montar Palavras",
    color: "bg-coral-600",
    description: "Fichas coloridas prontas para imprimir e manusear em cima da mesa.",
    previewPrompt: "Exemplo: Cartões de letras com cores distintas para vogais e consoantes facilitando a montagem."
  },
  {
    id: 8,
    stage: "Etapa 4: A Frase",
    tag: "Interpretação",
    title: "8. Minhas Primeiras Frases Ilustradas",
    color: "bg-indigo-500",
    description: "Estruturas curtas com vocabulário simples para a criança ter a vitória de ler uma frase inteira.",
    previewPrompt: "Exemplo: 'O gato bebeu o leite da tigela.' Traceje a frase e pinte o gatinho."
  },
  {
    id: 9,
    stage: "Etapa 4: A Frase",
    tag: "Compreensão",
    title: "9. Pequenas Histórias com Perguntinhas",
    color: "bg-indigo-600",
    description: "Textos de 3 a 5 linhas com perguntas objetivas para testar a interpretação.",
    previewPrompt: "Exemplo: Leia a historinha do dia de praia e responda: Quem foi à praia? O que ele levou?"
  },
  {
    id: 10,
    stage: "Revisão e Jogo",
    tag: "Fixação Divertida",
    title: "10. Bingo dos Sons & Desafio das Palavras",
    color: "bg-emerald-500",
    description: "Cartelas de bingo para jogar em família e celebrar cada nova palavra conquistada.",
    previewPrompt: "Exemplo: A mamãe sorteia o som ou a sílaba e a criança marca com feijão ou lápis de cor."
  }
];

export const SolutionSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  const prevSlide = () => {
    setActiveIdx((prev) => (prev === 0 ? ACTIVITIES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIdx((prev) => (prev === ACTIVITIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="solucao" className="py-14 sm:py-20 bg-amber-50/40 border-y border-amber-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold border border-teal-200 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Passo a passo estruturado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Conheça o Kit Completo de Alfabetização
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Atividades organizadas em uma sequência pensada para tornar o aprendizado mais leve, prático e fácil de aplicar, mesmo que você nunca tenha ensinado ninguém a ler.
          </p>
        </div>

        {/* Bloco "Por que funciona?" com destaque visual e Mockup */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-teal-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-50 text-teal-700 text-xs font-extrabold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>O segredo pedagógico</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                Por que funciona?
              </h3>
              
              <p className="mt-3.5 text-base sm:text-lg text-slate-700 leading-relaxed text-balance">
                Muitas crianças travam porque tentam ler palavras inteiras antes de dominar os sons. O kit segue a ordem natural do aprendizado: <strong>primeiro o som, depois a sílaba, depois a palavra, e só então a frase</strong>. Cada etapa prepara a próxima, e a criança avança com confiança, sem sentir que &ldquo;não consegue&rdquo;.
              </p>

              {/* A sequência visual das 4 etapas */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100 text-center">
                  <span className="text-[11px] font-extrabold text-teal-700 block">Etapa 1</span>
                  <span className="text-sm font-bold text-slate-900">O Som</span>
                </div>
                <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100 text-center">
                  <span className="text-[11px] font-extrabold text-teal-700 block">Etapa 2</span>
                  <span className="text-sm font-bold text-slate-900">A Sílaba</span>
                </div>
                <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100 text-center">
                  <span className="text-[11px] font-extrabold text-teal-700 block">Etapa 3</span>
                  <span className="text-sm font-bold text-slate-900">A Palavra</span>
                </div>
                <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100 text-center">
                  <span className="text-[11px] font-extrabold text-teal-700 block">Etapa 4</span>
                  <span className="text-sm font-bold text-slate-900">A Frase</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md w-full max-w-sm">
                <img
                  src="/src/assets/images/kit_mockup_materials_1794100808568.jpg"
                  alt="Visão geral do Kit Completo com apostilas e fichas em PDF"
                  className="w-full h-auto object-cover aspect-4/3"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-white border-t border-slate-100 text-center">
                  <span className="text-xs font-bold text-slate-700">
                    Formato PDF de alta resolução • Pronto para imprimir em A4
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Carrossel / Galeria de Prévias das Atividades (10 itens) */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-teal-700 block">
                Folheie por dentro
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Prévias de Atividades do Kit (10 modelos)
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Clique em qualquer atividade para ampliar e ver como ela é estruturada.
              </p>
            </div>

            {/* Controles de navegação */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={prevSlide}
                aria-label="Atividade anterior"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-semibold text-slate-500 px-1">
                {activeIdx + 1} / {ACTIVITIES.length}
              </span>
              <button
                onClick={nextSlide}
                aria-label="Próxima atividade"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards do Carrossel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACTIVITIES.slice(activeIdx, activeIdx + 3).concat(
              // Wrap around if near end
              activeIdx + 3 > ACTIVITIES.length 
                ? ACTIVITIES.slice(0, (activeIdx + 3) % ACTIVITIES.length) 
                : []
            ).map((act) => (
              <div
                key={act.id}
                onClick={() => setSelectedActivity(act)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                {/* Mock da folha de atividade imprimível */}
                <div className="p-5 bg-amber-50/30 border-b border-slate-100 relative">
                  
                  {/* Folha estilo caderno/papel */}
                  <div className="aspect-4/3 bg-white rounded-xl border border-slate-200/80 p-3 shadow-inner flex flex-col justify-between group-hover:border-teal-400 transition-colors">
                    
                    {/* Header da folha */}
                    <div className="flex items-center justify-between pb-2 border-b border-dashed border-slate-200">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${act.color}`}></span>
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                          Atividade #{act.id}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                        {act.stage}
                      </span>
                    </div>

                    {/* Miolo visual da folha */}
                    <div className="my-auto py-2">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-2xl font-black text-slate-800 font-display">A a</span>
                        <span className="text-slate-300 font-light">|</span>
                        <span className="text-2xl font-black text-teal-600 font-display">B b</span>
                        <span className="text-slate-300 font-light">|</span>
                        <span className="text-2xl font-black text-coral-500 font-display">C c</span>
                      </div>
                      
                      {/* Pautas caligráficas simuladas */}
                      <div className="space-y-1.5 px-2">
                        <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                        <div className="h-2 bg-slate-100 rounded-full w-3/4 mx-auto"></div>
                        <div className="h-1.5 border-b border-dashed border-slate-300 w-5/6 mx-auto"></div>
                      </div>
                    </div>

                    {/* Footer da folha */}
                    <div className="flex items-center justify-between pt-1.5 text-[9px] text-slate-400 font-medium">
                      <span>Nome: _________________</span>
                      <span>Data: __/__</span>
                    </div>

                  </div>

                  {/* Botão flutuante de ver detalhe */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-t-2xl backdrop-blur-2xs">
                    <span className="inline-flex items-center gap-1.5 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md">
                      <Eye className="w-3.5 h-3.5 text-teal-600" />
                      Visualizar Atividade
                    </span>
                  </div>
                </div>

                {/* Descrição abaixo da imagem */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-teal-700 block mb-0.5">
                      {act.tag}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {act.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {act.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-600 group-hover:text-teal-700">
                    <span>Ver detalhes</span>
                    <span>→</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Dots indicadores */}
          <div className="flex justify-center items-center gap-1.5 mt-6">
            {ACTIVITIES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                aria-label={`Ir para atividade ${i + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIdx === i ? 'w-6 bg-teal-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal de Zoom da Atividade */}
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-200">
              
              <button
                onClick={() => setSelectedActivity(null)}
                aria-label="Fechar prévia"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className={`w-3 h-3 rounded-full ${selectedActivity.color}`}></span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  {selectedActivity.stage}
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 pr-8">
                {selectedActivity.title}
              </h3>

              <div className="mt-4 p-5 rounded-2xl bg-amber-50/50 border border-amber-200/70">
                <p className="text-xs uppercase font-extrabold text-amber-800 tracking-wider mb-1">
                  Objetivo Pedagógico:
                </p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  {selectedActivity.description}
                </p>

                <div className="mt-3 pt-3 border-t border-amber-200/60">
                  <p className="text-xs uppercase font-extrabold text-teal-800 tracking-wider mb-1">
                    Exemplo de Aplicação:
                  </p>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    &ldquo;{selectedActivity.previewPrompt}&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-500">
                  Arquivo PDF pronto para imprimir
                </span>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Entendi
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Lista: O que esse trabalho ajuda a desenvolver */}
        <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-teal-100 shadow-sm">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 text-center sm:text-left mb-5">
            O que esse trabalho ajuda a desenvolver:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base font-semibold text-slate-800">
                Compreensão e interpretação de textos
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base font-semibold text-slate-800">
                Concentração e foco
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base font-semibold text-slate-800">
                Autonomia e capacidade de seguir instruções
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base font-semibold text-slate-800">
                Base sólida para aprender outros idiomas no futuro
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
