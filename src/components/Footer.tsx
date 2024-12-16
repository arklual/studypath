import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-indigo-400" />
              <span className="font-bold text-xl">StudyPath</span>
            </div>
            <p className="text-gray-400">
              Помогаем студентам достигать большего
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Возможности</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Планирование</li>
              <li>Компетенции</li>
              <li>Практика</li>
              <li>Сообщество</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Блог</li>
              <li>Руководства</li>
              <li>Поддержка</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@studypath.ru</li>
              <li>Telegram: @studypath</li>
              <li>VK: studypath</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 StudyPath. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}