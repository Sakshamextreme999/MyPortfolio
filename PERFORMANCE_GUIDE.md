# Performance Optimization Guide

This guide explains the performance optimizations implemented in the 3D background and provides tips for maintaining 60 FPS.

## ✨ Advanced Visual Effects Implemented

### Post-Processing Effects (Desktop Only)

1. **Bloom Effect**
   - Creates a glow around bright objects
   - Strength: 1.2
   - Radius: 0.6
   - Threshold: 0.3

2. **SSAO (Screen Space Ambient Occlusion)**
   - Adds depth and shadows
   - Kernel Radius: 16
   - Enhances 3D perception

3. **HDR Lighting**
   - ACES Filmic tone mapping
   - Exposure: 1.5
   - Enhanced color grading

4. **Volumetric Fog**
   - Exponential fog with depth
   - Density: 0.0006 (desktop), 0.0008 (mobile)
   - Creates atmospheric depth

5. **Soft Shadows**
   - PCF soft shadow mapping
   - 512x512 shadow maps
   - Desktop only for performance

6. **Dynamic Lighting**
   - Multiple point lights with animations
   - Pulsing intensity for atmosphere
   - Colored lights (purple/cyan)

### Scroll-Based Features

1. **Cinematic Camera Travel**
   - Smooth camera path through 3D space
   - Z-axis movement based on scroll position
   - Gentle rotation based on scroll progress

2. **Parallax Layers**
   - 5 depth layers (3 on mobile)
   - Different movement speeds per layer
   - Objects reposition as you scroll

3. **Section-Based Repositioning**
   - Background objects move with scroll
   - Velocity-based parallax
   - Smooth damping for natural feel

4. **Animated Reveals**
   - Layer objects rotate and pulse
   - Floating animations
   - Scale animations synced to time

## 🚀 Performance Optimizations

### Automatic Quality Adjustment

**Device Detection:**
```javascript
// Detects mobile devices and reduces quality
const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
  || window.innerWidth < 768;
```

**Mobile Optimizations:**
- Particle count: 2000 (vs 5000 on desktop)
- Disabled antialiasing
- Pixel ratio capped at 1.5
- No post-processing effects
- No shadow mapping
- Fewer parallax layers (3 vs 5)
- Reduced particle size

### FPS Monitoring

**Real-time Performance Tracking:**
```javascript
// Monitors FPS and auto-adjusts quality
if (fpsRef.current < 30 && !mobile) {
  renderer.setPixelRatio(1);
  bloomPass.strength = 0.8;
}
```

### Instanced Rendering

**Efficient Particle System:**
- Uses `BufferGeometry` for optimal memory usage
- Instanced attributes (position, color, size, velocity)
- Single draw call for all particles
- Hardware-accelerated rendering

### Memory Management

**Proper Cleanup:**
- Geometry disposal
- Material disposal
- Texture disposal
- Event listener removal
- Composer cleanup

### GPU Optimization

**Hardware Acceleration:**
- `will-change: transform` on animated elements
- `transform: translateZ(0)` for GPU compositing
- `backface-visibility: hidden`
- CSS containment for scroll elements

## 📊 Performance Metrics

### Expected Performance

**Desktop (High-end):**
- FPS: 60 (constant)
- Particles: 5000
- Post-processing: Full
- Shadows: Enabled

**Desktop (Mid-range):**
- FPS: 45-60
- Auto-adjusts quality
- May disable some effects

**Mobile (Modern):**
- FPS: 30-60
- Particles: 2000
- Post-processing: Disabled
- Simplified effects

**Mobile (Low-end):**
- FPS: 30+
- Further reduced particles
- Fallback gradient background

### Benchmarks

Run these tests to measure performance:

```javascript
// Add to console to check current FPS
setInterval(() => {
  console.log('FPS:', fpsRef.current);
}, 1000);
```

## 🛠️ Optimization Techniques Used

### 1. Lazy Evaluation

```javascript
// Only compute when needed
if (composer && !mobile) {
  composer.render();
} else {
  renderer.render(scene, camera);
}
```

### 2. Throttled Updates

```javascript
// Update particle positions every frame, not every particle
particles.geometry.attributes.position.needsUpdate = true;
```

### 3. Smooth Interpolation

```javascript
// Lerp for smooth movement (cheaper than physics)
targetRef.current.x += (mouseRef.current.x - targetRef.current.x) * 0.05;
```

### 4. Velocity Damping

```javascript
// Smooth scroll with physics-based damping
scrollRef.current.velocity *= 0.95;
```

### 5. Event Optimization

```javascript
// Passive listeners for scroll performance
document.addEventListener('mousemove', onMouseMove, { passive: true });
window.addEventListener('scroll', onScroll, { passive: true });
```

## 🎨 Visual Quality vs Performance Trade-offs

### High Quality (Desktop)
- ✅ Bloom effect
- ✅ SSAO
- ✅ Shadows
- ✅ 5000 particles
- ✅ 5 parallax layers
- ✅ Full antialiasing
- ⚠️ Requires GPU

### Balanced (Mobile)
- ❌ Post-processing
- ❌ Shadows
- ✅ 2000 particles
- ✅ 3 parallax layers
- ❌ Antialiasing
- ✅ Works on most devices

### Fallback (No WebGL)
- ❌ 3D rendering
- ✅ Animated gradient
- ✅ Pulsing orbs
- ✅ Works everywhere
- ✅ Very lightweight

## 🔧 Customization for Better Performance

### Reduce Particle Count

```javascript
// In ThreeBackground.jsx, line 90
const particleCount = mobile ? 1000 : 3000; // Lower values
```

### Disable Post-Processing

