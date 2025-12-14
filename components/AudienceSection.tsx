import React from 'react';
import { Building2, Users2, Briefcase, Store } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const targets = [
    {
      icon: <Users2 size={32} />,
      title: "Profissionais de RH",
      desc: "Ferramentas robustas para processos seletivos de alto volume e complexidade."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Recrutadores Independentes",
      desc: "Agilidade para fechar vagas de clientes e banco de talentos sempre à mão."
    },
    {
      icon: <Building2 size={32} />,
      title: "Gestores Administrativos",
      desc: "Simplicidade para quem contrata ocasionalmente e precisa de eficiência."
    },
    {
      icon: <Store size={32} />,
      title: "Donos de PMEs",
      desc: "Custo zero para divulgar vagas e encontrar o colaborador que vai ajudar a empresa a crescer."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            A solução ideal para quem contrata
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
