import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SaltModule } from '@richkode/salt-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SaltModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
