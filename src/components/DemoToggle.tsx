import React from 'react';
import { SlidersHorizontal, Eye, EyeOff } from 'lucide-react';

interface DemoToggleProps {
  isSimulatingData: boolean;
  onToggle: () => void;
}

export const DemoToggle: React.FC<DemoToggleProps> = ({ isSimulatingData, onToggle }) => {
  return (
    <div className="fixed bottom-16 right-4 sm:bottom-6 sm:right-6 z-30">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-300 shadow-xl p-2.5 flex items-center gap-2 max-w-xs transition-all">
        <button
          onClick={onToggle}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            isSimulatingData
              ? 'bg-teal-600 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
          title="Alternar entre o estado padrão (campos opcionais vazios) e simulação de dados opcionais preenchidos"
        >
          {isSimulatingData ? (
            <>
              <Eye className="w-3.5 h-3.5" />
              <span>Simulando Dados [X]</span>
            </>
          ) : (
            <>
              <EyeOff className="w-3.5 h-3.5" />
              <span>Campos [X] Vazios (Padrão)</span>
            </>
          )}
        </button>
        <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
          config.ts
        </span>
      </div>
    </div>
  );
};
