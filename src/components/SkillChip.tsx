import { IonChip, IonLabel } from '@ionic/react';

/** Props for the `SkillChip` component. */
interface SkillChipProps {
  /** Name of the skill/technology to display. */
  label: string;
}

/**
 * Presentational chip to display a skill or technology.
 *
 * A purely visual, stateless component: it receives the text and renders it.
 */
const SkillChip: React.FC<SkillChipProps> = ({ label }) => (
  <IonChip color="primary" outline>
    <IonLabel>{label}</IonLabel>
  </IonChip>
);

export default SkillChip;
