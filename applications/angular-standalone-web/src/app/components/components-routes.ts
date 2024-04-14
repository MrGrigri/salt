import { Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';

export const componentRoutes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'my-component', pathMatch: 'full' },
      {
        path: 'my-component',
        loadComponent: () =>
          import('./my-component/my-component.component').then(
            (m) => m.MyComponentComponent
          ),
      },
    ],
  },
];
