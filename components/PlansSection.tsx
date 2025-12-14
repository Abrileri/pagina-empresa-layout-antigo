import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

export const PlansSection: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white font-bold text-3xl lg:text-4xl mb-4">
            Escolha o plano ideal para sua necessidade
          </h2>
          <p className="text-gray-400">
            Comece grátis e evolua conforme sua demanda de contratação aumenta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100 relative">
            <h3 className="text-2xl font-bold text-brand-blue mb-2">Gratuito</h3>
            <p className="text-gray-500 mb-6">Para quem contrata ocasionalmente</p>
            <div className="text-5xl font-extrabold text-gray-900 mb-8">R$ 0</div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0" size={20} />
                <span className="text-gray-700">Anúncio de vagas ilimitado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0" size={20} />
                <span className="text-gray-700">Recebimento de currículos ilimitado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0" size={20} />
                <span className="text-gray-700">Triagem básica de candidatos</span>
              </li>
            </ul>
            
            <Button fullWidth variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white rounded-full py-4">
              Começar Grátis
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-brand-orange to-[#FF9933] rounded-2xl p-8 lg:p-10 shadow-xl relative transform lg:-translate-y-4">
            <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MAIS POPULAR</div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
            <p className="text-white/80 mb-6">Para quem busca velocidade e precisão</p>
            
            <div className="flex items-baseline gap-1 mb-8">
                <span className="text-white/80 text-lg">A partir de</span>
                <span className="text-5xl font-extrabold text-white">R$ 149</span>
            </div>
            
            <ul className="space-y-4 mb-8 text-white">
              <li className="flex items-start gap-3">
                <div className="bg-white/20 p-1 rounded-full"><Check size={14} /></div>
                <span className="font-medium">Todos os benefícios do Grátis</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white/20 p-1 rounded-full"><Check size={14} /></div>
                <span className="font-medium">Busca ativa de candidatos (visualize contatos)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white/20 p-1 rounded-full"><Check size={14} /></div>
                <span className="font-medium">Golden Match (Ranking por IA)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-white/20 p-1 rounded-full"><Check size={14} /></div>
                <span className="font-medium">Destaque de vaga nos resultados</span>
              </li>
            </ul>
            
            <Button fullWidth className="bg-white text-brand-orange hover:bg-gray-100 font-bold rounded-full py-4 shadow-lg">
              Conhecer Planos Premium
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};