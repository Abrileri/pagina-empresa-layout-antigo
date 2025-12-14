import React from 'react';
import { Button } from './Button';

export const FooterCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Comece a transformar seu recrutamento agora.
        </h2>
        
        <p className="text-xl text-gray-600 mb-10">
          Junte-se a milhares de empresas que usam a Curriculum para contratar melhor e mais rápido.
          <span className="block mt-2 font-semibold text-brand-orange">Lembre-se: cadastro e publicação de vagas são 100% gratuitos.</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="px-10 py-5 text-lg shadow-xl shadow-orange-500/20">
            Cadastre-se e publique suas vagas gratuitamente
          </Button>
          <Button variant="secondary" size="lg" className="px-10 py-5 text-lg">
            Faça login
          </Button>
        </div>
      </div>
    </section>
  );
};