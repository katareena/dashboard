import { AppRoute } from '../constants/constants';
import { ReactComponent as HomeIcon } from '../assets/icons/home-icon.svg';
import { ReactComponent as ProductsIcon } from '../assets/icons/products-icon.svg';
import { ReactComponent as CustomersIcon } from '../assets/icons/customers-icon.svg';
import { ReactComponent as ShopIcon } from '../assets/icons/shop-icon.svg';
import { ReactComponent as IncomeIcon } from '../assets/icons/income-icon.svg';
import { ReactComponent as PromotesIcon } from '../assets/icons/promotes-icon.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings-icon.svg';
import { ReactComponent as HelpdeskIcon } from '../assets/icons/helpdesk-icon.svg';
import { ReactComponent as LogoutIcon } from '../assets/icons/logout-icon.svg';

export const sidebarMainData = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    to: AppRoute.Root,
    button: true,
  },
  {
    label: 'Product',
    icon: <ProductsIcon />,
    to: AppRoute.Products,
    button: true,
  },
  {
    label: 'Customers',
    icon: <CustomersIcon />,
    to: '/customers',
    button: true,
  },
  {
    label: 'Shop',
    icon: <ShopIcon />,
    to: '/shop',
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

export const sidebarUserData = [
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    to: '/settings',
  },
  {
    label: 'Help & Getting Started',
    icon: <HelpdeskIcon />,
    to: '/helpdesk',
  },
  {
    label: 'Log Out',
    icon: <LogoutIcon />,
    to: '/',
  },
];

export const sidebarMobileData = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    to: AppRoute.Root,
  },
  {
    label: 'Products',
    icon: <ProductsIcon />,
    to: AppRoute.Products,
  },

  {
    label: 'Help Desk',
    icon: <HelpdeskIcon />,
    to: '/helpdesk',
  },
  {
    label: 'Other',
    icon: <CustomersIcon />,
    to: '/other',
  },
];