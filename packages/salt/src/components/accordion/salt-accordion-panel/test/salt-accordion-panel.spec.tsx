import { Fragment, h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { SaltAccordionPanel } from '../salt-accordion-panel';

describe('salt-accordion-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SaltAccordionPanel],
      template: () => (
        <Fragment>
          <salt-accordion-header id="header" controls="panel"></salt-accordion-header>
          <salt-accordion-panel id="panel" labelledBy="header"></salt-accordion-panel>
        </Fragment>
      ),
    });
    expect(page.root).toBeTruthy();
  });

  describe('Accessibility', () => {
    it('Should have a role attribute of region a and aria labelled by attribute', async () => {
      const headerId = 'header';
      const { root } = await newSpecPage({
        components: [SaltAccordionPanel],
        template: () => (
          <Fragment>
            <salt-accordion-header id={headerId} controls="panel"></salt-accordion-header>
            <salt-accordion-panel id="panel" labelledBy={headerId}></salt-accordion-panel>
          </Fragment>
        ),
      });

      const overflowElement = root.querySelector('.salt-accordion-panel-overflow');
      const role = overflowElement.getAttribute('role');
      const labelledBy = overflowElement.getAttribute('aria-labelledby');

      expect(role).toEqual('region');
      expect(labelledBy).toEqual(headerId);
    });

    it('Should have an aria labelled by attribute', async () => {});
  });

  describe('Properties', () => {
    describe('labelledBy', () => {
      it('Should require the labelledBy attribute', async () => {
        let message = 'no error';

        try {
          await newSpecPage({
            components: [SaltAccordionPanel],
            // @ts-ignore
            template: () => <salt-accordion-panel></salt-accordion-panel>,
          });
        } catch (e) {
          message = e.message;
        }

        expect(message).toBe('You must proved the `labelledBy` property.');
      });

      it('Should have the labelledBy element in the DOM', async () => {
        let message = 'no error';

        try {
          await newSpecPage({
            components: [SaltAccordionPanel],
            template: () => <salt-accordion-panel labelledBy="header"></salt-accordion-panel>,
          });
        } catch (e) {
          message = e.message;
        }

        expect(message).toBe('The `labelledBy` element does not exist in the DOM.');
      });
    });
  });
});
