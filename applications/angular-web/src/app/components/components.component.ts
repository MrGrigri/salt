import { Component } from '@angular/core';

type Route = {
  link: string;
  label: string;
};

type Routes = Array<Route>;

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsComponent {
  routes: Routes = [{ link: 'accordion', label: 'Accordion' }];
}
