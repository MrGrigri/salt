import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { fixAngularStandaloneComponents } from './scripts/fix-angular-standalone-components';

const Scope = '@richkode';
const Namespace = 'salt';
const AngularLib = 'angular/projects/salt-angular/src/lib';

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
    angularOutputTarget({
      componentCorePackage: `${Scope}/${Namespace}`,
      outputType: 'component',
      directivesProxyFile: `../${AngularLib}/stencil-generated/components.ts`,
      directivesArrayFile: `../${AngularLib}/stencil-generated/index.ts`,
    }),
    angularOutputTarget({
      componentCorePackage: `${Scope}/${Namespace}`,
      outputType: 'standalone',
      directivesProxyFile: `../${AngularLib}/stencil-generated-standalone/components.ts`,
      directivesArrayFile: `../${AngularLib}/stencil-generated-standalone/index.ts`,
    }),
    fixAngularStandaloneComponents({
      componentCorePackage: `${Scope}/${Namespace}`,
      directivesProxyFile: `../../${AngularLib}/stencil-generated-standalone/components.ts`,
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
