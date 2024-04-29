import { Fragment, h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { SaltAccordionHeader } from '../salt-accordion-header';

describe('salt-accordion-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SaltAccordionHeader],
      template: () => (
        <Fragment>
          <p id="panel">Test</p>
          <salt-accordion-header controls="panel"></salt-accordion-header>
        </Fragment>
      ),
    });
    expect(page.root).toBeTruthy();
  });

  describe('Accessibility', () => {
    it('Should have aria-controls, aria-expanded, aria-disabled attributes', async () => {
      const id = 'panel';
      const { root } = await newSpecPage({
        components: [SaltAccordionHeader],
        template: () => (
          <Fragment>
            <p id={id}>Test</p>
            <salt-accordion-header controls={id}></salt-accordion-header>
          </Fragment>
        ),
      });
      const buttonElement = root.querySelector('.salt-accordion-header-button');

      expect(buttonElement.getAttribute('aria-controls')).toBe(id);
      expect(buttonElement.getAttribute('aria-expanded')).toBe('false');
      expect(buttonElement.getAttribute('aria-disabled')).toBe('false');
      expect(buttonElement.getAttribute('type')).toBe('button');
    });
  });

  describe('Properties', () => {
    describe('controls', () => {
      it('Should throw an error if the control prop is not passed', async () => {
        let message = 'no error';

        try {
          await newSpecPage({
            components: [SaltAccordionHeader],
            // @ts-ignore
            template: () => <salt-accordion-header></salt-accordion-header>,
          });
        } catch (e) {
          message = e.message;
        }

        expect(message).toBe('You must proved the `controls` property.');
      });

      it('Should throw an error if the control element does not exist in the DOM', async () => {
        let message = 'no error';

        try {
          await newSpecPage({
            components: [SaltAccordionHeader],
            template: () => (
              <Fragment>
                <p>Test</p>
                <salt-accordion-header controls="test"></salt-accordion-header>
              </Fragment>
            ),
          });
        } catch (e) {
          message = e.message;
        }

        expect(message).toBe('The `controls` element does not exist in the DOM.');
      });
    });

    describe('iconPosition', () => {
      it('Should render the icon at the end (right) by default', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });

        const postIconSelector =
          '.salt-accordion-header-text + .salt-accordion-header-icon-wrapper:has(svg.salt-accordion-header-icon)';
        const postIcon = page.root.querySelector(postIconSelector);

        expect(postIcon).toBeTruthy();
      });

      it('Should render the icon at the end (right)', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header iconPosition="end" controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });

        const postIconSelector =
          '.salt-accordion-header-text + .salt-accordion-header-icon-wrapper:has(svg.salt-accordion-header-icon)';
        const postIcon = page.root.querySelector(postIconSelector);

        expect(postIcon).toBeTruthy();
      });

      it('Should render the icon at the start (left)', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header iconPosition="start" controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });

        const postIconSelector =
          '.salt-accordion-header-icon-wrapper:has(svg.salt-accordion-header-icon) + .salt-accordion-header-text';
        const postIcon = page.root.querySelector(postIconSelector);

        expect(postIcon).toBeTruthy();
      });
    });

    describe('isDisabled', () => {
      it('Should not be disabled by default', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });
        const buttonElement = page.root.querySelector<HTMLButtonElement>(
          'button.salt-accordion-header-button',
        );

        expect(buttonElement.getAttribute('disabled')).toBe(null);
        expect(buttonElement.getAttribute('aria-disabled')).toBe('false');
      });

      it('Should be disabled', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header isDisabled={true} controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });
        const buttonElement = page.root.querySelector<HTMLButtonElement>(
          'button.salt-accordion-header-button',
        );

        expect(buttonElement.getAttribute('disabled')).toBe('');
        expect(buttonElement.getAttribute('aria-disabled')).toBe('true');
      });
    });

    describe('isOpen', () => {
      it('Should be closed by default', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });
        const buttonElement = page.root.querySelector<HTMLButtonElement>(
          'button.salt-accordion-header-button',
        );

        expect(buttonElement.getAttribute('aria-expanded')).toBe('false');
      });

      it('Should be open', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header isOpen={true} controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });
        const buttonElement = page.root.querySelector<HTMLButtonElement>(
          'button.salt-accordion-header-button',
        );

        expect(buttonElement.getAttribute('aria-expanded')).toBe('true');
      });
    });

    describe('level', () => {
      it('Should have a default level of 3', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });
        const headingElement = page.root.querySelector<HTMLHeadingElement>(
          '.salt-accordion-header-container',
        );

        expect(headingElement.tagName).toBe('H3');
      });

      it('Should have a level (generated randomly) between 1 and 6', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header level={4} controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });
        const headingElement = page.root.querySelector<HTMLHeadingElement>(
          '.salt-accordion-header-container',
        );

        expect(headingElement.tagName).toBe('H4');
      });
    });
  });

  describe('Slots', () => {
    it('Should render a pre-icon slot', async () => {
      const page = await newSpecPage({
        components: [SaltAccordionHeader],
        template: () => (
          <Fragment>
            <p id="panel">Test</p>
            <salt-accordion-header controls="panel">
              <svg width={24} height={24} viewBox="0 0 24 24" slot="pre-icon">
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </salt-accordion-header>
          </Fragment>
        ),
      });
      const preIconSlot = page.root.querySelector('[slot="pre-icon"]');

      expect(preIconSlot).toBeTruthy();
    });

    it('Should render a post-icon slot', async () => {
      const page = await newSpecPage({
        components: [SaltAccordionHeader],
        template: () => (
          <Fragment>
            <p id="panel">Test</p>
            <salt-accordion-header controls="panel">
              <svg width={24} height={24} viewBox="0 0 24 24" slot="post-icon">
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </salt-accordion-header>
          </Fragment>
        ),
      });
      const preIconSlot = page.root.querySelector('[slot="post-icon"]');

      expect(preIconSlot).toBeTruthy();
    });
  });

  describe('Methods', () => {
    describe('setDisabledState', () => {
      it('Should set the header to disabled', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });
        const buttonElement = page.root.querySelector<HTMLButtonElement>(
          'button.salt-accordion-header-button',
        );

        expect(buttonElement.getAttribute('aria-disabled')).toBe('false');

        await page.rootInstance.setDisabledState(true);
        await page.waitForChanges();

        expect(buttonElement.getAttribute('aria-disabled')).toBe('true');
      });
    });

    describe('setOpenState', () => {
      it('Should set the header to open', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });
        const buttonElement = page.root.querySelector<HTMLButtonElement>(
          'button.salt-accordion-header-button',
        );

        expect(buttonElement.getAttribute('aria-expanded')).toBe('false');

        await page.rootInstance.setOpenState(true);
        await page.waitForChanges();

        expect(buttonElement.getAttribute('aria-expanded')).toBe('true');
      });
    });
  });

  describe('Interactions', () => {
    describe('click', () => {
      it('Should toggle the open state with mouse interaction', async () => {
        const page = await newSpecPage({
          components: [SaltAccordionHeader],
          template: () => (
            <Fragment>
              <p id="panel">Test</p>
              <salt-accordion-header controls="panel"></salt-accordion-header>
            </Fragment>
          ),
        });
        const eventEmitterSpy = jest.spyOn(page.rootInstance.saltClick, 'emit');
        const buttonElement = page.root.querySelector<HTMLButtonElement>(
          'button.salt-accordion-header-button',
        );

        expect(buttonElement.getAttribute('aria-expanded')).toBe('false');

        const clickEvent = new Event('click');
        buttonElement.dispatchEvent(clickEvent);

        expect(eventEmitterSpy).toHaveBeenCalledWith({
          event: 'salt-click',
          data: 'clicked',
        });
      });
    });
  });
});
