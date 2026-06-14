import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonIcon,
  IonLabel
} from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import type { Project } from '../models/project.model';

/** Props for the `ProjectCard` component. */
interface ProjectCardProps {
  /** Project to render in the card. */
  project: Project;
  /** Callback when the card is tapped (typically navigates to the detail). */
  onClick: () => void;
}

/**
 * Summary card for a project in the "Projects" list.
 *
 * Shows title, period, summary and a preview of the technologies. Navigation is
 * delegated to the `onClick` callback to avoid coupling to the router.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <IonCard button onClick={onClick}>
    <IonCardHeader>
      <IonCardSubtitle>{project.period} · {project.role}</IonCardSubtitle>
      <IonCardTitle>{project.title}</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <p>{project.summary}</p>

      {/* Show only the first 3 technologies to keep the card uncluttered. */}
      <div className="ion-margin-top">
        {project.technologies.slice(0, 3).map((tech) => (
          <IonChip key={tech} color="medium" outline>
            <IonLabel>{tech}</IonLabel>
          </IonChip>
        ))}
      </div>

      <div className="ion-margin-top" style={{ display: 'flex', alignItems: 'center', color: 'var(--ion-color-primary)' }}>
        <IonLabel>View details</IonLabel>
        <IonIcon icon={arrowForward} className="ion-margin-start" />
      </div>
    </IonCardContent>
  </IonCard>
);

export default ProjectCard;
