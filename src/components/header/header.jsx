import React from 'react';
import './header.scss';
import SearchForm from '../search-form/search-form';


function Header () {
  return (
    <header className='header'>
      <SearchForm />
      
    </header>
  )
}

export default Header;