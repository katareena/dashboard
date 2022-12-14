import React from 'react';
import './main-page.scss';
import { useWindowSize } from '../../hooks/use-window-size';
import { Outlet } from 'react-router-dom';
import { BreakpointWidth, sidebarMobileHeight } from '../../constants/constants';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';

function MainPage({sidebarMainData, sidebarMobileData, user, notifications}) {
  const [width, height] = useWindowSize();
  const contetntHeight = width < BreakpointWidth.tablet && height - sidebarMobileHeight;

  return (
    <div className='main-page' style={{height: height}}>
      <Sidebar
        sidebarMainData={sidebarMainData}
        sidebarMobileData={sidebarMobileData}
      />
      
      <div className='main-page__inner' style={{height: contetntHeight}}>
        <Header
          user={user}
          notifications={notifications}
        />

        <main className='main-page__main'>
          <h1 className='visually-hidden'>Dashboard: an application for organizing your money routine</h1> 
          
          <div className='main-page__wrap'>
            <Outlet />
          </div>          
        </main>       
      </div>
    </div>
  )
}

export default MainPage;
