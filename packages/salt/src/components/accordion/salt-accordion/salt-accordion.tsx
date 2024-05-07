import type {
  SaltAccordionClose,
  SaltAccordionHeaderClick,
  SaltAccordionOpen,
  SaltAccordionToggle,
} from '$types/events.types';

import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';

@Component({
  tag: 'salt-accordion',
  styleUrl: 'salt-accordion.css',
  scoped: true,
})
export class SaltAccordion {
  #header: HTMLSaltAccordionHeaderElement;
  #panel: HTMLSaltAccordionPanelElement;
  #isChildOfAccordionGroup: boolean = false;

  @Element() el: HTMLSaltAccordionElement;

  @State() _isDisabled: boolean;
  @State() _isOpen: boolean = false;

  /**
   * @prop {boolean} [isDisabled=false] - Sets the disabled state of the accordion
   */
  @Prop() isDisabled: boolean = false;
  @Watch('isDisabled')
  async watchIsDisabled(_oldValue: boolean, newValue: boolean) {
    await this.setDisabledState(newValue);
  }

  /**
   * @prop {boolean} [isOpen=false] - Sets the default state of the accordion
   */
  @Prop() isOpen: boolean = false;
  @Watch('isOpen')
  async watchIsOpen(_oldValue: boolean, newValue: boolean) {
    await this.setOpenState(newValue);
  }

  /**
   * Event fired when the accordion has closed
   */
  @Event({ eventName: 'salt-close' }) saltClose: EventEmitter<SaltAccordionClose>;

  /**
   * Event fired when the accordion has opened
   */
  @Event({ eventName: 'salt-open' }) saltOpen: EventEmitter<SaltAccordionOpen>;

  /**
   * Event fired when the accordion has toggled its state
   */
  @Event({ eventName: 'salt-toggle' }) saltToggle: EventEmitter<SaltAccordionToggle>;

  componentWillLoad() {
    this.#setHeader();
    this.#setPanel();
    this.#setIsDisabledState();
    this.#setIsOpenState();
    this.#setIsChildOfAccordionGroup();
  }

  @Listen('salt-click')
  async handleSaltClick(e: CustomEvent<SaltAccordionHeaderClick>) {
    e.stopPropagation();

    this.setOpenState(!this._isOpen);
  }

  @Method() async setDisabledState(state: boolean): Promise<boolean> {
    this._isDisabled = state;

    this.#header.setDisabledState(state);

    if (state) await this.setOpenState(false);

    return this._isDisabled;
  }

  @Method() async setOpenState(state: boolean): Promise<boolean> {
    if (this._isDisabled) return this._isOpen;

    this._isOpen = state;

    this.#header.setOpenState(state);
    this.#panel.setOpenState(state);

    if (this._isOpen) {
      this.saltOpen.emit({
        event: 'salt-open',
        data: {},
      });
    } else {
      this.saltClose.emit({
        event: 'salt-close',
        data: {},
      });
    }

    this.saltToggle.emit({
      event: 'salt-toggle',
      data: {
        isOpen: this._isOpen,
        self: this.el,
      },
    });

    return this._isOpen;
  }

  #setHeader() {
    this.#header = this.el.querySelector('salt-accordion-header');

    if (!this.#header) throw Error('A `HTMLSaltAccordionHeaderElement` is required');
  }

  #setIsChildOfAccordionGroup() {
    this.#isChildOfAccordionGroup =
      this.el.parentElement.parentElement.tagName === 'SALT-ACCORDION-GROUP';
  }

  #setIsDisabledState() {
    this._isDisabled = this.isDisabled;
  }

  #setIsOpenState() {
    this._isOpen = this.isOpen;

    this.#header.setOpenState(this._isOpen);
    this.#panel.setOpenState(this._isOpen);
  }

  #setPanel() {
    this.#panel = this.el.querySelector('salt-accordion-panel');

    if (!this.#panel) throw Error('A `HTMLSaltAccordionPanelElement` is required');
  }

  render() {
    return (
      <Host>
        <div
          role={this.#isChildOfAccordionGroup ? 'listitem' : null}
          class={{
            'salt-accordion-container': true,
            'salt-accordion-container--open': this._isOpen,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
