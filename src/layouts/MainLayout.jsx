import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
