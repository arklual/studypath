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
  const queryParams = new URLSearchParams(window.location.search)
  const utm_source = queryParams.get("utm_source")
  const utm_medium = queryParams.get("utm_medium")
  const utm_campaign = queryParams.get("utm_campaign")
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
          <a href={'https://rutube.ru/video/4481c5e861a22c5e2369a8ca10fd40c0/#start_'+utm_campaign+'_'+utm_medium+'_'+utm_source}><button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Начать
          </button></a>
          <a href={'https://rutube.ru/video/4481c5e861a22c5e2369a8ca10fd40c0/#consult_'+utm_campaign+'_'+utm_medium+'_'+utm_source}><button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Записаться на консультацию
          </button></a>
        </div>
      </nav>
    </header>
  );
}