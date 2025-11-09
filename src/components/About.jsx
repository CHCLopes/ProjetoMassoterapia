import React from 'react';


const About = () => {

  // Função para rolar suavemente até a seção de contato
  const scrollToContact = () => {
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
    <section id="about" className="py-6 bg-light scroll-mt-10">
      <div className="container mx-auto px-2">
        
        {/* Título - SEMPRE NO TOPO E CENTRALIZADO */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
          Sobre
        </h2>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
          
          {/* Coluna do Texto */}
          <div className="grid gap-2 justify-items-center lg:justify-items-start">
            <div className="grid gap-4 max-w-2xl">
              <p className="text-dark leading-relaxed text-justify lg:text-left">
                <span className="text-primary text-xl font-semibold">Olá, eu sou Michely</span>, e é um prazer receber você no meu espaço. Minha paixão pelo toque terapêutico e pelo poder de cura do corpo me levou a Massoterapia há mais de 8 anos, e tenho dedicado a minha carreira a ajudar as pessoas a encontrarem alívio, bem estar e equilíbrio em meio a correria do dia a dia. Sou formada pelo método Top Corpus e me especializei em Drenagem Linfática. Atuei no Spa Tan Tien (Hotel Atlante Plaza, Recife). Nele, aprofundei-me em diversas técnicas, desde as tradicionais até as mais modernas, para oferecer o melhor aos meus clientes, e através dessas experiências, desenvolvi uma abordagem única que combina conhecimento técnico com empatia e cuidado genuíno, chegando a representar a empresa como responsável pelas sessões de massoterapia em uma das edições do SPA no Evento Ilha de Caras.
              </p>
              <p className="text-dark leading-relaxed text-justify lg:text-left">
                <span className="text-primary text-xl font-semibold">Acredito que cada pessoa é única</span>, e sendo assim, personalizo cada sessão,  garantindo que você receba o cuidado que merece para além do alívio momentâneo, promovendo uma verdadeira transformação na sua qualidade de vida. 
              </p>
              <div className="bg-primary/5 rounded-lg p-4 text-center">
                <p className="text-primary text-2xl font-semibold leading-tight">
                  Minhas mãos e experiência estão à sua disposição.
                </p>
                <p className="text-primary text-3xl font-bold leading-tight">
                  Você é a prioridade e merece esse cuidado!
                </p>
              </div>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="grid justify-items-center">
            <div className="relative">
              <div className="bg-linear-to-br from-secondary to-primary rounded-2xl shadow-2xl overflow-hidden w-80 h-80 lg:w-96 lg:h-96">
                <img 
                  src="/images/michelyFinal.jpg"
                  alt="Michely - Massoterapeuta Profissional"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Botão - SEMPRE NO FINAL E CENTRALIZADO */}
          <div className="flex justify-center">
            <button 
            onClick={scrollToContact} // Corrigido: agora chama a função
            className='bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-accent hover:-translate-y-1 transition-all shadow-lg hover:shadow-primary/30 cursor-pointer'
          >
            Agendar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;