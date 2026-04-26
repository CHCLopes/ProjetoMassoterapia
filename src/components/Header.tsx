import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Button } from './Button';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { href: "#home", label: "Início" },
  { href: "#services", label: "Serviços" },
  { href: "#about", label: "Sobre" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#contact", label: "Contato" }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed w-full top-0 p-0 z-50 glass transition-colors duration-300">
      <div className="px-2 py-2">
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] items-center gap-2 max-w-7xl mx-auto">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2 cursor-pointer justify-self-start group"
            aria-label="Voltar para o Início"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <img
              src="/images/iconSVG.svg"
              alt="Logo Michely Massoterapia"
              className="w-12 h-12 md:w-14 md:h-14 object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col text-primary dark:text-accent">
              <span className="text-sm md:text-base leading-tight">Michely</span>
              <span className="text-lg md:text-xl font-bold leading-tight">Massoterapia</span>              
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:block justify-self-center" aria-label="Navegação principal">
            <ul className="flex gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-dark dark:text-gray-200 font-medium hover:text-primary dark:hover:text-primary transition-colors text-sm whitespace-nowrap cursor-pointer"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Container */}
          <div className="flex gap-4 items-center justify-self-end">
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-dark dark:text-gray-200 hover:bg-light dark:hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label={isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
            >
              {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>

            {/* CTA Desktop */}
            <Button 
              className="hidden md:inline-flex"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Agendar Horário
            </Button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg text-dark dark:text-gray-200 hover:bg-light dark:hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <nav aria-label="Navegação mobile">
            <ul className="flex flex-col gap-2 bg-light dark:bg-gray-800 rounded-lg p-3 shadow-inner">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="block text-dark dark:text-gray-200 font-medium hover:text-primary transition-colors p-2 hover:bg-white dark:hover:bg-gray-700 rounded text-sm"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-1 flex justify-center">
                <Button 
                  className="w-full max-w-xs"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Agendar Horário
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;