import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
 // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   icon: 'icon-speedometer',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    title: true,
    name: 'Customer',
    icon: 'icon-user'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Underwriting',
    url: '/customer/underwriting',
    icon: 'icon-pencil'
  },
  
  // {
  //   name: 'Search',
  //   url: '/customer/search',
  //   icon: 'icon-pencil'
   //}
];
