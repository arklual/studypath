import React from 'react';
import { ConsultationForm } from '../ConsultationForm';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Персональный план развития с учетом ваших целей',
  'Экспертная оценка текущих навыков и компетенций',
  'Рекомендации по выбору специализации и карьерного пути',
  'Доступ к закрытому сообществу профессионалов',
  'Приоритетная поддержка на всем пути обучения',
];

export function ConsultationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Получите персональную консультацию
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Наши эксперты помогут составить индивидуальный план развития и ответят на все ваши вопросы.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Что вы получите:
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                Стоимость консультации
              </h3>
              <p className="text-indigo-900">
                5000 ₽ — персональная консультация (90 минут)
              </p>
              <p className="text-sm text-indigo-700 mt-2">
                * В стоимость входит разработка индивидуального плана развития
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}