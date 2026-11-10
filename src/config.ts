/**
 * CONFIGURAÇÃO DA LANDING PAGE DE ALFABETIZAÇÃO INFANTIL
 * 
 * Todos os textos, links de checkout, preços e blocos condicionais
 * são controlados exclusivamente por este arquivo.
 * 
 * Regra dos blocos opcionais:
 * - Se o campo estiver vazio ("" ou []), o componente correspondente
 *   será automaticamente ocultado na página sem quebrar o layout.
 */

export interface TestimonialItem {
  nome: string;
  foto?: string;
  texto: string;
}

export interface AuthorConfig {
  nome: string;
  papel: string; // ex: "pedagoga e especialista em alfabetização"
  anosExperiencia: string; // ex: "12"
  foto?: string;
  citacao: string; // ex: "Criei este kit depois de ver mais de 400 crianças superarem a dificuldade com leitura usando atividades curtas e na ordem certa."
}

export interface SiteConfig {
  // URLs de Checkout
  CHECKOUT_URL_BASICO: string;
  CHECKOUT_URL_PREMIUM: string;

  // Identidade do Produto e Método
  brandName: string;
  methodName: string;

  // Garantia incondicional (sempre 7 dias)
  guaranteeDays: number;

  // Prova Social no Hero (Campos [X] - Deixar "" para ocultar)
  approvedFamiliesCount: string; // ex: "2.840" -> exibe: "✨ Aprovado por 2.840 famílias" | se "" -> OCULTA
  ratingScore: string; // ex: "4.9" -> exibe: "⭐⭐⭐⭐⭐ 4.9 com base em 320 avaliações" | se "" -> OCULTA
  ratingCount: string; // ex: "320"

  // Preços - Pacote Básico
  basico: {
    nome: string;
    precoCheio: string; // ex: "97,00"
    precoAtual: string; // ex: "37,00"
    parcelasMax: string; // ex: "4"
  };

  // Preços - Pacote Premium
  premium: {
    nome: string;
    precoCheio: string; // ex: "197,00"
    precoAtual: string; // ex: "67,00"
    parcelasMax: string; // ex: "7"
  };

  // Urgência e Oferta por Tempo Limitado (Deixar "" para ocultar a contagem regressiva)
  // Formato aceito: data ISO (ex: "2026-11-15T23:59:59") ou data legível para o texto (ex: "domingo")
  offerEndDate: string; // se "" -> OCULTA seção de urgência | se preenchida -> EXIBE contador

  // Autoridade / Criadora (Deixar null ou campos vazios para ocultar)
  author: AuthorConfig | null;

  // Depoimentos de Pais/Mães (Deixar [] para ocultar)
  testimonials: TestimonialItem[];
}

export const siteConfig: SiteConfig = {
  // Links de pagamento (substitua pelas suas URLs da Hotmart, Kiwify, Eduzz, etc.)
  CHECKOUT_URL_BASICO: "https://pay.hotmart.com/exemplo-basico",
  CHECKOUT_URL_PREMIUM: "https://pay.hotmart.com/exemplo-premium",

  // Identidade
  brandName: "Método Alfabetizar",
  methodName: "Alfabetiza+",

  // Garantia padrão
  guaranteeDays: 7,

  // Campos de dados ainda não coletados (ficam vazios por padrão para ocultar)
  approvedFamiliesCount: "", // Deixe vazio para ocultar o selo no Hero
  ratingScore: "",           // Deixe vazio para ocultar estrelas/nota no Hero
  ratingCount: "",

  // Preços
  basico: {
    nome: "Kit de Alfabetização Pedagógica",
    precoCheio: "97,00",
    precoAtual: "37,00",
    parcelasMax: "4",
  },

  premium: {
    nome: "Pacote Premium: Kit Completo + 6 Bônus Exclusivos",
    precoCheio: "197,00",
    precoAtual: "67,00",
    parcelasMax: "7",
  },

  // Urgência (deixe vazio "" para ocultar o bloco de contagem regressiva)
  offerEndDate: "",

  // Autoridade (deixe null para ocultar a seção "Quem criou este material")
  author: null,

  // Depoimentos (deixe array vazio [] para ocultar a seção)
  testimonials: [],
};

// Dados de exemplo caso você queira ativar as seções opcionais para testar:
export const sampleOptionalData = {
  approvedFamiliesCount: "3.200+",
  ratingScore: "4.9",
  ratingCount: "487",
  offerEndDate: "2026-11-12T23:59:59",
  author: {
    nome: "Juliana Mendes",
    papel: "Pedagoga e Psicopedagoga Clínica",
    anosExperiencia: "14",
    foto: "",
    citacao: "Criei este kit depois de ver dezenas de crianças superarem a dificuldade com leitura usando atividades curtas e na ordem certa.",
  },
  testimonials: [
    {
      nome: "Renata C. (Mãe do Theo, 6 anos)",
      texto: "Ele chorava toda vez que abria a cartilha da escola. Em duas semanas com as atividades dos sons e das sílabas simples, ele começou a ler as placas na rua sozinho. Valeu cada centavo!",
    },
    {
      nome: "Carlos Eduardo (Pai da Alice, 5 anos)",
      texto: "Material super direto, sem enrolação. Eu imprimia 2 folhas por dia e fazíamos em 10 minutos antes do jantar. Foi uma virada de chave para a Alice.",
    },
    {
      nome: "Mariana S. (Mãe do Pedro, 7 anos)",
      texto: "A professora me chamou no final do bimestre para elogiar o salto de leitura do Pedro. O material tirou toda aquela ansiedade que a gente sentia em casa.",
    },
  ],
};
