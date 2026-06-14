# Design: Mobile Portfolio App — Cristhian Pereira

**Date:** 2026-06-14
**Author:** Cristhian Pereira
**Status:** Approved

## Goal

A cross-platform mobile app (iOS + Android) built from a single codebase, meant
as a portfolio piece for GitHub. It should be simple yet substantial, with
clean, commented, best-practice code, showcasing the real architecture of an
Ionic app.

## Stack

- **Ionic 8 + React + TypeScript + Vite**
- **Capacitor** to package to Android and iOS from a single codebase
- Native plugins:
  - `@capacitor/preferences` — local persistence of tasks
  - `@capacitor/haptics` — haptic feedback
  - `@capacitor/toast` — native notifications

## Navigation

A tab-based app with 3 tabs (bottom bar):

| Tab       | Page                                | Content |
|-----------|-------------------------------------|---------|
| About     | `AboutPage`                         | Avatar, name, role, bio, skills (chips), contact buttons |
| Projects  | `ProjectsPage` → `ProjectDetailPage`| Cards list; detail with description, stack and links |
| Tasks     | `TasksPage`                         | To-Do manager with CRUD + persistence + haptics/toast |

## Architecture

```
src/
├── data/
│   ├── profile.ts        # Personal data (central, editable config)
│   └── projects.ts       # Portfolio projects
├── models/
│   ├── profile.model.ts  # Profile, Skill, ContactLink interfaces
│   ├── project.model.ts  # Project interface
│   └── task.model.ts     # Task interface
├── services/
│   ├── storage.service.ts   # Wrapper over Capacitor Preferences
│   └── feedback.service.ts  # Wrapper over Haptics + Toast
├── hooks/
│   └── useTasks.ts       # Task logic (CRUD + persistence)
├── components/
│   ├── ProjectCard.tsx
│   ├── SkillChip.tsx
│   └── TaskItem.tsx
├── pages/
│   ├── AboutPage.tsx
│   ├── ProjectsPage.tsx
│   ├── ProjectDetailPage.tsx
│   └── TasksPage.tsx
└── App.tsx               # IonTabs + routing
```

### Design principles

- **Separation of concerns:** the UI (pages/components) never touches storage
  directly; it goes through services. The task logic lives in a reusable custom
  hook that can be tested in isolation.
- **Strong typing:** all data modeled with TypeScript interfaces.
- **Data as configuration:** personal info and projects live in `src/data/`,
  easy to edit without touching components.
- **Comments** in English explaining the why, in JSDoc style.

## Data flow (Tasks)

1. `useTasks` loads tasks from `storage.service` on mount.
2. Actions (add/toggle/delete) update React state and persist via
   `storage.service`.
3. Each action triggers native feedback (`feedback.service`: haptics + toast).

## Error handling

- `storage.service` wraps Preferences calls in try/catch and degrades to an
  empty state if reading fails (the app never breaks because of storage).
- `feedback.service` is best-effort: if haptics/toast are unavailable (e.g. in
  the browser), it does not throw.

## Testing / Verification

- Production build (`npm run build`) as the minimum check that it compiles.
- Native platforms added with `npx cap add android` / `npx cap add ios`.

## Ownership

- Git repository initialized with the author's identity
  (Cristhian Pereira / crispervasjob@gmail.com / GitHub: crispervas).
- No third-party co-authorship. All the code belongs to the author.

## Out of scope (YAGNI)

- Own backend or external API.
- Authentication.
- Dark mode toggle, Share plugin (discarded during brainstorming).
