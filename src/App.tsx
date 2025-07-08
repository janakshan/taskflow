import './App.css';
import { TaskItem } from './components/tasks/TaskItem';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <TaskItem
        task={{
          id: '001',
          title: 'Task 1',
          description: 'some  1',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        }}
        onDelete={() => {}}
        onEdit={() => {}}
        onToggle={() => {}}
      />

      <TaskItem
        task={{
          id: '002',
          title: 'Task 2',
          description: 'some 2',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        }}
        onDelete={() => {}}
        onEdit={() => {}}
        onToggle={() => {}}
      />
    </div>
  );
}

export default App;
