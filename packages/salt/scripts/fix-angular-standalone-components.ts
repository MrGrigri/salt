import { Config } from '@stencil/core';
import { CompilerCtx, OutputTargetCustom } from '@stencil/core/internal';
import { resolve } from 'node:path';
import { promises as fs } from 'node:fs';

export type FixAngularStandaloneComponentsOptions = {
  componentCorePackage: string;
  directivesProxyFile: string;
};

const findAndReplaceComponentImport = (str: string, pkgName: string): string => {
  const regex = new RegExp("import type {([^}]+)} from '" + pkgName + "/components';", 'gm');
  const consoleText = '/* Import rewritten by fixAngularStandaloneComponents */';
  return str.replace(regex, consoleText + "\nimport type {$1} from '" + pkgName + "';");
};

const runFixAngularStandaloneComponents = async (
  options: FixAngularStandaloneComponentsOptions,
): Promise<void> => {
  const filePath = resolve(__dirname, options.directivesProxyFile);
  const file = await fs.readFile(filePath, { encoding: 'utf-8' });
  const importReplaced = findAndReplaceComponentImport(file, options.componentCorePackage);

  await fs.writeFile(filePath, importReplaced);

  console.log('Imports were rewritten.');
};

export const _fixAngularStandaloneComponents = (
  options: FixAngularStandaloneComponentsOptions,
): OutputTargetCustom => ({
  name: 'fix-angular-standalone-components',
  type: 'custom',
  generator: async (_config: Config, compilerCtx: CompilerCtx) => {
    compilerCtx.events.on('buildFinish', async () => {
      runFixAngularStandaloneComponents(options);
    });
  },
});
