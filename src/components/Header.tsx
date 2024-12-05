import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white ${isScrolled ? 'fixed top-0 left-0 right-0 shadow-md z-50' : 'shadow-sm'} transition-all duration-300`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-indigo-600" />
          <span className="font-bold text-xl text-gray-900">StudyPath</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Возможности</a>
          <a href="#competencies" className="text-gray-600 hover:text-gray-900">Компетенции</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">О нас</a>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Начать
          </button>
        </div>
      </nav>
    </header>
  );
}