import { Component, WritableSignal, signal } from '@angular/core';
import {
  SaltAccordion,
  SaltAccordionGroup,
  SaltAccordionHeader,
  SaltAccordionPanel,
} from '@richkode/salt-angular-standalone';

const componentImports = [
  SaltAccordion,
  SaltAccordionGroup,
  SaltAccordionHeader,
  SaltAccordionPanel,
];

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: componentImports,
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

  handleDarkModeUpdate(e: Event) {
    this.#isDarkMode.set((e.target as HTMLInputElement).checked);
  }
}
