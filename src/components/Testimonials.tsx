import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const testimonials = [
    {
      text: "A massoterapia com Michely transformou minha qualidade de vida. Eu sofria com dores nas costas há anos e após algumas sessões já senti uma melhora significativa.",
      author: "Marina Silva",
      duration: "Cliente há 2 anos"
    },
    {
      text: "Profissional extremamente capacitada. Cada sessão é uma experiência renovadora para corpo e mente.",
      author: "Carlos Oliveira",
      duration: "Cliente há 1 ano"
    },
    {
      text: "Recomendo a todos! A massagem relaxante é incrível, termino sempre renovada. O atendimento é excelente e super personalizado.",
      author: "Ana Costa",
      duration: "Cliente há 6 meses"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900 scroll-mt-10 transition-colors duration-300">
      <div 
        ref={ref}
        className={`container mx-auto px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent mb-4">O que dizem sobre mim</h2>
          <p className="text-dark dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Histórias reais de pessoas que transformaram sua rotina e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-light dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-primary dark:border-accent animate-slide-up"
              style={{ animationDelay: `${200 * (index + 1)}ms`, animationFillMode: 'both' }}
            >
              <p className="italic text-dark dark:text-gray-300 mb-6 text-sm leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-secondary to-primary w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 shadow-sm shrink-0">
                  <img
                    src="/images/medal.svg"
                    alt="Logo avaliação"
                    className="w-6 h-6 object-contain filter drop-shadow-sm invert"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-accent">{testimonial.author}</h4>
                  <p className="text-sm text-dark/70 dark:text-gray-400">{testimonial.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;