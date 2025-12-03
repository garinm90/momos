# Image Mapping for Momo's Pretzels Website

This document outlines how the 29 compressed images should be named and used throughout the website.

## Image Naming Structure

### Logo & Branding
- **logo.jpg** - Momo's Pretzels logo (already in use in Navigation.astro)

### Homepage Images (index.astro)
1. **hero-pretzels.jpg** - Main hero section image showing fresh golden pretzels
2. **classic-salted-pretzel.jpg** - Featured pretzel card #1
3. **cinnamon-sugar-pretzel.jpg** - Featured pretzel card #2
4. **everything-pretzel.jpg** - Featured pretzel card #3
5. **momo-baker.jpg** - About teaser section showing Momo at work

### About Page Images (about.astro)
6. **momo-portrait.jpg** - Hero section portrait of Momo
7. **gallery-hands-twisting.jpg** - Gallery photo showing hand-twisting
8. **gallery-dough-rising.jpg** - Gallery photo of dough rising
9. **gallery-oven-baking.jpg** - Gallery photo of pretzels in oven
10. **gallery-market-display.jpg** - Gallery photo of market booth display
11. **gallery-salting.jpg** - Gallery photo of salting process
12. **gallery-customers.jpg** - Gallery photo of happy customers
13. **gallery-ingredients.jpg** - Gallery photo of fresh ingredients
14. **gallery-cooling-rack.jpg** - Gallery photo of pretzels cooling

### Menu Page Images (menu.astro)
15. **menu-salted-pretzel.jpg** - Classic salted pretzel product shot
16. **menu-pretzel-dog.jpg** - Pretzel dog product shot
17. **menu-bratwurst.jpg** - Pretzel-wrapped bratwurst product shot
18. **menu-original-lemonade.jpg** - Original lemonade drink photo
19. **menu-strawberry-lemonade.jpg** - Strawberry lemonade drink photo
20. **menu-water.jpg** - Bottled water product shot

### Find Us Page Images (find-us.astro)
21. **farmers-market-booth.jpg** - Hero image showing the market booth with customers

### Reviews Page Images (reviews.astro)
22. **happy-customers.jpg** - Hero image showing customers enjoying pretzels

### Contact Page Images (contact.astro)
23. **contact-welcome.jpg** - Hero image showing welcoming market scene

### Additional Images (for future use or variations)
24-29. Reserve 6 images for:
- Seasonal pretzel varieties
- Additional behind-the-scenes shots
- Event/catering photos
- Process documentation
- Alternate hero images
- Social media/marketing materials

## Image Specifications

### Technical Requirements
- Format: JPG (compressed)
- Location: `/public/images/`
- Web path: `/images/filename.jpg`
- All images should be optimized/compressed for web

### Responsive Sizing
- Hero images: Minimum 1200px wide
- Product cards: Minimum 800px wide
- Gallery images: Minimum 600px square
- Mobile: Images will scale responsively via CSS

### Accessibility
- All images have descriptive alt text
- Alt text describes what's visible in the image
- Focus on pretzel products, baking process, and community

## Image Usage by Page

### Homepage (/)
- 5 images total
- Hero, 3 featured products, 1 about teaser

### About (/about)
- 9 images total
- 1 hero portrait, 8 gallery images

### Menu (/menu)
- 6 images total
- 3 food items, 3 drinks

### Find Us (/find-us)
- 1 image
- Market booth scene

### Reviews (/reviews)
- 1 image
- Happy customers

### Contact (/contact)
- 1 image
- Welcoming scene

## Performance Optimization

### Loading Strategy
- Hero images: `loading="eager"` (above the fold)
- All other images: `loading="lazy"` (below the fold)
- Product card images: `loading="lazy"`
- Gallery images: `loading="lazy"`

### CSS Classes Used
- `object-cover` - Maintains aspect ratio while filling container
- `hover:scale-105` - Subtle zoom effect on hover
- `transition-transform` - Smooth animation
- Responsive aspect ratios via Tailwind classes

## Implementation Status

All page files have been updated with:
- Proper image paths
- Descriptive alt text for accessibility
- Responsive image containers
- Hover effects and transitions
- Lazy loading where appropriate
- Mobile-first responsive layouts

## Next Steps

1. Verify all 29 compressed images exist in `/public/images/`
2. Rename images to match the naming structure above
3. Test all pages to ensure images load correctly
4. Verify responsive behavior on mobile, tablet, and desktop
5. Check accessibility with screen readers
6. Optimize any images that are too large (>200KB ideally)
