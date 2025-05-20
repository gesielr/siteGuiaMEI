
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Cadastre-se',
      description: 'Preencha o formulário de cadastro com seus dados básicos e crie uma conta segura.',
    },
    {
      number: '02',
      title: 'Validação',
      description: 'Após a validação dos seus dados, você será direcionado para o nosso WhatsApp oficial.',
    },
    {
      number: '03',
      title: 'Solicite o serviço',
      description: 'Envie as informações necessárias para emissão da nota fiscal ou guia INSS.',
    },
    {
      number: '04',
      title: 'Receba seu documento',
      description: 'Em poucos minutos, receba seu documento pronto para uso, válido e seguro.',
    },
  ];

  return (
    <div className="section-padding bg-gradient-to-b from-muted to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Como funciona?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Um processo simples e rápido para obter seus documentos fiscais sem complicações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="text-3xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground flex-grow">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/como-funciona">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Ver processo completo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
