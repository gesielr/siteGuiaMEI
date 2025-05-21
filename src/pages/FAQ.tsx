
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const faqs = [
    {
      question: "Como funciona a emissão de notas fiscais pelo WhatsApp?",
      answer: "Após o cadastro em nosso site, você será direcionado ao nosso WhatsApp oficial. Lá, você envia as informações necessárias para a nota fiscal (dados do cliente, serviço e valor) e nossa equipe processa a emissão, enviando a nota fiscal em PDF diretamente pelo WhatsApp."
    },
    {
      question: "Quanto tempo leva para emitir uma nota fiscal?",
      answer: "O processo costuma ser muito rápido. Em condições normais, suas notas são emitidas em até 15 minutos após o envio de todas as informações necessárias. Nos horários de pico pode levar até 1 hora."
    },
    {
      question: "É seguro fornecer meus dados pelo WhatsApp?",
      answer: "Sim. Utilizamos um sistema de criptografia de ponta a ponta no WhatsApp e todos os seus dados são tratados conforme a LGPD. Além disso, o cadastro prévio em nosso site garante que você está conversando com nossa empresa oficial, evitando golpes."
    },
    {
      question: "Como é feito o pagamento do serviço?",
      answer: "Trabalhamos com planos mensais, cobrados via boleto ou cartão de crédito. Você escolhe seu plano durante o cadastro e recebe acesso ao serviço imediatamente após a confirmação do pagamento."
    },
    {
      question: "Posso emitir guias de INSS pelo mesmo serviço?",
      answer: "Sim! Além de notas fiscais, também oferecemos emissão e cálculo de guias INSS para profissionais autônomos e empresas. É o mesmo processo: envie as informações pelo WhatsApp e receba sua guia pronta para pagamento."
    },
    {
      question: "Meu município está disponível para emissão de notas?",
      answer: "Atendemos a maioria dos municípios brasileiros que possuem sistema de Nota Fiscal Eletrônica. Durante o cadastro, verificaremos se sua localidade é atendida. Em caso negativo, entraremos em contato para buscar soluções alternativas."
    },
    {
      question: "Preciso ter CNPJ para usar o serviço?",
      answer: "Para emissão de notas fiscais, sim. No entanto, podemos auxiliar profissionais autônomos com CPF na emissão de guias INSS e RPA (Recibo de Pagamento a Autônomo)."
    },
    {
      question: "O que acontece se eu precisar de mais notas que meu plano permite?",
      answer: "Você pode fazer um upgrade para um plano maior a qualquer momento ou adquirir pacotes avulsos de notas fiscais. Nosso suporte pode orientá-lo sobre a melhor opção para seu caso."
    },
    {
      question: "Como obtenho suporte em caso de problemas?",
      answer: "Nosso suporte está disponível pelo mesmo número de WhatsApp onde são emitidas as notas fiscais. Temos também um e-mail de suporte (suporte@notasfiscaiswhats.com.br) e telefone de atendimento em horário comercial."
    },
    {
      question: "Posso cancelar ou corrigir uma nota fiscal já emitida?",
      answer: "Sim, trabalhamos também com cancelamento e substituição de notas fiscais emitidas. É importante solicitar o cancelamento o quanto antes, respeitando os prazos legais do seu município."
    }
  ];

  return (
    <Layout>
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-primary mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre a emissão de notas fiscais e guias INSS pelo WhatsApp.
              Não encontrou o que procura? Entre em contato conosco.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left py-4 font-medium text-foreground text-base md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Ainda tem dúvidas? Entre em contato conosco.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/contato">Formulário de Contato</Link>
              </Button>
              <Button asChild>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
