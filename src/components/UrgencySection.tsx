import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { SiteConfig } from '../config';

interface UrgencySectionProps {
  config: SiteConfig;
}

export const UrgencySection: React.FC<UrgencySectionProps> = ({ config }) => {
  // Se a data da oferta estiver vazia, NÃO exibe o bloco de urgência
  if (!config.offerEndDate || config.offerEndDate.trim() === '') {
    return null;
  }

  // Timer regressivo
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({ hours: 11, minutes: 47, seconds: 25 });

  useEffect(() => {
    // Tenta interpretar como data ISO, senão usa contador dinâmico de 12 horas
    const target = new Date(config.offerEndDate).getTime();
    const isIsoDate = !isNaN(target);

    const updateTimer = () => {
      if (isIsoDate) {
        const now = new Date().getTime();
        const difference = target - now;
        if (difference > 0) {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
          setTimeLeft({ hours, minutes, seconds });
        } else {
          setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        }
      } else {
        // Fallback contagem cíclica
        setTimeLeft((prev) => {
          if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
          if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
          return { hours: 12, minutes: 0, seconds: 0 };
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [config.offerEndDate]);

  // Formata data legível se for ISO
  const formattedDate = (() => {
    try {
      const d = new Date(config.offerEndDate);
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
      }
    } catch {
      // Ignora erro
    }
    return config.offerEndDate;
  })();

  return (
    <section className="py-8 bg-amber-500 text-slate-900 border-y-2 border-amber-600/40 shadow-inner">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/90 text-amber-800 flex items-center justify-center shrink-0 shadow-xs">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs uppercase font-black tracking-wider text-amber-950">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Oportunidade Limitada</span>
              </div>
              <p className="text-base sm:text-lg font-black text-slate-950 leading-snug">
                ⏳ Condição especial de lançamento até {formattedDate}. Depois disso, o kit volta para R$ {config.premium.precoCheio}.
              </p>
            </div>
          </div>

          {/* Contador Regressivo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-slate-950 text-white rounded-xl px-3 py-2 text-center min-w-[54px] shadow-sm">
              <span className="text-xl sm:text-2xl font-black tabular-nums block leading-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Horas</span>
            </div>
            <span className="text-xl font-bold text-slate-950">:</span>
            <div className="bg-slate-950 text-white rounded-xl px-3 py-2 text-center min-w-[54px] shadow-sm">
              <span className="text-xl sm:text-2xl font-black tabular-nums block leading-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Min</span>
            </div>
            <span className="text-xl font-bold text-slate-950">:</span>
            <div className="bg-slate-950 text-white rounded-xl px-3 py-2 text-center min-w-[54px] shadow-sm">
              <span className="text-xl sm:text-2xl font-black tabular-nums block leading-tight">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Seg</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
