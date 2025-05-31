import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

// Icon SVG paths or emoji for navigation (no external icons for lightweight build)
const navItems = [
  {
    label: 'Home',
    to: '/dashboard',
    icon: (
      <span role="img" aria-label="Home" className="bottomnav-icon-emoji">🏠</span>
    ),
  },
  {
    label: 'Games',
    to: '/gamification',
    icon: (
      <span role="img" aria-label="Games" className="bottomnav-icon-emoji">🎮</span>
    ),
  },
  {
    label: 'Learn',
    to: '/learning-center',
    icon: (
      <span role="img" aria-label="Learn" className="bottomnav-icon-emoji">📚</span>
    ),
  },
  {
    label: 'Parent',
    to: '/parent-dashboard',
    icon: (
      <span role="img" aria-label="Parent Dashboard" className="bottomnav-icon-emoji">👨‍👩‍👧‍👦</span>
    ),
  },
];

// PUBLIC_INTERFACE
function BottomNav() {
  /**
   * Accessible BottomNav for core navigation.
   * - Keyboard navigable: arrow keys & tab, roving tab index.
   * - Clear focus ring.
   * - Role and ARIA for list/menu structure.
   */
  // Track refs for nav items for keyboard focus management
  const navRefs = useRef([]);

  // Handle left/right arrow keyboard navigation (roving tab index)
  const handleNavKeyDown = (e, idx) => {
    // Only move on arrow keys (horizontal nav)
    const count = navItems.length;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      let nextIdx;
      if (e.key === 'ArrowRight') {
        nextIdx = (idx + 1) % count;
      } else {
        nextIdx = (idx - 1 + count) % count;
      }
      navRefs.current[nextIdx]?.focus();
    }
  };

  return (
    <nav className="bottomnav" role="navigation" aria-label="Primary">
      <ul className="bottomnav-list" role="menubar">
        {navItems.map((item, idx) => (
          <li key={item.to} className="bottomnav-item" role="none">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'bottomnav-link active'
                  : 'bottomnav-link'
              }
              role="menuitem"
              aria-label={item.label}
              aria-current={undefined}
              tabIndex={0}
              end={item.to === '/dashboard'}
              ref={el => (navRefs.current[idx] = el)}
              onKeyDown={(e) => handleNavKeyDown(e, idx)}
            >
              <div className="bottomnav-icon-wrapper">{item.icon}</div>
              <span className="bottomnav-label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BottomNav;
