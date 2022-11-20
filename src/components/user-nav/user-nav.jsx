import React from 'react';
import { useWindowSize } from '../../hooks/use-window-size';
import { Link } from 'react-router-dom';
import './user-nav.scss';
import { ReactComponent as NotificationsIcon } from '../../assets/icons/notifications-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit-icon.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-icon.svg';
import cn from 'classnames';
import { BreakpointWidth } from '../../constants/constants';

function UserNav({user, notifications}) {
  const isNotifications = notifications.length !== 0;
  const [width, ] = useWindowSize();

  return (
    <ul className='user-nav'>

      { width >= BreakpointWidth.mobile && (
        <>
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
        </>
      )}



      <li className='user-nav__item user-nav__item--avatar'>
        <Link className='user-nav__link user-nav__link--avatar' to='/profile' aria-label='go to your personal profile'>
          <img
            className='user-nav__avatar'
            src={user.avatar}
            alt={user.name}
            width='54'
            height='54'
            aria-label={`avatar of ${user.name}`}
          >
          </img>

          {width < BreakpointWidth.mobile && (
            <>
              <span className='user-nav__avatar-name'>{user.name}</span>
              <span className='user-nav__avatar-icon'><ArrowIcon /></span>
            </>
          )}



        </Link>





      </li>
    </ul>
  )
}

export default UserNav;
