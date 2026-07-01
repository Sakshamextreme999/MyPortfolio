# Visual Effects Guide

Complete guide to understanding and customizing the advanced 3D visual effects in your portfolio.

## 🎨 Overview of Effects

Your portfolio features a cinematic 3D background with multiple advanced visual effects that create an immersive experience.

### Post-Processing Pipeline

```
Scene → Render Pass → Bloom Pass → SSAO Pass → Final Output
```

## 📊 Effect Breakdown

### 1. Bloom Effect

**What it does:** Creates a glow around bright particles and lights, giving an HDR appearance.

**Configuration:**
```javascript
// In visualEffects.js
bloom: {
  enabled: true,
  strength: 1.2,    // Glow intensity (0-3)
  radius: 0.6,      // Glow spread (0-1)
  threshold: 0.3,   // Brightness threshold (0-1)
}
```

**Customization:**
- **Increase strength** (1.5-2.0) for more dramatic glow
- **Decrease threshold** (0.1-0.2) to make more objects glow
- **Increase radius** (0.8-1.0) for softer, wider glow

**Performance Impact:** Medium (Desktop only)

---

### 2. SSAO (Ambient Occlusion)

**What it does:** Adds realistic shadows in crevices and contact points between objects, enhancing depth perception.

**Configuration:**
```javascript
ssao: {
  enabled: true,
  kernelRadius: 16,      // Sample radius
  minDistance: 0.005,    // Min depth difference
  maxDistance: 0.1,      // Max depth difference
}
```

**Customization:**
- **Increase kernelRadius** (24-32) for softer shadows
- **Decrease minDistance** (0.001) for subtler effect
- **Increase maxDistance** (0.2) for more pronounced shadows

**Performance Impact:** High (Desktop only)

---

### 3. Volumetric Fog

**What it does:** Creates atmospheric depth by fading distant objects, enhancing the 3D perception.

**Configuration:**
```javascript
fog: {
  enabled: true,
  color: 0x15121b,     // Fog color (matches background)
  density: {
    desktop: 0.0006,   // Desktop fog density
    mobile: 0.0008     // Mobile fog density
  }
}
```

**Customization:**
- **Decrease density** (0.0004) for clearer view
- **Increase density** (0.001) for more atmospheric effect
- **Change color** to match theme

**Performance Impact:** Low

---

### 4. Soft Shadows

**What it does:** Creates smooth, realistic shadows from objects and lights.

**Configuration:**
```javascript
shadows: {
  enabled: true,
  mapSize: 512,        // Shadow resolution
  type: 'PCFSoft'      // Shadow type
}
```

**Customization:**
- **Increase mapSize** (1024, 2048) for sharper shadows
- **Change type** to 'PCF' for harder shadows
- **Disable** if performance is an issue

**Performance Impact:** Medium-High (Desktop only)

---

### 5. HDR Lighting

**What it does:** Uses advanced tone mapping to create realistic lighting with high dynamic range.

**Configuration:**
```javascript
renderer: {
  toneMapping: 'ACESFilmic',
  toneMappingExposure: 1.5
}
```

**Customization:**
- **Change toneMapping:**
  - `'Linear'` - No tone mapping
  - `'Reinhard'` - Classic tone mapping
  - `'Cineon'` - Filmic look
  - `'ACESFilmic'` - Professional cinema look (default)
- **Adjust exposure** (1.0-2.5) for brightness

**Performance Impact:** Low

---

### 6. Dynamic Lighting

**What it does:** Multiple animated point lights that pulse and move, creating a living atmosphere.

**Configuration:**
```javascript
lighting: {
  primary: {
    color: 0x7c3aed,           // Purple
    intensity: { desktop: 25 },
    animation: {
      enabled: true,
      speed: 0.3,              // Animation speed
      amplitude: 5             // Intensity variation
    }
  }
}
```

**Customization:**
- **Change colors** to match brand
- **Adjust intensity** for brightness
- **Modify speed** (0.1-1.0) for faster/slower pulsing
- **Disable animation** for static lighting

**Performance Impact:** Low

---

## 🎬 Scroll-Based Features

### Camera Travel

**What it does:** Camera smoothly moves through 3D space as you scroll, creating a cinematic journey.

