import React from 'react';
import './product.scss';
import { Link } from 'react-router-dom';

function Product({product}) {
  return (
    <article className='product'>
      <div className='product__img'>
        <img src={product.cover_img} alt='cover' />
      </div>

      <div className='product__info'>
        <Link to={`/product/${product.id}`} product={product}>
          <div className='product__info-item'>
            <span className='product__title'>{product.title}</span>
          </div>
        </Link>

        <div className='product__info-item'>
          <span className='product__info-label'>Author: </span>
          <span>{product.author ? product.author.join(', ') : 'The Author Is Not Known'}</span>
        </div>

        <div className='product__info-item'>
          <span className='product__info-label'>Total Editions: </span>
          <span>{product.edition_count}</span>
        </div>

        <div className='product__info-item'>
          <span className='product__info-label'>First Publish Year: </span>
          <span>{product.first_publish_year}</span>
        </div>
      </div>
    </article>
  )
}

export default Product;
