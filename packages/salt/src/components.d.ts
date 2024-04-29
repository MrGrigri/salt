/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SaltAccordionClose, SaltAccordionOpen, SaltAccordionToggle } from "./types/events.types";
import { SaltAccordionHeaderIconPosition, SaltAccordionHeaderLevel } from "./components/accordion/extras/types";
import { SaltAccordionHeaderClick } from "./types/events.types";
export { SaltAccordionClose, SaltAccordionOpen, SaltAccordionToggle } from "./types/events.types";
export { SaltAccordionHeaderIconPosition, SaltAccordionHeaderLevel } from "./components/accordion/extras/types";
export { SaltAccordionHeaderClick } from "./types/events.types";
export namespace Components {
    interface SaltAccordion {
        /**
          * @prop {boolean} [isDisabled=false] - Sets the disabled state of the accordion
         */
        "isDisabled": boolean;
        /**
          * @prop {boolean} [isOpen=false] - Sets the default state of the accordion
         */
        "isOpen": boolean;
        "setDisabledState": (state: boolean) => Promise<boolean>;
        "setOpenState": (state: boolean) => Promise<boolean>;
    }
    interface SaltAccordionGroup {
        /**
          * This will close all of the panels.
         */
        "collapseAll": () => Promise<void>;
        /**
          * @prop {boolean} [exclusive=false] - If true, the accordion group will act like a radio selection and only allow for one panel to be opened at a time.
         */
        "exclusive": boolean;
        /**
          * If `exclusive` is false, then this will open all of the panels.
         */
        "expandAll": () => Promise<void>;
    }
    interface SaltAccordionHeader {
        /**
          * @prop {string} [controls] - REQUIRED: For accessibility reasons, the controls property is required The value should be the id of the panel that it is controlling
         */
        "controls": string;
        /**
          * @prop {SaltAccordionHeaderIconPosition} [iconPosition='end'] - Position of the icon
         */
        "iconPosition": SaltAccordionHeaderIconPosition;
        /**
          * @private 
          * @prop {boolean} [isDisabled=false] - Set the disabled state. This should only be used internally. Please do not set this property as an end-developer. Set the `isDisabled` property on the HTMLSaltAccordionElement
         */
        "isDisabled": boolean;
        /**
          * @private 
          * @prop {boolean} [isOpen=false] - Set the open state. This should only be used internally. Please do not set this property as an end-developer. Set the `isOpen` property on the HTMLSaltAccordionElement
         */
        "isOpen": boolean;
        /**
          * @prop {SaltAccordionHeaderLevel} [level=3] - Set the heading tag element level. E.g. Setting the level to `4` will set the heading to <h4 />
         */
        "level": SaltAccordionHeaderLevel;
        /**
          * Sets the disabled state. This should only be used internally. Please do not use this method as an end-developer. Use the `setDisabledState(state: boolean)` method on the HTMLSaltAccordionElement
          * @private 
          * @method 
          * @param state - The state to set the disabled state to.
          * @returns - The new disabled state
         */
        "setDisabledState": (state: boolean) => Promise<boolean>;
        /**
          * Sets the open state. This should only be used internally. Please do not use this method as an end-developer. Use the `setOpenState(state: boolean)` method on the HTMLSaltAccordionElement
          * @private 
          * @method 
          * @param state - The state to set the open state to.
          * @returns - The new open state
         */
        "setOpenState": (state: boolean) => Promise<boolean>;
    }
    interface SaltAccordionPanel {
        "isOpen": boolean;
        "labelledBy": string;
        "setOpenState": (state: boolean) => Promise<boolean>;
    }
}
export interface SaltAccordionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSaltAccordionElement;
}
export interface SaltAccordionHeaderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSaltAccordionHeaderElement;
}
declare global {
    interface HTMLSaltAccordionElementEventMap {
        "salt-close": SaltAccordionClose;
        "salt-open": SaltAccordionOpen;
        "salt-toggle": SaltAccordionToggle;
    }
    interface HTMLSaltAccordionElement extends Components.SaltAccordion, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSaltAccordionElementEventMap>(type: K, listener: (this: HTMLSaltAccordionElement, ev: SaltAccordionCustomEvent<HTMLSaltAccordionElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSaltAccordionElementEventMap>(type: K, listener: (this: HTMLSaltAccordionElement, ev: SaltAccordionCustomEvent<HTMLSaltAccordionElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSaltAccordionElement: {
        prototype: HTMLSaltAccordionElement;
        new (): HTMLSaltAccordionElement;
    };
    interface HTMLSaltAccordionGroupElement extends Components.SaltAccordionGroup, HTMLStencilElement {
    }
    var HTMLSaltAccordionGroupElement: {
        prototype: HTMLSaltAccordionGroupElement;
        new (): HTMLSaltAccordionGroupElement;
    };
    interface HTMLSaltAccordionHeaderElementEventMap {
        "salt-click": SaltAccordionHeaderClick;
    }
    interface HTMLSaltAccordionHeaderElement extends Components.SaltAccordionHeader, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSaltAccordionHeaderElementEventMap>(type: K, listener: (this: HTMLSaltAccordionHeaderElement, ev: SaltAccordionHeaderCustomEvent<HTMLSaltAccordionHeaderElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSaltAccordionHeaderElementEventMap>(type: K, listener: (this: HTMLSaltAccordionHeaderElement, ev: SaltAccordionHeaderCustomEvent<HTMLSaltAccordionHeaderElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSaltAccordionHeaderElement: {
        prototype: HTMLSaltAccordionHeaderElement;
        new (): HTMLSaltAccordionHeaderElement;
    };
    interface HTMLSaltAccordionPanelElement extends Components.SaltAccordionPanel, HTMLStencilElement {
    }
    var HTMLSaltAccordionPanelElement: {
        prototype: HTMLSaltAccordionPanelElement;
        new (): HTMLSaltAccordionPanelElement;
    };
    interface HTMLElementTagNameMap {
        "salt-accordion": HTMLSaltAccordionElement;
        "salt-accordion-group": HTMLSaltAccordionGroupElement;
        "salt-accordion-header": HTMLSaltAccordionHeaderElement;
        "salt-accordion-panel": HTMLSaltAccordionPanelElement;
    }
}
declare namespace LocalJSX {
    interface SaltAccordion {
        /**
          * @prop {boolean} [isDisabled=false] - Sets the disabled state of the accordion
         */
        "isDisabled"?: boolean;
        /**
          * @prop {boolean} [isOpen=false] - Sets the default state of the accordion
         */
        "isOpen"?: boolean;
        /**
          * Event fired when the accordion has closed
         */
        "onSalt-close"?: (event: SaltAccordionCustomEvent<SaltAccordionClose>) => void;
        /**
          * Event fired when the accordion has opened
         */
        "onSalt-open"?: (event: SaltAccordionCustomEvent<SaltAccordionOpen>) => void;
        /**
          * Event fired when the accordion has toggled its state
         */
        "onSalt-toggle"?: (event: SaltAccordionCustomEvent<SaltAccordionToggle>) => void;
    }
    interface SaltAccordionGroup {
        /**
          * @prop {boolean} [exclusive=false] - If true, the accordion group will act like a radio selection and only allow for one panel to be opened at a time.
         */
        "exclusive"?: boolean;
    }
    interface SaltAccordionHeader {
        /**
          * @prop {string} [controls] - REQUIRED: For accessibility reasons, the controls property is required The value should be the id of the panel that it is controlling
         */
        "controls": string;
        /**
          * @prop {SaltAccordionHeaderIconPosition} [iconPosition='end'] - Position of the icon
         */
        "iconPosition"?: SaltAccordionHeaderIconPosition;
        /**
          * @private 
          * @prop {boolean} [isDisabled=false] - Set the disabled state. This should only be used internally. Please do not set this property as an end-developer. Set the `isDisabled` property on the HTMLSaltAccordionElement
         */
        "isDisabled"?: boolean;
        /**
          * @private 
          * @prop {boolean} [isOpen=false] - Set the open state. This should only be used internally. Please do not set this property as an end-developer. Set the `isOpen` property on the HTMLSaltAccordionElement
         */
        "isOpen"?: boolean;
        /**
          * @prop {SaltAccordionHeaderLevel} [level=3] - Set the heading tag element level. E.g. Setting the level to `4` will set the heading to <h4 />
         */
        "level"?: SaltAccordionHeaderLevel;
        "onSalt-click"?: (event: SaltAccordionHeaderCustomEvent<SaltAccordionHeaderClick>) => void;
    }
    interface SaltAccordionPanel {
        "isOpen"?: boolean;
        "labelledBy": string;
    }
    interface IntrinsicElements {
        "salt-accordion": SaltAccordion;
        "salt-accordion-group": SaltAccordionGroup;
        "salt-accordion-header": SaltAccordionHeader;
        "salt-accordion-panel": SaltAccordionPanel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "salt-accordion": LocalJSX.SaltAccordion & JSXBase.HTMLAttributes<HTMLSaltAccordionElement>;
            "salt-accordion-group": LocalJSX.SaltAccordionGroup & JSXBase.HTMLAttributes<HTMLSaltAccordionGroupElement>;
            "salt-accordion-header": LocalJSX.SaltAccordionHeader & JSXBase.HTMLAttributes<HTMLSaltAccordionHeaderElement>;
            "salt-accordion-panel": LocalJSX.SaltAccordionPanel & JSXBase.HTMLAttributes<HTMLSaltAccordionPanelElement>;
        }
    }
}
