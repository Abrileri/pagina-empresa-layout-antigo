import React from 'react';
import { Sparkles, Zap, Target, Clock } from 'lucide-react';

export const GoldenMatchSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-brand-dark to-black text-white overflow-hidden" id="golden-match">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange opacity-20 blur-[100px] rounded-full"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-orange font-semibold mb-6">
              <Sparkles size={18} />
              <span>Tecnologia Exclusiva</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Golden Match: contratação inteligente com <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Inteligência Artificial</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Não perca tempo lendo centenas de currículos inadequados. Nosso algoritmo analisa o perfil da sua vaga e varre nossa base de milhões de candidatos para entregar um ranking dos profissionais mais compatíveis.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-yellow-400">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Menos tempo</h4>
                  <p className="text-gray-400 text-sm">Reduza o tempo de fechamento da vaga em até 70%.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-400">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Menos esforço</h4>
                  <p className="text-gray-400 text-sm">A triagem manual é coisa do passado. Receba a lista pronta.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-green-400">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Mais qualidade</h4>
                  <p className="text-gray-400 text-sm">A assertividade do match garante contratações mais duradouras.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             {/* Abstract Representation of AI Matching */}
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                    <span className="text-gray-400 text-sm">Análise de Compatibilidade</span>
                    <span className="text-brand-orange font-bold">Golden Match Ativo</span>
                </div>
                
                <div className="space-y-4">
                    {[98, 94, 89].map((score, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-600"></div>
                            <div className="flex-1">
                                <div className="h-4 w-32 bg-gray-600 rounded mb-2"></div>
                                <div className="h-3 w-20 bg-gray-700 rounded"></div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-bold text-white">{score}%</div>
                                <div className="text-xs text-green-400">Compatível</div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-sm text-gray-400">Processando 13 milhões de combinações...</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};