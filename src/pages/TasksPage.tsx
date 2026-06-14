import { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonNote,
  IonPage,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { add, checkboxOutline } from 'ionicons/icons';
import { useTasks } from '../hooks/useTasks';
import TaskItem from '../components/TaskItem';

/**
 * "Tasks" screen — To-Do manager.
 *
 * Demonstrates a full CRUD flow with state, local persistence and native
 * feedback. All the logic lives in the `useTasks` hook; this page only handles
 * presentation and capturing the user's input.
 */
const TasksPage: React.FC = () => {
  const { tasks, loading, pendingCount, addTask, toggleTask, removeTask } = useTasks();
  // Local controlled state of the text field used to create tasks.
  const [draft, setDraft] = useState('');

  /** Creates the task with the current text and clears the field. */
  const handleAdd = async () => {
    await addTask(draft);
    setDraft('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tasks</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Form to add a task. */}
        <div className="ion-padding">
          <IonItem>
            <IonInput
              value={draft}
              placeholder="New task…"
              onIonInput={(e) => setDraft(e.detail.value ?? '')}
              onKeyDown={(e) => {
                // Allows creating the task by pressing Enter.
                if (e.key === 'Enter') handleAdd();
              }}
            />
            <IonButton slot="end" onClick={handleAdd} disabled={!draft.trim()}>
              <IonIcon slot="icon-only" icon={add} />
            </IonButton>
          </IonItem>

          {!loading && tasks.length > 0 && (
            <IonNote className="ion-padding-start">
              {pendingCount} of {tasks.length} pending
            </IonNote>
          )}
        </div>

        {/* States: loading / empty / list. */}
        {loading ? (
          <div className="ion-text-center ion-padding">
            <IonSpinner name="crescent" />
          </div>
        ) : tasks.length === 0 ? (
          <div className="ion-text-center ion-padding">
            <IonIcon
              icon={checkboxOutline}
              style={{ fontSize: 48, color: 'var(--ion-color-medium)' }}
            />
            <IonText color="medium">
              <p>No tasks yet. Add your first one!</p>
            </IonText>
          </div>
        ) : (
          <IonList>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={removeTask}
              />
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default TasksPage;
