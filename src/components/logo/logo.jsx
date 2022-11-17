import React from 'react';
import './logo.scss';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import logo from '../../assets/logo.svg';

function Logo() {
  return (
    <div className='logo'>
      <Link className='logo__link' to={AppRoute.Root}>
        <img src={logo} width='136' height='35' alt='Dashboard app Logo' />
      </Link>
    </div>
  )
}

export default Logo;
