# Image Requirements

## Profile Image
- **Path**: `/public/profile-photo.jpg`
- **Size**: Recommended 400x400px or larger (square)
- **Format**: JPG or PNG
- **Usage**: Hero section profile photo

## Project Images
Place all project images in the `/public` folder with the following naming convention:

### Personal Projects:
- `/public/project-rentease.jpg`
- `/public/project-furniture.jpg`
- `/public/project-shopez.jpg`
- `/public/project-ewallet.jpg`
- `/public/project-expense.jpg`

### Client Projects - Appmaker:
- `/public/project-gnc.jpg`
- `/public/project-bombay.jpg`
- `/public/project-kalki.jpg`
- `/public/project-vilvah.jpg`
- `/public/project-voyage.jpg`
- `/public/project-bellavita.jpg`
- `/public/project-masaba.jpg`
- `/public/project-rare.jpg`
- `/public/project-renee.jpg`
- `/public/project-thriveco.jpg`
- `/public/project-fashor.jpg`
- `/public/project-supertails.jpg`
- `/public/project-zouk.jpg`

### Client Projects - CLI:
- `/public/project-midshires.jpg`
- `/public/project-printbind.jpg`

## Image Specifications
- **Recommended Size**: 1200x800px or similar aspect ratio
- **Format**: JPG (optimized) or PNG
- **File Size**: Keep under 500KB per image for optimal performance
- **Content**: Screenshots, mockups, or app previews

## Fallback Behavior
If an image is missing, the app will automatically show:
- Profile: Initials "AP" in a gradient circle
- Projects: First letter of project title in a gradient background

## Notes
- All images are lazy-loaded for better performance
- Images will gracefully fallback if they fail to load
- Use descriptive alt text (already implemented in code)

