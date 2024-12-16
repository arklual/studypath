import React, { useState } from 'react';
import { features } from '../../data/features';
import { FeatureCard } from './FeatureCard';
import { FeatureModal } from './FeatureModal';
import type { Feature } from '../../types/feature';

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

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
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </div>
      </div>

      {selectedFeature && (
        <FeatureModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </section>
  );
}