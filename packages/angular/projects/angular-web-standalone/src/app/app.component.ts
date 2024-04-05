import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaltModule } from '@richkode/salt-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaltModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-web-standalone';
}
