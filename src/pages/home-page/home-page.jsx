import React from 'react';
import './home-page.scss'
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div className='home-page'>
      <Sidebar></Sidebar>
      
      <div className='home-page__inner'>
        <Header />

        <main className='home-page__main'>
          <Outlet />
        </main>       
      </div>
    </div>

  )
}

export default HomePage;
