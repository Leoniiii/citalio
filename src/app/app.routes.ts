import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    //   {
    //     path: 'register',
    //     loadComponent: () =>
    //       import('./auth/register/register.component').then((m) => m.RegisterComponent),
    //   },
    ],
  },
  //   {
  //     path: 'dashboard',
  //     loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  //   },
  //   {
  //     path: 'calendar',
  //     loadComponent: () => import('./calendar/calendar.component').then(m => m.CalendarComponent)
  //   },
  //   {
  //     path: 'reservations',
  //     loadComponent: () => import('./reservations/reservations.component').then(m => m.ReservationsComponent)
  //   },
  //   {
  //     path: 'services',
  //     loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent)
  //   },
  //   {
  //     path: 'settings',
  //     loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent)
  //   },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
