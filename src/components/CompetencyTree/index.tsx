import React, { useState } from 'react';
import { specializations } from '../../data/specializations';
import { Canvas } from './Canvas';
import { TopicsList } from './TopicsList';
import type { Subject } from '../../types/competency';

export function CompetencyTree() {
  // We'll use the first specialization by default since we're focusing on a single specialization
  const currentSpec = specializations[0];
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  return (
    <section id="competencies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Как устроено дерево компетенций?
          </h1>
          <br></br>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {currentSpec.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">Ваш путь обучения</p>
        </div>

        <div className="space-y-8">
          <Canvas
            subjects={currentSpec.subjects}
            selectedSubject={selectedSubject}
            onSelectSubject={setSelectedSubject}
          />

          {selectedSubject && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {selectedSubject.title}
              </h3>
              <TopicsList topics={selectedSubject.topics} />
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-sm">Освоено</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <span className="text-sm">В процессе</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <span className="text-sm">Доступно</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
              <span className="text-sm">Заблокировано</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
