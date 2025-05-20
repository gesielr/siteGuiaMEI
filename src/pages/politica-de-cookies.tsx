import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PoliticaDeCookies = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">Política de Cookies</h1>
        <div className="max-w-2xl text-muted-foreground mb-8 space-y-4">
  <p>
    Esta Política de Cookies explica como a GuiaMeiWhats utiliza cookies e tecnologias semelhantes para reconhecer você quando visita nosso site.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">1. O que são Cookies?</h2>
  <p>
    Cookies são pequenos arquivos de texto armazenados no seu dispositivo para melhorar a navegação e lembrar preferências.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">2. Como Utilizamos Cookies</h2>
  <p>
    Utilizamos cookies para:
    <ul className="list-disc pl-6">
      <li>Lembrar preferências do usuário</li>
      <li>Facilitar o login e a navegação</li>
      <li>Analisar o uso do site para aprimorar nossos serviços</li>
    </ul>
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">3. Gerenciamento de Cookies</h2>
  <p>
    Você pode ajustar as configurações do seu navegador para recusar ou excluir cookies. No entanto, isso pode afetar a funcionalidade do site.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">4. Alterações nesta Política</h2>
  <p>
    Podemos atualizar esta Política de Cookies periodicamente. Mudanças serão informadas nesta página.
  </p>
  <h2 className="text-xl font-semibold text-primary mt-6">5. Contato</h2>
  <p>
    Em caso de dúvidas sobre o uso de cookies, entre em contato pelo e-mail <a href="mailto:contato@guiameiwhats.com.br" className="text-primary underline">contato@guiameiwhats.com.br</a>.
  </p>
</div>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </div>
    </Layout>
  );
};

export default PoliticaDeCookies;
