import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SaltModule } from '@richkode/salt-angular';
import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule, AccordionRoutingModule, SaltModule],
})
export class AccordionModule {}
