import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '../components/Layout';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação fake
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 bg-muted">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">E-mail</label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-muted-foreground mb-1">Senha</label>
            <input
              id="senha"
              type="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Digite sua senha"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-white hover:bg-primary-hover">Entrar</Button>
        </form>
        <div className="text-center mt-4">
          <a href="/cadastro" className="text-primary hover:underline">Não tem conta? Cadastre-se</a>
        </div>
        <Button
          variant="outline"
          className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
          type="button"
          onClick={() => navigate('/')}
        >
          Voltar para Home
        </Button>
      </div>
    </div>
  );
};

export default Login;
