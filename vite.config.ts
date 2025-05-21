import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use base path '/siteGuiaMEI/' apenas para produção (GitHub Pages)
  // Em desenvolvimento, use '/' para evitar problemas de roteamento
  base: mode === 'production' ? '/siteGuiaMEI/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}));
