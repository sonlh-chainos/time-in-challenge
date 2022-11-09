import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
      <NavLink
        to={'/'}
        className={`nav-item ${location.pathname === '/' ? 'active-nav' : ''}`}
      >
        Ranking
      </NavLink>
      <NavLink
        to={'/statistics'}
        className={`nav-item ${
          location.pathname === '/statistics' ? 'active-nav' : ''
        }`}
      >
        Statistics
      </NavLink>
    </div>
  );
};

export default Navbar;
