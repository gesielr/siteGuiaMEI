
import React from 'react';
import Layout from '../components/Layout';
import ProcessSteps from '../components/how-it-works/ProcessSteps';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ComoFunciona = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-muted py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-primary mb-4">Como Funciona</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Conheça o processo completo para emissão de notas fiscais e guias INSS através do nosso serviço via WhatsApp.
            </p>
          </div>

          <div className="flex justify-center">
            <iframe 
              className="rounded-xl shadow-lg w-full max-w-3xl aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Como emitir nota fiscal pelo WhatsApp" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <ProcessSteps />

      <div className="bg-muted py-16">
        <div className="container-custom">
          <div className="bg-white p-6 mb-8">
            <h3 className="text-xl font-semibold text-primary mb-2">Como funciona o pagamento</h3>
            <p className="text-base text-muted-foreground mb-2">
              Nosso serviço não possui mensalidades. Você só paga quando utiliza, diretamente pelo WhatsApp:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base text-muted-foreground mb-4">
              <li><span className="font-semibold">Nota Fiscal:</span> R$ 2,00 por nota fiscal emitida</li>
              <li>
                <span className="font-semibold">Guia INSS:</span> 6% sobre o valor da guia
                <p className="mt-1 text-sm">Exemplo: Para uma guia de R$ 300,00, será cobrado R$ 18,00 (6% de R$ 300,00)</p>
              </li>
            </ul>
            <h4 className="text-base font-semibold mb-1">Métodos de pagamento</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">PIX</h5>
                <p className="text-sm text-muted-foreground">Enviamos um QR Code para pagamento instantâneo. Após confirmação, seu documento é emitido imediatamente.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Cartão de Crédito</h5>
                <p className="text-sm text-muted-foreground">Cadastre seu cartão uma única vez para pagamentos automáticos a cada emissão, com toda segurança.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 mb-8">
            <h3 className="text-xl font-semibold text-primary mb-2">Perguntas Frequentes</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold mb-1">Quanto tempo leva para emitir um documento?</h4>
                <p className="text-base text-muted-foreground">A emissão é rápida e normalmente leva 1 minuto após o envio de todas as informações necessárias e confirmação do pagamento via WhatsApp.</p>
              </div>
              <div>
                <h4 className="text-base font-semibold mb-1">Os documentos emitidos são oficiais e válidos?</h4>
                <p className="text-base text-muted-foreground">Sim, todos os documentos são oficiais, válidos e emitidos em conformidade com a legislação vigente, com todos os registros necessários nos órgãos competentes.</p>
              </div>
              <div>
                <h4 className="text-base font-semibold mb-1">Posso solicitar documentos a qualquer hora?</h4>
                <p className="text-base text-muted-foreground">Sim! Nosso sistema está disponível 24 horas por dia, 7 dias por semana. O atendimento humano opera em horário comercial, mas solicitações fora desse horário serão processadas na primeira hora do próximo dia útil.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link to="/faq">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Ver todas as perguntas frequentes
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Pronto para começar?</h2>
            <Link to="/cadastro">
              <Button size="lg" className="bg-primary text-white hover:bg-primary-hover">
                Cadastre-se Agora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ComoFunciona;
