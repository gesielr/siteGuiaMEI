import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Index from "./pages/Index";
import Cadastro from "./pages/Cadastro";
import ComoFunciona from "./pages/ComoFunciona";
import CadastroSucesso from "./pages/CadastroSucesso";
import NotFound from "./pages/NotFound";
import Precos from "./pages/Precos";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import TermosDeUso from "./pages/termos-de-uso";
import PoliticaDePrivacidade from "./pages/politica-de-privacidade";
import PoliticaDeCookies from "./pages/politica-de-cookies";

const queryClient = new QueryClient();

// Determina se estamos no GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');

// Escolhe o Router apropriado com base no ambiente
const Router = isGitHubPages ? HashRouter : BrowserRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/cadastro-sucesso" element={<CadastroSucesso />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
