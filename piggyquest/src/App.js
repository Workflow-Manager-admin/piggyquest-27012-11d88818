import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import './App.css';

// PUBLIC_INTERFACE
function HomeDashboard() {
  /** Home Dashboard screen stub. */
  return (
    <div className="hero">
      <div className="subtitle">Home Dashboard</div>
      <h1 className="title">Piggy Avatars & Savings Jars</h1>
      <div className="description">
        View all your piggybank goals and overall balance. (Coming soon)
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function GoalSetup() {
  /** Goal Setup screen stub. */
  return (
    <div className="hero">
      <div className="subtitle">Goal Setup</div>
      <h1 className="title">Create or Edit Savings Goal</h1>
      <div className="description">Set goal details, target amount, and pick your piggy! (Coming soon)</div>
    </div>
  );
}

// PUBLIC_INTERFACE
function Gamification() {
  /** Gamification screen stub. */
  return (
    <div className="hero">
      <div className="subtitle">Gamification</div>
      <h1 className="title">Piggy Rewards & Games</h1>
      <div className="description">Badges, challenges, and mini-games to boost saving fun. (Coming soon)</div>
    </div>
  );
}

// PUBLIC_INTERFACE
function ParentDashboard() {
  /** Parent Dashboard screen stub. */
  return (
    <div className="hero">
      <div className="subtitle">Parent Dashboard</div>
      <h1 className="title">Parental Controls & Allowance</h1>
      <div className="description">See child accounts, chores, approvals, and more. (Coming soon)</div>
    </div>
  );
}

// PUBLIC_INTERFACE
function LearningCenter() {
  /** Learning Center screen stub. */
  return (
    <div className="hero">
      <div className="subtitle">Learning Center</div>
      <h1 className="title">Financial Education</h1>
      <div className="description">Lessons, quizzes, and videos for all ages. (Coming soon)</div>
    </div>
  );
}

// PUBLIC_INTERFACE
function SavingsReport() {
  /** Savings Report screen stub. */
  return (
    <div className="hero">
      <div className="subtitle">Savings Report</div>
      <h1 className="title">Savings Progress & Insights</h1>
      <div className="description">Trends, milestones, and AI-powered tips. (Coming soon)</div>
    </div>
  );
}

// PUBLIC_INTERFACE
function SecuritySharing() {
  /** Security & Sharing screen stub. */
  return (
    <div className="hero">
      <div className="subtitle">Security & Sharing</div>
      <h1 className="title">Protect & Share</h1>
      <div className="description">
        Parental approvals, goal/jar locks, gift links and group goal options. (Coming soon)
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function NotFound() {
  /** Fallback screen for undefined routes. */
  return (
    <div className="hero">
      <div className="subtitle">404 Not Found</div>
      <h1 className="title">Oops! Page Not Found</h1>
      <div className="description">The page you are looking for does not exist.</div>
    </div>
  );
}

// Main navigation links for all key features
const navLinks = [
  { to: '/dashboard', label: 'Home' },
  { to: '/goal-setup', label: 'Goal Setup' },
  { to: '/gamification', label: 'Games' },
  { to: '/parent-dashboard', label: 'Parent' },
  { to: '/learning-center', label: 'Learn' },
  { to: '/savings-report', label: 'Report' },
  { to: '/security-sharing', label: 'Security' },
];

// PUBLIC_INTERFACE
function App() {
  /** Main container with navigation and feature routes. */
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol" role="img" aria-label="Piggy">🐷</span>
              <span style={{ marginLeft: 4, fontWeight: 600 }}>PiggyQuest</span>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? 'btn btn-large' : 'btn'
                  }
                  end={link.to === '/dashboard'}
                  style={{ textDecoration: 'none', marginLeft: 4 }}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
        <main style={{ marginTop: 96 }}>
          <div className="container">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<HomeDashboard />} />
              <Route path="/goal-setup" element={<GoalSetup />} />
              <Route path="/gamification" element={<Gamification />} />
              <Route path="/parent-dashboard" element={<ParentDashboard />} />
              <Route path="/learning-center" element={<LearningCenter />} />
              <Route path="/savings-report" element={<SavingsReport />} />
              <Route path="/security-sharing" element={<SecuritySharing />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;