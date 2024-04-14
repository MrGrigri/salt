import { Component } from '@angular/core';
import { MyComponent } from '@richkode/salt-angular-standalone';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [MyComponent],
  template: `<my-component first="Mike" last="Richins"></my-component>`,
})
export class MyComponentComponent {}
