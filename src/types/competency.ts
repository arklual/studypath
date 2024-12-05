export interface Topic {
  id: string;
  title: string;
  status: 'locked' | 'available' | 'in-progress' | 'completed';
}

export interface Subject {
  id: string;
  title: string;
  topics: Topic[];
  prerequisites: string[];
  status: 'locked' | 'available' | 'in-progress' | 'completed';
}

export interface Specialization {
  id: string;
  title: string;
  subjects: Subject[];
  color: string;
}