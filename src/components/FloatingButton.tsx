import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FloatingButton() {
  const queryParams = new URLSearchParams(window.location.search);
  const utm_source = queryParams.get('utm_source');
  const utm_medium = queryParams.get('utm_medium');
  const utm_campaign = queryParams.get('utm_campaign');
  return (
    <a
      href={
        'https://forms.gle/9L7CnhCFdK7HbbTRA/#start_' +
        utm_campaign +
        '_' +
        utm_medium +
        '_' +
        utm_source
      }
    >
      <button className="fixed bottom-6 right-6 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all flex items-center space-x-2 z-50 md:hidden">
        <span>Начать</span>
        <ArrowRight className="h-5 w-5" />
      </button>
    </a>
  );
}
