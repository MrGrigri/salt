import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { SaltAccordionGroup } from '../salt-accordion-group';
import { IncorrectChildrenError } from '../../extras/constants';
import { SaltAccordionHeader } from '../../salt-accordion-header/salt-accordion-header';
import { SaltAccordionPanel } from '../../salt-accordion-panel/salt-accordion-panel';
import { SaltAccordion } from '../../salt-accordion/salt-accordion';

describe('accordion-group', () => {
  it('renders', async () => {
    const { rootInstance } = await newSpecPage({
      components: [SaltAccordionGroup],
      template: () => (
        <salt-accordion-group>
          <salt-accordion></salt-accordion>
        </salt-accordion-group>
      ),
    });

    expect(rootInstance.exclusive).toBe(false);
  });

  it('Should throw a IncorrectChildrenError if the passed children are not HTMLSaltAccordionElement', async () => {
    let message: string = 'no error';

    try {
      await newSpecPage({
        components: [SaltAccordionGroup],
        template: () => (
          <salt-accordion-group>
            <p>I'm not an accordion</p>
          </salt-accordion-group>
        ),
      });
    } catch (e) {
      message = e.message;
    }

    expect(message).toBe(IncorrectChildrenError);
  });

  describe('Accessibility', () => {
    it('Should have a role of `list`', async () => {
      const { root } = await newSpecPage({
        components: [SaltAccordionGroup],
        template: () => (
          <salt-accordion-group>
            <salt-accordion></salt-accordion>
          </salt-accordion-group>
        ),
      });
      const container = root.querySelector('> div');

      expect(container.getAttribute('role')).toBe('list');
    });
  });

  describe('Interaction', () => {
    describe('Listeners', () => {
      describe('salt-toggle', () => {
        it('Should do nothing if exclusive is false', async () => {
          const { root } = await newSpecPage({
            components: [
              SaltAccordionGroup,
              SaltAccordion,
              SaltAccordionHeader,
              SaltAccordionPanel,
            ],
            template: () => (
              <salt-accordion-group>
                <salt-accordion>
                  <salt-accordion-header id="header" controls="panel">
                    Title
                  </salt-accordion-header>
                  <salt-accordion-panel id="panel" labelledBy="header">
                    Some content
                  </salt-accordion-panel>
                </salt-accordion>
              </salt-accordion-group>
            ),
          });
          const button = root.querySelector('button');

          button.click();

          expect(button.getAttribute('aria-expanded')).toBe('false');
        });

        it('Should do nothing if it is closing the accordion', async () => {
          const { root } = await newSpecPage({
            components: [
              SaltAccordionGroup,
              SaltAccordion,
              SaltAccordionHeader,
              SaltAccordionPanel,
            ],
            template: () => (
              <salt-accordion-group>
                <salt-accordion is-open={true}>
                  <salt-accordion-header id="header" controls="panel">
                    Title
                  </salt-accordion-header>
                  <salt-accordion-panel id="panel" labelledBy="header">
                    Some content
                  </salt-accordion-panel>
                </salt-accordion>
              </salt-accordion-group>
            ),
          });
          const button = root.querySelector('button');

          button.click();

          expect(button.getAttribute('aria-expanded')).toBe('true');
        });

        it('Should toggle all other accordions', async () => {
          const { root, waitForChanges } = await newSpecPage({
            components: [
              SaltAccordionGroup,
              SaltAccordion,
              SaltAccordionHeader,
              SaltAccordionPanel,
            ],
            template: () => (
              <salt-accordion-group exclusive={true}>
                <salt-accordion id="accordion-one">
                  <salt-accordion-header id="header-one" controls="panel-one">
                    Title One
                  </salt-accordion-header>
                  <salt-accordion-panel id="panel-one" labelledBy="header-one">
                    Some content
                  </salt-accordion-panel>
                </salt-accordion>
                <salt-accordion id="accordion-two" is-open={true}>
                  <salt-accordion-header id="header-two" controls="panel-two">
                    Title Two
                  </salt-accordion-header>
                  <salt-accordion-panel id="panel-two" labelledBy="header-two">
                    Some content
                  </salt-accordion-panel>
                </salt-accordion>
              </salt-accordion-group>
            ),
          });
          const firstAccordion = root.querySelector<HTMLSaltAccordionElement>('#accordion-one');
          const secondAccordion = root.querySelector<HTMLSaltAccordionElement>('#accordion-two');

          const firstButton = firstAccordion.querySelector<HTMLButtonElement>('button');
          const secondButton = secondAccordion.querySelector<HTMLButtonElement>('button');

          expect(firstButton.getAttribute('aria-expanded')).toBe('false');
          expect(secondButton.getAttribute('aria-expanded')).toBe('true');

          firstButton.click();

          await waitForChanges();

          expect(firstButton.getAttribute('aria-expanded')).toBe('true');
          expect(secondButton.getAttribute('aria-expanded')).toBe('false');
        });
      });
    });
  });

  describe('Methods', () => {
    describe('expandAll', () => {
      it('Should expand all accordions if exclusive is false', async () => {
        const { root, waitForChanges } = await newSpecPage({
          components: [SaltAccordionGroup, SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
          template: () => (
            <salt-accordion-group>
              <salt-accordion id="accordion-one">
                <salt-accordion-header id="header-one" controls="panel-one">
                  Title One
                </salt-accordion-header>
                <salt-accordion-panel id="panel-one" labelledBy="header-one">
                  Some content
                </salt-accordion-panel>
              </salt-accordion>
              <salt-accordion id="accordion-two" is-open={true}>
                <salt-accordion-header id="header-two" controls="panel-two">
                  Title Two
                </salt-accordion-header>
                <salt-accordion-panel id="panel-two" labelledBy="header-two">
                  Some content
                </salt-accordion-panel>
              </salt-accordion>
            </salt-accordion-group>
          ),
        });
        const buttonOne = root.querySelector<HTMLButtonElement>('#accordion-one button');
        const buttonTwo = root.querySelector<HTMLButtonElement>('#accordion-two button');

        await root.expandAll();
        await waitForChanges();

        expect(buttonOne.getAttribute('aria-expanded')).toEqual('true');
        expect(buttonTwo.getAttribute('aria-expanded')).toEqual('true');
      });

      it('Should do nothing if exclusive is true', async () => {
        const { root, waitForChanges } = await newSpecPage({
          components: [SaltAccordionGroup, SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
          template: () => (
            <salt-accordion-group exclusive={true}>
              <salt-accordion id="accordion-one">
                <salt-accordion-header id="header-one" controls="panel-one">
                  Title One
                </salt-accordion-header>
                <salt-accordion-panel id="panel-one" labelledBy="header-one">
                  Some content
                </salt-accordion-panel>
              </salt-accordion>
              <salt-accordion id="accordion-two" is-open={true}>
                <salt-accordion-header id="header-two" controls="panel-two">
                  Title Two
                </salt-accordion-header>
                <salt-accordion-panel id="panel-two" labelledBy="header-two">
                  Some content
                </salt-accordion-panel>
              </salt-accordion>
            </salt-accordion-group>
          ),
        });
        const buttonOne = root.querySelector<HTMLButtonElement>('#accordion-one button');
        const buttonTwo = root.querySelector<HTMLButtonElement>('#accordion-two button');

        await root.expandAll();
        await waitForChanges();

        expect(buttonOne.getAttribute('aria-expanded')).toBe('false');
        expect(buttonTwo.getAttribute('aria-expanded')).toBe('true');
      });
    });

    describe('collapseAll', () => {
      it('Should collapse all accordions', async () => {
        const { root, waitForChanges } = await newSpecPage({
          components: [SaltAccordionGroup, SaltAccordion, SaltAccordionHeader, SaltAccordionPanel],
          template: () => (
            <salt-accordion-group>
              <salt-accordion id="accordion-one" is-open={true}>
                <salt-accordion-header id="header-one" controls="panel-one">
                  Title One
                </salt-accordion-header>
                <salt-accordion-panel id="panel-one" labelledBy="header-one">
                  Some content
                </salt-accordion-panel>
              </salt-accordion>
              <salt-accordion id="accordion-two" is-open={true}>
                <salt-accordion-header id="header-two" controls="panel-two">
                  Title Two
                </salt-accordion-header>
                <salt-accordion-panel id="panel-two" labelledBy="header-two">
                  Some content
                </salt-accordion-panel>
              </salt-accordion>
            </salt-accordion-group>
          ),
        });
        const buttonOne = root.querySelector<HTMLButtonElement>('#accordion-one button');
        const buttonTwo = root.querySelector<HTMLButtonElement>('#accordion-two button');

        expect(buttonOne.getAttribute('aria-expanded')).toBe('true');
        expect(buttonTwo.getAttribute('aria-expanded')).toBe('true');

        await root.collapseAll();
        await waitForChanges();

        expect(buttonOne.getAttribute('aria-expanded')).toBe('false');
        expect(buttonTwo.getAttribute('aria-expanded')).toBe('false');
      });
    });
  });
});
