import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'pension',
    loadChildren: () => import('pension/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'mortgage',
    loadChildren: () => import('mortgage/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'investment',
    loadChildren: () => import('investment/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'payment',
    loadChildren: () => import('payment/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'account',
    loadChildren: () => import('account/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
