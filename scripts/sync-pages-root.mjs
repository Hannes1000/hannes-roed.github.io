import { cp, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(repoRoot, 'dist');

await cp(join(dist, 'index.html'), join(repoRoot, 'index.html'));
await rm(join(repoRoot, 'assets'), { recursive: true, force: true });
await cp(join(dist, 'assets'), join(repoRoot, 'assets'), { recursive: true });

for (const file of [
  'favicon.svg',
  'og-image.svg',
  'cv-hannes-roed.pdf',
  'bachelor-thesis-hannes-roed.pdf',
  'bachelor-presentation-hannes-roed.pdf',
]) {
  await cp(join(dist, file), join(repoRoot, file));
}
