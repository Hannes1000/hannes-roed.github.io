import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const serverDirectory = resolve('dist/server');
const hostingDirectory = resolve('dist/.openai');
const workerEntry = `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
`;

await mkdir(serverDirectory, { recursive: true });
await mkdir(hostingDirectory, { recursive: true });
await writeFile(resolve(serverDirectory, 'index.js'), workerEntry, 'utf8');
await copyFile(resolve('.openai/hosting.json'), resolve(hostingDirectory, 'hosting.json'));
