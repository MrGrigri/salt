import { Component, Host, Method, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'salt-accordion-panel',
  styleUrl: 'salt-accordion-panel.css',
  scoped: true,
})
export class SaltAccordionPanel {
  @State() _isOpen: boolean;

  @Prop() labelledBy!: string;
  @Prop() isOpen: boolean = false;

  componentWillLoad() {
    this.#setInitialIsOpenState();
    this.#checkLabelledByProp();
  }

  @Method() async setOpenState(state: boolean): Promise<boolean> {
    this._isOpen = state;

    return this._isOpen;
  }

  #checkLabelledByProp() {
    if (!this.labelledBy) throw Error('You must proved the `labelledBy` property.');

    if (!document.getElementById(this.labelledBy)) throw Error('The `labelledBy` element does not exist in the DOM.');
  }

  #setInitialIsOpenState() {
    this._isOpen = this.isOpen;
  }

  render() {
    return (
      <Host>
        <div class="salt-accordion-panel-container">
          <div class="salt-accordion-panel-overflow" role="region" aria-labelledby={this.labelledBy} aria-hidden={this._isOpen ? 'false' : 'true'}>
            <div class="salt-accordion-panel-wrapper">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
