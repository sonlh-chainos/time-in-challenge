import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Layout = () => {
  const location = useLocation();
  return (
    <div
      className={
        location.pathname === '/' ? 'background-main-pc' : 'background-other'
      }
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
