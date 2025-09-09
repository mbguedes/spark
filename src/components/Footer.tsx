import React from 'react';
import { Instagram, MessageCircle, Zap, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1128] border-t border-[#ff5f00]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
          <div className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="SPARK Logo"
                  className="w-8 h-8 rounded-lg" // Ajuste o tamanho e estilos conforme necessário
                />
                <span className="text-xl font-bold bg-gradient-to-r from-[#ff5f00] to-[#d4af37] bg-clip-text text-transparent">
                  SPARK
                </span>
                <span className="text-white text-sm hidden sm:block">| Soluções Digitais</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Soluções digitais completas para empresários que querem dominar a tecnologia e acelerar seus resultados.
              </p>
            </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Links Rápidos</h3>
            <div className="space-y-2">
              <button 
                onClick={() => {
                  const element = document.getElementById('sobre');
                  if (element) window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
                }}
                className="block text-gray-400 hover:text-[#ff5f00] transition-colors duration-300"
              >
                Sobre nós
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('servicos');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-400 hover:text-[#ff5f00] transition-colors duration-300"
              >
                Serviços
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('faq');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-400 hover:text-[#ff5f00] transition-colors duration-300"
              >
                FAQ
              </button>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Conecte-se conosco</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#ff5f00]" />
                <span className="text-gray-400 text-sm">(12) 98175-4136</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#ff5f00]" />
                <span className="text-gray-400 text-sm">spark.acesso@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.instagram.com/spark.tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-[#ff5f00] to-[#d4af37] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
                  alt="Instagram"
                  className="w-5 h-5" // Ajuste o tamanho conforme necessário
                />
              </a>
              
              <a 
                  href="https://wa.me/5512981754136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  {/* Use o link direto para o logo do WhatsApp */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5" // Ajuste o tamanho conforme necessário
                  />
                </a>
              </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 SPARK | Soluções Digitais. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <span className="text-gray-400 text-xs hover:text-[#ff5f00] transition-colors cursor-pointer">
              Política de Privacidade
            </span>
            <span className="text-gray-400 text-xs hover:text-[#ff5f00] transition-colors cursor-pointer">
              Termos de Uso
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;