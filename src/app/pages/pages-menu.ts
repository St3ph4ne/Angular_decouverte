import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'TEST',
    group: true
  }
  ,
  {
    title: 'Sandboxes',
    icon: 'cube-outline',
    home: true,
    children: [
      {
        title: 'sandbox',

        link: '/app/bases/sandbox'
      },
      {
        title: 'alternative',
        link: '/app/bases/sandbox-alt'
      },
    ]
  },
  {
    title: 'APPLICATION',
    group: true,
  },
];
