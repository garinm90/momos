import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

function sortByOrder<T extends { id: string; data: { sortOrder?: number } }>(a: T, b: T) {
  return (a.data.sortOrder ?? 0) - (b.data.sortOrder ?? 0) || a.id.localeCompare(b.id);
}

function requireEntry<T>(entry: T | undefined | null, message: string): T {
  if (!entry) {
    throw new Error(message);
  }

  return entry;
}

export async function getSiteSettings() {
  const entry = await getEntry('siteSettings', 'general');
  return requireEntry(entry, 'Missing site settings content at src/content/site-settings/general.json').data;
}

export async function getMediaContent() {
  const entry = await getEntry('media', 'site-images');
  return requireEntry(entry, 'Missing media content at src/content/media/site-images.json').data;
}

export async function getHomepageContent() {
  const entry = await getEntry('homepage', 'home');
  return requireEntry(entry, 'Missing homepage content at src/content/homepage/home.json').data;
}

export async function getActiveLocations() {
  const entries = await getCollection('locations', ({ data }) => data.isActive);
  return entries.sort(sortByOrder);
}

export async function getMenuItems(category?: 'food' | 'drinks') {
  const entries = await getCollection(
    'menu',
    ({ data }) => data.isAvailable && (!category || data.category === category)
  );

  return entries.sort(sortByOrder);
}

export async function getFeaturedMenuItems(ids: string[]) {
  const entries = await Promise.all(ids.map((id) => getEntry('menu', id)));
  return entries.map((entry, index) =>
    requireEntry(entry, `Missing featured menu entry "${ids[index]}" referenced in homepage content`)
  );
}

export async function getReviews() {
  const entries = await getCollection('reviews');
  return entries.sort(sortByOrder);
}

export async function getFeaturedReviews(ids: string[]) {
  const entries = await Promise.all(ids.map((id) => getEntry('reviews', id)));
  return entries.map((entry, index) =>
    requireEntry(entry, `Missing featured review entry "${ids[index]}" referenced in homepage content`)
  );
}

export async function getFaqs() {
  const entries = await getCollection('faqs');
  return entries.sort(sortByOrder);
}

export function getAverageRating(reviews: CollectionEntry<'reviews'>[]) {
  if (reviews.length === 0) {
    return '0.0';
  }

  const total = reviews.reduce((sum, review) => sum + review.data.stars, 0);
  return (total / reviews.length).toFixed(1);
}

export function getRecommendPercent(reviews: CollectionEntry<'reviews'>[]) {
  if (reviews.length === 0) {
    return '0%';
  }

  const recommended = reviews.filter((review) => review.data.stars >= 4).length;
  return `${Math.round((recommended / reviews.length) * 100)}%`;
}
