import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { location } from 'ionicons/icons';
import { profile } from '../data/profile';
import SkillChip from '../components/SkillChip';
import './AboutPage.css';

/**
 * "About" screen.
 *
 * Presents the professional profile: avatar with initials, bio, skills,
 * highlighted experience and contact links. All content comes from
 * `src/data/profile.ts`, so this page contains no hard-coded personal data.
 */
const AboutPage: React.FC = () => {
  /**
   * Opens a contact link. For email/phone (`mailto:`/`tel:`) assigning
   * `location.href` is enough; for web URLs we open a new tab.
   */
  const openLink = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener');
    } else {
      window.location.href = url;
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Header with avatar and identity. */}
        <div className="profile-header ion-text-center ion-padding">
          <IonAvatar className="profile-avatar">
            <div className="profile-initials">{profile.initials}</div>
          </IonAvatar>
          <h1 className="profile-name">{profile.name}</h1>
          <IonText color="primary">
            <p className="profile-role">{profile.role}</p>
          </IonText>
          <IonNote className="profile-location">
            <IonIcon icon={location} /> {profile.location}
          </IonNote>
        </div>

        {/* Contact buttons. */}
        <div className="profile-contacts ion-padding-horizontal">
          {profile.contacts.map((contact) => (
            <IonButton
              key={contact.label}
              fill="outline"
              size="small"
              onClick={() => openLink(contact.url)}
            >
              <IonIcon slot="start" icon={contact.icon} />
              {contact.label}
            </IonButton>
          ))}
        </div>

        {/* Bio. */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Profile</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>{profile.bio}</IonCardContent>
        </IonCard>

        {/* Skills. */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Technologies</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {profile.skills.map((skill) => (
              <SkillChip key={skill} label={skill} />
            ))}
          </IonCardContent>
        </IonCard>

        {/* Highlighted experience. */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Highlighted experience</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="full">
              {profile.experience.map((exp) => (
                <IonItem key={`${exp.company}-${exp.period}`} lines="inset">
                  <IonLabel className="ion-text-wrap">
                    <h2>{exp.role}</h2>
                    <IonCardSubtitle>
                      {exp.company} · {exp.period}
                    </IonCardSubtitle>
                    <p>{exp.summary}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AboutPage;
