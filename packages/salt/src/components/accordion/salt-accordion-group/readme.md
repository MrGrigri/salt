# accordion-group

## Properties

- `exclusive: boolean = false`: If true, the accordion group will act like a radio selection and only allow for one panel to be opened at a time.
- `wrap: boolean = false`: If true, the focus cycle with the arrow up and down keys will wrap to the first or last header.

## Events

- `open`: The current panel that has opened.
- `close`: The current panel that has closed.

## Methods

- `expand`: If exclusive is false, then this will open all of the panels.
- `collapse`: This will close all of the panels.

## Keyboard Interaction

- `Enter` or `Space`: When focused, will expand/collapse the current accordion. And, when the prop is exclusive, will collapse all others.
- `Tab`: Moves focus either into the currently expanded panel, or to the next header.
- `Shift + Tab`: Moves focus either to outside the currently expanded panel, or to the previous header.
- `Down`: Cycles between headers and will wrap to the first header if the `wrap` property is set to true.
- `Up`: Cycles between headers and will wrap to the last header if the `wrap` property is set to true.
- `Home`: Will set the focus to the first header.
- `End`: Will set the focus to the last header.

## Errors

- `NoChildren`: This will throw if no child elements are found.
- `IncorrectChildren`: This will throw if direct children are not `HTMLSaltAccordion` elements.

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default |
| ----------- | ----------- | ----------- | --------- | ------- |
| `exclusive` | `exclusive` |             | `boolean` | `false` |


## Methods

### `collapseAll() => Promise<void>`

This will close all of the panels.

#### Returns

Type: `Promise<void>`



### `expandAll() => Promise<void>`

If `exclusive` is false, then this will open all of the panels.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
