import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { briefcase, checkmarkDone, person } from 'ionicons/icons';

import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import TasksPage from './pages/TasksPage';

/* Core CSS required by Ionic components. */
import '@ionic/react/css/core.css';

/* Basic CSS for Ionic apps. */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utilities (padding, flex, text alignment…). */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Automatic dark mode following the operating system preference. */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables. */
import './theme/variables.css';

// Initializes Ionic React (mode, animations, etc.).
setupIonicReact();

/**
 * Root application component.
 *
 * Defines the tab navigation (About, Projects, Tasks) and the routes. The
 * project detail route is nested inside the same outlet to keep the tab bar and
 * enable the "back" gesture.
 */
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* About */}
          <Route exact path="/about">
            <AboutPage />
          </Route>

          {/* Projects: list and detail. */}
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/projects/:id">
            <ProjectDetailPage />
          </Route>

          {/* Tasks */}
          <Route exact path="/tasks">
            <TasksPage />
          </Route>

          {/* Default route: redirect to "About". */}
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="about" href="/about">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>About</IonLabel>
          </IonTabButton>

          <IonTabButton tab="projects" href="/projects">
            <IonIcon aria-hidden="true" icon={briefcase} />
            <IonLabel>Projects</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tasks" href="/tasks">
            <IonIcon aria-hidden="true" icon={checkmarkDone} />
            <IonLabel>Tasks</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
