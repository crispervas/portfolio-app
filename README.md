# Mobile Portfolio — Cristhian Pereira

A **cross-platform** mobile app (iOS + Android) built from a single codebase
using **Ionic + React + TypeScript + Capacitor**. It works as a personal
portfolio and includes a functional section (task manager) that demonstrates
real app patterns: state, local persistence and access to native capabilities.

> Author: **Cristhian Pereira** · Senior Software Engineer
> GitHub: [@crispervas](https://github.com/crispervas) ·
> [LinkedIn](https://www.linkedin.com/in/cristhian-javier-pereira-vasquez)

## ✨ Features

- **About** — profile, bio, technologies and contact links.
- **Projects** — list of projects with a detail screen (description and stack).
- **Tasks** — To-Do manager with full CRUD, **local persistence** on the device
  and **native feedback** (haptics + toasts).
- **Automatic dark mode** following the operating system preference.

## 🧱 Tech stack

| Layer            | Technology |
|------------------|------------|
| UI / Framework   | Ionic 8 + React 19 + TypeScript |
| Bundler          | Vite |
| Native           | Capacitor 8 (iOS + Android) |
| Persistence      | `@capacitor/preferences` |
| Native feedback  | `@capacitor/haptics`, `@capacitor/toast` |
| Testing          | Vitest (unit) + Cypress (e2e) |

## 📐 Architecture

The project separates responsibilities into clear layers that can be tested in
isolation:

```
src/
├── data/          # Content as configuration (profile and projects)
├── models/        # TypeScript interfaces (Profile, Project, Task)
├── services/      # Access to device capabilities (storage, feedback)
├── hooks/         # Reusable business logic (useTasks)
├── components/    # Reusable UI components
├── pages/         # Screens (About, Projects, ProjectDetail, Tasks)
└── App.tsx        # Tab navigation + routes
```

**Principles applied:**

- The UI never accesses storage directly: it goes through **services**.
- The task logic lives in a **custom hook** (`useTasks`), independent of the UI
  and easy to test.
- Personal content is centralized in `src/data/`, editable without touching
  components.
- Strong typing with TypeScript and commented code.

## 🚀 Getting started

### Requirements

- Node.js 20+ and npm
- Ionic CLI: `npm install -g @ionic/cli`
- For Android: Android Studio + SDK
- For iOS: macOS + Xcode + CocoaPods

### Install

```bash
npm install
```

### Run in the browser

```bash
npm run dev
# or, with Ionic live reload:
ionic serve
```

### Run on Android

```bash
npm run build          # generates the dist/ folder
npx cap sync android   # copies the build into the native project
npx cap open android   # opens Android Studio to build/run
```

### Run on iOS

```bash
npm run build
npx cap sync ios
npx cap open ios       # opens Xcode to build/run
```

## 🧪 Tests

```bash
npm run test.unit   # unit tests with Vitest
npm run test.e2e    # end-to-end tests with Cypress
npm run lint        # static analysis with ESLint
```

## 🛠️ Customization

To reuse this portfolio you only need to edit two files:

- `src/data/profile.ts` — personal data, skills and contact.
- `src/data/projects.ts` — project list.

## 📄 License

[MIT](./LICENSE) © Cristhian Pereira
