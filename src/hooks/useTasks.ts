import { useCallback, useEffect, useState } from 'react';
import type { Task } from '../models/task.model';
import { storageService } from '../services/storage.service';
import { feedbackService } from '../services/feedback.service';

/** Key under which tasks are persisted in storage. */
const STORAGE_KEY = 'portfolio.tasks';

/**
 * Generates a reasonably safe unique identifier for a task.
 * Uses `crypto.randomUUID` when available and falls back to a simple option.
 */
function generateId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/**
 * Hook holding all the To-Do manager logic.
 *
 * Encapsulates state, persistence and native feedback, exposing a simple API to
 * the UI. By living here (and not in the component), the logic can be tested in
 * isolation and reused across other screens.
 *
 * @returns Task state and actions to manipulate it.
 */
export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  /** `true` while the initial tasks are being loaded from storage. */
  const [loading, setLoading] = useState(true);

  // Initial load of the persisted tasks when the hook mounts.
  useEffect(() => {
    let active = true; // Avoids updating state if the component unmounts.

    (async () => {
      const stored = await storageService.get<Task[]>(STORAGE_KEY, []);
      if (active) {
        setTasks(stored);
        setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  /**
   * Persists a list of tasks and updates the in-memory state.
   * Centralizing the save guarantees that state and storage never drift apart.
   */
  const persist = useCallback(async (next: Task[]) => {
    setTasks(next);
    await storageService.set(STORAGE_KEY, next);
  }, []);

  /**
   * Adds a new task to the top of the list.
   * @param title Task text (ignored if it becomes empty after trimming).
   */
  const addTask = useCallback(
    async (title: string) => {
      const trimmed = title.trim();
      if (!trimmed) return;

      const task: Task = {
        id: generateId(),
        title: trimmed,
        completed: false,
        createdAt: Date.now()
      };

      await persist([task, ...tasks]);
      await feedbackService.impactLight();
      await feedbackService.toast('Task added');
    },
    [tasks, persist]
  );

  /**
   * Toggles a task between completed and pending.
   * @param id Task identifier.
   */
  const toggleTask = useCallback(
    async (id: string) => {
      const next = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      await persist(next);
      await feedbackService.success();
    },
    [tasks, persist]
  );

  /**
   * Removes a task from the list.
   * @param id Task identifier.
   */
  const removeTask = useCallback(
    async (id: string) => {
      await persist(tasks.filter((task) => task.id !== id));
      await feedbackService.impactLight();
      await feedbackService.toast('Task deleted');
    },
    [tasks, persist]
  );

  /** Number of tasks still pending (not completed). */
  const pendingCount = tasks.filter((task) => !task.completed).length;

  return { tasks, loading, pendingCount, addTask, toggleTask, removeTask };
}
