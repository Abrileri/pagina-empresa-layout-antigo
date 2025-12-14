import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
           <span className="text-2xl font-bold text-white tracking-tight">curriculum<span className="text-brand-orange">.</span></span>
        </div>

        <div className="text-sm">
          &copy; {new Date().getFullYear()} Curriculum Tecnologia. Todos os direitos reservados.
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Ajuda</a>
        </div>
      </div>
    </footer>
  );
};