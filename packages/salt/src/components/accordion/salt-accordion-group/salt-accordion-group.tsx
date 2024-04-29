import { SaltAccordionToggle } from '$types/events.types';
import { Component, Element, Host, Listen, Method, Prop, h } from '@stencil/core';
import { IncorrectChildrenError } from '../extras/constants';

@Component({
  tag: 'salt-accordion-group',
  styleUrl: 'salt-accordion-group.css',
  scoped: true,
})
export class SaltAccordionGroup {
  #accordions: Array<HTMLSaltAccordionElement>;

  @Element() el!: HTMLElement;

  /**
   * @prop {boolean} [exclusive=false] - If true, the accordion group will act like a radio selection and
   * only allow for one panel to be opened at a time.
   */
  @Prop({ reflect: true }) exclusive: boolean = false;

  componentDidLoad() {
    this.#checkForProperChildren();
    this.#setAccordions();
  }

  @Listen('salt-toggle')
  handleSaltClick({ detail }: CustomEvent<SaltAccordionToggle>) {
    if (detail.data.isOpen && this.exclusive) {
      this.#accordions.forEach(async accordion => {
        if (accordion === detail.data.self) return;

        await accordion.setOpenState(false);
      });
    }
  }

  /**
   * This will close all of the panels.
   */
  @Method() async collapseAll() {
    this.#accordions.forEach(async accordion => {
      await accordion.setOpenState(false);
    });
  }

  /**
   * If `exclusive` is false, then this will open all of the panels.
   */
  @Method() async expandAll() {
    if (this.exclusive) return;

    this.#accordions.forEach(async accordion => {
      await accordion.setOpenState(true);
    });
  }

  #checkForProperChildren() {
    if (this.el.querySelectorAll('salt-accordion').length <= 0) throw Error(IncorrectChildrenError);
  }

  #setAccordions() {
    this.#accordions = Array.from(this.el.querySelectorAll('salt-accordion'));
  }

  render() {
    return (
      <Host>
        <div role="list">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
