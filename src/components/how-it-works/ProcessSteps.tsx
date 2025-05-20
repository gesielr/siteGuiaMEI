
import React from 'react';

const ProcessSteps = () => {
  const steps = [
    {
      title: 'Cadastro Seguro',
      description: 'Crie sua conta fornecendo informações básicas como nome, email, CPF/CNPJ e telefone. Seus dados são protegidos com criptografia de ponta a ponta.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      title: 'Verificação de Identidade',
      description: 'Após o cadastro, nosso sistema verifica automaticamente seus dados para garantir a segurança e prevenir fraudes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Redirecionamento para WhatsApp',
      description: 'Após a verificação bem-sucedida, você é redirecionado automaticamente para o WhatsApp oficial do nosso serviço com uma mensagem pré-formatada.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Envio de Informações',
      description: 'Pelo WhatsApp, você fornece os detalhes necessários para a emissão da nota fiscal ou guia INSS, como descrição do serviço, valor e dados do tomador.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </svg>
      )
    },
    {
      title: 'Processamento e Validação',
      description: 'Nossa equipe especializada processa suas informações e verifica se está tudo em conformidade com as exigências legais.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: 'Emissão do Documento',
      description: 'Após a validação, seu documento fiscal é emitido e enviado diretamente para você pelo WhatsApp em formato PDF.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Confirmação e Arquivo',
      description: 'Você recebe a confirmação da emissão e o documento é arquivado em nosso sistema para consultas futuras, ficando disponível em sua área de cliente.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Suporte Contínuo',
      description: 'Nosso suporte permanece disponível pelo mesmo canal de WhatsApp para esclarecer dúvidas e auxiliar com novas emissões sempre que necessário.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Processo Passo a Passo</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Conheça em detalhes como funciona nosso serviço de emissão de documentos fiscais via WhatsApp.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className={`md:col-span-1 flex justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-1'}`}>
                <div className="bg-muted rounded-full p-4">
                  {step.icon}
                </div>
              </div>
              <div className={`md:col-span-11 ${index % 2 === 0 ? 'md:order-2' : 'md:order-2'}`}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
