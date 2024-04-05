import { Component, OnInit } from '@angular/core';
import { SaltModule } from '@richkode/salt-angular';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [SaltModule],
  template: `<my-component first="Mike" last="Richins"></my-component>`,
})
export class MyComponentComponent {}
