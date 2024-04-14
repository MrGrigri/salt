import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>Components</h2>

    <router-outlet />
  `,
})
export class ComponentsComponent {}
