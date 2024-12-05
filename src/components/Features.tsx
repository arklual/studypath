import React from 'react';
import { Brain, TreePine, Calendar, Target, BookOpen,  Leaf} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Умное планирование',
    description: 'Автоматическое поддерживание динамического расписания с учетом учебы и внеучебной деятельности'
  },
  {
    icon: TreePine,
    title: 'Дерево компетенций',
    description: 'Визуализация прогресса обучения в ВУЗе и не только с автоматической подгрузкой данных'
  },
  {
    icon: Target,
    title: 'Приоритизация целей',
    description: 'Помощь в выборе и достижении важных для вас целей'
  },
  {
    icon: BookOpen,
    title: 'Практические задания',
    description: 'Доступ к реальным проектам и заданиям по вашей специальности от крупных компаний'
  },
  {
    icon: Brain,
    title: 'Персонализация',
    description: 'Индивидуальные рекомендации на основе ваших интересов и целей'
  },
  {
    icon: Leaf,
    title: 'Спокойствие',
    description: 'Больше никакого FOMO, приложение скажет, если что-то нужно будет сделать именно вам'
  }
];

export function Features() {
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
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}