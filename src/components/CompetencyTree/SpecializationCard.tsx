import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { Specialization } from '../../types/competency';

interface Props {
  specialization: Specialization;
  onSelect: (spec: Specialization) => void;
}

export function SpecializationCard({ specialization, onSelect }: Props) {
  const colorClasses = {
    indigo: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    emerald: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
    purple: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
  };

  return (
    <button
      onClick={() => onSelect(specialization)}
      className={`w-full p-6 rounded-xl border ${colorClasses[specialization.color as keyof typeof colorClasses]} 
        transition-all duration-200 text-left group`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">{specialization.title}</h3>
        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
      </div>
      <p className="mt-2 text-gray-600">
        {specialization.subjects.length} предметов
      </p>
    </button>
  );
}