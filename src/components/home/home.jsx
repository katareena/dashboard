import React from 'react';
import { Link } from 'react-router-dom';
import '../../global-styles/_base.scss';
import './home.scss';
import Filter from '../filter/filter';
import Income from '../income/income';
import Product from '../product/product';
import Comment from '../comment/comment';
import ProductA from '../../assets/product-a.png';
import ProductB from '../../assets/product-b.png';
import ProductC from '../../assets/product-c.png';
import ProductD from '../../assets/product-d.png';
import expertOne from '../../assets/expert-1.jpg';
import expertTwo from '../../assets/expert-2.jpg';
import expertThree from '../../assets/expert-3.jpg';
import { ReactComponent as LinkIcon } from '../../assets/icons/arrow-link-icon.svg';

function Home() {
  return (
    <>
      <h1 className='visually-hidden'>Dashboard: an application for organizing your money routine</h1>
      
      <div className='home__wrap'>
        <h2 className='home__title'>Dashboard</h2>

        <div className='home__block home__block--grid-aria-2'>
          <section>
            <div className='home__subtitle-box'>
              <h3 className='home__subtitle'>Overview</h3>
              <Filter />
            </div>

            <div className='home__box overview'>
              <div className='overview__box overview__box--left'>
                <div className='overview__description'>
                  <span className='overview__title'>Customers</span>
                  <span className='overview__percents'>8%</span>
                </div>
                <span className='overview__numbers'>17.578</span>
              </div>

              <div className='overview__box overview__box--right'>
                <div className='overview__description'>
                  <span className='overview__title'>Incoms</span>
                  <span className='overview__percents'>3%</span>
                </div>
                <span className='overview__numbers'>$45,737,000</span>
              </div>
            </div>            
          </section>

          <section>
            <div className='home__subtitle-box'>
              <h3 className='home__subtitle'><span>Welcome to our</span> online experts</h3>
            </div>

            <ul className='home__box experts'>
              {experts.map(({ icon, name, experience }, index) => (
                <li className='experts__item' key={`${name}-${index}`}>
                  <img className='experts__img' src={icon} width='70' height='70' alt='Expert' />
                  <div className='experts__box'>
                    <span className='experts__name'>{name}</span>
                    <span className='experts__experience'>{experience} of online experience</span>
                  </div>
                </li>             
              ))}
            </ul>            
          </section>
        </div>

        <section className='home__block home__block--grid-aria-3'>
          <div className='home__subtitle-box'>
            <h3 className='home__subtitle'>Total Income</h3>
            <Filter />
          </div>

          <div className='home__box'>
            <Income />
          </div>          
        </section>

        <section className='home__block home__block--grid-aria-4'>
          <div className='home__subtitle-box'>
            <h3 className='home__subtitle'>Popular Products</h3>
          </div>

          <ul className='home__box'>
            {products.map(({ title, icon, description, price }) => (
              <Product
                title={title}
                icon={icon}
                description={description}
                price={price}
                key={title}
              />              
            ))}
          </ul>

          <Link className='home__product-link' to='/all-products'>
            <span className='home__product-link-text'>All Products</span>
            <span className='home__product-link-icon'>
              <LinkIcon />
            </span>           
          </Link>
        </section>

        <section className='home__block home__block--grid-aria-5'>
          <div className='home__subtitle-box'>
            <h3 className='home__subtitle'>Comments</h3>
          </div>

          <Comment />
        </section>
      </div>
    </>
  )
}

const products = [
  {
    title: 'Product A',
    icon: ProductA,
    description: 'Camera Kits',
    price: '$2772',
  },
  {
    title: 'Product B',
    icon: ProductB,
    description: 'Phone Kits',
    price: '$983',
  },
  {
    title: 'Product C',
    icon: ProductC,
    description: 'UI Kits',
    price: '$3242',
  },
  {
    title: 'Product D',
    icon: ProductD,
    description: 'Plugin Kits',
    price: '$322',
  },
];

const experts = [
  {
    icon: expertOne,
    name: 'Andrew L.',
    experience: '2 years',
  },
  {
    icon: expertTwo,
    name: 'Ray E.',
    experience: '1 year',
  },
  {
    icon: expertThree,
    name: 'Mariam M.',
    experience: '3 years',
  },

];

export default Home;
