import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { openOutline } from 'ionicons/icons';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

/**
 * Project detail screen.
 *
 * Reads the `id` from the route, finds the matching project and shows its full
 * information. Includes a back button to return to the list and, if the project
 * has an external link, a button to open it.
 */
const ProjectDetailPage: React.FC = () => {
  // The id comes from the "/projects/:id" route.
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* Returns to the projects list. */}
            <IonBackButton defaultHref="/projects" />
          </IonButtons>
          <IonTitle>Project</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        {!project ? (
          // Defensive case: non-existent id (e.g. a wrong manual link).
          <IonText color="danger">
            <p>Project not found.</p>
          </IonText>
        ) : (
          <>
            <IonText color="medium">
              <p>{project.period} · {project.role}</p>
            </IonText>
            <h1>{project.title}</h1>

            <IonText>
              <p>{project.description}</p>
            </IonText>

            <h2>Technologies</h2>
            <div>
              {project.technologies.map((tech) => (
                <IonChip key={tech} color="primary" outline>
                  <IonLabel>{tech}</IonLabel>
                </IonChip>
              ))}
            </div>

            {/* The external link only shows if the project defines one. */}
            {project.link && (
              <IonList className="ion-margin-top">
                <IonItem
                  button
                  detail={false}
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                >
                  <IonIcon slot="start" icon={openOutline} />
                  <IonLabel>Open link</IonLabel>
                </IonItem>
              </IonList>
            )}

            <IonButton
              className="ion-margin-top"
              expand="block"
              fill="clear"
              routerLink="/projects"
            >
              Back to projects
            </IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ProjectDetailPage;
