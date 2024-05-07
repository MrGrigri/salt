import { Fragment, h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { SaltAccordion } from '../salt-accordion';
import { SaltAccordionHeader } from '../../salt-accordion-header/salt-accordion-header';
import { SaltAccordionPanel } from '../../salt-accordion-panel/salt-accordion-panel';
import { SaltAccordionGroup } from '../../salt-accordion-group/salt-accordion-group';

describe('salt-accordion', () => {
  it('Should render', async () => {
    const page = await newSpecPage({
      components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
      template: () => (
        <salt-accordion>
          <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
          <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
        </salt-accordion>
      ),
    });
    expect(page.root).toBeTruthy();
  });

  it('Should throw an error if it does not have a `HTMLSaltAccordionHeaderElement` element', async () => {
    let message: string = 'no error';

    try {
      await newSpecPage({
        components: [SaltAccordion, SaltAccordionPanel],
        template: () => (
          <Fragment>
            <p id="header">Test</p>
            <salt-accordion>
              <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
            </salt-accordion>
          </Fragment>
        ),
      });
    } catch (e) {
      message = e.message;
    }

    expect(message).toBe('A `HTMLSaltAccordionHeaderElement` is required');
  });

  it('Should throw an error if it does not have a `HTMLSaltAccordionPanelElement` element', async () => {
    let message: string = 'no error';

    try {
      await newSpecPage({
        components: [SaltAccordion, SaltAccordionHeader],
        template: () => (
          <salt-accordion>
            <salt-accordion-header controls="panel"></salt-accordion-header>
          </salt-accordion>
        ),
      });
    } catch (e) {
      message = e.message;
    }

    expect(message).toBe('A `HTMLSaltAccordionPanelElement` is required');
  });

  describe('Accessibility', () => {
    it('Should have the `role="listitem"` when a direct child of the HTMLSaltAccordionGroupElement', async () => {
      const page = await newSpecPage({
        components: [SaltAccordionGroup, SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
        template: () => (
          <salt-accordion-group>
            <salt-accordion>
              <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
              <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
            </salt-accordion>
          </salt-accordion-group>
        ),
      });
      const container = page.root
        .querySelector('salt-accordion')
        .querySelector('.salt-accordion-container');

      expect(container.getAttribute('role')).toEqual('listitem');
    });

    it('Should not have the `role="listitem"` when used as a standalone.', async () => {
      const page = await newSpecPage({
        components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
        template: () => (
          <salt-accordion>
            <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
            <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
          </salt-accordion>
        ),
      });
      const container = page.root.querySelector('.salt-accordion-container');

      expect(container.hasAttribute('role')).toEqual(false);
    });
  });

  describe('Properties', () => {
    describe('isDisabled', () => {
      // TODO: There isn't a good enough hook to check if the accordion is disabled
      it.todo('Should not be disabled by default');
      // TODO: There isn't a good enough hook to check if the accordion is disabled
      it.todo('Should be disabled when `isDisabled` property is set');

      it('Should watch the isDisabled property', async () => {
        const { root, rootInstance } = await newSpecPage({
          components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
          template: () => (
            <salt-accordion>
              <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
              <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
            </salt-accordion>
          ),
        });

        root.setAttribute('is-disabled', 'true');

        expect(rootInstance.isDisabled).toBe(true);
      });
    });

    describe('isOpen', () => {
      it('Should be closed by default', async () => {
        const { root } = await newSpecPage({
          components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
          template: () => (
            <salt-accordion>
              <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
              <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
            </salt-accordion>
          ),
        });
        const container: HTMLElement = root.querySelector('div.salt-accordion-container');

        expect(container.classList.contains('salt-accordion-container--open')).toBe(false);
      });

      it('Should be open when `isOpen` property is set', async () => {
        const { root } = await newSpecPage({
          components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
          template: () => (
            <salt-accordion isOpen={true}>
              <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
              <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
            </salt-accordion>
          ),
        });
        const container: HTMLElement = root.querySelector('div.salt-accordion-container');

        expect(container.classList.contains('salt-accordion-container--open')).toBe(true);
      });

      it('Should watch the isOpen property', async () => {
        const { root, rootInstance } = await newSpecPage({
          components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
          template: () => (
            <salt-accordion>
              <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
              <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
            </salt-accordion>
          ),
        });

        root.setAttribute('is-open', 'true');

        expect(rootInstance.isOpen).toBe(true);
      });
    });
  });

  describe('Methods', () => {
    describe('setDisabledState', () => {
      it('Should set the accordion to disabled', async () => {
        const { rootInstance } = await newSpecPage({
          components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
          template: () => (
            <salt-accordion isOpen={true}>
              <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
              <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
            </salt-accordion>
          ),
        });

        const state = await rootInstance.setDisabledState(true);

        expect(state).toEqual(true);
      });
    });

    describe('setOpenState', () => {
      it('Should set the accordion to open', async () => {
        const { rootInstance } = await newSpecPage({
          components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
          template: () => (
            <salt-accordion isOpen={true}>
              <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
              <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
            </salt-accordion>
          ),
        });

        const state = await rootInstance.setOpenState(true);

        expect(state).toEqual(true);
      });
    });
  });

  describe('Interactions', () => {
    describe('Listeners', () => {
      it('Should listen for the `salt-click` event', async () => {
        const { root, rootInstance } = await newSpecPage({
          components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
          template: () => (
            <salt-accordion isOpen={true}>
              <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
              <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
            </salt-accordion>
          ),
        });

        expect(rootInstance._isOpen).toEqual(true);

        const button = root.querySelector('button');

        button.click();

        expect(rootInstance._isOpen).toEqual(false);
      });
    });

    describe('Events', () => {
      describe('saltClose', () => {
        it('Should emit the close event', async () => {
          const { rootInstance } = await newSpecPage({
            components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
            template: () => (
              <salt-accordion isOpen={true}>
                <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
                <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
              </salt-accordion>
            ),
          });
          const closeEventEmitterSpy = jest.spyOn(rootInstance.saltClose, 'emit');

          rootInstance.setOpenState(false);

          expect(closeEventEmitterSpy).toHaveBeenCalledWith({
            event: 'salt-close',
            data: {},
          });
        });
      });

      describe('saltOpen', () => {
        it('Should emit the open event', async () => {
          const { rootInstance } = await newSpecPage({
            components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
            template: () => (
              <salt-accordion>
                <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
                <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
              </salt-accordion>
            ),
          });
          const openEventEmitterSpy = jest.spyOn(rootInstance.saltOpen, 'emit');

          rootInstance.setOpenState(true);

          expect(openEventEmitterSpy).toHaveBeenCalledWith({
            event: 'salt-open',
            data: {},
          });
        });
      });

      describe('saltToggle', () => {
        it('Should emit the toggle event', async () => {
          const { rootInstance } = await newSpecPage({
            components: [SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
            template: () => (
              <salt-accordion>
                <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
                <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
              </salt-accordion>
            ),
          });
          const toggleEventEmitterSpy = jest.spyOn(rootInstance.saltToggle, 'emit');

          rootInstance.setOpenState(true);

          expect(toggleEventEmitterSpy).toHaveBeenCalledWith({
            event: 'salt-toggle',
            data: {
              isOpen: true,
              self: rootInstance.el,
            },
          });
        });
      });
    });
  });
});
