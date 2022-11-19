import React, { useState} from 'react';
import { useWindowSize } from '../../hooks/use-window-size';
import { Link } from 'react-router-dom';
import { breakpointWidth } from '../../constants/constants';
import Logo from '../logo/logo';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-icon.svg';
import './sidebar.scss';
import cn from 'classnames';

function Sidebar({sidebarMainData, sidebarMobileData}) {
  const [opened, setOpened] = useState(null);
  const [selected, setSelected] = useState('Home');
  const [width, ] = useWindowSize();

  const sidebarAppNav = sidebarMainData.slice(0, sidebarMainData.length - 3);
  const sidebarUserNav = sidebarMainData.slice(-3);

  function handleOpenSection(index) {
    if (opened === index) {
      return setOpened(null);
    }

    return setOpened(index);
  };  

  function handleSelectSection(label) {
    return selected !== label && setSelected(label);
  };

  return (
    <nav className='sidebar'>
      <Logo />

      { width >= breakpointWidth.tablet && (
        <>
          <ul className='sidebar__list sidebar__list--grow'>
            {sidebarAppNav.map(({ icon, label, to}, index) => (
              <li
                className={cn('sidebar__item', {'sidebar__item--opened': opened === index, 'sidebar__item--selected' : selected === label})}
                key={label}
              >
                <div className='sidebar__item-inner'>
                  <Link
                    className='sidebar__link'
                    to={to}
                    onClick={() => handleSelectSection(label)}
                  >
                    <span className='sidebar__icon'>{icon}</span>
                    <span className='sidebar__label'>{label}</span>
                  </Link>
                  
                  <button
                    className='sidebar__button'
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
            {sidebarUserNav.map(({ icon, label, to }) => (
              <li
              className={cn('sidebar__item', {'sidebar__item--selected' : selected === label})}
                key={label}>
                <div className='sidebar__item-inner'>
                  <Link
                    className='sidebar__link'
                    to={to}
                    onClick={() => handleSelectSection(label)}
                  >
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
            <li              
              className={cn('sidebar__item', {'sidebar__item--selected' : selected === label})}
              key={label}
            >
              <div className='sidebar__item-inner'>
                <Link className='sidebar__link' to={to} onClick={() => handleSelectSection(label)}>
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
