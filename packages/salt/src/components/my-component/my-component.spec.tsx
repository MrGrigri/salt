import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      template: () => <my-component></my-component>,
    });
    const divElement: HTMLDivElement = root.shadowRoot.querySelector<HTMLDivElement>('div');

    expect(divElement).toBeTruthy();
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      template: () => <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>,
    });
    const divElement: HTMLDivElement = root.shadowRoot.querySelector<HTMLDivElement>('div');

    expect(divElement.innerText).toEqual("Hello, World! I am Stencil 'Don't call me a framework' JS");
  });
});
