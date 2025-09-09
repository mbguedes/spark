import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#1a2248] to-[#0a1128]"></div>
      
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#ff5f00] to-[#d4af37] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#d4af37] to-[#ff5f00] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className={`space-y-8 transition-all duration-1000 transform ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff5f00]/20 to-[#d4af37]/20 rounded-full border border-[#ff5f00]/30">
              <Zap className="w-4 h-4 text-[#ff5f00]" />
              <span className="text-sm font-medium text-white">Transformação Digital</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">SPARK</span>
              <br />
              <span className="bg-gradient-to-r from-[#ff5f00] to-[#d4af37] bg-clip-text text-transparent">
                Soluções Digitais
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
              Automatize seus processos, domine a tecnologia e posicione seu negócio no mercado digital. 
              Soluções completas para empresários visionários.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff5f00] to-[#d4af37] text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Venha conhecer nossas soluções
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8">
            <div className="text-center">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-5 h-5 text-[#ff5f00]" />
                <span className="text-2xl font-bold text-white">95%</span>
              </div>
              <p className="text-sm text-gray-400">Taxa de Sucesso</p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-5 h-5 text-[#d4af37]" />
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <p className="text-sm text-gray-400">Segurança</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className={`relative transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Pessoas usando soluções digitais para negócios"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/60 to-transparent"></div>
            
            {/* Floating Cards */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <p className="text-sm font-semibold text-[#0a1128]">PDV Inteligente</p>
              <p className="text-xs text-gray-600">+300% vendas</p>
            </div>
            
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <p className="text-sm font-semibold text-[#0a1128]">ERP Automatizado</p>
              <p className="text-xs text-gray-600">-80% tempo manual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;