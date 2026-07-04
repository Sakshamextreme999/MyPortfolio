# Profile Photo Setup Guide

## 📸 Adding Your Profile Photo

Your portfolio is configured to display a profile photo above your name on the landing page.

### Current Setup

The profile photo is positioned:
- ✅ **Above the heading** "Hi, I'm Saksham Shri Gupta"
- ✅ **Center of the page**
- ✅ **Circular with gradient border**
- ✅ **Size**: 160px on mobile, 192px on desktop
- ✅ **Hover effect**: Slight scale on hover

### 🎯 How to Add Your Photo

#### Option 1: Using the Existing Image Name (Recommended)

1. **Prepare your image**:
   - Take or select a professional photo
   - Recommended: Square aspect ratio (1:1)
   - Recommended size: 500x500px or larger
   - Format: JPG, PNG, or WebP

2. **Rename your image**:
   - Rename to: `IMG_20240129_012614.jpg`
   - Or use any name and update the code (see Option 2)

3. **Place in public folder**:
   ```
   myportfolio/
   └── public/
       └── IMG_20240129_012614.jpg  ← Put your image here
   ```

4. **Done!** Your image will appear automatically.

---

#### Option 2: Using a Different Image Name

1. **Place your image** in the `public` folder:
   ```
   myportfolio/
   └── public/
       └── my-photo.jpg  ← Your image
   ```

2. **Update the code** in `src/components/Hero.jsx`:
   ```jsx
   // Find this line (around line 30):
   src="/IMG_20240129_012614.jpg"
   
   // Change to:
   src="/my-photo.jpg"
   ```

---

#### Option 3: Using an External URL

If you have your image hosted online (e.g., on Google Drive, Imgur, etc.):

1. **Get the direct image URL**
   - For Google Drive: Use direct link generator
   - For Imgur: Right-click image → Copy image address
   - Make sure it's a direct image link (ends in .jpg, .png, etc.)

2. **Update the code** in `src/components/Hero.jsx`:
   ```jsx
   // Find this line:
   src="/IMG_20240129_012614.jpg"
   
   // Change to:
   src="https://your-image-url.com/photo.jpg"
   ```

---

### 🎨 Image Requirements

**Ideal Specifications:**
- **Aspect Ratio**: 1:1 (square)
- **Minimum Size**: 500x500px
- **Recommended Size**: 800x800px
- **Format**: JPG (recommended), PNG, or WebP
- **File Size**: < 500KB (optimized for fast loading)

**Photo Tips:**
- Use good lighting
- Clear, professional appearance
- Neutral or simple background
- Face clearly visible
- High resolution

---

### 🛠️ Image Optimization

**Before adding, optimize your image:**

#### Online Tools:
- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Advanced optimization
- [ImageOptim](https://imageoptim.com/) - Mac app

#### Using ImageMagick (Command line):
```bash
# Resize and optimize
magick convert input.jpg -resize 800x800^ -gravity center -extent 800x800 -quality 85 output.jpg
```

#### Using Node.js (Sharp):
```javascript
const sharp = require('sharp');

sharp('input.jpg')
  .resize(800, 800, { fit: 'cover' })
  .jpeg({ quality: 85 })
  .toFile('output.jpg');
```

---

### 🎯 Current Image Location in Code

The profile image is used in:

**File**: `src/components/Hero.jsx`  
**Line**: ~30

```jsx
<img
  alt="Saksham Shri Gupta"
  className="w-full h-full object-cover rounded-full"
  src="/IMG_20240129_012614.jpg"  ← Update this
/>
```

---

### 🎨 Customizing the Photo Appearance

#### Change Size

In `src/components/Hero.jsx`, find:
```jsx
<div className="w-40 h-40 md:w-48 md:h-48 ...">
```

Change values:
- `w-40 h-40` = Mobile size (160px)
- `md:w-48 md:h-48` = Desktop size (192px)

Tailwind size values:
- `w-32 h-32` = 128px (smaller)
- `w-40 h-40` = 160px (current mobile)
- `w-48 h-48` = 192px (current desktop)
- `w-56 h-56` = 224px (larger)
- `w-64 h-64` = 256px (extra large)

#### Change Border Color

```jsx
<div className="... border-primary/20 ...">
```

Change to:
- `border-primary/30` = More visible
- `border-secondary/20` = Cyan color
- `border-white/20` = White border

#### Change Border Thickness

```jsx
<div className="... border-4 ...">
```

Options:
- `border-2` = Thinner
- `border-4` = Current
- `border-6` = Thicker
- `border-8` = Very thick

#### Remove Hover Effect

```jsx
<div className="... hover:scale-105 ...">
```

Remove `hover:scale-105` if you don't want the zoom effect.

---

### 🔍 Troubleshooting

#### Image Not Showing

**Check these:**

1. **File path is correct**
   - Image is in `public` folder
   - Path starts with `/` (e.g., `/photo.jpg`)
   - Filename matches exactly (case-sensitive)

2. **Image format is supported**
   - Use: JPG, PNG, WebP, SVG
   - Avoid: HEIC, BMP, TIFF

3. **Clear browser cache**
   - Hard refresh: `Ctrl + Shift + R` (Windows)
   - Hard refresh: `Cmd + Shift + R` (Mac)

4. **Check browser console**
   - Press `F12` → Console tab
   - Look for 404 errors

#### Image Looks Distorted

**If image is stretched or squashed:**

1. **Ensure square aspect ratio**
   - Crop image to 1:1 before uploading
   - Use `object-fit: cover` (already applied)

2. **Center the image**
   ```jsx
   className="... object-cover object-center ..."
   ```

#### Image Too Large (Slow Loading)

**Compress the image:**

1. Use [TinyPNG](https://tinypng.com/)
2. Target file size: < 500KB
3. Don't go below 800x800px resolution

---

### ✅ Verification Checklist

After adding your photo:

- [ ] Image file is in `public` folder
- [ ] Image path in code matches filename
- [ ] Image is square (1:1 aspect ratio)
- [ ] Image file size is < 500KB
- [ ] Image displays correctly in browser
- [ ] Image looks good on mobile
- [ ] Image looks good on desktop
- [ ] Hover effect works (slight zoom)
- [ ] No console errors

---

### 📍 Dock Position

The floating dock at the bottom is already centered:

**Location**: Bottom center of the page  
**Position**: Fixed, 32px from bottom  
**Components**: Home, Theme Toggle, LinkedIn, GitHub, Contact

**If you need to adjust:**

File: `src/components/Dock.jsx`  
Line: ~48

```jsx
<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 ...">
```

- `bottom-8` = 32px from bottom (change to `bottom-4` for 16px, `bottom-12` for 48px)
- `left-1/2 -translate-x-1/2` = Centered horizontally
- `z-50` = Layer priority (stays on top)

---

### 🎉 You're All Set!

Your profile photo should now be:
- ✅ Displayed above your name
- ✅ Circular with gradient border
- ✅ Responsive (different sizes on mobile/desktop)
- ✅ Professional appearance

And your dock is:
- ✅ Centered at the bottom
- ✅ Fixed position (stays visible while scrolling)
- ✅ Contains all navigation and social links

Need help? Check the troubleshooting section or reach out!
