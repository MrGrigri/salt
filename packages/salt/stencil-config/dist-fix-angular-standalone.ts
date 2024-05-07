import { OutputTargetCustom } from '@stencil/core/internal';
import { _fixAngularStandaloneComponents } from '../scripts/fix-angular-standalone-components';
import { AngularStandaloneDir, Namespace, Scope } from './constants';

export const DistFixAngularStandalone: OutputTargetCustom = _fixAngularStandaloneComponents({
  componentCorePackage: `${Scope}/${Namespace}`,
  directivesProxyFile: `../../${AngularStandaloneDir}/components.ts`,
});