**How it works:**
```javascript
// Camera Z-position based on scroll
camera.position.z = 1200 - (scrollY * 0.5)

// Camera rotation based on scroll progress
camera.rotation.z = Math.sin(scrollProgress * Math.PI) * 0.05
camera.rotation.x = scrollProgress * 0.1 - 0.05
```

**Customization:**
```javascript
// In visualEffects.js
camera: {
  scrollMultiplier: 0.5,  // Increase for more dramatic travel
  smoothing: 0.05,        // Lower for snappier movement
}
```

---

### Parallax Layers

**What it does:** Creates depth by moving background layers at different speeds.

**Layer Structure:**
- **Layer 0 (Foreground):** Moves fastest, closest to camera
- **Layer 1-3:** Medium speed, middle depth
- **Layer 4 (Background):** Moves slowest, farthest from camera

**Configuration:**
```javascript
parallax: {
  layers: { desktop: 5, mobile: 3 },
  scrollSpeed: 0.3,         // Base movement speed
  rotationSpeed: 0.0005,    // Layer rotation
  depthSpacing: 600         // Distance between layers
}
```

**Customization:**
- **Increase scrollSpeed** (0.5-1.0) for more dramatic parallax
- **Add more layers** (desktop: 7, mobile: 4)
- **Adjust depthSpacing** (400-800) for different depth feel

---

### Section-Based Repositioning

**What it does:** Background objects reposition as new sections scroll into view.

**Implementation:**
```javascript
// Layer Y-position based on scroll
layer.position.y = -(scrollY * layerSpeed * 0.3)

// Velocity-based parallax
const parallaxAmount = scrollVelocity * layerSpeed * 0.01
```

---

## 🚀 Performance Features

### Automatic Quality Adjustment

**Real-time FPS Monitoring:**
```javascript
// Checks FPS every second
if (fps < 30 && !mobile) {
  renderer.setPixelRatio(1);     // Reduce resolution
  bloomPass.strength = 0.8;      // Reduce bloom
}
```

**What gets adjusted:**
1. Pixel ratio (2.0 → 1.0)
2. Bloom strength (1.2 → 0.8)
3. Potential particle reduction

---

### Mobile Optimizations

**Automatic Reductions:**

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Particles | 5000 | 2000 |
| Layers | 5 | 3 |
| Post-Processing | ✅ | ❌ |
| Shadows | ✅ | ❌ |
| Antialiasing | ✅ | ❌ |
| Pixel Ratio | 2.0 | 1.5 |

---

### Instanced Rendering

**What it does:** Renders all particles in a single GPU draw call.

**Benefits:**
- 10x-100x faster than individual meshes
- Lower memory usage
- Supports thousands of particles

**Implementation:**
```javascript
// Single BufferGeometry for all particles
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// Single material for all particles
const particles = new THREE.Points(geometry, material);
```

---

### WebGL Fallback

**What it does:** Provides a beautiful animated gradient if WebGL is unavailable.

**Fallback Features:**
- Animated gradient background
- Pulsing colored orbs
- CSS-only animations
- Works on all devices

**Customization:**
```javascript
fallback: {
  gradient: {
    enabled: true,
    colors: ['#15121b', '#221e28'],
    animationDuration: 15
  }
}
```

---

## 🎛️ Configuration Guide

### Quick Start: Edit Visual Effects

1. **Open the config file:**
   ```
   src/config/visualEffects.js
   ```

2. **Change particle count:**
   ```javascript
   particles: {
     desktop: { count: 3000 },  // Reduced from 5000
     mobile: { count: 1000 }    // Reduced from 2000
   }
   ```

3. **Adjust bloom:**
   ```javascript
   bloom: {
     strength: 1.5,  // More glow
     radius: 0.8     // Softer glow
   }
   ```

4. **Disable effects:**
   ```javascript
   postProcessing: { enabled: false }  // Disable all post-processing
   shadows: { enabled: false }         // Disable shadows
   ```

---

## 🎨 Creative Customizations

### Cinematic Film Noir Look

```javascript
// Dark, dramatic with high contrast
colors: {
  primary: '#ffffff',
  secondary: '#666666',
},
lighting: {
  primary: { intensity: { desktop: 30 } },
  secondary: { intensity: { desktop: 5 } }
},
postProcessing: {
  bloom: { strength: 0.8, threshold: 0.5 }
}
```

