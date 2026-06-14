/**
 * Model of a To-Do task.
 */
export interface Task {
  /** Unique identifier (generated when the task is created). */
  id: string;
  /** Task text/description. */
  title: string;
  /** Whether the task is completed. */
  completed: boolean;
  /** Creation timestamp (epoch ms), useful for sorting. */
  createdAt: number;
}
