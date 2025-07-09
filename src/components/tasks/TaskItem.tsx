import React from 'react';
import { Task } from '../../types/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const handleToggle = () => {
    onToggle(task.id);
    console.log('handleToggle pressed', task.id);
  };

  const handleEdit = () => {
    onEdit(task);
    console.log('handleEdit pressed', task);
  };

  const handleDelete = () => {
    onDelete(task.id);
    console.log('handleDelete pressed', task.id);
  };

  return (
    <div
      className={`task-item ${task.completed ? 'completed' : ''}`}
      key={task.id}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        area-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
      />

      <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
      </div>

      <div className="task-actions">
        <button className="btn btn-secountry" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
