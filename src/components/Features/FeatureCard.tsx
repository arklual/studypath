import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export function FeatureCard({ icon: Icon, title, description, onClick }: FeatureCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-left group cursor-pointer"
    >
      <Icon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </button>
  );
}