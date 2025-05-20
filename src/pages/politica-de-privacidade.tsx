import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PoliticaDePrivacidade = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">Política de Privacidade</h1>
        <div className="max-w-2xl text-muted-foreground mb-8 space-y-4">
  <p>
    Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar a GuiaMeiWhats.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">1. Informações Coletadas</h2>
  <p>
    Coletamos dados como nome, e-mail, telefone, CPF/CNPJ e informações necessárias para emissão de notas fiscais.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">2. Uso das Informações</h2>
  <p>
    Utilizamos os dados para processar solicitações, emitir documentos fiscais e melhorar nossos serviços. Não compartilhamos suas informações com terceiros, exceto quando exigido por lei.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">3. Segurança</h2>
  <p>
    Adotamos medidas de segurança para proteger seus dados contra acessos não autorizados.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">4. Cookies</h2>
  <p>
    Utilizamos cookies para melhorar a experiência do usuário e analisar o uso da plataforma. Saiba mais em nossa <a href="/politica-de-cookies" className="text-primary underline">Política de Cookies</a>.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">5. Direitos do Usuário</h2>
  <p>
    Você pode solicitar a atualização, correção ou exclusão de seus dados pessoais a qualquer momento.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">6. Alterações nesta Política</h2>
  <p>
    Podemos atualizar esta Política periodicamente. Notificações sobre mudanças serão feitas na plataforma.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">7. Contato</h2>
  <p>
    Para dúvidas sobre privacidade, entre em contato pelo e-mail <a href="mailto:contato@guiameiwhats.com.br" className="text-primary underline">contato@guiameiwhats.com.br</a>.
  </p>
</div>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </div>
    </Layout>
  );
};

export default PoliticaDePrivacidade;
