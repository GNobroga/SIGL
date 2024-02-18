import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import AccountComponent from './pages/account/account.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account',
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/account/login-form/login-form.component'),
      }
    ]
  },
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component'),
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component'),
      },
    ],
  },
];
