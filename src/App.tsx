/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { siteConfig, sampleOptionalData, SiteConfig } from './config';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { SolutionSection } from './components/SolutionSection';
import { AuthoritySection } from './components/AuthoritySection';
import { BonusSection } from './components/BonusSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { UrgencySection } from './components/UrgencySection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaFooter } from './components/FinalCtaFooter';
import { MobileStickyCta } from './components/MobileStickyCta';
import { DemoToggle } from './components/DemoToggle';

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Estado para permitir testar a landing page tanto no estado padrão
  // (campos opcionais vazios) quanto com os dados opcionais simulados.
  const [isSimulatingData, setIsSimulatingData] = useState(false);

  // Combina configuração atual com os dados de simulação se ativo
  const activeConfig: SiteConfig = isSimulatingData
    ? {
        ...siteConfig,
        approvedFamiliesCount: sampleOptionalData.approvedFamiliesCount,
        ratingScore: sampleOptionalData.ratingScore,
        ratingCount: sampleOptionalData.ratingCount,
        offerEndDate: sampleOptionalData.offerEndDate,
        author: sampleOptionalData.author,
        testimonials: sampleOptionalData.testimonials,
      }
    : siteConfig;

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900">
      
      {/* Barra de Navegação Superior */}
      <Header config={activeConfig} />

      {/* Conteúdo Principal na Ordem Exata Especificada */}
      <main className="flex-1">
        
        {/* 1) HERO */}
        <Hero config={activeConfig} heroRef={heroRef} />

        {/* 2) DOR */}
        <PainSection />

        {/* 3) A SOLUÇÃO */}
        <SolutionSection />

        {/* 4) AUTORIDADE (só se preenchido) */}
        <AuthoritySection author={activeConfig.author} />

        {/* 5) O QUE VOCÊ RECEBE + BÔNUS */}
        <BonusSection />

        {/* 6) BENEFÍCIOS */}
        <BenefitsSection />

        {/* 7) COMO FUNCIONA */}
        <HowItWorksSection />

        {/* 8) URGÊNCIA (só se houver data em config.ts) */}
        <UrgencySection config={activeConfig} />

        {/* 9) OFERTAS (dois cards: Premium em destaque primeiro no mobile) */}
        <PricingSection config={activeConfig} />

        {/* 10) DEPOIMENTOS (só se houver itens em config.ts) */}
        <TestimonialsSection testimonials={activeConfig.testimonials} />

        {/* 11) GARANTIA (7 dias incondicional) */}
        <GuaranteeSection config={activeConfig} />

        {/* 12) FAQ (acordeão acessível) */}
        <FaqSection config={activeConfig} />

        {/* 13) CTA FINAL + RODAPÉ */}
        <FinalCtaFooter config={activeConfig} />

      </main>

      {/* Botão Fixo no Rodapé do Mobile (após rolar o Hero) */}
      <MobileStickyCta config={activeConfig} heroRef={heroRef} />

      {/* Controle de Demonstração (Permite ao cliente alternar entre os estados) */}
      <DemoToggle 
        isSimulatingData={isSimulatingData} 
        onToggle={() => setIsSimulatingData((prev) => !prev)} 
      />

    </div>
  );
}
