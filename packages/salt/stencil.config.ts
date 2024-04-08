import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { fixAngularStandaloneComponents } from './scripts/fix-angular-standalone-components';

const Scope = '@richkode';
const Namespace = 'salt';
const AngularLib = 'angular/projects/salt-angular/src/lib/stencil-generated';
const AngularStandaloneLib = 'angular/projects/salt-angular-standalone/src/lib/stencil-generated-standalone';

export const config: Config = {
  namespace: Namespace,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    // Angular Module Library
    angularOutputTarget({
      componentCorePackage: `${Scope}/${Namespace}`,
      outputType: 'component',
      directivesProxyFile: `../${AngularLib}/components.ts`,
      directivesArrayFile: `../${AngularLib}/index.ts`,
    }),
    // Angular Standalone Library
    angularOutputTarget({
      componentCorePackage: `${Scope}/${Namespace}`,
      outputType: 'standalone',
      directivesProxyFile: `../${AngularStandaloneLib}/components.ts`,
      directivesArrayFile: `../${AngularStandaloneLib}/index.ts`,
    }),
    fixAngularStandaloneComponents({
      componentCorePackage: `${Scope}/${Namespace}`,
      directivesProxyFile: `../../${AngularStandaloneLib}/components.ts`,
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
