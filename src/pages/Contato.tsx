
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const Contato = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-4">
              Entre em Contato
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar! Preencha o formulário abaixo ou use um de nossos canais de atendimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    className="w-full p-3 min-h-[150px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Digite sua mensagem aqui..."
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
            
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-xl font-montserrat font-bold mb-6">Outras formas de contato</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-2">Atendimento rápido via mensagem:</p>
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    (11) 99999-9999
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">E-mail</h3>
                  <p className="text-muted-foreground mb-2">Para dúvidas e solicitações:</p>
                  <a 
                    href="mailto:contato@notasfiscaiswhats.com.br" 
                    className="text-primary hover:underline"
                  >
                    contato@notasfiscaiswhats.com.br
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábados: 9h às 13h
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo/SP - CEP: 01310-100<br />
                    Edifício Comercial, Sala 1010
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

export default Contato;
