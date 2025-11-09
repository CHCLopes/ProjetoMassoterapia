import React, { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  
  const carouselRef = useRef(null);

  const services = [
    {
      image: "/images/massoterapia.jpg",
      title: "Massoterapia Relaxante",
      description: "Deixe-se envolver pela Massoterapia Relaxante Terapêutica, uma experiência única que combina movimentos suaves e firmes para aliviar profundamente o estresse e a tensão muscular, especializada no tratamento eficaz de dores específicas, lesões e problemas musculares promovendo um estado de relaxamento e bem-estar que você merece.Com técnicas avançadas e focadas, ofereço o alívio e a recuperação que você busca para retomar suas atividades com conforto. Agende uma avaliação e invista na sua saúde muscular!"
    },
    {
      image: "/images/podal.jpg",
      title: "Massagem Podal",
      description: "A Massagem Podal é o carinho que seus pés merecem após um dia cansativo. Através de técnicas específicas nos pontos de reflexologia, promovo alívio de tensões, redução do inchaço e uma profunda sensação de relaxamento que se irradia por todo o corpo, renovando suas energias e bem-estar geral. Liberte seus pés do cansaço e sinta a leveza!"
    },
    {
      image: "/images/shantala.jpg",
      title: "Shantala",
      description: "Conecte-se e cuide do seu bebê através da Shantala, a milenar massagem indiana que fortalece o vínculo afetivo, alivia cólicas, melhora o sono e estimula o desenvolvimento psicomotor do seu pequeno. É um momento de amor, toque e relaxamento profundo que promove saúde e bem-estar para o bebê e tranquilidade para os pais. Descubra a magia do toque na Shantala!"
    },
    {
      image: "/images/ventosaterapia.jpg",
      title: "Ventosaterapia",
      description: "Descubra o alívio profundo da Ventosaterapia, uma técnica milenar que utiliza copos de vácuo para promover relaxamento muscular, reduzir dores, melhorar a circulação sanguínea e auxiliar na liberação de toxinas. Ideal para tratar dores nas costas, tensões, contraturas e promover uma sensação imediata de bem-estar e descompressão. Sinta a força da natureza em seu tratamento e renove suas energias!"
    },
    {
      image: "/images/drenagem.jpg",
      title: "Drenagem Linfática",
      description: "Redescubra a leveza e vitalidade com nossa Drenagem Linfática, uma técnica suave e eficaz que estimula seu sistema a eliminar o inchaço e toxinas. Sinta o corpo desinflamar, a circulação melhorar e a sensação de bem-estar se renovar, revelando contornos mais definidos e uma pele mais saudável. Permita-se sentir mais leve e com mais energia!"
    },
    {
      image: "/images/drenoRelaxante.jpg", 
      title: "Massagem Dreno Relaxante",
      description: "Experimente o Dreno Relaxante, a harmonia perfeita entre a eliminação de inchaço e toxinas da drenagem linfática e o alívio profundo da tensão muscular de uma massagem relaxante. Deixe-se levar por um toque suave que desincha e tranquiliza, renovando suas energias e proporcionando uma sensação duradoura de leveza e paz para corpo e mente. Permita-se essa pausa restauradora!"
    },
    {
      image: "/images/drenoModeladora.jpg",
      title: "Massagem Dreno Modeladora",
      description: "Conquiste contornos mais definidos e uma silhueta esculpida com a Dreno Modeladora. Essa técnica poderosa combina a redução de inchaço e eliminação de toxinas da drenagem linfática com movimentos firmes da massagem modeladora, atuando na quebra de gordura localizada e na melhoria da circulação para um corpo visivelmente mais harmonioso e tonificado. Revele a sua melhor forma!"
    },
    {
      image: "/images/drenagemFacial.jpg",
      title: "Drenagem Facial",
      description: "Ilumine e revitalize seu rosto com a Drenagem Facial, um toque delicado que atua profundamente para reduzir inchaço, suavizar olheiras e bolsas, e melhorar a circulação. Este tratamento promove uma desintoxicação natural, deixando sua pele com um aspecto mais saudável, fresco e radiante. Permita-se esse cuidado rejuvenescedor para sua beleza natural!"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
      // Reset para o primeiro slide quando mudar o viewport
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // CORREÇÃO PRINCIPAL: Cálculo correto do número máximo de slides
  const totalSlides = Math.max(1, services.length - cardsPerView + 1);

  // Funções de navegação CORRIGIDAS
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < totalSlides - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : totalSlides - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Funções de arrasto (drag) - CORRIGIDAS
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setDragDistance(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.pageX;
    const distance = currentX - startX;
    setDragDistance(distance);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const containerWidth = carouselRef.current?.offsetWidth || 0;
    const dragThreshold = containerWidth * 0.15;
    
    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setIsDragging(false);
    setDragDistance(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setDragDistance(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].pageX;
    const distance = currentX - startX;
    setDragDistance(distance);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const containerWidth = carouselRef.current?.offsetWidth || 0;
    const dragThreshold = containerWidth * 0.1;
    
    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setIsDragging(false);
    setDragDistance(0);
  };

  // CORREÇÃO: Cálculo do transform para mostrar todos os itens
  const getTransformValue = () => {
    const baseTransform = -currentIndex * (100 / cardsPerView);
    const dragOffset = isDragging ? (dragDistance / (carouselRef.current?.offsetWidth || 1)) * 100 : 0;
    return `translateX(calc(${baseTransform}% + ${dragOffset}px))`;
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    
    const targetElement = document.querySelector('#contact');
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    };
  };

  return (
    <section id="services" className="py-8 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            O que ofereço
          </h2>
          <p className="text-dark text-base max-w-2xl mx-auto"> 
             Sua experiência será amplificada com o atendimento personalizado e humanizado <br /> de uma profissional especializada em uma variedade de tratamentos e técnicas focadas no seu bem estar.
          </p>
          <h4 className="text-2xl md:text-4xl font-semibold text-primary mb-1">
            O seu bem estar é a prioridade!
          </h4>
        </div>

        {/* Controles e Indicadores */}
        <div className="flex flex-col items-center mb-8 space-y-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-all shadow-lg hover:shadow-primary/30 invisible md:visible"
              aria-label="Slide anterior"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Indicadores - CORRIGIDO para usar totalSlides correto */}
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-primary scale-110"
                      : "bg-secondary hover:bg-primary/70"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-all shadow-lg hover:shadow-primary/30 invisible md:visible"
              aria-label="Próximo slide"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carrossel com suporte a arrasto */}
        <div 
          ref={carouselRef}
          className={`relative overflow-hidden max-w-5xl mx-auto ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: getTransformValue(),
              transition: isDragging ? 'none' : 'transform 300ms ease-out'
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="shrink-0 px-4"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className="bg-light rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary h-full flex flex-col mb-8 select-none">
                  <div className="h-48 overflow-hidden shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 grow flex flex-col">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-dark text-sm leading-relaxed grow">
                      {service.description}
                    </p>
                    <button 
                      onClick={handleScrollToContact}
                      className='bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-accent hover:-translate-y-1 transition-all shadow-lg hover:shadow-primary/30 cursor-pointer'
                    >
                      Agendar Agora
                    </button>
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