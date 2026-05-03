import React from 'react';
import { Button } from './Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const scrollToContact = () => {
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
    <section id="about" className="py-16 bg-light dark:bg-gray-800 scroll-mt-10 transition-colors duration-300">
      <div 
        ref={ref}
        className={`container mx-auto px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent text-center mb-10 animate-slide-up">
          Sobre Mim
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          
          {/* Texto */}
          <div className="flex flex-col gap-6 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <p className="text-dark dark:text-gray-300 leading-relaxed text-justify lg:text-left text-lg">
              <span className="text-primary dark:text-accent text-xl font-semibold">Olá, eu sou Michely</span>, e é um prazer receber você no meu espaço. Minha paixão pelo toque terapêutico e pelo poder de cura do corpo me levou à Massoterapia há mais de 8 anos, e tenho dedicado a minha carreira a ajudar as pessoas a encontrarem alívio, bem-estar e equilíbrio em meio à correria do dia a dia.
            </p>
            <p className="text-dark dark:text-gray-300 leading-relaxed text-justify lg:text-left text-lg">
              Sou formada pelo método Top Corpus e me especializei em Drenagem Linfática. Atuei no Spa Tan Tien (Hotel Atlante Plaza, Recife). Lá, aprofundei-me em diversas técnicas para oferecer o melhor aos meus clientes, desenvolvendo uma abordagem única que combina conhecimento técnico com empatia e cuidado genuíno.
            </p>
            
            <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 text-center border border-primary/10 dark:border-primary/20">
              <p className="text-primary dark:text-accent text-xl font-semibold leading-tight mb-2">
                Minhas mãos e experiência estão à sua disposição.
              </p>
              <p className="text-primary dark:text-accent text-2xl font-bold leading-tight">
                Você é a prioridade e merece esse cuidado!
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <div className="relative group">
              <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-xl overflow-hidden w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative z-10 transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                <img 
                  src="/images/michelyFinal.jpg"
                  alt="Michely - Massoterapeuta Profissional"
                  className="w-full h-full object-cover relative z-20"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Elemento decorativo */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-30 dark:opacity-20 blur-2xl -z-0 transition-transform duration-500 group-hover:scale-110"></div>
            </div>
          </div>
        </div>

        {/* Botão */}
        <div className="flex justify-center animate-slide-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
          <Button onClick={scrollToContact} size="lg">
            Agendar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;