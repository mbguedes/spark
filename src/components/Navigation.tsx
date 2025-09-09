import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a1128]/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
          <img 
                src="/logo.png" 
                alt="SPARK Logo" 
                className="w-8 h-8 rounded-lg" // Ajuste o tamanho e os estilos conforme necessário
              />
              <span className="text-xl font-bold bg-gradient-to-r from-[#ff5f00] to-[#d4af37] bg-clip-text text-transparent">
                SPARK
              </span>
              <span className="text-white text-sm hidden sm:block">| Soluções Digitais</span>
            </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-white hover:text-[#ff5f00] transition-colors duration-300 font-medium"
            >
              Sobre nós
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-[#ff5f00] transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-[#ff5f00] transition-colors duration-300 font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-to-r from-[#ff5f00] to-[#d4af37] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#ff5f00] transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0a1128]/95 backdrop-blur-md border-t border-[#ff5f00]/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block w-full text-left px-3 py-2 text-white hover:text-[#ff5f00] transition-colors duration-300"
              >
                Sobre nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left px-3 py-2 text-white hover:text-[#ff5f00] transition-colors duration-300"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-white hover:text-[#ff5f00] transition-colors duration-300"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-3 py-2 text-white hover:text-[#ff5f00] transition-colors duration-300"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;