```javascript
// In ThreeBackground.jsx, line 195
if (!mobile && false) { // Set to false to always disable
  composer = new EffectComposer(renderer);
  // ...
}
```

### Simplify Parallax Layers

```javascript
// In ThreeBackground.jsx, line 233
const layerCount = mobile ? 2 : 3; // Reduce from 3:5
```

### Lower Update Rate

```javascript
// Update every other frame
let frameSkip = 0;
const animate = () => {
  requestAnimationFrame(animate);
  frameSkip++;
  if (frameSkip % 2 !== 0) return; // Skip every other frame
  // ... rest of animation code
};
```

### Disable Shadows Completely

```javascript
// In ThreeBackground.jsx, remove these lines
renderer.shadowMap.enabled = true;
primaryLight.castShadow = true;
```

## 📱 Mobile Optimization Checklist

- [x] Reduced particle count (2000)
- [x] Disabled antialiasing
- [x] Disabled post-processing
- [x] Disabled shadows
- [x] Lower pixel ratio (1.5)
- [x] Fewer parallax layers (3)
- [x] Simplified geometry
- [x] Passive event listeners
- [x] Touch-friendly interactions
- [x] Fallback for no WebGL

## 🐛 Debugging Performance Issues

### Check Current Performance

Open browser console and run:

```javascript
// Check FPS
console.log('FPS:', fpsRef.current);

// Check particle count
console.log('Particles:', particlesRef.current.geometry.attributes.position.count);

// Check if post-processing is active
console.log('Composer:', composerRef.current !== null);

// Check mobile detection
console.log('Is Mobile:', isMobile);
```

### Chrome DevTools

1. **Performance Tab:**
   - Record a session
   - Look for dropped frames (red bars)
   - Check GPU usage

2. **Rendering Tab:**
   - Enable "FPS Meter"
   - Enable "Paint flashing"
   - Check "Layer borders"

3. **Memory Tab:**
   - Take heap snapshots
   - Look for memory leaks
   - Check detached DOM nodes

### Common Issues

**Issue: Low FPS on Desktop**
- Solution: GPU may be throttled, check GPU activity in Task Manager
- Disable other GPU-intensive applications
- Update graphics drivers

**Issue: Jittery Scrolling**
- Solution: Reduce scroll velocity multiplier
- Increase damping factor (line 316)

**Issue: High Memory Usage**
- Solution: Reduce particle count
- Disable post-processing
- Check for memory leaks in cleanup

**Issue: Particles Not Visible**
- Solution: Check camera position
- Verify particle positions are within view
- Check fog density

## 🔬 Advanced Optimization Techniques

### WebGL Context Loss Recovery

```javascript
// Add to renderer setup
renderer.context.canvas.addEventListener('webglcontextlost', (event) => {
  event.preventDefault();
  console.log('WebGL context lost. Attempting recovery...');
});

renderer.context.canvas.addEventListener('webglcontextrestored', () => {
  console.log('WebGL context restored.');
  // Reinitialize resources
});
```

### Frustum Culling

```javascript
// Automatically handled by Three.js, but you can optimize:
particles.frustumCulled = true; // Default, but ensure it's enabled
```

### Level of Detail (LOD)

```javascript
// For parallax objects, use LOD
import { LOD } from 'three';

const lod = new LOD();
lod.addLevel(highDetailMesh, 0);
lod.addLevel(mediumDetailMesh, 500);
lod.addLevel(lowDetailMesh, 1000);
scene.add(lod);
```

### Texture Optimization

```javascript
// If adding textures, use compressed formats
const loader = new THREE.TextureLoader();
loader.load('texture.jpg', (texture) => {
  texture.minFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
});
```

## 📈 Monitoring Performance in Production

### Add Performance Tracking

```javascript
// Track average FPS over time
let fpsHistory = [];
const trackFPS = () => {
  fpsHistory.push(fpsRef.current);
  if (fpsHistory.length > 60) {
    const avgFPS = fpsHistory.reduce((a, b) => a + b) / fpsHistory.length;
    console.log('Average FPS (last 60 frames):', avgFPS);
    
    // Send to analytics
    if (window.gtag) {
      gtag('event', 'performance', {
        'fps': avgFPS,
        'device': isMobile ? 'mobile' : 'desktop'
      });
    }
    
    fpsHistory = [];
  }
};
```

### Performance API

```javascript
// Measure specific operations
performance.mark('animation-start');
animate();
performance.mark('animation-end');
performance.measure('animation', 'animation-start', 'animation-end');

const measures = performance.getEntriesByType('measure');
console.log('Animation time:', measures[0].duration);
```

## 🎯 Target Performance Goals

- **Desktop**: Maintain 60 FPS consistently
- **Tablet**: Maintain 45+ FPS
- **Mobile**: Maintain 30+ FPS
- **Load Time**: < 2 seconds for first render
- **Memory**: < 100MB GPU memory
- **CPU**: < 30% CPU usage on modern devices

## 🚨 Performance Warnings

Watch out for these performance killers:

1. **Too Many Particles**: > 10000 particles will drop FPS significantly
2. **Complex Geometries**: High polygon count on parallax objects
3. **Too Many Lights**: > 5 dynamic lights impacts performance
4. **Shadow Maps**: Large shadow maps (> 1024x1024) are expensive
5. **Post-Processing**: Multiple passes compound GPU load
6. **High Pixel Ratio**: > 2 doesn't provide visual benefit but costs performance

## 📚 Additional Resources

- [Three.js Performance Tips](https://threejs.org/docs/#manual/en/introduction/Performance-tips)
- [WebGL Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)
- [GPU Performance Guide](https://web.dev/gpu/)
- [Rendering Performance](https://web.dev/rendering-performance/)

---

**Remember**: Always test on real devices, not just emulators! Performance can vary significantly.
