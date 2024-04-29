import { Config } from '@stencil/core';
import { CompilerCtx, OutputTargetCustom } from '@stencil/core/internal';
import { resolve } from 'node:path';
import { promises as fs } from 'node:fs';

export type FixAngularStandaloneComponentsOptions = {
  componentCorePackage: string;
  directivesProxyFile: string;
};

const runFixAngularStandaloneComponents = async (options: FixAngularStandaloneComponentsOptions): Promise<void> => {
  const filePath = resolve(__dirname, options.directivesProxyFile);
  const file = await fs.readFile(filePath, { encoding: 'utf-8' });
  const output = file.replace(
    `import type { Components } from '${options.componentCorePackage}/components';`,
    () => `/* Import rewritten by fixAngularStandaloneComponents */ \nimport type { Components } from '${options.componentCorePackage}';`,
  );

  await fs.writeFile(filePath, output);

  console.log('Imports were rewritten.');
};

export const _fixAngularStandaloneComponents = (options: FixAngularStandaloneComponentsOptions): OutputTargetCustom => ({
  name: 'fix-angular-standalone-components',
  type: 'custom',
  generator: async (_config: Config, compilerCtx: CompilerCtx) => {
    compilerCtx.events.on('buildFinish', async () => {
      runFixAngularStandaloneComponents(options);
    });
  },
});
