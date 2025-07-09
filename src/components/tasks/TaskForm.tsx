import React, { useEffect, useState } from 'react';
import { Task, TaskFromData } from '../../types/Task';

interface TaskFormProps {
  onSubmit: (taskData: TaskFromData) => void;
  onCancel?: () => void;
  editingTask?: Task;
}
export const TaskForm: React.FC<TaskFormProps> = ({
  onCancel,
  onSubmit,
  editingTask,
}) => {
  const [formData, setFromData] = useState<TaskFromData>({
    title: '',
    description: '',
  });

  console.log('formData', formData);

  const [error, setError] = useState<Partial<TaskFromData>>({});

  useEffect(() => {
    if (editingTask) {
      setFromData({
        title: editingTask.title,
        description: editingTask?.description || '',
      });
    } else {
      setFromData({
        title: '',
        description: '',
      });
    }
  }, [editingTask]);

  const validateForm = (): boolean => {
    const newErrors: Partial<TaskFromData> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (formData.title.length > 100) {
      newErrors.title = 'Title must be less than 100 characters';
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit({
      title: formData.title.trim(),
      description: formData.description?.trim(),
    });

    // Reset form if not editing
    if (!editingTask) {
      setFromData({ title: '', description: '' });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFromData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (error[name as keyof TaskFromData]) {
      setError(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Task title*</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the task title .."
            maxLength={100}
            className={error.title ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description"> Description (optional)</label>
          <textarea
            name="description"
            placeholder="Enter the description ..."
            id="description"
            rows={3}
            value={formData.description}
            maxLength={500}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};
