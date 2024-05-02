import { Component, type WritableSignal, signal } from '@angular/core';
import {
  SaltAccordion,
  SaltAccordionGroup,
  SaltAccordionHeader,
  SaltAccordionPanel,
} from '@richkode/salt-angular-standalone';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    SaltAccordion,
    SaltAccordionGroup,
    SaltAccordionHeader,
    SaltAccordionPanel,
  ],
  templateUrl: 'accordion.component.html',
  styleUrl: 'accordion.component.scss',
})
export class AccordionComponent {
  #isDarkMode: WritableSignal<boolean> = signal(false);

  get darkModeClasses(): string {
    return this.#isDarkMode() ? this.#cssClasses.Dark : this.#cssClasses.Light;
  }

  get #cssClasses() {
    return {
      Dark: 'demo demo--dark',
      Light: 'demo',
    };
  }

  handleDarkModeUpdate({ target }: Event) {
    this.#isDarkMode.set((target as HTMLInputElement).checked);
  }
}
