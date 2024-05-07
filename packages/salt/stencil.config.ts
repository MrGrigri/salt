import { Config } from '@stencil/core';
import {
  DistAngularModule,
  DistAngularStandalone,
  DistCustomElements,
  DistFixAngularStandalone,
  DistOutput,
  DistReadMe,
  DistSsr,
  DistVsCode,
  DistWebServer,
} from './stencil-config';
import { Namespace } from './stencil-config/constants';

export const config: Config = {
  namespace: Namespace,
  outputTargets: [
    DistOutput,
    DistCustomElements,
    DistReadMe,
    DistVsCode,
    DistWebServer,
    DistSsr,
    DistAngularModule,
    DistAngularStandalone,
    DistAngularStandalone,
    DistFixAngularStandalone,
  ],
  testing: { browserHeadless: 'new' },
  extras: {
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true,
  },
  validatePrimaryPackageOutputTarget: true,
};
