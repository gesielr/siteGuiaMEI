
import React from 'react';
import Layout from '../components/Layout';
import RegistrationForm from '../components/cadastro/RegistrationForm';

const Cadastro = () => {
  return (
    <Layout>
      <div className="section-padding bg-gradient-to-b from-muted to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-primary mb-4">Crie sua conta</h1>
          </div>

          <div className="max-w-md mx-auto">
            <RegistrationForm />
          </div>

          <div className="mt-12 bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Garantia de Segurança</h3>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-muted-foreground">
                  Seus dados estão protegidos com criptografia de ponta a ponta. O cadastro serve como uma camada de segurança 
                  para garantir que você está sendo direcionado para o WhatsApp oficial do nosso serviço, evitando golpes e fraudes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cadastro;
