# Saksham Shri Gupta - Portfolio

A modern, immersive portfolio website showcasing projects, skills, and professional experience. Built with React, Vite, Tailwind CSS, and Three.js for stunning 3D visual effects.

## 🚀 Features

- **Advanced 3D Background**: Cinematic particle system powered by Three.js with:
  - **Bloom Effect**: HDR glow on bright particles
  - **Ambient Occlusion (SSAO)**: Realistic depth and shadows
  - **Volumetric Fog**: Atmospheric depth perception
  - **Soft Shadows**: PCF shadow mapping (desktop only)
  - **HDR Lighting**: ACES filmic tone mapping
  - **Dynamic Lighting**: Animated point lights with pulsing effects
  - **Camera Travel**: Smooth cinematic movement through 3D space
  - **Parallax Layers**: 5 depth layers with independent speeds
  - **Scroll-Based Repositioning**: Background responds to page scroll
  - **Velocity Physics**: Natural damping and inertia
  - **Organic Particle Movement**: Particles drift with subtle velocities
- **Automatic Performance Optimization**:
  - **60 FPS Target**: Real-time FPS monitoring and quality adjustment
  - **Mobile Detection**: Automatically reduces effects on mobile devices
  - **WebGL Fallback**: Graceful animated gradient if WebGL unavailable
  - **Instanced Rendering**: Efficient GPU usage for thousands of particles
- **Glassmorphism Design**: Modern UI with glass-card effects and smooth transitions
- **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **Smooth Animations**: Scroll-triggered animations and transitions throughout
- **Dark Theme**: Professional dark theme with custom color palette
- **Floating Dock**: macOS-style navigation dock with quick access to sections
- **Performance Optimized**: Built with modern React practices and optimized rendering

## 🛠️ Technologies

- **React 19** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics and animations
- **PostCSS** - CSS processing
- **Oxlint** - Fast JavaScript linter

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
myportfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx          # Education and experience section
│   │   ├── Contact.jsx        # Contact form and information
│   │   ├── Dock.jsx           # Floating navigation dock
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Header.jsx         # Fixed navigation header
│   │   ├── Hero.jsx           # Hero section with profile
│   │   ├── Projects.jsx       # Featured projects showcase
│   │   ├── ScrollProgress.jsx # Scroll progress indicator
│   │   ├── Skills.jsx         # Technical skills display
│   │   └── ThreeBackground.jsx # 3D particle background
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles and Tailwind imports
│   └── main.jsx               # App entry point
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🎨 Key Components

### ThreeBackground
Creates an advanced 3D environment with:
- 5000+ particles (2000 on mobile) with gradient colors
- Bloom, SSAO, and HDR post-processing
- Soft shadows and volumetric fog
- Mouse parallax effect
- Cinematic camera travel based on scroll
- 5 parallax layers with depth-based repositioning
- Dynamic animated lighting
- Organic particle movement with velocities
- Real-time FPS monitoring
- Automatic quality adjustment
- WebGL fallback with animated gradient
- Optimized for 60 FPS on modern devices

### Header
Fixed navigation with:
- Smooth scroll to sections
- Active section highlighting
- Responsive design
- Resume download button

### Hero
Landing section featuring:
- Profile image with gradient border
- Animated text with stagger effect
- Call-to-action buttons
- Social links

### About
Comprehensive information including:
- Education timeline
- Work experience
- Extracurricular activities
- Certifications

### Skills
Technical skills showcase with:
- Technology icons
- Hover animations
- Responsive grid layout

### Projects
Featured projects with:
- Project images
- Category tags
- Technology stack indicators
- GitHub and live demo links

### Contact
Contact section with:
- Contact form
- Contact information
- Social media links
- Glass-card design

### Dock
Floating navigation dock with:
- Quick section navigation
- Theme toggle (dark/light)
- Social media links
- Tooltip labels

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Target FPS**: 60 on desktop, 30+ on mobile
- **Optimized Rendering**: React hooks, instanced rendering, automatic quality adjustment
- **Lazy Loading**: Images loaded on demand
- **Code Splitting**: Automatic chunk splitting by Vite
- **Minification**: Production builds are fully minified
- **GPU Acceleration**: Hardware-accelerated transforms and animations
- **Mobile Optimizations**: Reduced particles, disabled post-processing, lower pixel ratio
- **FPS Monitoring**: Real-time performance tracking with auto-adjustment
- **WebGL Fallback**: Lightweight animated gradient for unsupported devices

## 🎨 Design System

### Colors
- Primary: `#d2bbff` / `#7c3aed`
- Secondary: `#7bd0ff` / `#00a6e0`
- Tertiary: `#ffb784`
- Background: `#15121b`
- Surface: Custom glass-morphism effects

### Typography
- Display: Poppins (headings)
- Body: Inter (content)
- Monospace: System monospace (code)

### Spacing
- Container Max: 1280px
- Responsive gutters
- Consistent unit system

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run Oxlint

## 📄 License

© 2026 Saksham Shri Gupta. All rights reserved.

## 👤 Contact

- **Email**: contact@saksham.dev
- **Phone**: +91 80050 16125
- **Location**: Lucknow, India

---

Built with ❤️ using React, Vite, Tailwind CSS, and Three.js
