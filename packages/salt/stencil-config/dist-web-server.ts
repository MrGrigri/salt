import { OutputTargetWww } from '@stencil/core/internal';

export const DistWebServer: OutputTargetWww = {
  type: 'www',
  serviceWorker: null,
  copy: [{ src: 'web-server' }],
};
