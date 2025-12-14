import React from 'react';
import { Button } from './Button';
import { Check, Megaphone, Search, Users } from 'lucide-react';

export const BenefitSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Publique vagas e receba currículos — <span className="text-brand-orange">gratuitamente</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Elimine barreiras na hora de contratar. Na Curriculum, abrimos as portas para você encontrar talentos sem custo inicial.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-orange-100 rounded-full text-brand-orange">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">Cadastro de vagas ilimitado e gratuito</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-orange-100 rounded-full text-brand-orange">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">Recebimento e visualização de currículos sem custo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-orange-100 rounded-full text-brand-orange">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">Divulgação automática no portal Curriculum + Google Jobs e parceiros</span>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
                <p className="text-blue-800 font-semibold">
                  Sem pegadinhas. Sem cobranças escondidas. Publicar vagas e receber currículos é 100% gratuito.
                </p>
              </div>

              <Button size="lg" className="w-full sm:w-auto self-start">
                Quero publicar minha vaga grátis
              </Button>
            </div>

            <div className="bg-brand-dark p-10 lg:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden">
                {/* Abstract graphic elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange opacity-10 rounded-full -ml-12 -mb-12"></div>

                <div className="relative z-10 grid grid-cols-1 gap-8 w-full max-w-sm">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-colors">
                        <Megaphone className="w-10 h-10 text-brand-orange mx-auto mb-3" />
                        <h3 className="text-white font-bold text-xl">Alcance Máximo</h3>
                        <p className="text-gray-300 text-sm mt-2">Sua vaga vista por milhares de candidatos qualificados instantaneamente.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-colors">
                        <Users className="w-10 h-10 text-brand-orange mx-auto mb-3" />
                        <h3 className="text-white font-bold text-xl">Volume de Talentos</h3>
                        <p className="text-gray-300 text-sm mt-2">Receba candidaturas organicamente sem pagar por cada clique.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};