import React from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id='footer' className="bg-dark text-white pt-16 pb-8 scroll-mt-10 transition-colors duration-300 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl text-secondary dark:text-accent font-bold tracking-wide">
              Michely<br />Massoterapia
            </h3>
            <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Especializada em massoterapia e bem-estar, proporcionando relaxamento e qualidade de vida.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg text-secondary dark:text-accent font-bold uppercase tracking-wider">Contato</h3>
            <div className="space-y-3 text-gray-300 dark:text-gray-400 text-sm">
              <a href="https://wa.me/5581999999999" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors group">
                <FaWhatsapp className="mr-3 text-secondary dark:text-accent group-hover:scale-110 transition-transform" />
                (81) 9999-9999
              </a>
              <a href="mailto:contato@michelymassoterapia.com" className="flex items-center hover:text-white transition-colors group">
                <FaEnvelope className="mr-3 text-secondary dark:text-accent group-hover:scale-110 transition-transform" />
                contato@michelymassoterapia.com
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg text-secondary dark:text-accent font-bold uppercase tracking-wider">Atendimento</h3>
            <div className="space-y-3 text-gray-300 dark:text-gray-400 text-sm">
              <div>
                <p className="font-semibold text-white mb-1">Segunda a Sexta:</p>
                <p>09h30 as 12h</p>
                <p>14h as 19h30</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Sábados:</p>
                <p>10h as 16h</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg text-secondary dark:text-accent font-bold uppercase tracking-wider">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="text-gray-300 hover:text-white" />
              </a>
              <a 
                href="https://wa.me/5581999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Michely Massoterapia - Todos os direitos reservados</p>
          <p>Desenvolvido com dedicação</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;