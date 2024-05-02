import { OutputTargetDist } from '@stencil/core/internal';

export const DistOutput: OutputTargetDist = {
  type: 'dist',
  esmLoaderPath: '../loader',
  isPrimaryPackageOutputTarget: true,
};
