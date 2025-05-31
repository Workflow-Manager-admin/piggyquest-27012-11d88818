import React from 'react';
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
   * Playful and accessible BottomNav for core navigation.
   * Uses emoji as cartoon icons for each section.
   */
  return (
    <nav className="bottomnav" role="navigation" aria-label="Primary Navigation">
      <ul className="bottomnav-list">
        {navItems.map(item => (
          <li key={item.to} className="bottomnav-item">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'bottomnav-link active'
                  : 'bottomnav-link'
              }
              aria-label={item.label}
              tabIndex={0}
              end={item.to === '/dashboard'}
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
