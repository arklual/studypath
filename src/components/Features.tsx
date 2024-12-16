import React, { useState } from 'react';
import {
  Brain,
  TreePine,
  Calendar,
  Target,
  BookOpen,
  Leaf,
} from 'lucide-react';
import { X } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Умное планирование',
    description:
      'Автоматическое поддерживание динамического расписания с учетом учебы и внеучебной деятельности',
    details: [
      'Интеграция с календарем университета',
      'Умные уведомления о дедлайнах',
      'Анализ загруженности и рекомендации',
      'Автоматическое планирование подготовки',
      'Учет внеучебной деятельности'
    ]
  },
  {
    icon: TreePine,
    title: 'Дерево компетенций',
    description:
      'Визуализация прогресса обучения в ВУЗе и не только с автоматической подгрузкой данных',
    details: [
      'Интерактивная визуализация связей',
      'Синхронизация с системой оценивания',
      'Отслеживание прогресса',
      'Рекомендации по развитию',
      'Индивидуальная траектория обучения'
    ]
  },
  {
    icon: Target,
    title: 'Приоритизация целей',
    description: 'Помощь в выборе и достижении важных для вас целей',
    details: [
      'Персональный коучинг',
      'Декомпозиция целей',
      'Отслеживание прогресса',
      'Интеграция с календарем',
      'Мотивационная система'
    ]
  },
  {
    icon: BookOpen,
    title: 'Практические задания',
    description:
      'Доступ к реальным проектам и заданиям по вашей специальности от крупных компаний',
    details: [
      'База актуальных проектов',
      'Практические кейсы',
      'Система менторства',
      'Формирование портфолио',
      'Рекомендации стажировок'
    ]
  },
  {
    icon: Brain,
    title: 'Персонализация',
    description:
      'Индивидуальные рекомендации на основе ваших интересов и целей',
    details: [
      'Адаптивная система обучения',
      'Персональные рекомендации',
      'Анализ сильных сторон',
      'Индивидуальный подбор материалов',
      'Корректировка программы'
    ]
  },
  {
    icon: Leaf,
    title: 'Спокойствие',
    description:
      'Больше никакого FOMO, приложение скажет в нужный момент, если вам потребуется что-то будет сделать',
    details: [
      'Умная система напоминаний',
      'Мониторинг уровня стресса',
      'Советы по балансу',
      'Трекинг состояния',
      'Планирование отдыха'
    ]
  },
];

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Все возможности для вашего развития
          </h2>
          <p className="text-xl text-gray-600">
            Используйте современные инструменты для достижения ваших целей
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={index}
                onClick={() => setSelectedFeature(feature)}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 text-left group cursor-pointer"
              >
                <Icon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
              <h2 className="text-2xl font-semibold text-gray-900">
                {selectedFeature.title}
              </h2>
              <button
                onClick={() => setSelectedFeature(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                {selectedFeature.icon && (
                  <selectedFeature.icon className="h-16 w-16 text-indigo-600" />
                )}
                <p className="text-lg text-gray-600">
                  {selectedFeature.description}
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                  Основные возможности:
                </h3>
                <div className="space-y-4">
                  {selectedFeature.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Понятно
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}