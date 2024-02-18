import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
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
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/dashboard/home/home.component'),
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/dashboard/users/users.component'),
      },
    ],
  },
];