### Vibrant Cyberpunk Look

```javascript
// Bright, neon colors with heavy glow
colors: {
  primary: '#ff00ff',
  secondary: '#00ffff',
},
lighting: {
  primary: { intensity: { desktop: 40 } }
},
postProcessing: {
  bloom: { strength: 2.0, threshold: 0.2 }
}
```

### Minimal Clean Look

```javascript
// Subtle, minimal effects
particles: {
  desktop: { count: 2000, opacity: 0.5 }
},
postProcessing: {
  bloom: { strength: 0.5 },
  ssao: { enabled: false }
},
fog: { density: { desktop: 0.001 } }
```

---

## 🐛 Troubleshooting Effects

### Effect Not Visible

**Bloom not showing:**
- Check if on mobile (disabled by default)
- Increase bloom strength
- Lower bloom threshold

**SSAO too subtle:**
- Increase kernel radius
- Increase max distance
- Check lighting intensity

**Fog too thick/thin:**
- Adjust fog density
- Check fog color matches background

---

### Performance Issues

**Low FPS:**
1. Reduce particle count
2. Disable post-processing
3. Disable shadows
4. Lower pixel ratio

**Stuttering:**
1. Check scroll smoothing (increase value)
2. Reduce parallax layers
3. Lower animation speeds

---

## 📚 Technical Details

### Rendering Pipeline

```
┌─────────────┐
│   Scene     │
│  (Geometry, │
│   Lights)   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Render Pass │
│  (Base      │
│   Image)    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Bloom Pass  │
│  (Add Glow) │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  SSAO Pass  │
│  (Add AO)   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Screen    │
└─────────────┘
```

### Frame Update Cycle

```
1. Read user input (mouse, scroll)
2. Update camera position/rotation
3. Update particle positions/velocities
4. Update parallax layers
5. Update lighting
6. Render scene
7. Apply post-processing
8. Monitor FPS
9. Adjust quality if needed
10. Repeat
```

---

## 🎓 Learning Resources

**Three.js Concepts:**
- [Three.js Fundamentals](https://threejs.org/manual/)
- [Post-Processing](https://threejs.org/manual/#en/post-processing)
- [Lighting](https://threejs.org/manual/#en/lights)

**WebGL Performance:**
- [WebGL Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)
- [GPU Performance](https://web.dev/gpu/)

**Visual Effects:**
- [Bloom Effect Explained](https://learnopengl.com/Advanced-Lighting/Bloom)
- [SSAO Tutorial](https://learnopengl.com/Advanced-Lighting/SSAO)

---

## 🎬 Examples & Presets

### Preset 1: High Performance

```javascript
// Maximum performance, minimal effects
particles: { desktop: { count: 2000 } },
postProcessing: { enabled: false },
shadows: { enabled: false },
parallax: { layers: { desktop: 3 } }
```

### Preset 2: Balanced

```javascript
// Good balance of quality and performance (default)
particles: { desktop: { count: 5000 } },
postProcessing: { 
  bloom: { enabled: true },
  ssao: { enabled: true }
},
parallax: { layers: { desktop: 5 } }
```

### Preset 3: Maximum Quality

```javascript
// Best visuals, requires powerful GPU
particles: { desktop: { count: 8000 } },
postProcessing: {
  bloom: { strength: 1.5, radius: 0.8 },
  ssao: { kernelRadius: 32 }
},
shadows: { mapSize: 2048 },
parallax: { layers: { desktop: 7 } }
```

---

## 💡 Pro Tips

1. **Test on Real Devices:** Always test on actual mobile devices, not just browser emulation
2. **Monitor FPS:** Keep an eye on the FPS counter during development
3. **Iterate Gradually:** Change one effect at a time to see its impact
4. **Balance Quality:** More effects ≠ better; find the right balance
5. **Consider Brand:** Match effects to your brand's personality
6. **Accessibility:** Respect prefers-reduced-motion for users who need it

---

Need more help? Check the [PERFORMANCE_GUIDE.md](PERFORMANCE_GUIDE.md) for optimization tips!
