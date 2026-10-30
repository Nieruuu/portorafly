import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
for (const image of ['taxmap', 'laravelblog', 'automation']) {
  const source = fileURLToPath(new URL(`../assets/projects/${image}.png`, import.meta.url));
  const output = fileURLToPath(new URL(`../assets/projects/${image}.webp`, import.meta.url));
  await sharp(source).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 82 }).toFile(output);
}
