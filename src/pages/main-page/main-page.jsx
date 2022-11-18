import React from 'react';
import './main-page.scss';
import { use100vh } from 'react-div-100vh'
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

function MainPage() {
  const height = use100vh();
  const contetntHeight = height - '60px';

  return (
    <div className='main-page' style={{contetntHeight}}>
      <Sidebar></Sidebar>
      
      <div className='main-page__inner'>
        <Header />

        <main className='main-page__main'>
          <Outlet />
        </main>       
      </div>
    </div>
  )
}

export default MainPage;
