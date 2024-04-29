import { OutputTargetDocsVscode } from '@stencil/core/internal';
import { VsCodeSettingsDir } from './constants';

export const DistVsCode: OutputTargetDocsVscode = {
  type: 'docs-vscode',
  file: VsCodeSettingsDir,
};
