import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermosDeUso = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">Termos de Uso</h1>
        <div className="max-w-2xl text-muted-foreground mb-8 space-y-4">
  <p>
    Bem-vindo à GuiaMeiWhats! Ao acessar ou utilizar nossos serviços, você concorda com estes Termos de Uso. Leia atentamente antes de utilizar a plataforma.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">1. Sobre o Serviço</h2>
  <p>
    Oferecemos uma solução para emissão de notas fiscais e guias INSS via WhatsApp, voltada para profissionais autônomos, MEIs e pequenas empresas.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">2. Cadastro e Responsabilidades</h2>
  <p>
    Para utilizar nossos serviços, o usuário deve fornecer informações verdadeiras e manter seus dados atualizados. O uso indevido da plataforma pode resultar em suspensão ou exclusão da conta.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">3. Privacidade</h2>
  <p>
    Suas informações pessoais serão tratadas conforme nossa <a href="/politica-de-privacidade" className="text-primary underline">Política de Privacidade</a>.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">4. Uso Correto</h2>
  <p>
    É proibido utilizar a plataforma para fins ilícitos, fraudulentos ou que violem leis vigentes.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">5. Alterações nos Termos</h2>
  <p>
    Reservamo-nos o direito de alterar estes Termos a qualquer momento. As alterações serão comunicadas na plataforma.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">6. Contato</h2>
  <p>
    Em caso de dúvidas, entre em contato pelo e-mail <a href="mailto:contato@guiameiwhats.com.br" className="text-primary underline">contato@guiameiwhats.com.br</a>.
  </p>
</div>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </div>
    </Layout>
  );
};

export default TermosDeUso;
