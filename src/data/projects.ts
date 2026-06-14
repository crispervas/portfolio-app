import type { Project } from '../models/project.model';

/**
 * Portfolio project catalog.
 *
 * Single source of truth for the "Projects" section. To add a new one, just push
 * an object to this array following the `Project` interface.
 */
export const projects: Project[] = [
  {
    id: 'jah-4-0',
    title: 'JAH 4.0 — Cargo insurance',
    summary: 'Mobile app + web platform to issue international cargo insurance.',
    description:
      'Cross-platform (Ionic + Angular) and web platform to manage and issue ' +
      'international cargo insurance certificates. A single codebase shipped to ' +
      'iOS and Android, on top of Node.js and PHP services. Included the design ' +
      'and administration of the databases (SQL and NoSQL) and automated ' +
      'deployment on AWS and Google Cloud with Docker and Terraform.',
    technologies: ['Ionic', 'Angular', 'Node.js', 'PHP', 'AWS', 'Docker', 'Terraform'],
    role: 'Team Lead / Full-Stack',
    period: '2016 – 2023'
  },
  {
    id: 'loteria-cundinamarca',
    title: 'Lotería de Cundinamarca platform',
    summary: 'Backend and AWS infrastructure for ticket sales, draws and payments.',
    description:
      'Backend and cloud infrastructure for the lottery platform: ticket ' +
      'ingestion, draws, subscriptions and online payments. API in Node.js 22 / ' +
      'Express with Prisma over PostgreSQL (RDS), DynamoDB for high-volume ticket ' +
      'ingestion and Redis (ElastiCache) for caching and locks. Real-time flows ' +
      'over Socket.IO and serverless jobs on Lambda. The whole AWS stack ' +
      'provisioned as code with Terraform and orchestrated with Docker Compose ' +
      'behind Nginx + TLS.',
    technologies: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'DynamoDB', 'Redis', 'Socket.IO', 'Terraform', 'AWS Lambda'],
    role: 'Backend & Cloud Engineer',
    period: '2026'
  },
  {
    id: 'sumerce-rape',
    title: 'Sumercé — Agricultural e-commerce',
    summary: 'Marketplace connecting farmers directly with buyers.',
    description:
      'Backend of an e-commerce platform linking farmers with buyers. Designed ' +
      'microservices for authentication, catalog, payments and logistics, secured ' +
      'with JWT and role-based access control (RBAC).',
    technologies: ['Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'JWT'],
    role: 'Software Engineer',
    period: '2020 – 2023'
  },
  {
    id: 'hommik',
    title: 'Hommik — Online school',
    summary: 'Learning platform for content, classes and student tracking.',
    description:
      'E-learning platform to manage course content, classes and student ' +
      'tracking. Split into microservices for authentication, notifications and ' +
      'content delivery, with responsive React.js interfaces.',
    technologies: ['Node.js', 'React.js', 'MongoDB', 'AWS', 'Docker'],
    role: 'Software Engineer',
    period: '2020 – 2023'
  },
  {
    id: 'efficold-ugni',
    title: 'Efficold (Ugni.io) — Smart vending',
    summary: 'React front-end for managing smart vending machines.',
    description:
      'Built the React.js front-end of a smart vending management platform, with ' +
      'a clean component structure and API integration.',
    technologies: ['React.js', 'JavaScript', 'REST API'],
    role: 'Frontend Developer',
    period: '2019 – 2020'
  },
  {
    id: 'dreamjobs',
    title: 'DreamJobs — Geo job search',
    summary: 'Geo-referenced job-search mobile and web app.',
    description:
      'Geo-referenced job-search product, including a mobile app (PhoneGap / ' +
      'Cordova) and the PHP and JavaScript web front-end and backend. Also ' +
      'responsible for the design and implementation of the infrastructure and ' +
      'the database.',
    technologies: ['Cordova', 'PHP', 'JavaScript', 'MySQL'],
    role: 'Full-Stack Developer',
    period: '2015 – 2016'
  }
];
