import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white shadow-sm border-gray-200 py-2' : 'bg-white border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <span className="text-3xl font-extrabold text-brand-blue tracking-tighter">curriculum</span>
              <span className="w-2 h-2 bg-brand-orange rounded-full mt-3"></span>
            </div>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solucoes" className="text-gray-600 hover:text-brand-orange font-medium text-sm transition-colors">Soluções</a>
              <a href="#planos" className="text-gray-600 hover:text-brand-orange font-medium text-sm transition-colors">Planos</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-brand-orange font-medium text-sm transition-colors">Como Funciona</a>
              <a href="#" className="text-gray-400 hover:text-brand-blue font-medium text-sm transition-colors">Para Candidatos</a>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 text-brand-blue font-semibold text-sm hover:opacity-80">
              <User size={18} />
              Área da Empresa
            </a>
            <Button size="md" className="rounded-full px-6 font-bold text-sm bg-brand-orange hover:bg-orange-600 text-white shadow-none">
              ANUNCIAR GRÁTIS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <a href="#" className="text-brand-blue font-bold text-sm">Entrar</a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen">
          <div className="px-6 pt-8 pb-6 space-y-6">
            <a href="#solucoes" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-medium text-gray-800">Soluções</a>
            <a href="#planos" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-medium text-gray-800">Planos</a>
            <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-medium text-gray-800">Como funciona</a>
            <hr className="border-gray-100" />
            <a href="#" className="block text-lg text-gray-500">Para Candidatos</a>
            <div className="pt-4">
              <Button fullWidth className="bg-brand-orange text-white rounded-full py-4 text-lg">
                ANUNCIAR GRÁTIS
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};