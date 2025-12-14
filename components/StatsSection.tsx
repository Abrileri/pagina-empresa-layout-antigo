import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    { value: "25+", label: "Anos de experiência" },
    { value: "13M+", label: "Candidatos únicos" },
    { value: "200k+", label: "Empresas atendidas" },
    { value: "50k+", label: "Vagas ativas" }
  ];

  return (
    <section className="bg-brand-blue py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 lg:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className="text-4xl lg:text-5xl font-extrabold mb-2 text-white">{stat.value}</div>
              <div className="text-brand-orange font-bold text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};