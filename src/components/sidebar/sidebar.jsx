import React, { useState} from 'react';
import { useWindowSize } from '../../hooks/use-window-size';
import { Link } from 'react-router-dom';
import { breakpointWidth } from '../../constants/constants';
import Logo from '../logo/logo';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-icon.svg';
import './sidebar.scss';
import cn from 'classnames';

function Sidebar({sidebarMainData, sidebarUserData, sidebarMobileData}) {
  const [selected, setSelected] = useState(null);
  const [width, ] = useWindowSize();

  function handleOpenSection(index) {
    console.log('toggle Section');
    
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <nav className='sidebar'>
      <Logo />

      { width >= breakpointWidth.tablet && (
        <>
          <ul className='sidebar__list sidebar__list--grow'>
            {sidebarMainData.map(({ icon, label, to}, index) => (
              <li
                className={cn('sidebar__item', {'sidebar__item--open': selected === index})}
                key={label}
              >
                <div className='sidebar__item-inner'>
                  <Link className='sidebar__link' to={to}>
                    <span className='sidebar__icon'>{icon}</span>
                    <span className='sidebar__label'>{label}</span>
                  </Link>
                  
                  <button
                    className={cn('sidebar__button', {'sidebar__button--open': selected === index})}
                    type='button'
                    aria-label={`open a section ${label}`}
                    onClick={() => handleOpenSection(index)}
                  >
                    <ArrowIcon />
                  </button>
                </div>        
    
                <ul className='sidebar__item-content'>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
              </li>
            ))}
          </ul> 
    
          <ul className='sidebar__list sidebar__list--decor sidebar__list--user'>
            {sidebarUserData.map(({ icon, label, to }) => (
              <li className='sidebar__item' key={label}>
                <div className='sidebar__item-inner'>
                  <Link className='sidebar__link' to={to}>
                    <span className='sidebar__icon'>{icon}</span>
                    <span className='sidebar__label'>{label}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      { width < breakpointWidth.tablet && (
        <ul className='sidebar__list sidebar__list--mobile'>
          {sidebarMobileData.map(({ icon, label, to }) => (
            <li className='sidebar__item' key={label}>
              <div className='sidebar__item-inner'>
                <Link className='sidebar__link' to={to}>
                  <span className='sidebar__icon'>{icon}</span>
                  <span className='sidebar__label'>{label}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}

    </nav>
  )
}

export default Sidebar;
