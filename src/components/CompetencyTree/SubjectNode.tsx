import React from 'react';
import { Lock, CheckCircle, Circle } from 'lucide-react';
import type { Subject } from '../../types/competency';

interface Props {
  subject: Subject;
  isSelected: boolean;
  onClick: () => void;
}

export function SubjectNode({ subject, isSelected, onClick }: Props) {
  const getStatusIcon = () => {
    switch (subject.status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Circle className="h-5 w-5 text-yellow-500" />;
      case 'locked':
        return <Lock className="h-5 w-5 text-gray-400" />;
      default:
        return <Circle className="h-5 w-5 text-blue-500" />;
    }
  };

  const baseClasses = "p-4 rounded-lg border transition-all duration-200";
  const statusClasses = {
    completed: "bg-green-50 border-green-200",
    'in-progress': "bg-yellow-50 border-yellow-200",
    available: "bg-blue-50 border-blue-200",
    locked: "bg-gray-50 border-gray-200 opacity-60"
  };

  return (
    <button
      onClick={onClick}
      disabled={subject.status === 'locked'}
      className={`${baseClasses} ${statusClasses[subject.status]} 
        ${isSelected ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
    >
      <div className="flex items-center space-x-2">
        {getStatusIcon()}
        <span className={subject.status === 'locked' ? 'text-gray-500' : 'text-gray-900'}>
          {subject.title}
        </span>
      </div>
    </button>
  );
}