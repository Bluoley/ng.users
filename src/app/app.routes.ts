import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./users/users.component').then((comp) => comp.UsersComponent),
  },
];
