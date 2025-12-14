import React from 'react';
import { Search, Zap, Users, Filter, Target, Award } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-brand-orange" />,
      title: "Busca de Candidatos",
      desc: "Encontre profissionais específicos usando mais de 25 filtros avançados de busca, incluindo cargo, região e pretensão salarial."
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-orange" />,
      title: "Golden Match",
      desc: "Nossa IA analisa sua vaga e entrega um ranking dos candidatos mais aderentes, economizando horas de triagem manual."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-orange" />,
      title: "Banco de Talentos",
      desc: "Construa seu próprio banco de currículos e mantenha o histórico de relacionamento com os candidatos."
    },
    {
      icon: <Filter className="w-8 h-8 text-brand-orange" />,
      title: "Gestão de Processos",
      desc: "Organize etapas, agende entrevistas e envie feedbacks em massa através de um painel intuitivo."
    },
    {
      icon: <Award className="w-8 h-8 text-brand-orange" />,
      title: "Vagas em Destaque",
      desc: "Aumente a visibilidade das suas oportunidades e receba mais candidaturas qualificadas em menos tempo."
    },
    {
      icon: <Search className="w-8 h-8 text-brand-orange" />,
      title: "Recrutamento Ativo",
      desc: "Não espere o candidato vir até você. Visualize contatos completos e aborde os melhores talentos do mercado."
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-bold text-3xl lg:text-4xl mb-4">
            Tecnologia completa para seu RH
          </h2>
          <p className="text-gray-600 text-lg">
            Do pequeno negócio à grande corporação, temos as ferramentas certas para agilizar sua contratação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-orange/20 group">
              <div className="mb-6 p-4 bg-orange-50 rounded-lg inline-block group-hover:bg-brand-orange/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};