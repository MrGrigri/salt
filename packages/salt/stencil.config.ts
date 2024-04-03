import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'salt',
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
      componentCorePackage: '@richkode/salt',
      outputType: 'component',
      directivesProxyFile: '../angular/projects/salt-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/salt-angular/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
