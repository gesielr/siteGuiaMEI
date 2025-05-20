
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <div className="section-padding bg-muted">
      <div className="container-custom">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para simplificar sua rotina fiscal?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Cadastre-se agora e comece a emitir notas fiscais e guias INSS pelo WhatsApp de forma rápida, segura e econômica!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/cadastro">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                Comece Agora
              </Button>
            </Link>
            <Link to="/como-funciona">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
