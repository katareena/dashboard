import React from 'react';
import Header from '../../components/header/header';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default HomePage;
