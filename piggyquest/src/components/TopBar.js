import React from 'react';
import './TopBar.css';

// PUBLIC_INTERFACE
function TopBar() {
  /**
   * Visually playful, accessible TopBar for PiggyQuest branding.
   * Logo is clickable and returns to home. Uses cartoon brand colors.
   */
  return (
    <header className="topbar" role="banner">
      <div className="topbar-content" tabIndex={0}>
        <a href="/dashboard" className="topbar-logo-link" aria-label="Go to Home">
          <span className="topbar-logo-symbol" role="img" aria-label="Piggy">🐷</span>
          <span className="topbar-logo-text">PiggyQuest</span>
        </a>
      </div>
    </header>
  );
}

export default TopBar;
