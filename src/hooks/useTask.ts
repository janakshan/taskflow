import { useCallback, useState } from 'react';
import { Task, TaskFromData } from '../types/Task';

export const useTask = () => {
  const tasksData = [
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
  ];
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  const addTask = useCallback((taskData: TaskFromData) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: taskData.title,
      description: taskData.description,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed, updatedAt: new Date() }
          : task
      )
    );
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    console.log('first');
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, ...updates, updatedAt: new Date() } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
  };
};
