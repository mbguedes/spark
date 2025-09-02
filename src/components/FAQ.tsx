import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que é um sistema PDV e como pode ajudar meu negócio?",
      answer: "Um sistema PDV (Ponto de Venda) é uma solução completa que gerencia suas vendas, controla estoque, emite cupons fiscais e gera relatórios detalhados. Com nossa solução, você terá controle total sobre seu negócio, reduzindo erros e aumentando a produtividade."
    },
    {
      question: "Como um ERP pode transformar a gestão da minha empresa?",
      answer: "Um ERP integra todos os setores da sua empresa em uma única plataforma: vendas, financeiro, estoque, RH e muito mais. Isso elimina retrabalhos, reduz custos operacionais e oferece visão 360° do seu negócio para tomadas de decisão mais assertivas."
    },
    {
      question: "Quanto tempo leva para implementar as soluções?",
      answer: "O tempo varia conforme a complexidade do projeto, mas nossos sistemas são desenvolvidos para implementação rápida. Geralmente entre 2 a 4 semanas para PDV e 4 a 8 semanas para ERP completo, incluindo treinamento da equipe."
    },
    {
      question: "As soluções são seguras e confiáveis?",
      answer: "Sim! Utilizamos as melhores práticas de segurança da informação, criptografia avançada e backup automático. Nossos sistemas são desenvolvidos seguindo rigorosos padrões de qualidade e conformidade com a LGPD."
    },
    {
      question: "Oferecem suporte técnico após a implementação?",
      answer: "Oferecemos suporte técnico completo: treinamento inicial, documentação detalhada, suporte via chat/telefone e atualizações regulares. Nossa equipe está sempre disponível para garantir o sucesso do seu projeto."
    },
    {
      question: "As soluções funcionam para qualquer tipo de negócio?",
      answer: "Nossas soluções são altamente customizáveis e se adaptam a diversos segmentos: varejo, serviços, indústria, e-commerce e muito mais. Cada sistema é personalizado conforme as necessidades específicas do seu negócio."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1128] mb-4">
            Perguntas <span className="bg-gradient-to-r from-[#ff5f00] to-[#d4af37] bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tire suas dúvidas sobre nossas soluções digitais
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button 
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-[#0a1128] pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-[#ff5f00]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#ff5f00]" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ainda tem dúvidas? Entre em contato conosco!</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff5f00] to-[#d4af37] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Falar com especialista
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;