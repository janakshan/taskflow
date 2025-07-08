import './App.css';
import { TaskList } from './components/tasks/TaskList';
import './styles/globals.css';

const tasks = [
  {
    id: '0001',
    title: 'Task 1',
    description: 'Finish the homepage layout',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '0002',
    title: 'Task 2',
    description: 'Fix login form validation',
    completed: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '0003',
    title: 'Task 3',
    description: 'Implement user profile page',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '0004',
    title: 'Task 4',
    description: 'Set up database schema',
    completed: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '0005',
    title: 'Task 5',
    description: 'Connect frontend to API',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '0006',
    title: 'Task 6',
    description: 'Write unit tests for auth',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '0007',
    title: 'Task 7',
    description: 'Deploy app to staging',
    completed: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '0008',
    title: 'Task 8',
    description: 'Refactor header component',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '0009',
    title: 'Task 9',
    description: 'Fix mobile responsiveness issues',
    completed: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '0010',
    title: 'Task 10',
    description: 'Review PR #42',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

function App() {
  return (
    <div className="App">
      <TaskList
        tasks={tasks}
        onDeleteTask={() => {}}
        onEditTask={() => {}}
        onToggleTask={() => {}}
      />
    </div>
  );
}

export default App;
