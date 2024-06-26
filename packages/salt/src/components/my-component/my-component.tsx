import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    const text = format(this.first, this.middle, this.last);

    return text.length > 0 ? text : 'Stencil';
  }

  render() {
    return <div>Hello, World! I am {this.getText()}.</div>;
  }
}
