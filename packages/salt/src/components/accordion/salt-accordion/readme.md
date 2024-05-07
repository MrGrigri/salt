# salt-accordion



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type      | Default |
| ------------ | ------------- | ----------- | --------- | ------- |
| `isDisabled` | `is-disabled` |             | `boolean` | `false` |
| `isOpen`     | `is-open`     |             | `boolean` | `false` |


## Events

| Event         | Description                                          | Type                               |
| ------------- | ---------------------------------------------------- | ---------------------------------- |
| `salt-close`  | Event fired when the accordion has closed            | `CustomEvent<SaltAccordionClose>`  |
| `salt-open`   | Event fired when the accordion has opened            | `CustomEvent<SaltAccordionOpen>`   |
| `salt-toggle` | Event fired when the accordion has toggled its state | `CustomEvent<SaltAccordionToggle>` |


## Methods

### `setDisabledState(state: boolean) => Promise<boolean>`



#### Parameters

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| `state` | `boolean` |             |

#### Returns

Type: `Promise<boolean>`



### `setOpenState(state: boolean) => Promise<boolean>`



#### Parameters

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| `state` | `boolean` |             |

#### Returns

Type: `Promise<boolean>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
