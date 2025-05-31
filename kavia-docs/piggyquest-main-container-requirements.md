# PiggyQuest Main Container – Requirements and Architecture Documentation

## 1. Overview

PiggyQuest (PiggyWise) is designed as a playful, smart digital piggy bank app aimed at children, teens, and their families. The main container is a React web application that delivers a gamified savings experience through unique piggy avatars, interactive goals, financial education, and family parental controls. This document summarizes the user stories, product features, architectural requirements, design guidelines, dependencies, testing, code quality, security, and compliance requirements inferred from the codebase and provided specifications.

---

## 2. Product and Feature Requirements

### 2.1. User Stories

- **Children/Teens:** Can create one or more savings goals using customizable piggy avatars, view progress, play savings-related mini-games, and learn financial concepts through interactive learning modules.
- **Parents:** Can monitor progress, manage chores and allowances, approve or reject goal-related transactions, and oversee multiple child accounts.
- **Families:** Can work together on group savings goals, send/receive gifts for savings, and interact via secure, family-friendly interfaces.

### 2.2. Functional Requirements

- **Home Dashboard:** Display multiple piggy/avatar savings jars, each showing name, progress bar, amount saved, goal amount; show total balance; enable adding new goals.
- **Goal Setup:** Support input for goal name, target amount, deadline, jar/avatar selection; allow toggling features like auto-save and priority.
- **Gamification:** Offer rewards (badges, piggy evolutions), mini-games (spin wheel, coin drop), and daily/weekly challenges to encourage savings habits.
- **Parent Dashboard:** Provide views on children’s accounts, chore/allowance management, and approval workflows for withdrawals/goals.
- **Learning Center:** Deliver educational lessons, quizzes, videos, and animated guidance tailored by age.
- **Savings Report:** Present visual graphs of savings trends, AI-based tips, streak counters, and milestones.
- **Security & Sharing:** Implement Face ID/PIN authentication, goal/jar locking, support for gift links and QR-based contributions, and group/family goal management.

### 2.3. Non-Functional Requirements

- Lightweight, fast-loading UI with minimal dependencies.
- Responsive, accessible design, optimized for both desktop and mobile browsers.
- Friendly cartoon and brand-driven visual style, easily modifiable.
- High code maintainability and simplicity for future expansion.

---

## 3. Architectural and Design Requirements

### 3.1. Technical Architecture

- The main container is a **React 18+** JavaScript (ES6+) application.
- Uses functional components and modular CSS, relies primarily on vanilla React (no heavy UI frameworks).
- Application entry is in `src/index.js`, rendering the `<App />` component from `src/App.js`.
- Navigation and UI blocks (navbar, hero unit, action buttons) are implemented with accessible HTML and custom styles.

### 3.2. Theme and Brand Guidelines

- **Brand Colors:** Primary teal (`#1DE9B6`), secondary coral (`#FF6F61`), accent yellow (`#FFD600`), and purple (`#8E24AA`), as adapted for digital context using CSS variables (see `App.css`).
- **Typography and Layout:** Sans-serif font, large headers, rounded buttons, and playful avatars/icons. Shadows and vibrant backgrounds create a cartoon-like atmosphere.
- **Component Styling:** Components such as `btn`, `container`, `navbar`, `title`, `subtitle`, and `description` are defined in `src/App.css` according to brand and accessibility needs. No third-party UI frameworks are used.
- **Dark Theme:** The UI uses a dark background with high-contrast, accessible font colors, as defined in CSS.

### 3.3. Dependencies

- **React**: For UI and component management.
- **react-dom**, **react-scripts**: For DOM rendering and lifecycle.
- **Jest DOM** & **@testing-library/jest-dom**: For extending test matchers in the `setupTests.js` file.
- **ESLint (eslint.config.mjs)**: For code linting, with custom rules and React plugin support.

---

## 4. Test Coverage and Quality Assurance

### 4.1. Test Setup

- **Testing Environment:** Outlined in `src/setupTests.js`, which adds custom Jest matchers (e.g., for DOM assertions like `toHaveTextContent`).
- **Testable Components:** All React components are designed to be testable via the React Testing Library and Jest.
- **Scripts:** `"test"` script in `package.json` runs all tests interactively; `"build"` script creates an optimized production bundle.

### 4.2. Code Quality

- **ESLint Configuration (eslint.config.mjs):** Enforces modern JavaScript and React best practices, checks for unused variables (ignoring `React`, `App`), and applies recommended settings.
- **Simplicity:** Adherence to simple, understandable code structure, separation of CSS, and use of only key React patterns.

---

## 5. Security and Compliance

### 5.1. Security Controls

- **Protected Interactions:** (Planned/Required) Features such as Face ID/PIN, parental approvals, and secure goal/jar locks are to be implemented to ensure access control and safety for children/family users.
- **Input/Output Validation:** UI follows HTML5 validation; all data entries (goal setup, account info) must be sanitized and checked.
- **Dependency Management:** All dependencies (see `package.json`) are current, widely used, and do not introduce known security vulnerabilities.
- **Configurable Build:** The app does not expose sensitive information and relies on the default security mechanisms of Create React App.

### 5.2. Data Privacy and Compliance

- **Privacy-First Design:** No personal information is persisted locally in the template; future extensions must comply with COPPA (for children), GDPR (for EU users), and best practices for family/children's apps.
- **Accessibility:** Visuals and colors are chosen for high contrast and readability for diverse user groups.

---

## 6. Readiness for Visual Verification and Testing

- All main pages and components are organized to support automated UI testing, with clear separation of UI logic and styles (supporting Jest/React Testing Library).
- `npm start` launches a predictable demo/development build for manual or automated visual verification.
- Templates and styles are easily adapted for new UI tests or theming requirements.

---

## 7. References

- **User Interface Implementation:** `src/App.js`, `src/App.css`
- **Testing Setup:** `src/setupTests.js`
- **App Bootstrap:** `src/index.js`
- **Dependencies/Dev Scripts:** `package.json`
- **Linting/Code Quality:** `eslint.config.mjs`
- **Customization and Theming:** See project README and brand guidelines in `App.css`

---

## 8. Future Requirements and Extensibility

This document covers features, architecture, and best practices present in the initial PiggyQuest main container. As the app grows (additional features, deeper parental controls, learning modules, richer avatars/gamification, external integrations), all extension efforts must:
- Adhere to accessibility and privacy guidelines outlined above.
- Remain compatible with React and the lightweight architecture.
- Pass all linting and testing requirements.
- Be subject to continuous security reviews and code audits.

---

_Last updated: [Automatic, based on codebase at generation time]_
