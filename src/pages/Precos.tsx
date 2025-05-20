
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Precos = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const services = [
    {
      name: 'Nota Fiscal',
      price: 'R$ 2,00',
      description: 'Por nota fiscal emitida',
      features: [
        'Emissão imediata via WhatsApp',
        'Nota fiscal válida em todo território nacional',
        'Sem mensalidades ou taxas ocultas',
        'Receba o documento no próprio WhatsApp'
      ],
      buttonText: 'Começar Agora',
      isPrimary: true
    },
    {
      name: 'Guia INSS',
      price: '6%',
      description: 'Sobre o valor da guia',
      features: [
        'Cálculo automático da contribuição',
        'Exemplo: Guia de R$ 300,00 = taxa de R$ 18,00',
        'Sem mensalidades ou taxas adicionais',
        'Emissão rápida e segura'
      ],
      buttonText: 'Solicitar Guia',
      isPrimary: false
    },
    {
      name: 'Pacote Empresarial',
      price: 'Personalizado',
      description: 'Para empresas com grande volume',
      features: [
        'Desconto por volume de emissões',
        'Faturamento mensal consolidado',
        'Painel administrativo de controle',
        'Atendimento prioritário'
      ],
      buttonText: 'Falar com Consultor',
      isPrimary: false
    }
  ];

  return (
    <Layout>
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-4">
              Preços Transparentes, Sem Mensalidades
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Pague apenas pelo que usar, sem compromissos mensais. O pagamento é feito
              diretamente no WhatsApp no momento da emissão.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`
                  bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl
                  ${service.isPrimary ? 'border-primary scale-105 relative z-10' : 'border-muted'}
                `}
              >
                {service.isPrimary && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-montserrat font-bold mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{service.price}</div>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${service.isPrimary ? '' : 'bg-white text-primary border border-primary hover:bg-gray-50'}`}
                  variant={service.isPrimary ? 'default' : 'outline'}
                >
                  {service.buttonText}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-muted rounded-xl p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-montserrat font-bold mb-4 text-center">Como funciona o pagamento?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow">
                  <h3 className="text-lg font-semibold mb-3">Pagamento via PIX</h3>
                  <p className="text-muted-foreground mb-4">
                    No momento da emissão, enviamos um QR Code para pagamento instantâneo via PIX. 
                    Após a confirmação, seu documento é emitido imediatamente.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h3 className="text-lg font-semibold mb-3">Cartão de Crédito</h3>
                  <p className="text-muted-foreground mb-4">
                    Você também pode cadastrar seu cartão de crédito para pagamentos automáticos. 
                    Rápido e seguro, sem precisar informar os dados a cada emissão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Precos;
