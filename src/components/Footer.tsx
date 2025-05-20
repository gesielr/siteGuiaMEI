
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Sobre */}
          <div className="space-y-4">
            <h4 className="text-lg font-montserrat font-semibold text-primary">GuiaMeiWhats</h4>
            <p className="text-sm">
              Soluções simples e seguras para emissão de notas fiscais e guias INSS via WhatsApp.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Ícones de Redes Sociais */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-montserrat font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-sm hover:text-primary transition-colors">Como Funciona</Link>
              </li>
              <li>
                <Link to="/precos" className="text-sm hover:text-primary transition-colors">Preços</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-primary transition-colors">Perguntas Frequentes</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Informações Legais */}
          <div className="space-y-4">
            <h4 className="text-lg font-montserrat font-semibold">Informações Legais</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/termos-de-uso" className="text-sm hover:text-primary transition-colors">Termos de Uso</Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-sm hover:text-primary transition-colors">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/politica-de-cookies" className="text-sm hover:text-primary transition-colors">Política de Cookies</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-montserrat font-semibold">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>contato@guiameiwhats.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de separação */}
        <div className="border-t border-gray-300 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">
              &copy; {currentYear} GuiaMeiWhats. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-xs text-center md:text-right">
                Desenvolvido com segurança e confiabilidade para profissionais e empresas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
