import React from 'react';
import './product.scss';

function Product({title, icon, discription, price}) {
  return (
    <li className='product' key={title}>
      <div className='product__pic'>
        <img src={icon} alt='product' />
      </div>
      <div className='product__box'>
        <span className='product__title'>{title}</span>
        <span className='product__discription'>{discription}</span>
      </div>
      <div className='product__price'>{price}</div>
    </li>
  )
}

export default Product;