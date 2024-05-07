import { angularOutputTarget } from '@stencil/angular-output-target';
import { OutputTargetCustom } from '@stencil/core/internal';
import { AngularStandaloneDir, Namespace, Scope } from './constants';

export const DistAngularStandalone: OutputTargetCustom = angularOutputTarget({
  componentCorePackage: `${Scope}/${Namespace}`,
  outputType: 'standalone',
  directivesProxyFile: `../${AngularStandaloneDir}/components.ts`,
  directivesArrayFile: `../${AngularStandaloneDir}/index.ts`,
});
