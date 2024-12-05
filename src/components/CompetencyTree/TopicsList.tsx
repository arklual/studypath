import React from 'react';
import { CheckCircle, Circle, Lock } from 'lucide-react';
import type { Topic } from '../../types/competency';

interface Props {
  topics: Topic[];
}

export function TopicsList({ topics }: Props) {
  const getStatusIcon = (status: Topic['status']) => {
    switch (status) {
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

  return (
    <div className="space-y-3">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className={`flex items-center space-x-3 p-3 rounded-lg
            ${topic.status === 'locked' ? 'bg-gray-50 opacity-60' : 'bg-white'}`}
        >
          {getStatusIcon(topic.status)}
          <span className={topic.status === 'locked' ? 'text-gray-500' : 'text-gray-900'}>
            {topic.title}
          </span>
        </div>
      ))}
    </div>
  );
}