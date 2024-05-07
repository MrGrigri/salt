import type { SaltAccordionHeaderClick } from '../../../types/events.types';

import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  h,
} from '@stencil/core';

import { SaltAccordionHeaderIconPosition, SaltAccordionHeaderLevel } from '../extras/types';

@Component({
  tag: 'salt-accordion-header',
  styleUrl: 'salt-accordion-header.css',
  scoped: true,
})
export class SaltAccordionHeader {
  #isUsingPreIcon: boolean = false;
  #isUsingPostIcon: boolean = false;

  @Element() el: HTMLSaltAccordionHeaderElement;

  @State() _isDisabled: boolean;
  @State() _isOpen: boolean;

  /**
   * @prop {string} [controls] - REQUIRED: For accessibility reasons, the controls property is required The value should be the id of the panel that it is controlling
   */
  @Prop() controls!: string;

  /**
   * @prop {SaltAccordionHeaderIconPosition} [iconPosition='end'] - Position of the icon
   */
  @Prop() iconPosition: SaltAccordionHeaderIconPosition = 'end';

  /**
   * @private
   * @prop {boolean} [isDisabled=false] - Set the disabled state. This should only be used internally. Please do not set this property as an end-developer. Set the `isDisabled` property on the HTMLSaltAccordionElement
   */
  @Prop() isDisabled: boolean = false;

  /**
   * @private
   * @prop {boolean} [isOpen=false] - Set the open state. This should only be used internally. Please do not set this property as an end-developer. Set the `isOpen` property on the HTMLSaltAccordionElement
   */
  @Prop() isOpen: boolean = false;

  /**
   * @prop {SaltAccordionHeaderLevel} [level=3] - Set the heading tag element level. E.g. Setting the level to `4` will set the heading to <h4 />
   */
  @Prop() level: SaltAccordionHeaderLevel = 3;

  @Event({ eventName: 'salt-click' }) saltClick: EventEmitter<SaltAccordionHeaderClick>;

  componentWillLoad() {
    this.#checkControls();
    this.#setInitialIsOpenState();
    this.#setInitialIsDisabledState();
    this.#setSlotConditional();
  }

  /**
   * Sets the disabled state. This should only be used internally. Please do not use this method as an end-developer. Use the `setDisabledState(state: boolean)` method on the HTMLSaltAccordionElement
   * @private
   * @method
   * @param state {boolean} - The state to set the disabled state to.
   * @returns {Promise<boolean>} - The new disabled state
   */
  @Method() async setDisabledState(state: boolean): Promise<boolean> {
    this._isDisabled = state;

    return this._isDisabled;
  }

  /**
   * Sets the open state. This should only be used internally. Please do not use this method as an end-developer. Use the `setOpenState(state: boolean)` method on the HTMLSaltAccordionElement
   * @private
   * @method
   * @param state {boolean} - The state to set the open state to.
   * @returns {Promise<boolean>} - The new open state
   */
  @Method() async setOpenState(state: boolean): Promise<boolean> {
    this._isOpen = state;

    return this._isOpen;
  }

  #checkControls() {
    if (!this.controls) throw Error('You must proved the `controls` property.');

    if (!document.getElementById(this.controls))
      throw Error('The `controls` element does not exist in the DOM.');
  }

  #handleButtonClick = () => {
    this.saltClick.emit({
      event: 'salt-click',
      data: 'clicked',
    });
  };

  #setInitialIsDisabledState() {
    this._isDisabled = this.isDisabled;
  }

  #setSlotConditional() {
    this.#isUsingPreIcon = !!this.el.querySelector('[slot="pre-icon"]');
    this.#isUsingPostIcon = !!this.el.querySelector('[slot="post-icon"]');
  }

  #setInitialIsOpenState() {
    this._isOpen = this.isOpen;
  }

  #renderPreIcon() {
    if (this.#isUsingPreIcon) {
      return this.#renderPreIconSlot();
    }

    if (this.iconPosition === 'start') {
      return this.#renderIcon();
    }

    return undefined;
  }

  #renderPostIcon() {
    if (this.#isUsingPostIcon) {
      return this.#renderPostIconSlot();
    }

    if (this.iconPosition === 'end') {
      return this.#renderIcon();
    }

    return undefined;
  }

  #renderIcon() {
    return (
      <svg class="salt-accordion-header-icon" viewBox="0 0 24 24">
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </svg>
    );
  }

  #renderPreIconSlot() {
    return <slot name="pre-icon"></slot>;
  }

  #renderPostIconSlot() {
    return <slot name="post-icon"></slot>;
  }

  render() {
    const HeadingLevel: string = `h${this.level}`;

    return (
      <Host>
        <HeadingLevel class="salt-accordion-header-container">
          <button
            class="salt-accordion-header-button"
            type="button"
            disabled={this._isDisabled ? true : null}
            aria-controls={this.controls}
            aria-expanded={this._isOpen ? 'true' : 'false'}
            aria-disabled={this._isDisabled ? 'true' : 'false'}
            onClick={this.#handleButtonClick}
          >
            <span class="salt-accordion-header-icon-wrapper">{this.#renderPreIcon()}</span>
            <span class="salt-accordion-header-text">
              <slot></slot>
            </span>
            <span class="salt-accordion-header-icon-wrapper">{this.#renderPostIcon()}</span>
          </button>
        </HeadingLevel>
      </Host>
    );
  }
}
