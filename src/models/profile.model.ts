/**
 * Data models for the professional profile.
 *
 * Keeping these interfaces separate from the data and the UI means any change to
 * the "shape" of the profile lives in a single place and is type-checked across
 * every screen that consumes it.
 */

/** A contact or social link (e.g. GitHub, LinkedIn, email). */
export interface ContactLink {
  /** Visible label (e.g. "GitHub"). */
  label: string;
  /** Full URL the link navigates to (e.g. "https://github.com/..."). */
  url: string;
  /** Name of the `ionicons` icon to display (e.g. "logoGithub"). */
  icon: string;
}

/** A single work experience within the career history. */
export interface Experience {
  /** Role held. */
  role: string;
  /** Company or organization. */
  company: string;
  /** Period as text (e.g. "Feb 2016 – Jun 2023"). */
  period: string;
  /** Short description of the main achievements. */
  summary: string;
}

/** Full professional profile that powers the "About" screen. */
export interface Profile {
  /** Full name. */
  name: string;
  /** Role or job title. */
  role: string;
  /** Location (city, region). */
  location: string;
  /** Short bio (2-3 sentences). */
  bio: string;
  /** Initials for the generated avatar (e.g. "CP"). */
  initials: string;
  /** List of highlighted technologies/skills. */
  skills: string[];
  /** Most relevant work experience. */
  experience: Experience[];
  /** Contact and social links. */
  contacts: ContactLink[];
}
