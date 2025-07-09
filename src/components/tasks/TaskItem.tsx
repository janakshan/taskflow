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
        className="task-checkbox"
        checked={task.completed}
        onChange={handleToggle}
        aria-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
      />

      <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
      </div>

      <div className="task-actions">
        {!task.completed && (
          <button className="btn btn-secondary btn-sm" onClick={handleEdit}>
            Edit
          </button>
        )}

        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
