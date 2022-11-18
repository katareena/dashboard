import React from 'react';
import './main-page.scss';
import { useWindowSize } from '../../hooks/use-window-size';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

function MainPage() {
  const [width, height] = useWindowSize();
  const contetntHeight = width < 576 ? height - '65' : height;

  return (
    <div className='main-page' style={{height: height}}>
      <Sidebar></Sidebar>
      
      <div className='main-page__inner' style={{height: contetntHeight}}>
        <Header />

        <main className='main-page__main'>
          <Outlet />
        </main>       
      </div>
    </div>
  )
}

export default MainPage;
