import React from 'react';
import './header.scss';
import SearchForm from '../search-form/search-form';
import UserNav from '../user-nav/user-nav';


function Header () {
  return (
    <header className='header'>
      <div className='header__wrap'>
        <SearchForm />
        <UserNav />
      </div>
    </header>
  )
}

export default Header;