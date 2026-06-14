import { logoGithub, logoLinkedin, mail, call } from 'ionicons/icons';
import type { Profile } from '../models/profile.model';

/**
 * Professional profile data.
 *
 * This file is the SINGLE source of truth for the personal content: editing here
 * automatically updates the "About" screen without touching any component.
 */
export const profile: Profile = {
  name: 'Cristhian Pereira',
  role: 'Senior Software Engineer',
  location: 'Gold Coast, QLD — Australia',
  initials: 'CP',
  bio:
    'Senior software engineer with over 10 years across mobile, web and cloud. ' +
    'I build cross-platform mobile apps with Ionic, shipping a single codebase to ' +
    'both iOS and Android, along with the Node.js APIs and AWS infrastructure ' +
    'behind them. I have led and mentored small teams and delivered products end ' +
    'to end: from the interface through database design to deployment.',
  skills: [
    'Ionic',
    'Capacitor / Cordova',
    'React.js',
    'AngularJS',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express',
    'Prisma',
    'Socket.IO',
    'Python',
    'PHP',
    'AWS',
    'Docker',
    'Terraform',
    'CI/CD',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'DynamoDB',
    'Redis',
    'GraphQL'
  ],
  experience: [
    {
      role: 'Software Engineer / Team Lead (Web & Mobile)',
      company: 'JAH Insurance Brokers',
      period: 'Feb 2016 – Jun 2023',
      summary:
        'Led the build of JAH 4.0, a cross-platform mobile app (Ionic + Angular) ' +
        'and web platform to issue international cargo insurance certificates, on ' +
        'top of Node.js/PHP services and AWS/GCP infrastructure.'
    },
    {
      role: 'Backend & Cloud Engineer',
      company: 'Lotería de Cundinamarca',
      period: 'Jan 2026 – Jun 2026',
      summary:
        'Built the backend and AWS infrastructure for the lottery platform ' +
        '(Node.js 22, Express, Prisma over PostgreSQL/RDS, DynamoDB, Redis, ' +
        'Socket.IO and Lambdas), all provisioned as code with Terraform.'
    },
    {
      role: 'Web Developer',
      company: 'Techno Water Designs',
      period: 'May 2025 – Jul 2025',
      summary:
        'Modular React.js web app on AWS (CloudFront, S3, Lambda), working ' +
        'directly with the client and shipping each module on time.'
    }
  ],
  contacts: [
    {
      label: 'GitHub',
      url: 'https://github.com/crispervas',
      icon: logoGithub
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cristhian-javier-pereira-vasquez',
      icon: logoLinkedin
    },
    {
      label: 'Email',
      url: 'mailto:crispervasjob@gmail.com',
      icon: mail
    },
    {
      label: 'Phone',
      url: 'tel:+61450907347',
      icon: call
    }
  ]
};
