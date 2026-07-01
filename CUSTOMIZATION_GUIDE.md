# Customization Guide

This guide helps you customize the portfolio to match your personal brand and information.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Colors and Theme](#colors-and-theme)
3. [Projects](#projects)
4. [Skills](#skills)
5. [Links](#links)
6. [Images](#images)
7. [Animations](#animations)

---

## Personal Information

### Hero Section (`src/components/Hero.jsx`)

**Profile Image:**
```jsx
// Line 23-29
<img
  alt="Your Name"
  className="w-full h-full object-cover rounded-full"
  src="YOUR_IMAGE_URL_HERE"
/>
```

**Name and Title:**
```jsx
// Line 34-35
<h1>Hi, I'm Your Name</h1>

// Line 38-40
<p>Your Title | Your Specialty</p>
```

**Bio:**
```jsx
// Line 43-45
<p>Your personal bio and professional summary...</p>
```

### Contact Section (`src/components/Contact.jsx`)

**Phone Number:**
```jsx
// Line 54
<p className="font-semibold text-lg text-on-surface">+91 YOUR NUMBER</p>
```

**Location:**
```jsx
// Line 68
<p className="font-semibold text-lg text-on-surface">Your City, Country</p>
```

---

## Colors and Theme

### Tailwind Config (`tailwind.config.js`)

**Primary Color (Purple/Blue):**
```js
colors: {
  "primary": "#d2bbff",           // Light primary
  "primary-container": "#7c3aed", // Dark primary
}
```

**Secondary Color (Cyan):**
```js
"secondary": "#7bd0ff",           // Light secondary
"secondary-container": "#00a6e0", // Dark secondary
```

**Background:**
```js
"background": "#15121b",          // Main background
"surface": "#15121b",             // Surface color
```

### Custom Gradients (`src/index.css`)

**Button Gradient:**
```css
.btn-primary {
  background: linear-gradient(135deg, #7c3aed 0%, #00a6e0 100%);
}
```

**Text Gradient:**
```css
.text-gradient {
  background: linear-gradient(135deg, #d2bbff 0%, #7bd0ff 100%);
}
```

---

## Projects

### Add/Edit Projects (`src/components/Projects.jsx`)

**Project Data Structure:**
```jsx
// Lines 31-92
const projects = [
  {
    title: 'Project Name',
    description: 'Detailed project description...',
    image: 'PROJECT_IMAGE_URL',
    tags: ['Tag1', 'Tag2'],
    tagColors: [
      'bg-primary/30 border-primary/50', 
      'bg-secondary/30 border-secondary/50'
    ],
    tech: 'Technology Stack',
    bgColor: 'bg-primary/5'
  },
  // Add more projects...
];
```

**Update Project Links:**
```jsx
// Lines 123-130 (inside the map function)
<span 
  className="material-symbols-outlined"
  onClick={() => window.open('YOUR_GITHUB_URL', '_blank')}
>
  code
</span>
<span 
  className="material-symbols-outlined"
  onClick={() => window.open('YOUR_LIVE_DEMO_URL', '_blank')}
>
  launch
</span>
```

---

## Skills

### Update Skills (`src/components/Skills.jsx`)

**Skills Array:**
```jsx
// Lines 24-64
const skills = [
  {
    name: 'Technology Name',
    icon: 'ICON_URL_OR_PATH'
  },
  // Add more skills...
];
```

**Add Custom Skill without Icon:**
```jsx
// After the map function (line 82)
<div className="skill-chip px-6 py-3 rounded-xl flex items-center gap-3 font-medium cursor-default">
  <span className="material-symbols-outlined text-[20px] text-primary">
    your_icon_name
  </span>
  Your Skill Name
</div>
```

---

## Links

### Social Media Links

**Header Resume Button (`src/components/Header.jsx`):**
```jsx
// Line 68
<button 
  onClick={() => window.open('YOUR_RESUME_URL', '_blank')}
  className="btn-primary px-6 py-2 rounded-lg text-white font-medium text-label-md"
>
  Resume
</button>
```

**Hero Social Links (`src/components/Hero.jsx`):**
```jsx
// Lines 57-79
<a href="YOUR_GITHUB_URL" className="...">
  <span className="material-symbols-outlined">code</span>
</a>
<a href="YOUR_LINKEDIN_URL" className="...">
  <span className="material-symbols-outlined">work</span>
</a>
<a href="mailto:YOUR_EMAIL" className="...">
  <span className="material-symbols-outlined">mail</span>
</a>
```

**Dock Links (`src/components/Dock.jsx`):**
```jsx
// Lines 58-74 (LinkedIn)
<a href="YOUR_LINKEDIN_URL" className="...">

// Lines 77-91 (GitHub)
<a href="YOUR_GITHUB_URL" className="...">
```

**Contact Section Links (`src/components/Contact.jsx`):**
```jsx
// Lines 77-91
<a href="YOUR_LINKEDIN_URL" className="...">LinkedIn</a>
<a href="YOUR_GITHUB_URL" className="...">GitHub</a>
```

**Footer Links (`src/components/Footer.jsx`):**
```jsx
// Lines 23-41
<a href="YOUR_LINKEDIN_URL" className="...">LinkedIn</a>
<a href="YOUR_GITHUB_URL" className="...">GitHub</a>
<a href="mailto:YOUR_EMAIL" className="...">Email</a>
```

---

## Images

### Image Optimization Tips

1. **Profile Image**: 400x400px minimum, square aspect ratio
2. **Project Images**: 1200x800px, landscape orientation
3. **Format**: Use WebP for better compression
4. **Hosting**: Consider using Cloudinary or Imgix for optimization

### Adding Local Images

1. Place images in `public/images/` folder
2. Reference them as `/images/your-image.jpg`

Example:
```jsx
<img src="/images/profile.jpg" alt="Profile" />
```

### Using External Images

```jsx
<img src="https://your-cdn.com/image.jpg" alt="Description" />
```

---

## Animations

### Scroll Reveal Animation Timing

**Adjust Animation Delays (`src/index.css`):**
```css
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }
```

### Disable Animations

To disable scroll reveal animations, remove the `scroll-reveal` class from elements.

### Three.js Background Settings

**Adjust Particle Count (`src/components/ThreeBackground.jsx`):**
```jsx
// Line 41 - Reduce for better performance
const count = 5000; // Change to 3000 or 2000 for lower-end devices
```

**Adjust Colors:**
```jsx
// Lines 50-52
const color1 = new THREE.Color("#YOUR_COLOR_1");
const color2 = new THREE.Color("#YOUR_COLOR_2");
const color3 = new THREE.Color("#YOUR_COLOR_3");
```

**Adjust Camera Movement:**
```jsx
// Lines 165-167
camera.position.x += (targetRef.current.x * 30 - camera.position.x) * 0.05;
camera.position.y += (-targetRef.current.y * 30 - camera.position.y) * 0.05;
camera.position.z = 1200 - (scrollRef.current.current * 0.4);
// Adjust the multipliers (30, 0.05, 0.4) for different effects
```

---

## About Section

### Education (`src/components/About.jsx`)

**Education Items:**
```jsx
// Lines 33-62
<div className="flex items-start gap-4 p-5 glass-card rounded-2xl">
  <span className="material-symbols-outlined text-2xl text-primary">school</span>
  <div>
    <h4 className="font-bold text-on-surface">Your Institution</h4>
    <p className="text-sm text-on-surface">Your Degree</p>
    <p className="text-xs text-outline mt-1 font-medium">Start - End Year</p>
  </div>
</div>
```

### Work Experience

**Experience Card:**
```jsx
// Lines 69-105
<div className="p-8 glass-card rounded-2xl border-l-4 border-l-secondary">
  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-6">
    <div>
      <h4 className="font-bold text-lg text-on-surface">Company Name</h4>
      <p className="text-secondary text-sm font-medium">Your Position</p>
    </div>
    <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-bold">
      Location
    </span>
  </div>
  <ul className="space-y-4 text-on-surface text-sm leading-relaxed">
    <li className="flex gap-3">
      <span className="text-secondary mt-1 shrink-0">•</span>
      <span>Your achievement or responsibility...</span>
    </li>
  </ul>
</div>
```

---

## Form Handling

### Contact Form (`src/components/Contact.jsx`)

**Handle Form Submission:**
```jsx
// Lines 40-44
const handleSubmit = (e) => {
  e.preventDefault();
  // Add your form submission logic here:
  // - Send to email service (EmailJS, Formspree)
  // - Save to database
  // - Send to API endpoint
  console.log('Form submitted:', formData);
};
```

**Example with EmailJS:**
```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  })
  .catch((error) => {
    alert('Failed to send message. Please try again.');
    console.error(error);
  });
};
```

---

## Theme Toggle

### Persist Theme Choice

Add to `src/components/Dock.jsx`:

```jsx
const [theme, setTheme] = useState(() => {
  const saved = localStorage.getItem('theme');
  return saved || 'dark';
});

const toggleTheme = () => {
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  document.documentElement.classList.toggle('dark');
  document.documentElement.classList.toggle('light');
};
```

---

## SEO Optimization

### Update Meta Tags (`index.html`)

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Update these -->
  <title>Your Name | Portfolio</title>
  <meta name="description" content="Your professional description" />
  <meta name="keywords" content="your, keywords, here" />
  <meta name="author" content="Your Name" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourwebsite.com/" />
  <meta property="og:title" content="Your Name | Portfolio" />
  <meta property="og:description" content="Your description" />
  <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://yourwebsite.com/" />
  <meta property="twitter:title" content="Your Name | Portfolio" />
  <meta property="twitter:description" content="Your description" />
  <meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
</head>
```

---

## Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Load**: Add loading="lazy" to images below the fold
3. **Reduce Particles**: Lower particle count on mobile devices
4. **Code Splitting**: Vite handles this automatically
5. **Minimize Bundle**: Remove unused code and dependencies

---

## Need More Help?

- Check component files for inline comments
- Refer to official documentation:
  - [React Docs](https://react.dev)
  - [Tailwind CSS](https://tailwindcss.com)
  - [Three.js](https://threejs.org)
- Review the README.md for project overview

Happy customizing! 🚀
