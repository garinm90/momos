# Quick Image Renaming Guide

## Instructions
If your 29 compressed images are currently named differently (like 1.jpg, 2.jpg, IMG_001.jpg, etc.), use this guide to rename them to match the website's requirements.

## Required Image Names (23 images)

### Homepage (5 images)
1. `hero-pretzels.jpg` - Main hero image showing fresh pretzels
2. `classic-salted-pretzel.jpg` - Classic pretzel with sea salt
3. `cinnamon-sugar-pretzel.jpg` - Sweet cinnamon sugar pretzel
4. `everything-pretzel.jpg` - Everything bagel style pretzel
5. `momo-baker.jpg` - Momo working or holding pretzels

### About Page (9 images)
6. `momo-portrait.jpg` - Portrait photo of Momo
7. `gallery-hands-twisting.jpg` - Hands shaping pretzel dough
8. `gallery-dough-rising.jpg` - Dough rising in bowls
9. `gallery-oven-baking.jpg` - Pretzels baking in oven
10. `gallery-market-display.jpg` - Pretzels at market booth
11. `gallery-salting.jpg` - Adding salt to pretzels
12. `gallery-customers.jpg` - Customers at the booth
13. `gallery-ingredients.jpg` - Baking ingredients (flour, butter, etc.)
14. `gallery-cooling-rack.jpg` - Pretzels on cooling rack

### Menu Page (6 images)
15. `menu-salted-pretzel.jpg` - Classic salted pretzel product shot
16. `menu-pretzel-dog.jpg` - Hot dog wrapped in pretzel dough
17. `menu-bratwurst.jpg` - Bratwurst wrapped in pretzel dough
18. `menu-original-lemonade.jpg` - Glass of lemonade
19. `menu-strawberry-lemonade.jpg` - Strawberry lemonade
20. `menu-water.jpg` - Bottled water

### Other Pages (3 images)
21. `farmers-market-booth.jpg` - Market booth with customers (Find Us page)
22. `happy-customers.jpg` - Customers enjoying pretzels (Reviews page)
23. `contact-welcome.jpg` - Welcoming booth scene (Contact page)

### Already in Use (1 image)
24. `logo.jpg` - Momo's Pretzels logo (already exists)

## Extra Images (5 remaining from your 29)
Use these for:
- Backup/alternate versions
- Seasonal specials
- Future menu items
- Social media content
- Marketing materials

Suggested names for extras:
- `extra-pretzel-1.jpg`
- `extra-pretzel-2.jpg`
- `extra-scene-1.jpg`
- `extra-scene-2.jpg`
- `extra-process-1.jpg`

## Matching Your Photos to Names

### If you have pretzel product photos:
- Close-up of pretzels → `hero-pretzels.jpg` or featured pretzel names
- Pretzels with salt → `classic-salted-pretzel.jpg` or `menu-salted-pretzel.jpg`
- Sweet pretzels → `cinnamon-sugar-pretzel.jpg`
- Variety of toppings → `everything-pretzel.jpg`

### If you have process/baking photos:
- Hands working dough → `gallery-hands-twisting.jpg`
- Dough in bowls → `gallery-dough-rising.jpg`
- Oven shots → `gallery-oven-baking.jpg`
- Ingredients → `gallery-ingredients.jpg`
- Finished pretzels → `gallery-cooling-rack.jpg` or `gallery-salting.jpg`

### If you have people photos:
- Baker/owner → `momo-portrait.jpg` or `momo-baker.jpg`
- Customers → `gallery-customers.jpg` or `happy-customers.jpg`

### If you have market/location photos:
- Booth setup → `farmers-market-booth.jpg`
- Market scene → `contact-welcome.jpg`
- Display of pretzels → `gallery-market-display.jpg`

### If you have drink photos:
- Lemonade → `menu-original-lemonade.jpg`
- Pink lemonade → `menu-strawberry-lemonade.jpg`
- Water → `menu-water.jpg`

### If you have food combo photos:
- Hot dog in pretzel → `menu-pretzel-dog.jpg`
- Sausage in pretzel → `menu-bratwurst.jpg`

## Image Quality Guidelines

### Good Images Have:
- Sharp focus
- Good lighting (natural light preferred)
- Clean backgrounds
- Warm, inviting colors
- Products as hero/main subject
- Professional but authentic feel

### Avoid:
- Blurry or out-of-focus shots
- Dark, underexposed images
- Cluttered backgrounds
- Unflattering angles
- Overly filtered/processed looks

## Priority Order

If you need to prioritize which images to get first:

### Critical (Must Have):
1. `hero-pretzels.jpg` - First thing visitors see
2. `classic-salted-pretzel.jpg` - Featured on homepage
3. `menu-salted-pretzel.jpg` - Main product
4. `momo-portrait.jpg` or `momo-baker.jpg` - About page hero

### High Priority:
5. `cinnamon-sugar-pretzel.jpg` - Homepage feature
6. `everything-pretzel.jpg` - Homepage feature
7. `farmers-market-booth.jpg` - Find Us page
8. Gallery images (any 4-6 of the 8)

### Medium Priority:
9. Menu drink images
10. Menu food variations
11. Remaining gallery images

### Low Priority:
12. Extra/backup images
13. Happy customers image
14. Contact welcome image

## Quick Renaming Commands

### On Mac/Linux:
```bash
# Example: Rename your file to the needed name
mv your-file-1.jpg hero-pretzels.jpg
mv your-file-2.jpg classic-salted-pretzel.jpg
# ... etc
```

### On Windows:
```cmd
# Example: Rename your file to the needed name
ren your-file-1.jpg hero-pretzels.jpg
ren your-file-2.jpg classic-salted-pretzel.jpg
# ... etc
```

### Batch Renaming:
Most operating systems have bulk rename tools:
- **Mac:** Right-click files → Rename X items
- **Windows:** Select files → Right-click → Rename
- **Linux:** Use `rename` command or file manager

## Verification Checklist

After renaming, verify:
- [ ] All 23 required image files are present in `/public/images/`
- [ ] Files are named exactly as shown (case-sensitive on some systems)
- [ ] Files are in JPG format
- [ ] Images are web-optimized (ideally under 200KB each)
- [ ] No spaces in filenames (use hyphens instead)
- [ ] All lowercase filenames

## Testing After Renaming

1. Start your development server
2. Visit each page:
   - Homepage (/)
   - About (/about)
   - Menu (/menu)
   - Find Us (/find-us)
   - Reviews (/reviews)
   - Contact (/contact)
3. Check that all images load correctly
4. Test on mobile, tablet, and desktop views
5. Verify hover effects work
6. Check page load speed

## Need Help?

If images don't appear:
1. Check the browser console for 404 errors
2. Verify file names match exactly (including case)
3. Ensure files are in `/public/images/` directory
4. Clear browser cache and reload
5. Restart development server

## Alternative Approach

If you don't have 23 different photos yet, you can:
1. Use your best pretzel photo for multiple purposes
2. Temporarily duplicate images with different names
3. Add more photos gradually as you take them
4. Focus on having at least the "Critical" images first

The website will still look good with fewer unique images - consistency and quality matter more than quantity.
