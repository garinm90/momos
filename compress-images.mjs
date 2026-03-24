import sharp from 'sharp';
import { readdir, mkdir, stat, access } from 'fs/promises';
import { constants } from 'fs';
import { join, extname, basename } from 'path';

const INPUT_DIR = './public/images';
const OUTPUT_DIR = './public/images';
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 75;
const RESPONSIVE_WIDTHS = [400, 800, 1200, 1600];

async function compressImages() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter(f =>
    /\.(jpg|jpeg|png)$/i.test(f) && !f.endsWith('.webp')
  );

  console.log(`Found ${imageFiles.length} images to compress...\n`);

  let totalOriginal = 0;
  let totalWebp = 0;

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const name = basename(file, extname(file));
    const webpPath = join(OUTPUT_DIR, `${name}.webp`);

    try {
      const originalStats = await stat(inputPath);
      totalOriginal += originalStats.size;

      const image = sharp(inputPath);
      const metadata = await image.metadata();

      const resizeOpts = metadata.width && metadata.width > MAX_WIDTH
        ? { width: MAX_WIDTH }
        : {};

      if (await needsWrite(inputPath, webpPath)) {
        await image
          .clone()
          .resize({ ...resizeOpts, withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(webpPath);
      }

      const variantWidths = RESPONSIVE_WIDTHS.filter((width) => !metadata.width || width <= MAX_WIDTH);

      for (const width of variantWidths) {
        const variantPath = join(OUTPUT_DIR, `${name}-${width}w.webp`);

        if (!(await needsWrite(inputPath, variantPath))) {
          continue;
        }

        await image
          .clone()
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
          .toFile(variantPath);
      }

      const webpStats = await stat(webpPath);
      totalWebp += webpStats.size;

      const savings = Math.round((1 - webpStats.size / originalStats.size) * 100);
      console.log(`✓ ${file} → ${name}.webp (${formatSize(originalStats.size)} → ${formatSize(webpStats.size)}, -${savings}%)`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }

  console.log(`\n✨ Done! Generated ${imageFiles.length} WebP images`);
  console.log(`   Original total: ${formatSize(totalOriginal)}`);
  console.log(`   WebP total: ${formatSize(totalWebp)}`);
  console.log(`   Savings: ${formatSize(totalOriginal - totalWebp)} (${Math.round((1 - totalWebp / totalOriginal) * 100)}%)`);
}

async function needsWrite(inputPath, outputPath) {
  try {
    await access(outputPath, constants.F_OK);
  } catch {
    return true;
  }

  const [inputStats, outputStats] = await Promise.all([stat(inputPath), stat(outputPath)]);
  return inputStats.mtimeMs > outputStats.mtimeMs;
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + 'B';
  if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + 'KB';
  return (bytes / (1024 * 1024)).toFixed(1) + 'MB';
}

compressImages();
