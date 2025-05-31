import React, { useRef } from 'react';

// PUBLIC_INTERFACE
function TopBar() {
  /**
   * Visually playful, accessible TopBar for PiggyQuest branding.
   * Logo is clickable and returns to home. Uses cartoon brand colors.
   * Accessibility: Wraps logo in nav with proper ARIA and focus handling.
   */
  const logoLinkRef = useRef();

  // Trap keyboard focus to logo only while on TopBar for screen reader/keyboard parity
  // (If more interactive elements ever added, expand focus management)
  const handleKeyDown = (e) => {
    // If Enter or Space pressed, activate the link
    if ((e.key === ' ' || e.key === 'Enter') && logoLinkRef.current) {
      e.preventDefault();
      logoLinkRef.current.click();
    }
  };

  return (
    <header className="topbar" role="banner">
      <nav
        className="topbar-content"
        aria-label="Top Bar"
        tabIndex={-1}
        role="navigation"
      >
        <a
          href="/dashboard"
          className="topbar-logo-link"
          aria-label="Go to Home"
          tabIndex={0}
          ref={logoLinkRef}
          onKeyDown={handleKeyDown}
        >
          <span className="topbar-logo-symbol" role="img" aria-label="Piggy">🐷</span>
          <span className="topbar-logo-text">PiggyQuest</span>
        </a>
      </nav>
    </header>
  );
}

export default TopBar;
