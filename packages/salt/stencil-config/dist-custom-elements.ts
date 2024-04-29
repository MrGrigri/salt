import { OutputTargetDistCustomElements } from '@stencil/core/internal';

export const DistCustomElements: OutputTargetDistCustomElements = {
  type: 'dist-custom-elements',
  customElementsExportBehavior: 'auto-define-custom-elements',
  externalRuntime: false,
};
