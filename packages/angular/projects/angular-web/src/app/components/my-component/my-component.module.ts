import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaltModule } from '@richkode/salt-angular';
import { MyComponentRoutingModule } from './my-component-routing.module';
import { MyComponentComponent } from './my-component.component';

@NgModule({
  declarations: [MyComponentComponent],
  imports: [CommonModule, MyComponentRoutingModule, SaltModule],
})
export class MyComponentModule {}
