import React from 'react';
import { LayoutDashboard, Filter, UserCheck, BarChart3, Bot } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const features = [
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Publicação e Gestão",
      desc: "Painel intuitivo para criar vagas, editar requisitos e acompanhar o status de cada processo seletivo."
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Triagem Eficiente",
      desc: "Filtros avançados que separam o joio do trigo, entregando apenas os candidatos aderentes aos requisitos."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Gestão de Candidatos",
      desc: "Centralize currículos, agende entrevistas e mantenha histórico de comunicação em um só lugar."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Avaliação de Perfis",
      desc: "Compare competências e experiências lado a lado para tomar decisões baseadas em dados."
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Automação com IA",
      desc: "Tecnologia que trabalha para você, sugerindo os melhores matches e poupando horas de leitura."
    }
  ];

  return (
    <section className="py-20 bg-white" id="solucoes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Uma suíte completa para o seu RH
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Você começa simples. Evolui quando quiser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
          
          {/* Call to Action Card in Grid */}
          <div className="p-8 rounded-2xl bg-brand-orange text-white flex flex-col justify-center items-center text-center shadow-lg transform hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="mb-6 opacity-90">Cadastre sua empresa agora e use nossas ferramentas.</p>
            <button className="bg-white text-brand-orange px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full">
              Criar conta grátis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};