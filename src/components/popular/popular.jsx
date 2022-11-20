import React from 'react';
import './popular.scss';

function Popular({title, icon, description, price}) {
  return (
    <li className='popular' key={title}>
      <div className='popular__pic'>
        <img src={icon} alt='popular' />
      </div>
      <div className='popular__box'>
        <span className='popular__title'>{title}</span>
        <span className='popular__description'>{description}</span>
      </div>
      <div className='popular__price'>{price}</div>
    </li>
  )
}

export default Popular;
