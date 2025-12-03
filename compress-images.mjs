import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const INPUT_DIR = './public/images';
const OUTPUT_DIR = './public/images';
const MAX_WIDTH = 1200;
const JPG_QUALITY = 75;
const WEBP_QUALITY = 75;

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

      const resizeOpts = metadata.width > MAX_WIDTH
        ? { width: MAX_WIDTH }
        : {};

      // Generate WebP version
      await image
        .resize(resizeOpts)
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath);

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

function formatSize(bytes) {
  if (bytes < 1024) return bytes + 'B';
  if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + 'KB';
  return (bytes / (1024 * 1024)).toFixed(1) + 'MB';
}

compressImages();
