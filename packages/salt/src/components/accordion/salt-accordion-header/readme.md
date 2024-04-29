# salt-accordion-header



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute       | Description | Type                         | Default     |
| ----------------------- | --------------- | ----------- | ---------------------------- | ----------- |
| `controls` _(required)_ | `controls`      |             | `string`                     | `undefined` |
| `iconPosition`          | `icon-position` |             | `"end" \| "start"`           | `'end'`     |
| `isDisabled`            | `is-disabled`   |             | `boolean`                    | `false`     |
| `isOpen`                | `is-open`       |             | `boolean`                    | `false`     |
| `level`                 | `level`         |             | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `3`         |


## Events

| Event        | Description | Type                                    |
| ------------ | ----------- | --------------------------------------- |
| `salt-click` |             | `CustomEvent<SaltAccordionHeaderClick>` |


## Methods

### `setDisabledState(state: boolean) => Promise<boolean>`

Sets the disabled state. This should only be used internally. Please do not use this method as an end-developer. Use the `setDisabledState(state: boolean)` method on the HTMLSaltAccordionElement

#### Parameters

| Name    | Type      | Description                               |
| ------- | --------- | ----------------------------------------- |
| `state` | `boolean` | - The state to set the disabled state to. |

#### Returns

Type: `Promise<boolean>`

- The new disabled state

### `setOpenState(state: boolean) => Promise<boolean>`

Sets the open state. This should only be used internally. Please do not use this method as an end-developer. Use the `setOpenState(state: boolean)` method on the HTMLSaltAccordionElement

#### Parameters

| Name    | Type      | Description                           |
| ------- | --------- | ------------------------------------- |
| `state` | `boolean` | - The state to set the open state to. |

#### Returns

Type: `Promise<boolean>`

- The new open state


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
