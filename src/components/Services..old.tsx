import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Cog, ArrowRight, Star } from 'lucide-react';

const Services: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: Monitor,
      title: "PDV Inteligente",
      description: "Sistema de ponto de venda moderno e intuitivo que automatiza suas vendas, controla estoque e gera relatórios detalhados.",
      benefits: ["Controle total do estoque", "Relatórios em tempo real", "Interface intuitiva"],
      images: [
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7681098/pexels-photo-7681098.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      icon: Smartphone,
      title: "ERP Personalizado",
      description: "Gerencie toda sua empresa em uma única plataforma. Financeiro, recursos humanos, vendas e muito mais.",
      benefits: ["Gestão unificada", "Automação completa", "Escalabilidade garantida"],
      images: [
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      icon: Cog,
      title: "Automação de Processos",
      description: "Elimine tarefas repetitivas e foque no que realmente importa: fazer seu negócio crescer.",
      benefits: ["Redução de custos", "Aumento da produtividade", "Menos erros manuais"],
      images: [
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('servicos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1128] mb-4">
            Nossas <span className="bg-gradient-to-r from-[#ff5f00] to-[#d4af37] bg-clip-text text-transparent">Soluções</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tecnologia de ponta desenvolvida especialmente para pequenos e médios empresários que querem dominar o mercado digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-[#ff5f00]/30 transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#ff5f00] to-[#d4af37] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0a1128] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-[#d4af37] fill-current" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button className="group/btn w-full bg-gradient-to-r from-[#0a1128] to-[#1a2248] text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Image Carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-600 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0a1128] text-center mb-8">
            Veja nossas soluções em ação
          </h3>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
              {services[0].images.map((image, idx) => (
                <img 
                  key={idx}
                  src={image}
                  alt={`Solução SPARK ${idx + 1}`}
                  className="w-full h-[400px] object-cover flex-shrink-0"
                />
              ))}
            </div>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {services[0].images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImage === idx ? 'bg-[#ff5f00]' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;