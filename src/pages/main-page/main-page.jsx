import React from 'react';
import './main-page.scss';
// import { use100vh } from 'react-div-100vh';
import { useWindowSize } from '../../hooks/use-window-size';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

function MainPage() {
  const [ , height] = useWindowSize();
  // const height = use100vh();
  // const contetntHeight = width < 576 ? height - '60' : height;

  return (
    <div className='main-page' style={{height: height}}>
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
