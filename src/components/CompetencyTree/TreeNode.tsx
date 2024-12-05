import React from 'react';
import { Lock, CheckCircle, Circle } from 'lucide-react';
import type { Subject } from '../../types/competency';

interface Props {
  subject: Subject;
  isSelected: boolean;
  level: number;
  onClick: () => void;
  hasLine?: boolean;
}

export function TreeNode({ subject, isSelected, level, onClick, hasLine = true }: Props) {
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

  const statusClasses = {
    completed: "bg-green-50 border-green-200",
    'in-progress': "bg-yellow-50 border-yellow-200",
    available: "bg-blue-50 border-blue-200",
    locked: "bg-gray-50 border-gray-200 opacity-60"
  };

  return (
    <div className="relative">
      {hasLine && level > 0 && (
        <div 
          className="absolute left-6 -top-8 w-px h-8 bg-gray-300"
          style={{ left: `${level * 2.5 - 0.5}rem` }}
        />
      )}
      {level > 0 && (
        <div 
          className="absolute top-4 h-px bg-gray-300"
          style={{ 
            left: `${(level - 1) * 2.5}rem`,
            width: `${2.5}rem`
          }}
        />
      )}
      <div 
        style={{ marginLeft: `${level * 2.5}rem` }}
        className="relative"
      >
        <button
          onClick={onClick}
          disabled={subject.status === 'locked'}
          className={`w-64 p-4 rounded-lg border transition-all duration-200
            ${statusClasses[subject.status]} 
            ${isSelected ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
        >
          <div className="flex items-center space-x-2">
            {getStatusIcon()}
            <span className={subject.status === 'locked' ? 'text-gray-500' : 'text-gray-900'}>
              {subject.title}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}