import { Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';

export const componentRoutes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'accordion', pathMatch: 'full' },
      {
        path: 'accordion',
        loadComponent: () =>
          import('./accordion/accordion.component').then(
            (m) => m.AccordionComponent
          ),
      },
    ],
  },
];
