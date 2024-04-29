/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@richkode/salt';


@ProxyCmp({
  inputs: ['isDisabled', 'isOpen'],
  methods: ['setDisabledState', 'setOpenState']
})
@Component({
  selector: 'salt-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isDisabled', 'isOpen'],
})
export class SaltAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['salt-close', 'salt-open', 'salt-toggle']);
  }
}


import type { SaltAccordionClose as ISaltAccordionSaltAccordionClose } from '@richkode/salt';
import type { SaltAccordionOpen as ISaltAccordionSaltAccordionOpen } from '@richkode/salt';
import type { SaltAccordionToggle as ISaltAccordionSaltAccordionToggle } from '@richkode/salt';

export declare interface SaltAccordion extends Components.SaltAccordion {
  /**
   * Event fired when the accordion has closed
   */
  'salt-close': EventEmitter<CustomEvent<ISaltAccordionSaltAccordionClose>>;
  /**
   * Event fired when the accordion has opened
   */
  'salt-open': EventEmitter<CustomEvent<ISaltAccordionSaltAccordionOpen>>;
  /**
   * Event fired when the accordion has toggled its state
   */
  'salt-toggle': EventEmitter<CustomEvent<ISaltAccordionSaltAccordionToggle>>;
}


@ProxyCmp({
  inputs: ['exclusive', 'wrap'],
  methods: ['expand', 'collapse']
})
@Component({
  selector: 'salt-accordion-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['exclusive', 'wrap'],
})
export class SaltAccordionGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SaltAccordionGroup extends Components.SaltAccordionGroup {}


@ProxyCmp({
  inputs: ['controls', 'iconPosition', 'isDisabled', 'isOpen', 'level'],
  methods: ['setDisabledState', 'setOpenState']
})
@Component({
  selector: 'salt-accordion-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['controls', 'iconPosition', 'isDisabled', 'isOpen', 'level'],
})
export class SaltAccordionHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['salt-click']);
  }
}


import type { SaltAccordionHeaderClick as ISaltAccordionHeaderSaltAccordionHeaderClick } from '@richkode/salt';

export declare interface SaltAccordionHeader extends Components.SaltAccordionHeader {

  'salt-click': EventEmitter<CustomEvent<ISaltAccordionHeaderSaltAccordionHeaderClick>>;
}


@ProxyCmp({
  inputs: ['isOpen', 'labelledBy'],
  methods: ['setOpenState']
})
@Component({
  selector: 'salt-accordion-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isOpen', 'labelledBy'],
})
export class SaltAccordionPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SaltAccordionPanel extends Components.SaltAccordionPanel {}


