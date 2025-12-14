import React from 'react';
import { MapPin, Briefcase, TrendingUp } from 'lucide-react';

export const TalentBaseSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Encontre o talento ideal, onde ele estiver.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            Nossa escala nacional e ferramentas de segmentação garantem velocidade na busca pelo perfil exato, do estagiário ao diretor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Todos os Cargos</h3>
            <p className="text-gray-400">
              Diversidade de perfis para todas as áreas: Administrativo, Comercial, TI, Saúde, Operacional e muito mais.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Todos os Níveis</h3>
            <p className="text-gray-400">
              Do nível auxiliar e operacional, passando por especialistas técnicos até cargos de alta gestão e diretoria.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Todas as Regiões</h3>
            <p className="text-gray-400">
              Capilaridade nacional. Contrate profissionais em capitais, interior ou para trabalho remoto em todo o Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};