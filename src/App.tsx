import './App.css';
import { TaskList } from './components/tasks/TaskList';
import { useTask } from './hooks/useTask';
import './styles/globals.css';

function App() {
  const { tasks, addTask, toggleTask, deleteTask, updateTask } = useTask();

  console.log('tasks', tasks);

  const handleAddTask = () => {
    addTask({
      title: 'AI',
      description: 'dome ',
    });
  };

  const handleUpdate = () => {
    console.log('handleUpdate pressed');
    updateTask('0001', { title: 'MOOON', description: 'Welcome to mutated ' });
  };

  return (
    <div className="App">
      <button onClick={handleAddTask}>Add</button>
      <button onClick={handleUpdate}>Update</button>
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onEditTask={() => {}}
        onToggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
