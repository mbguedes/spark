import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    console.log('Dados do formulário:', formData);
    navigate('/obrigado');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-[#0a1128] via-[#1a2248] to-[#0a1128] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-[#ff5f00] to-[#d4af37] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-[#d4af37] to-[#ff5f00] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Seja nosso <span className="bg-gradient-to-r from-[#ff5f00] to-[#d4af37] bg-clip-text text-transparent">Parceiro!</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Condições especiais para novas parcerias. Transforme seu negócio com nossa expertise em soluções digitais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Entre em contato</h3>
              <p className="text-gray-300">Preencha o formulário e nossa equipe entrará em contato em até 24h</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-white mb-2">
                    Nome completo *
                  </label>
                  <input 
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-[#ff5f00] focus:ring-2 focus:ring-[#ff5f00]/20 transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-white mb-2">
                    Razão Social *
                  </label>
                  <input 
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-[#ff5f00] focus:ring-2 focus:ring-[#ff5f00]/20 transition-all duration-300"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    E-mail *
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-[#ff5f00] focus:ring-2 focus:ring-[#ff5f00]/20 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-white mb-2">
                    Telefone (WhatsApp) *
                  </label>
                  <input 
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-[#ff5f00] focus:ring-2 focus:ring-[#ff5f00]/20 transition-all duration-300"
                    placeholder="(12) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-white mb-2">
                  Mensagem
                </label>
                <textarea 
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-[#ff5f00] focus:ring-2 focus:ring-[#ff5f00]/20 transition-all duration-300 resize-none"
                  placeholder="Conte-nos sobre seu negócio e como podemos ajudar..."
                />
              </div>

              <button 
                type="submit"
                className="group w-full bg-gradient-to-r from-[#ff5f00] to-[#d4af37] text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Seja nosso parceiro!
              </button>
            </form>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Por que escolher a SPARK?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-300">Especialistas em automação para PMEs</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-300">Suporte técnico 24/7</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-300">Implementação rápida e segura</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-300">ROI comprovado em 90 dias</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#ff5f00]/20 to-[#d4af37]/20 backdrop-blur-md rounded-2xl p-8 border border-[#ff5f00]/30">
              <h3 className="text-xl font-bold text-white mb-4">Contatos diretos</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#ff5f00]" />
                  <span className="text-gray-300">(12) 98175-4136</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#ff5f00]" />
                  <span className="text-gray-300">spark.acesso@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#ff5f00]" />
                  <span className="text-gray-300">Atendimento nacional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;