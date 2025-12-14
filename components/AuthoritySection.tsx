import React from 'react';

export const AuthoritySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            A segurança de quem conhece o mercado
          </h2>
          <p className="text-lg text-gray-600">
            A Curriculum não é apenas um site de vagas. Somos uma parceira estratégica com décadas de dados, tecnologia e expertise em conectar empresas e profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Stat 1 */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-6xl lg:text-7xl font-extrabold text-brand-orange mb-2 tracking-tighter">
              25<span className="text-4xl lg:text-5xl">+</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Anos de Mercado</div>
            <p className="text-gray-600">
              Pioneiros no recrutamento digital no Brasil, evoluindo constantemente para entregar resultados reais.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-6xl lg:text-7xl font-extrabold text-brand-orange mb-2 tracking-tighter">
              13<span className="text-4xl lg:text-5xl">M</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Currículos Únicos</div>
            <p className="text-gray-600">
              Uma base de dados estruturada, atualizada e diversa, pronta para atender qualquer necessidade de contratação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};