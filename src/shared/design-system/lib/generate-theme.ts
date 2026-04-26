import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { buildThemeCss } from './buildThemeCss';

const currentDir = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(currentDir, '../tokens/build/theme.css');
writeFileSync(outputPath, buildThemeCss());
