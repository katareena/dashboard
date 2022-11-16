import React from 'react';
import { Link } from 'react-router-dom';
import './user-nav.scss';
import { ReactComponent as NotificationsIcon } from '../../assets/icons/notifications-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit-icon.svg';
import userAvatar from '../../assets/user-avatar.png';
import cn from 'classnames';
import { AuthorizationStatus } from '../../constants/constants';


function UserNav() {
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
            src={userData.avatar}
            alt={userData.name}
            width='54'
            height='54'
            aria-label={`avatar of ${userData.name}`}
          >
          </img>
        </Link>
      </li>
    </ul>
  )
}

const userData = {
  name: 'John',
  email: 'example@gmail.com',
  authStatus: AuthorizationStatus.Auth,
  avatar: userAvatar,
}

const notifications = ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'Lorem, ipsum dolor.']

export default UserNav;
