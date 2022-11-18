import React from 'react';
import './product-list.scss';
import { Link } from 'react-router-dom';
import Product from '../product/product';
import Subtitle from '../subtitle/subtitle';
import { ReactComponent as LinkIcon } from '../../assets/icons/arrow-link-icon.svg';

function ProductList({products}) {
  return (
    <>
      <Subtitle>
        <h3>Popular Products</h3>
      </Subtitle>      

      <ul className='product-list__list'>
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

      <Link className='product-list__link' to='/all-products'>
        <span className='product-list__link-text'>All Products</span>
        <span className='product-list__link-icon'>
          <LinkIcon />
        </span>           
      </Link>
    </>
  )
}

export default ProductList;
