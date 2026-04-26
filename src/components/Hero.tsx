import React from 'react';
import { Button } from './Button';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const targetElement = document.querySelector('#contact');
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id='home' 
      className='pt-32 pb-20 bg-gradient-to-r from-primary to-secondary text-center scroll-mt-10 min-h-[80vh] flex flex-col justify-center relative overflow-hidden'
    >
      {/* Subtle overlay for dark mode support if needed, though this section is colored */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/40 pointer-events-none"></div>

      <div className='container mx-auto px-4 relative z-10'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up drop-shadow-md'>
          Bem-estar e relaxamento <br className="hidden md:block"/> 
          para seu corpo e sua mente <br className="hidden md:block"/> 
          em Recife
        </h1>
        
        <p className='text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in drop-shadow-sm delay-200' style={{ animationFillMode: 'both', animationDelay: '200ms' }}>
          Descubra os benefícios da massoterapia <br className="hidden md:block"/>
          com uma profissional especializada e transforme sua qualidade de vida.
        </p>
        
        <div className="animate-slide-up" style={{ animationFillMode: 'both', animationDelay: '400ms' }}>
          <Button 
            onClick={handleScrollToContact}
            size="lg"
            className='bg-white text-primary hover:bg-gray-50 border-none shadow-xl hover:shadow-white/20 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800'
          >
            Agendar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;