import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const INPUT_DIR = './images';
const OUTPUT_DIR = './public/images';
const MAX_WIDTH = 1600;
const QUALITY = 80;

async function compressImages() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter(f =>
    /\.(jpg|jpeg|png|webp)$/i.test(f)
  );

  console.log(`Found ${imageFiles.length} images to compress...\n`);

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const name = basename(file, extname(file));
    const outputPath = join(OUTPUT_DIR, `${name}.jpg`);

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      const resizeOpts = metadata.width > MAX_WIDTH
        ? { width: MAX_WIDTH }
        : {};

      await image
        .resize(resizeOpts)
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(outputPath);

      const { size: newSize } = await sharp(outputPath).metadata();
      console.log(`✓ ${file} → ${name}.jpg`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }

  console.log('\nDone! Compressed images saved to public/images/');
}

compressImages();
