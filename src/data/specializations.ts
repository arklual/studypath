export const specializations = [
  {
    id: 'frontend',
    title: 'Frontend-разработка',
    color: 'indigo',
    subjects: [
      {
        id: 'html-css',
        title: 'HTML и CSS',
        status: 'available',
        prerequisites: [],
        topics: [
          { id: 'html-basics', title: 'Основы HTML', status: 'available' },
          { id: 'css-basics', title: 'Основы CSS', status: 'locked' },
          { id: 'responsive', title: 'Адаптивная верстка', status: 'locked' }
        ]
      },
      {
        id: 'javascript',
        title: 'JavaScript',
        status: 'locked',
        prerequisites: ['html-css'],
        topics: [
          { id: 'js-basics', title: 'Основы JavaScript', status: 'locked' },
          { id: 'dom', title: 'DOM-манипуляции', status: 'locked' },
          { id: 'async', title: 'Асинхронность', status: 'locked' }
        ]
      },
      {
        id: 'react',
        title: 'React',
        status: 'locked',
        prerequisites: ['javascript'],
        topics: [
          { id: 'react-basics', title: 'Основы React', status: 'locked' },
          { id: 'hooks', title: 'React Hooks', status: 'locked' },
          { id: 'state', title: 'Управление состоянием', status: 'locked' }
        ]
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend-разработка',
    color: 'emerald',
    subjects: [
      {
        id: 'python',
        title: 'Python',
        status: 'available',
        prerequisites: [],
        topics: [
          { id: 'python-basics', title: 'Основы Python', status: 'available' },
          { id: 'oop', title: 'ООП в Python', status: 'locked' },
          { id: 'algorithms', title: 'Алгоритмы', status: 'locked' }
        ]
      },
      {
        id: 'databases',
        title: 'Базы данных',
        status: 'locked',
        prerequisites: ['python'],
        topics: [
          { id: 'sql-basics', title: 'Основы SQL', status: 'locked' },
          { id: 'db-design', title: 'Проектирование БД', status: 'locked' },
          { id: 'orm', title: 'ORM', status: 'locked' }
        ]
      }
    ]
  },
  {
    id: 'ai',
    title: 'Искусственный интеллект',
    color: 'purple',
    subjects: [
      {
        id: 'math',
        title: 'Математика',
        status: 'available',
        prerequisites: [],
        topics: [
          { id: 'linear-algebra', title: 'Линейная алгебра', status: 'available' },
          { id: 'calculus', title: 'Математический анализ', status: 'locked' },
          { id: 'probability', title: 'Теория вероятностей', status: 'locked' }
        ]
      },
      {
        id: 'ml-basics',
        title: 'Основы ML',
        status: 'locked',
        prerequisites: ['math', 'python'],
        topics: [
          { id: 'ml-intro', title: 'Введение в ML', status: 'locked' },
          { id: 'supervised', title: 'Обучение с учителем', status: 'locked' },
          { id: 'unsupervised', title: 'Обучение без учителя', status: 'locked' }
        ]
      }
    ]
  }
];