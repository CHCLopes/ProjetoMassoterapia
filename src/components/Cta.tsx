import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from './Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Cta: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const openWhatsApp = () => {
    const message = "Olá, gostaria de agendar uma sessão de massoterapia.";
    const url = `https://wa.me/5581999999999?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    if (isModalOpen) {
      const script = document.createElement('script');
      script.src = 'https://form.jotform.com/s/umd/23150244795/jotformEmbedHandler.js'; // Placeholder
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        // @ts-ignore
        if (window.jotformEmbedHandler) {
          // @ts-ignore
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

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <section 
        id="contact" 
        className="py-16 text-white text-center scroll-mt-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/5 dark:bg-black/30 pointer-events-none"></div>

        <div 
          ref={ref}
          className={`container mx-auto px-4 relative z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex justify-center mb-10 animate-slide-up">
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-4 md:p-6 backdrop-blur-md border border-white/30 dark:border-gray-700/50 shadow-xl shadow-black/10 transition-transform duration-500 hover:scale-105">
              <img
                src="/images/iconSVG.svg"
                alt="Logo Michely Massoterapia"
                className="w-20 h-20 md:w-28 md:h-28 object-contain filter drop-shadow-md"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            Pronto para uma experiência transformadora?
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 animate-slide-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            Agende agora mesmo sua sessão e descubra os benefícios da massoterapia para sua saúde e qualidade de vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <Button 
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 border-none shadow-xl hover:shadow-white/20 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 w-full sm:w-auto flex items-center gap-3"
            >
              <span className="bg-primary text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full animate-pulse tracking-wide">
                IA
              </span>
              Assistente Virtual
            </Button>

            <Button 
              onClick={openWhatsApp}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 dark:hover:bg-white/5 w-full sm:w-auto flex items-center gap-3"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Direto
            </Button>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-slide-up">
            <div className="flex justify-between items-center p-5 border-b border-gray-100 dark:border-gray-800">
              <h3 id="modal-title" className="text-xl font-bold text-dark dark:text-gray-100">
                Atendimento Virtual
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                aria-label="Fechar"
              >
                <XMarkIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="overflow-auto flex-grow bg-gray-50 dark:bg-gray-800/50 p-2">
              <iframe 
                id="Seu Id do Jotform" 
                title="Atendente Virtual"
                onLoad={() => window.parent.scrollTo(0,0)} 
                allowTransparency={true}
                allow="geolocation; microphone; camera; fullscreen"
                src="about:blank" // Placeholder for Jotform URL
                className="w-full min-h-[500px] border-none rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cta;