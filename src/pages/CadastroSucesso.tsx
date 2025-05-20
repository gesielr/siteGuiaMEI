
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CadastroSucesso = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Redirecionamento iniciado",
      description: "Abrimos o WhatsApp em uma nova janela. Confira se o redirecionamento foi realizado.",
    });
  }, [toast]);

  return (
    <Layout>
      <div className="section-padding bg-gradient-to-b from-muted to-white">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-primary mb-4">Cadastro Realizado com Sucesso!</h1>
              
              <p className="mb-6 text-muted-foreground">
                Você está sendo redirecionado para o WhatsApp oficial do nosso serviço para iniciar o processo de emissão de documentos.
              </p>
              
              <div className="bg-muted p-4 rounded-lg mb-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Não foi redirecionado?</strong> Clique no botão abaixo para abrir o WhatsApp manualmente.
                </p>
              </div>
              
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white w-full mb-4"
                onClick={() => {
                  const whatsappNumber = "5511999999999"; // Número fictício para demonstração
                  const message = encodeURIComponent("Olá! Acabei de me cadastrar no site e gostaria de emitir uma nota fiscal.");
                  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
                }}
              >
                Abrir WhatsApp
              </Button>
              
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Voltar para a página inicial
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 p-4 border border-accent-foreground/20 rounded-lg bg-white">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-muted-foreground text-left">
                  <strong>Dica de segurança:</strong> Ao ser redirecionado para o WhatsApp, verifique se o número corresponde ao número oficial divulgado em nosso site. 
                  Em caso de dúvidas, entre em contato conosco pelos canais oficiais listados na página de contato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CadastroSucesso;
