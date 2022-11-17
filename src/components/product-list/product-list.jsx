import React from 'react';
import './product-list.scss';
import { Link } from 'react-router-dom';
import Product from '../product/product';
import Subtitle from '../subtitle/subtitle';
import ProductA from '../../assets/product-a.png';
import ProductB from '../../assets/product-b.png';
import ProductC from '../../assets/product-c.png';
import ProductD from '../../assets/product-d.png';
import { ReactComponent as LinkIcon } from '../../assets/icons/arrow-link-icon.svg';

function ProductList() {
  return (
    <>
      <Subtitle>
        <h3>Popular Products</h3>
      </Subtitle>      

      <ul>
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

export default ProductList;
