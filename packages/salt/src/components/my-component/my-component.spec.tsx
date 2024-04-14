import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders with default values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      template: () => <my-component></my-component>,
    });
    const divElement: HTMLDivElement = root.shadowRoot.querySelector<HTMLDivElement>('div');

    expect(divElement.innerText).toEqual('Hello, World! I am Stencil.');
  });

  it('renders with provided values', async () => {
    const first = 'Stencil';
    const last = "'Don't call me a framework' JS";
    const { root } = await newSpecPage({
      components: [MyComponent],
      template: () => <my-component first={first} last={last}></my-component>,
    });
    const divElement: HTMLDivElement = root.shadowRoot.querySelector<HTMLDivElement>('div');

    expect(divElement.innerText).toEqual(`Hello, World! I am ${first} ${last}.`);
  });
});
