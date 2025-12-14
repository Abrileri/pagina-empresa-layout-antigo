import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white relative overflow-hidden">
      {/* Abstract Background Shape */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-blue-50/50 -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-blue leading-tight mb-6">
              O jeito mais <span className="text-brand-orange">eficiente</span> de contratar.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Publique suas vagas gratuitamente, acesse milhões de currículos e utilize nossa inteligência artificial para encontrar o candidato ideal em segundos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="rounded-full px-8 bg-brand-orange hover:bg-orange-600 text-white font-bold text-lg shadow-lg shadow-orange-500/30">
                COMEÇAR AGORA
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 border-gray-300 text-gray-600 hover:border-brand-blue hover:text-brand-blue font-semibold">
                Falar com consultor
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-brand-orange" />
                <span className="font-medium">Publicação de vagas ilimitada e gratuita</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-brand-orange" />
                <span className="font-medium">Acesso imediato a currículos</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-brand-orange" />
                <span className="font-medium">Triagem automática de candidatos</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" 
                alt="HR Manager using Curriculum" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 bg-white p-5 rounded-lg shadow-xl border-l-4 border-brand-orange max-w-xs animate-fade-in-up">
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Base de Talentos</p>
                <div className="text-3xl font-bold text-brand-blue">13 Milhões</div>
                <p className="text-sm text-gray-600 mt-1">de candidatos cadastrados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};