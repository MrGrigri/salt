# Salt

A WCAG 2.1 compliant component library.

## Technologies

### NPM Workspaces

This repo utilizes [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) and all `package.json` files have a scope to them.

Run `npm -ls -ws` to see the workspaces.

### Typescript

This repo also utilizes Typescript `paths` compiler option. These can be found in the base [tsconfig file](tsconfig.base.json).

### Stencil JS

The main [documentation](https://stenciljs.com/docs/introduction) for Stencil should be understood and the [styling guide](https://stenciljs.com/docs/styling) should be followed.

### Stencil Middleware

Stencil does not generate Angular Standalone Components properly. Because of this, a [middleware script](packages/salt/scripts/fix-angular-standalone-components.ts) had to be created that modifies the import statement's file location for the `Components` module. It will prefix the imported statement with `/* Import rewritten by fixAngularStandaloneComponents */` and write to the console (`Imports were rewritten.`) at the end of the build step.

Change from this:

```typescript
import type { Components } from "@richkode/salt/components";
```

To this:

```typescript
/* Import rewritten by fixAngularStandaloneComponents */
import type { Components } from "@richkode/salt";
```

## Recommended VSCode Extensions

### NrWl (NX)

This repo utilizes NPM workspaces and the NX extension will understand said workspaces. You can also run any of the tasks for any of the packages and applications.

## Packages

Any package namespaced with `@local/*` are local to this repo and set the `private` property to `true` so they are never published to NPM.

Any package namespaced with `@richkode/*` are publishable libraries and are published to NPM.

### `@local/angular`

Angular project that has the `@richkode/salt-angular` and `@richkode/salt-angular-standalone` libraries. There are two applications in this project `angular-web` and `angular-web-standalone`. These are to test the adoption of the `@richkode/salt-angular` and `@richkode/salt-angular-standalone` respectively.

### `@local/root`

This is the base package.

### `@richkode/salt`

The base StencilJs library of components.

### `@richkode/salt-angular`

The Angular library wrapper for `@richkode/salt` for Angular module-based applications.

### `@richkode/salt-angular-standalone`

The Angular library wrapper for `@richkode/salt` for Angular standalone-based applications.
