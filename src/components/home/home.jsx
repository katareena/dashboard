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
          <Income incomes={incomes}/>         
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

const incomes = [
  {
    value: 0.30,
    month: 'Jan',
  },
  {
    value: 0.45,
    month: 'Feb',
  },
  {
    value: 0.40,
    month: 'Mar',
  },
  {
    value: 0.20,
    month: 'Apr',
  },
  {
    value: 1.00,
    month: 'May',
  },
  {
    value: 0.25,
    month: 'Jun',
  },
  {
    value: 0.20,
    month: 'Jul',
  },
  {
    value: 0.70,
    month: 'Aug',
  },
  {
    value: 0.35,
    month: 'Sep',
  },
  {
    value: 0.20,
    month: 'Nov',
  },
  {
    value: 0.20,
    month: 'Dec',
  },
  {
    value: 0.20,
    month: 'Jan',
  },
];

export default Home;
