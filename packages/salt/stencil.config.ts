import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { _fixAngularStandaloneComponents } from './scripts/fix-angular-standalone-components';
import { OutputTarget } from '@stencil/core/internal';

const Scope = '@richkode';
const Namespace = 'salt';
const AngularLib = 'angular/projects/salt-angular/src/lib/stencil-generated';
const AngularStandaloneLib = 'angular/projects/salt-angular-standalone/src/lib/stencil-generated-standalone';

const DistOutput: OutputTarget = {
  type: 'dist',
  esmLoaderPath: '../loader',
};
const DistCustomElements: OutputTarget = {
  type: 'dist-custom-elements',
  customElementsExportBehavior: 'auto-define-custom-elements',
  externalRuntime: false,
};
const DistReadMe: OutputTarget = {
  type: 'docs-readme',
};
const DistVsCode: OutputTarget = {
  type: 'docs-vscode',
  file: '../../.vscode/salt-components.json',
};
const DistSsr: OutputTarget = {
  type: 'dist-hydrate-script',
};
const DistAngularModule: OutputTarget = angularOutputTarget({
  componentCorePackage: `${Scope}/${Namespace}`,
  outputType: 'component',
  directivesProxyFile: `../${AngularLib}/components.ts`,
  directivesArrayFile: `../${AngularLib}/index.ts`,
});
const DistAngularStandalone: OutputTarget = angularOutputTarget({
  componentCorePackage: `${Scope}/${Namespace}`,
  outputType: 'standalone',
  directivesProxyFile: `../${AngularStandaloneLib}/components.ts`,
  directivesArrayFile: `../${AngularStandaloneLib}/index.ts`,
});
const DistFixAngularStandalone: OutputTarget = _fixAngularStandaloneComponents({
  componentCorePackage: `${Scope}/${Namespace}`,
  directivesProxyFile: `../../${AngularStandaloneLib}/components.ts`,
});

export const config: Config = {
  namespace: Namespace,
  outputTargets: [DistOutput, DistCustomElements, DistReadMe, DistVsCode, DistSsr, DistAngularModule, DistAngularStandalone, DistFixAngularStandalone],
  testing: { browserHeadless: 'new' },
};
