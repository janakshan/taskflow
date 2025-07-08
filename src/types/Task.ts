export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskFromData {
  title: string;
  description: string;
}

export type TaskFilter = 'all' | 'active' | 'completed';
