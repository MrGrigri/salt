import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full',
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./components/components-routes').then((r) => r.componentRoutes),
  },
];
