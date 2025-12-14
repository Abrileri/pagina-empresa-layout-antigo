import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold text-3xl lg:text-4xl mb-4">
            Como funciona a Curriculum
          </h2>
          <p className="text-gray-600">Simples, rápido e eficiente.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center bg-white">
              <div className="w-24 h-24 bg-brand-blue text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 border-8 border-white shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Publique sua vaga</h3>
              <p className="text-gray-600 px-4">
                Cadastre os detalhes da oportunidade gratuitamente. Nossa plataforma sugere requisitos e competências.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center bg-white">
              <div className="w-24 h-24 bg-brand-orange text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 border-8 border-white shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Receba Candidatos</h3>
              <p className="text-gray-600 px-4">
                Currículos começam a chegar instantaneamente. Use o Golden Match para ver os melhores primeiro.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center bg-white">
              <div className="w-24 h-24 bg-brand-blue text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 border-8 border-white shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entreviste e Contrate</h3>
              <p className="text-gray-600 px-4">
                Agende entrevistas pela plataforma e feche a vaga com o profissional ideal para sua empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};