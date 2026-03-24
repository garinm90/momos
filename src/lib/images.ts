const OPTIMIZABLE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

export function getOptimizedImageSources(src: string, widths: number[] = []) {
  const match = src.match(/(\.[^.]+)$/);
  const extension = match?.[1]?.toLowerCase();

  if (!extension || !OPTIMIZABLE_EXTENSIONS.has(extension)) {
    return null;
  }

  const basePath = src.slice(0, -extension.length);
  const normalizedWidths = [...new Set(widths)]
    .filter((width) => Number.isInteger(width) && width > 0)
    .sort((a, b) => a - b);

  return {
    original: src,
    webp: `${basePath}.webp`,
    srcSet: normalizedWidths.length
      ? normalizedWidths.map((width) => `${basePath}-${width}w.webp ${width}w`).join(', ')
      : undefined
  };
}
