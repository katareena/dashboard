import React from 'react';
import './popular-list.scss';
import { Link } from 'react-router-dom';
import Popular from '../popular/popular';
import Subtitle from '../subtitle/subtitle';
import { ReactComponent as LinkIcon } from '../../assets/icons/arrow-link-icon.svg';

function PopularList({products}) {
  return (
    <>
      <Subtitle>
        <h3>Popular Products</h3>
      </Subtitle>      

      <ul className='popular-list__list'>
        {products.map(({ title, icon, description, price }) => (
          <Popular
            title={title}
            icon={icon}
            description={description}
            price={price}
            key={title}
          />              
        ))}
      </ul>

      <Link className='popular-list__link' to={'/all-products'}>
        <span className='popular-list__link-text'>All Products</span>
        <span className='popular-list__link-icon'>
          <LinkIcon />
        </span>           
      </Link>
    </>
  )
}

export default PopularList;
