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
