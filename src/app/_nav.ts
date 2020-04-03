import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Customer'
  },
  {
    name: 'Add',
    url: '/customer/add',
    icon: 'icon-drop',
    attributes: { disabled: true },
  },
  {
    name: 'Search',
    url: '/customer/search',
    icon: 'icon-pencil'
  }
];
