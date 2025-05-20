
import React from 'react';

const Stats = () => {
  const stats = [
    {
      value: '+5.000',
      label: 'Usuários Cadastrados',
    },
    {
      value: '+25.000',
      label: 'Notas Fiscais Emitidas',
    },
    {
      value: '+8.000',
      label: 'Guias INSS Geradas',
    },
    {
      value: '+98%',
      label: 'Satisfação dos Clientes',
    },
  ];

  return (
    <div className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
