import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { SiteConfig } from '../config';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
  config: SiteConfig;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, config }) => {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'terms' ? (
          <div>
            <div className="flex items-center gap-2 text-teal-700 mb-2">
              <FileText className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Documento Legal</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">
              Termos de Uso — {config.brandName}
            </h3>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>1. Sobre o Produto:</strong> O Kit de Alfabetização Infantil comercializado sob o Método {config.methodName} é um produto exclusivamente digital fornecido em formato PDF (atividades imprimíveis) e materiais complementares.
              </p>
              <p>
                <strong>2. Licença de Uso:</strong> A compra concede ao comprador uma licença pessoal, vitalícia e intransferível para uso doméstico ou com seus alunos em sala de aula. É expressamente proibida a revenda, rateio, redistribuição ou compartilhamento público dos arquivos.
              </p>
              <p>
                <strong>3. Garantia Incondicional:</strong> Em conformidade com o Código de Defesa do Consumidor e com nossa política de satisfação, o comprador possui {config.guaranteeDays} dias corridos a partir da data da compra para solicitar o reembolso total caso não se sinta satisfeito.
              </p>
              <p>
                <strong>4. Acesso:</strong> O acesso é enviado por e-mail imediatamente após a confirmação do pagamento. Certifique-se de preencher o e-mail corretamente no momento do checkout.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-teal-700 mb-2">
              <Shield className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Privacidade e Proteção</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">
              Política de Privacidade — {config.brandName}
            </h3>
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>1. Coleta de Informações:</strong> Respeitamos integralmente a sua privacidade e os termos da Lei Geral de Proteção de Dados (LGPD). Seus dados pessoais inseridos na finalização da compra são utilizados estritamente para envio dos materiais adquiridos e comunicações essenciais sobre o produto.
              </p>
              <p>
                <strong>2. Segurança no Pagamento:</strong> Todas as transações financeiras são processadas por gateways de pagamento homologados com criptografia de ponta a ponta. Não armazenamos informações de cartões de crédito.
              </p>
              <p>
                <strong>3. Não Compartilhamento:</strong> Seus dados de contato jamais serão vendidos, alugados ou transferidos a terceiros para fins publicitários.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
};
