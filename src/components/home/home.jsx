import React from 'react';
import '../../global-styles/_base.scss';
import './home.scss';
import Overview from '../overview/overview';
import Experts from '../experts/experts';
import Income from '../income/income';
import ProductList from '../product-list/product-list';
import Comments from '../comments/comments';

function Home() {
  return (
    <>
      <h1 className='visually-hidden'>Dashboard: an application for organizing your money routine</h1>      
      
      <div className='home__wrap'>
        <h2 className='home__title'>Dashboard</h2>    

        <div className='home__block home__block--grid-aria-1'>
          <Overview />
          <Experts />
        </div>

        <div className='home__block home__block--grid-aria-2'>
          <Income />         
        </div>

        <div className='home__block home__block--grid-aria-3'>
          <ProductList />
        </div>

        <div className='home__block home__block--grid-aria-4'>
          <Comments />
        </div>
      </div>
    </>
  )
}

export default Home;
