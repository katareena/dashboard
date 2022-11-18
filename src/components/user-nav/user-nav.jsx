import React from 'react';
import { Link } from 'react-router-dom';
import './user-nav.scss';
import { ReactComponent as NotificationsIcon } from '../../assets/icons/notifications-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit-icon.svg';
import cn from 'classnames';

function UserNav({user, notifications}) {
  const isNotifications = notifications.length !== 0;

  return (
    <ul className='user-nav'>
      <li className={cn('user-nav__item', {'user-nav__item--notifications': isNotifications})}>
        <Link className='user-nav__link' to='/profile/notification' aria-label='view notifications'>
          <NotificationsIcon />
        </Link>
      </li>
      <li className='user-nav__item'>
        <Link className='user-nav__link' to='/profile/edit' aria-label='edit your personal profile'>
          <EditIcon />
        </Link>
      </li>
      <li className='user-nav__item user-nav__item--avatar'>
        <Link className='user-nav__link' to='/profile' aria-label='go to your personal profile'>
          <img
            className='user-nav__avatar'
            src={user.avatar}
            alt={user.name}
            width='54'
            height='54'
            aria-label={`avatar of ${user.name}`}
          >
          </img>
        </Link>
      </li>
    </ul>
  )
}

export default UserNav;
