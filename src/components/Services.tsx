import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { services } from "../data/servicesData";
import { Button } from "./Button";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Services: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth;
      
      if (direction === 'left') {
        if (scrollLeft <= 0) {
          carouselRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#contact');
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    };
  };

  return (
    <section 
      id="services" 
      className="py-16 bg-white dark:bg-gray-900 scroll-mt-20 overflow-hidden transition-colors duration-300"
      ref={sectionRef}
    >
      <div className={`container mx-auto px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent mb-4">
            O que ofereço
          </h2>
          <p className="text-dark dark:text-gray-300 text-base max-w-2xl mx-auto mb-4"> 
             Sua experiência será amplificada com o atendimento personalizado e humanizado <br className="hidden md:block" /> de uma profissional especializada em uma variedade de tratamentos e técnicas focadas no seu bem estar.
          </p>
          <h4 className="text-2xl md:text-3xl font-semibold text-primary dark:text-accent">
            O seu bem estar é a prioridade!
          </h4>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto group md:px-10">
          {/* Nav Buttons (Hidden on mobile, visible on hover desktop) */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent transition-all shadow-lg hover:shadow-primary/30 opacity-0 group-hover:opacity-100 focus:opacity-100 hidden md:flex cursor-pointer"
            aria-label="Rolar para a esquerda"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent transition-all shadow-lg hover:shadow-primary/30 opacity-0 group-hover:opacity-100 focus:opacity-100 hidden md:flex cursor-pointer"
            aria-label="Rolar para a direita"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Native CSS Scroll Snap Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pt-4 -mx-4 px-4 md:mx-0 md:px-4 gap-4 md:gap-6"
            style={{ scrollBehavior: 'smooth' }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Serviços de Massoterapia"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${services.length}`}
              >
                <div className="bg-light dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary dark:border-accent h-full flex flex-col group/card">
                  <div className="h-56 overflow-hidden shrink-0 relative">
                    {/* Placeholder gradient before image loads visually */}
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover/card:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6 grow flex flex-col relative z-20 bg-light dark:bg-gray-800">
                    <h3 className="text-xl font-bold text-primary dark:text-accent mb-3">
                      {service.title}
                    </h3>
                    <p className="text-dark dark:text-gray-300 text-sm leading-relaxed grow mb-6">
                      {service.description}
                    </p>
                    <Button 
                      onClick={handleScrollToContact}
                      className="w-full"
                    >
                      Agendar Agora
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;