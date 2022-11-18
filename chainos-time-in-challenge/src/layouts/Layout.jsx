import useScreenSize from 'components/common/useSCreenSize';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Layout = () => {
  const location = useLocation();
  const screenSize = useScreenSize();
  return (
    <div
      className={
        (location.pathname !== '/' || screenSize < 1350)  ? 'background-other' : 'background-main-pc'
      }
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
