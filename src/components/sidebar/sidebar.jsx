import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import logo from '../../assets/logo.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg';
import { ReactComponent as ProductsIcon } from '../../assets/icons/products-icon.svg';
import { ReactComponent as CustomersIcon } from '../../assets/icons/customers-icon.svg';
import { ReactComponent as ShopIcon } from '../../assets/icons/shop-icon.svg';
import { ReactComponent as IncomeIcon } from '../../assets/icons/income-icon.svg';
import { ReactComponent as PromotesIcon } from '../../assets/icons/promotes-icon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings-icon.svg';
import { ReactComponent as HelpdeskIcon } from '../../assets/icons/helpdesk-icon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout-icon.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-icon.svg';
import './sidebar.scss';
import cn from 'classnames';


function Sidebar() {
  const [selected, setSelected] = useState(null);

  function openSectionHandler(index) {
    console.log('open Section');
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <nav className='sidebar'>
      <div className='sidebar__logo'>
        <Link className='sidebar__logo-link' to={AppRoute.Root}>
          <img src={logo} width='136' height='35' alt='Dashboard app Logo' />
        </Link>
      </div>

      <ul className='sidebar__list sidebar__list--grow'>
        {linksArray.map(({ icon, label, to}, index) => (
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
                onClick={() => openSectionHandler(index)}
              >
                <ArrowIcon />
              </button>
            </div>        

            <div className='sidebar__item-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta aperiam voluptates sapiente distinctio rem eius. Dolorum accusamus reprehenderit aliquid doloribus soluta, maxime sunt, optio, minima ea aspernatur quos. Nisi sit autem quae quia iusto totam velit dolores voluptatibus vero!</div>
          </li>
        ))}
      </ul> 

      <ul className='sidebar__list sidebar__list--decor'>
        {secondaryLinksArray.map(({ icon, label, to }) => (
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

    </nav>
  )
}

const linksArray = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    to: '/',
    button: true,
  },
  {
    label: 'Product',
    icon: <ProductsIcon />,
    to: '/product',
    button: true,
  },
  {
    label: 'Customers',
    icon: <CustomersIcon />,
    to: '/customers',
    button: true,
  },
  {
    label: 'Shops',
    icon: <ShopIcon />,
    to: '/shops',
    button: true,
  },
  {
    label: 'Income',
    icon: <IncomeIcon />,
    to: '/income',
    button: true,
  },
  {
    label: 'Promotes',
    icon: <PromotesIcon />,
    to: '/promotes',
    button: true,
  },
];

const secondaryLinksArray = [
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    to: '/settings',
    button: false,
  },
  {
    label: 'Help & Getting Started',
    icon: <HelpdeskIcon />,
    to: '/helpdesk',
    button: false,
  },
  {
    label: 'Log Out',
    icon: <LogoutIcon />,
    to: '/',
    button: false,
  },
];

export default Sidebar;
