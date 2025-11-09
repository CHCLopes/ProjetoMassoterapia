import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Cta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const message = "Sua Mensagem";
    const url = `https://wa.me/`/*Seu Número WhatsApp*/`?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Carregar o script do JotForm quando o modal abrir
  useEffect(() => {
    if (isModalOpen) {
      const script = document.createElement('script');
      script.src = 'Seu URL do Script JotForm';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window.jotformEmbedHandler) {
          window.jotformEmbedHandler("iframe[id='Sua Id do Jotform']", "https://www.jotform.com");
        }
      };

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [isModalOpen]);

  // Fechar modal ao clicar no overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <section 
        id="contact" 
        className="py-12 text-white text-center scroll-mt-20"
        style={{
          background: 'linear-gradient(to right, #07a0a4, #8dd3c7)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 pt-6 pl-6 backdrop-blur-sm border border-white/20 shadow-lg shadow-white/30">
              <img
                src="/images/iconSVG.svg"
                alt="Logo Michely Massoterapia"
                className="w-40 h-40 md:w-24 md:h-24 object-contain filter drop-shadow-lg"
              />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para uma experiência transformadora?
          </h2>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 opacity-90">
            Agende agora mesmo sua sessão e descubra os benefícios da massoterapia para sua saúde e qualidade de vida.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {/* Botão do Assistente Virtual */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-[#07a0a4] px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg hover:shadow-white/30 text-lg cursor-pointer flex items-center gap-3 group"
            >
              <span className="bg-[#07a0a4] text-white text-xs px-2 py-1 rounded-full animate-pulse">
                IA
              </span>
              Conversar com a 'Nome do Assistente'
              <img 
                src="/images/avatarChat.png"
                className="w-10 h-8 transition-transform group-hover:scale-110 rounded-full"
                alt="Bot Avatar" 
                style={{
                  background: 'linear-gradient(to top, #07a0a4, #fefefe)'
        }}
              />
              
            </button>

            {/* Botão do WhatsApp */}
            <button 
              onClick={openWhatsApp}
              className="bg-white text-[#07a0a4] px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg hover:shadow-white/30 text-lg cursor-pointer flex items-center gap-3 group"
            >
              <FaWhatsapp className="w-5 h-5 transition-transform group-hover:scale-110" />
              Fale diretamente pelo WhatsApp
            </button>
          </div>

          {/* Texto final */}
          <div className="mt-8 space-y-2">
            <p className="text-sm opacity-80">
              <strong>Dica:</strong> Fale com a minha assistente virtual para agendamentos rápidos ou mande uma mensagem pelo WhatsApp diretamente.
            </p>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Header do Modal */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Atendente Virtual
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Fechar modal"
              >
                <XMarkIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="overflow-auto max-h-[calc(90vh-80px)]">
              <iframe 
                id="Seu Id do Jotform" 
                title="Atendente Virtual"
                onLoad={() => window.parent.scrollTo(0,0)} 
                allowTransparency={true}
                allow="geolocation; microphone; camera; fullscreen"
                src="seu Id do JotForm?embedMode=iframe&background=1&shadow=1"
                style={{
                  width: '98%',
                  height: '420px',
                  border: 'none',
                  alignSelf: 'center',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cta;