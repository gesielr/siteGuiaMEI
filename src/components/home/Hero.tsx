import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Determina se estamos no GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');
// Define o caminho base correto para as imagens
const basePath = isGitHubPages ? '/siteGuiaMEI' : '';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-muted">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Emita Notas Fiscais e Gere Guias de INSS pelo WhatsApp
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Simplifique sua rotina financeira! Emita notas fiscais e guias INSS de forma rápida, 
              segura e 100% digital diretamente pelo seu WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cadastro">
                <Button size="lg" className="bg-primary text-white hover:bg-primary-hover w-full sm:w-auto">
                  Comece Agora
                </Button>
              </Link>
              <Link to="/como-funciona">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">
                  Saiba Mais
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                  JD
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-xs">
                  MB
                </div>
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs">
                  RS
                </div>
              </div>
              <div className="ml-2 text-sm">
                <span className="font-medium">+5.000</span> usuários confiam em nosso serviço
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[463px] h-[645px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={`${basePath}/foto-celular.JPG`}
                  alt="Emissão de notas fiscais pelo WhatsApp"
                  className="w-[463px] h-[645px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">100% Seguro</p>
                    <p className="text-xs text-gray-500">Certificado SSL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
