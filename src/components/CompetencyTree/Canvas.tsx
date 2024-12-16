import React from 'react';
import type { Subject } from '../../types/competency';

interface Props {
  subjects: Subject[];
  selectedSubject: Subject | null;
  onSelectSubject: (subject: Subject) => void;
}

export function Canvas({ subjects, selectedSubject, onSelectSubject }: Props) {
  // Calculate node positions in a tree layout
  const getNodePosition = (subject: Subject) => {
    const baseX = 200; // Starting X position
    const baseY = 100; // Starting Y position
    const levelSpacing = 300; // Horizontal spacing between levels
    const nodeSpacing = 160; // Vertical spacing between nodes

    const level = subject.prerequisites.length;
    const siblingIndex = subjects
      .filter((s) => s.prerequisites.length === level)
      .findIndex((s) => s.id === subject.id);

    return {
      x: baseX + level * levelSpacing,
      y: baseY + siblingIndex * nodeSpacing,
    };
  };

  // Draw connection lines between nodes
  const renderConnections = () => {
    return subjects.map((subject) => {
      return subject.prerequisites.map((preReqId) => {
        const preReqSubject = subjects.find((s) => s.id === preReqId);
        if (!preReqSubject) return null;

        const start = getNodePosition(preReqSubject);
        const end = getNodePosition(subject);

        // Calculate control points for curved line
        const controlPoint1 = {
          x: start.x + (end.x - start.x) * 0.5,
          y: start.y,
        };
        const controlPoint2 = {
          x: start.x + (end.x - start.x) * 0.5,
          y: end.y,
        };

        const path = `M ${start.x + 150} ${start.y + 30} 
                     C ${controlPoint1.x} ${controlPoint1.y},
                       ${controlPoint2.x} ${controlPoint2.y},
                       ${end.x} ${end.y + 30}`;

        return (
          <path
            key={`${subject.id}-${preReqId}`}
            d={path}
            fill="none"
            stroke={subject.status === 'locked' ? '#CBD5E1' : '#6366F1'}
            strokeWidth="2"
            className="transition-colors duration-300"
          />
        );
      });
    });
  };

  return (
    <div className="relative w-full h-[600px] overflow-auto bg-white rounded-lg border border-gray-200">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ minWidth: '1200px', minHeight: '600px' }}
      >
        {renderConnections()}
      </svg>
      <div
        className="absolute inset-0"
        style={{ minWidth: '1200px', minHeight: '600px' }}
      >
        {subjects.map((subject) => {
          const position = getNodePosition(subject);
          return (
            <div
              key={subject.id}
              className="absolute transition-transform duration-200 hover:scale-105"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <button
                onClick={() => onSelectSubject(subject)}
                disabled={subject.status === 'locked'}
                className={`w-[150px] p-4 rounded-lg border shadow-sm transition-all duration-200
                  ${
                    subject.status === 'completed'
                      ? 'bg-green-50 border-green-200'
                      : subject.status === 'in-progress'
                      ? 'bg-yellow-50 border-yellow-200'
                      : subject.status === 'available'
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-gray-50 border-gray-200 opacity-60'
                  }
                  ${
                    selectedSubject?.id === subject.id
                      ? 'ring-2 ring-offset-2 ring-blue-500'
                      : ''
                  }
                `}
              >
                <span
                  className={`block text-sm font-medium ${
                    subject.status === 'locked'
                      ? 'text-gray-500'
                      : 'text-gray-900'
                  }`}
                >
                  {subject.title}
                </span>
                <span className="block text-xs mt-1 text-gray-500">
                  {subject.topics.length} тем
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
