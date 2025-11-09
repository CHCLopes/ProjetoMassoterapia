import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import "tailwindcss";

const Testimonials = () => {
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
    <section id="testimonials" className="py-8 bg-white scroll-mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">O que nossos Clientes dizem</h2>
          <p className="text-dark max-w-2xl mx-auto">
            Depoimentos de pessoas que experimentaram nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light p-8 rounded-lg shadow-md border-l-4 border-primary">
              <p className="italic text-dark mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="bg-linear-to-br from-secondary to-primary w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
                  <img
                    src="/images/medal.svg"
                    alt="Logo Michely Massoterapia"
                    className="w-40 h-40 md:w-24 md:h-24 object-contain filter drop-shadow-lg"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.author}</h4>
                  <p className="text-primary">{testimonial.duration}</p>
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