import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      expanded: true,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Shopping Bag',
      icon: 'person-outline',
      children: [
        {
          title: 'First Product',
        },
        {
          title: 'Second Product',
        },
        {
          title: 'Third Product',
        },
      ],
    },
    {
      title: 'Orders',
      icon: 'person-outline',
      children: [
        {
          title: 'Orders Sub',
          children: [
            {
              title: 'Orders 1',
            },
            {
              title: 'Orders 2',
            },
            {
              title: 'Orders 3',
            },
          ],
        },
        {
          title: 'Second Order',
        },
        {
          title: 'Third Order',
        },
      ],
    },
    {
      title: 'Logout',
      icon: 'log-out-outline',
      link: '/auth/login'
    }
  ];
