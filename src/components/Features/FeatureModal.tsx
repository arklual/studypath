import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Feature } from '../../types/feature';

interface FeatureModalProps {
  feature: Feature;
  onClose: () => void;
}

export function FeatureModal({ feature, onClose }: FeatureModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto animate-modal-slide-up">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-semibold text-gray-900">{feature.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Закрыть"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <feature.icon className="h-16 w-16 text-indigo-600" />
            <p className="text-lg text-gray-600">{feature.description}</p>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-xl mb-8">
            <h3 className="text-lg font-semibold text-indigo-900 mb-4">
              Основные возможности:
            </h3>
            <div className="space-y-4">
              {feature.details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onClose}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Понятно
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}