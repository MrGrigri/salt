import { APP_INITIALIZER, NgModule, Provider } from '@angular/core';
import { defineCustomElements } from '@richkode/salt/loader';
import { DIRECTIVES } from './stencil-generated';

const SaltFactory = () => defineCustomElements;

const SaltProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: SaltFactory,
  multi: true,
};

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [SaltProvider],
})
export class SaltModule {}
