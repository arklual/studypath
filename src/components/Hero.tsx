import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export function Hero() {
  const queryParams = new URLSearchParams(window.location.search);
  const utm_source = queryParams.get('utm_source');
  const utm_medium = queryParams.get('utm_medium');
  const utm_campaign = queryParams.get('utm_campaign');
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Твой персональный путь к успеху в университете
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Создай свой индивидуальный план развития, отслеживай прогресс и
            используй все возможности студенческой жизни
          </p>
          <div className="flex justify-center space-x-4">
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
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 flex items-center">
                Создать свой план
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
