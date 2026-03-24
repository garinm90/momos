import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const siteSettings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/site-settings' }),
  schema: z.object({
    businessName: z.string(),
    tagline: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    facebookUrl: z.string().url(),
    facebookReviewsUrl: z.string().url(),
    instagramUrl: z.string().url(),
    contactFormAction: z.string().url(),
    contactResponseTime: z.string()
  })
});

const media = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/media' }),
  schema: z.object({
    logoImage: z.string().startsWith('/images/'),
    logoAlt: z.string(),
    homeHeroImage: z.string().startsWith('/images/'),
    homeHeroAlt: z.string(),
    homeStoryImage: z.string().startsWith('/images/'),
    homeStoryAlt: z.string(),
    aboutHeroImage: z.string().startsWith('/images/'),
    aboutHeroAlt: z.string(),
    aboutGallery: z.array(
      z.object({
        image: z.string().startsWith('/images/'),
        alt: z.string()
      })
    ).min(1),
    findUsHeroImage: z.string().startsWith('/images/'),
    findUsHeroAlt: z.string(),
    contactHeroImage: z.string().startsWith('/images/'),
    contactHeroAlt: z.string(),
    reviewsHeroImage: z.string().startsWith('/images/'),
    reviewsHeroAlt: z.string()
  })
});

const homepage = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/homepage' }),
  schema: z.object({
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    heroBody: z.string(),
    findUsCtaLabel: z.string(),
    findUsCtaUrl: z.string(),
    menuCtaLabel: z.string(),
    menuCtaUrl: z.string(),
    featuredTitle: z.string(),
    featuredIntro: z.string(),
    findUsTitle: z.string(),
    findUsIntro: z.string(),
    reviewsTitle: z.string(),
    reviewsIntro: z.string(),
    storyTitle: z.string(),
    storyLead: z.string(),
    storyBody: z.string(),
    storyCtaLabel: z.string(),
    storyCtaUrl: z.string(),
    socialTitle: z.string(),
    socialBody: z.string(),
    featuredMenuItems: z.array(z.string()).min(1),
    featuredReviewItems: z.array(z.string()).min(1)
  })
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/locations' }),
  schema: z.object({
    name: z.string(),
    datesLabel: z.string(),
    venue: z.string(),
    address: z.string(),
    mapsUrl: z.string().url(),
    hours: z.array(
      z.object({
        days: z.string(),
        time: z.string()
      })
    ),
    isActive: z.boolean().default(true),
    sortOrder: z.number().int().nonnegative().default(0)
  })
});

const menu = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/menu' }),
  schema: z.object({
    category: z.enum(['food', 'drinks']),
    name: z.string(),
    description: z.string(),
    price: z.string(),
    image: z.string().startsWith('/images/').optional(),
    alt: z.string().optional(),
    badge: z.string().optional(),
    isAvailable: z.boolean().default(true),
    isFeatured: z.boolean().default(false),
    sortOrder: z.number().int().nonnegative().default(0)
  })
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/reviews' }),
  schema: z.object({
    author: z.string(),
    text: z.string(),
    stars: z.number().int().min(1).max(5),
    context: z.string().optional(),
    dateLabel: z.string().optional(),
    isFeatured: z.boolean().default(false),
    sortOrder: z.number().int().nonnegative().default(0)
  })
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    sortOrder: z.number().int().nonnegative().default(0)
  })
});

export const collections = {
  siteSettings,
  media,
  homepage,
  locations,
  menu,
  reviews,
  faqs
};
