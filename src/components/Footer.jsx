import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import "tailwindcss";

const Footer = () => {
  // Função para abrir WhatsApp
  
  return (
    <footer id='footer' className="bg-dark text-white pt-16 pb-8 scroll-mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl text-secondary font-bold mb-6"> Michely<br />Massoterapia </h3>
            <p className="mb-4">
              Especializada em massoterapia e bem-estar, proporcionando relaxamento e qualidade de vida.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl text-secondary font-bold mb-6">Contato</h3>
            <p className="flex items-center mb-3">
              <FaWhatsapp className="mr-3 text-secondary" />
              (##) #####-####
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-3 text-secondary" />
              seuE-mail@seuDominio.com
            </p>
          </div>
          
          <div>
            <h3 className="text-xl text-secondary font-bold mb-6">Atendimento</h3>
            <p>
              Segunda a Sexta: <br />
              09h30 as 12h<br />
              14h as 19h30<br />
            </p>
            <p>
              Sábados: <br />
              10h as 16h<br />
            </p>
          </div>
          
          <div>
            <h3 className="text-xl text-secondary font-bold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4">

              <a href="Seu Link do Instagram" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <FaInstagram className="text-secondary cursor-pointer"/>
              </a>
              
              <a href="https://wa.me/Seu Numero do WhatsApp?text='Sua Mensagem'" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <FaWhatsapp className="text-secondary cursor-pointer"/>
              </a>
              
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p>&copy; 2025 Michely Massoterapia - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;