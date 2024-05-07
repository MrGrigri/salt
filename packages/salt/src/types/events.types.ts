export type SaltEvent = 'salt-open' | 'salt-close' | 'salt-click' | 'salt-toggle';

export interface SaltEventData<T> {
  data: T;
  event: SaltEvent;
}

export type AccordionOpenEvent = {};
export interface SaltAccordionOpen extends SaltEventData<AccordionOpenEvent> {
  event: 'salt-open';
}

export type AccordionCloseEvent = {};
export interface SaltAccordionClose extends SaltEventData<AccordionCloseEvent> {
  event: 'salt-close';
}

export type AccordionToggleEvent = {
  isOpen: boolean;
  self: HTMLSaltAccordionElement;
};
export interface SaltAccordionToggle extends SaltEventData<AccordionToggleEvent> {
  event: 'salt-toggle';
}

export type AccordionHeaderClickEvent = string;
export interface SaltAccordionHeaderClick extends SaltEventData<AccordionHeaderClickEvent> {
  event: 'salt-click';
}
