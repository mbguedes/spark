import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1128] via-[#1a2248] to-[#0a1128] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#0a1128] mb-2">
            Contato Realizado!
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Obrigado pelo seu interesse em nossas soluções digitais. 
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-[#ff5f00] to-[#d4af37] rounded-lg p-4 mb-6">
          <p className="text-white font-semibold text-sm">
            Nossa equipe de especialistas entrará em contato em breve para apresentar as melhores soluções para seu negócio.
          </p>
        </div>
        
        <div className="space-y-3 text-sm text-gray-500">
          <p>⏱️ Tempo de resposta: até 24h úteis</p>
          <p>🚀 Análise gratuita do seu negócio</p>
          <p>💡 Proposta personalizada</p>
        </div>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#0a1128] text-white rounded-lg hover:bg-[#1a2248] transition-all duration-300 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;