import React from 'react';
import './main-page.scss';
import Div100vh from 'react-div-100vh';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

function MainPage() {
  return (
    <Div100vh>
      <div className='main-page'>
        <Sidebar></Sidebar>
        
        <div className='main-page__inner'>
          <Header />

          <main className='main-page__main'>
            <Outlet />
          </main>       
        </div>
      </div>
    </Div100vh>
  )
}

export default MainPage;
