import { useState } from 'react';
import './App.css';
import { TaskForm } from './components/tasks/TaskForm';
import { TaskList } from './components/tasks/TaskList';
import { useTask } from './hooks/useTask';
import './styles/globals.css';
import { Task } from './types/Task';

function App() {
  const { tasks, addTask, toggleTask, deleteTask, updateTask } = useTask();

  const [editingTask, setEditingTask] = useState<Task | undefined>();

  console.log('tasks', tasks);

  const handleAddTask = (taskData: { title: string; description: string }) => {
    addTask(taskData);
  };
  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = (taskData: {
    title: string;
    description: string;
  }) => {
    if (editingTask) {
      updateTask(editingTask.id, taskData);
      setEditingTask(undefined);
    }
  };

  const handleCancel = () => {
    setEditingTask(undefined);
  };

  return (
    <div className="container">
      <header className="app-header">
        <h1>TaskFlow</h1>
        <p>Manage your tasks efficiently and stay organized</p>
      </header>

      <main className="app-main">
        <TaskForm
          onCancel={handleCancel}
          onSubmit={editingTask ? handleUpdateTask : handleAddTask}
          editingTask={editingTask}
        />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onEditTask={handleEditTask}
          onToggleTask={toggleTask}
        />
      </main>
    </div>
  );
}

export default App;
