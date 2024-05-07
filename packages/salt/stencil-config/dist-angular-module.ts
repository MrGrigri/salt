import { angularOutputTarget } from '@stencil/angular-output-target';
import { OutputTargetCustom } from '@stencil/core/internal';
import { AngularDir, Namespace, Scope } from './constants';

export const DistAngularModule: OutputTargetCustom = angularOutputTarget({
  componentCorePackage: `${Scope}/${Namespace}`,
  outputType: 'component',
  directivesProxyFile: `../${AngularDir}/components.ts`,
  directivesArrayFile: `../${AngularDir}/index.ts`,
});
