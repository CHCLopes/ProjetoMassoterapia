import React from 'react';

const Hero = () => {
  // Função para rolagem suave
  const handleScrollToContact = (e) => {
    e.preventDefault();
    
    const targetElement = document.querySelector('#contact');
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id='home' 
      className='pt-24 pb-10 bg-light bg-opacity-90  text-center scroll-mt-10'
      style={{
          background: 'linear-gradient(to right, var(--primary), var(--secondary))'
        }}
    >
      <div className='container mx-auto px-4'>
        <h1 
          className='text-3xl md:text-5xl font-bold text-primary mb-5'
          style={{
            color: '#fefefe'
          }}
        
        >
          Bem-estar e relaxamento <br /> 
          para seu corpo e sua mente <br /> 
          em Recife
        </h1>
        <p 
          className='text-lg text-dark max-w-2xl mx-auto mb-8'
          style={{
            color: '#fefefe'
          }}
        >
          Descubra os benefícios da massoterapia <br />
          com uma profissional especializada e transforme sua qualidade de vida.
        </p>
        
        {/* Botão para abrir modal diretamente */}
        <button 
          onClick={handleScrollToContact}
          className='bg-white text-[#07a0a4] px-8 py-4 rounded-full font-bold hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg hover:shadow-white/30 text-lg cursor-pointer'
        >
          Agendar Agora
        </button>
      </div>
    </section>
  );
};

export default Hero;