# 🖼️ Image Optimization Guide

## Current Images in Project

### Active Images:
1. `WhatsApp Image 2025-01-29 at 10.11.27 (1).jpeg` - Profile image (Hero section)
2. `Captura de pantalla 2025-10-07 164704.png` - Dashboard Analytics project
3. `lovable-logo-icon.png` - Lovable AI tool icon
4. `66af99839e55f1ee29f117ac.png` - Claude AI tool icon
5. `inprogress.png` - In-progress project placeholder

## Optimization Recommendations

### Option 1: Online Tools (Easiest)
Convert images to WebP using online tools:
- https://squoosh.app/ (Google's tool)
- https://cloudconvert.com/png-to-webp
- https://convertio.co/png-webp/

### Option 2: Command Line (Recommended)

#### Install cwebp (WebP encoder):

**Windows:**
```bash
# Download from: https://developers.google.com/speed/webp/download
# Or use Chocolatey:
choco install webp
```

**macOS:**
```bash
brew install webp
```

**Linux:**
```bash
sudo apt install webp
```

#### Convert Images:
```bash
# Navigate to public folder
cd public

# Convert JPEG to WebP (profile image)
cwebp -q 85 "WhatsApp Image 2025-01-29 at 10.11.27 (1).jpeg" -o profile.webp

# Convert PNG to WebP (projects and icons)
cwebp -q 90 "Captura de pantalla 2025-10-07 164704.png" -o dashboard-analytics.webp
cwebp -q 90 lovable-logo-icon.png -o lovable-logo-icon.webp
cwebp -q 90 66af99839e55f1ee29f117ac.png -o claude-icon.webp
cwebp -q 90 inprogress.png -o inprogress.webp
```

### Option 3: Automated Build Script

Add to `package.json`:
```json
{
  "scripts": {
    "optimize-images": "node scripts/optimize-images.js"
  }
}
```

Then create `scripts/optimize-images.js`:
```javascript
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const publicDir = './public';
const imageExtensions = ['.jpg', '.jpeg', '.png'];

const images = await readdir(publicDir);

for (const image of images) {
  if (imageExtensions.some(ext => image.toLowerCase().endsWith(ext))) {
    const inputPath = join(publicDir, image);
    const outputPath = join(publicDir, image.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log(`✅ Converted: ${image} → ${outputPath}`);
  }
}
```

## After Conversion

Update the following files to use WebP images:

### 1. Hero.tsx (line 43)
```typescript
// Before:
src="/WhatsApp Image 2025-01-29 at 10.11.27 (1).jpeg"

// After:
src="/profile.webp"
```

### 2. src/data/projects.ts
```typescript
// Before:
image: "/Captura de pantalla 2025-10-07 164704.png"
image: "/inprogress.png"

// After:
image: "/dashboard-analytics.webp"
image: "/inprogress.webp"
```

### 3. AITools.tsx
```typescript
// Before:
<img src="/lovable-logo-icon.png" />
<img src="/66af99839e55f1ee29f117ac.png" />

// After:
<img src="/lovable-logo-icon.webp" />
<img src="/claude-icon.webp" />
```

## Expected Results

- **File size reduction**: 25-35% smaller
- **Quality**: Visually identical (with quality 85-90)
- **Performance**: Faster page load times
- **SEO**: Better Core Web Vitals scores

## Browser Support

WebP is supported by 96%+ of browsers:
- Chrome: ✅
- Firefox: ✅
- Safari: ✅ (since version 14)
- Edge: ✅

### Fallback (Optional)
```jsx
<picture>
  <source srcSet="/profile.webp" type="image/webp" />
  <img src="/profile.jpg" alt="Profile" />
</picture>
```
