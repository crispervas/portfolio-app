/**
 * Model of a portfolio project.
 */
export interface Project {
  /** Unique, stable identifier (used in the detail route). */
  id: string;
  /** Project name. */
  title: string;
  /** One-line summary shown on the list card. */
  summary: string;
  /** Full description shown on the detail screen. */
  description: string;
  /** Technologies used in the project. */
  technologies: string[];
  /** Author's role within the project. */
  role: string;
  /** Year or period of the project. */
  period: string;
  /** Optional external link (repository, demo, site). */
  link?: string;
}
