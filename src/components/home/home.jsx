import React from 'react';
import '../../global-styles/_base.scss';
import './home.scss';
import Overview from '../overview/overview';
import Experts from '../experts/experts';
import Income from '../income/income';
import PopularList from '../popular-list/popular-list';
import Comments from '../comments/comments';

function Home({incomes, products, experts}) {
  return (
    <>
      <div className='home__title'>
        <h2>Dashboard</h2> 
      </div>

      <div className='home__layout'>
        <div className='home__block home__block--grid-aria-1'>
          <Overview />
          <Experts experts={experts}/>
        </div>

        <div className='home__block home__block--grid-aria-2'>
          <Income incomes={incomes}/>         
        </div>

        <div className='home__block home__block--grid-aria-3'>
          <PopularList products={products}/>
        </div>

        <div className='home__block home__block--grid-aria-4'>
          <Comments />
        </div>
      </div> 
    </>
  )
}

export default Home;
