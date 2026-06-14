import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

/**
 * "Projects" screen.
 *
 * Lists every portfolio project as a card. Tapping one navigates to the matching
 * detail screen using the project id in the route.
 */
const ProjectsPage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="ion-padding-horizontal ion-padding-top">
          <IonText color="medium">
            <p>A selection of projects I have worked on.</p>
          </IonText>
        </div>

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => history.push(`/projects/${project.id}`)}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default ProjectsPage;
