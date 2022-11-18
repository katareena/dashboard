import React from 'react';
import './header.scss';
import SearchForm from '../search-form/search-form';
import UserNav from '../user-nav/user-nav';

function Header({user, notifications}) {
  return (
    <header className='header'>
      <div className='header__wrap'>
        <SearchForm />
        <UserNav 
          user={user}
          notifications={notifications}
        />
      </div>
    </header>
  )
}

export default Header;
