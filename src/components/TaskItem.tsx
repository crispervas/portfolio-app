import {
  IonCheckbox,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel
} from '@ionic/react';
import type { Task } from '../models/task.model';

/** Props for the `TaskItem` component. */
interface TaskItemProps {
  /** Task to render. */
  task: Task;
  /** Callback when the task is checked/unchecked as completed. */
  onToggle: (id: string) => void;
  /** Callback when the task is deleted. */
  onDelete: (id: string) => void;
}

/**
 * Row for a task within the To-Do list.
 *
 * Uses `IonItemSliding` to reveal the delete action when swiping, a common
 * native mobile pattern. The checkbox toggles the completed state.
 */
const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
  <IonItemSliding>
    <IonItem>
      <IonCheckbox
        slot="start"
        checked={task.completed}
        onIonChange={() => onToggle(task.id)}
        aria-label={`Mark "${task.title}" as completed`}
      />
      {/* Strike through the text when the task is completed. */}
      <IonLabel
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          opacity: task.completed ? 0.5 : 1
        }}
      >
        {task.title}
      </IonLabel>
    </IonItem>

    <IonItemOptions side="end">
      <IonItemOption color="danger" onClick={() => onDelete(task.id)}>
        Delete
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>
);

export default TaskItem;
