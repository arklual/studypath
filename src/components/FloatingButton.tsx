import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FloatingButton() {
  return (
    <button className="fixed bottom-6 right-6 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all flex items-center space-x-2 z-50 md:hidden">
      <span>Начать</span>
      <ArrowRight className="h-5 w-5" />
    </button>
  );
}