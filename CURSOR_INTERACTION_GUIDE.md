# 🎯 Cursor Interaction Effects Guide

## Overview

Your portfolio now features **advanced cursor interaction effects** where the 3D background responds dynamically to mouse movement. Particles and geometric objects are attracted to or repelled from the cursor, creating an engaging, premium interactive experience.

---

## ✨ Features Implemented

### 1. **Particle Cursor Sensing**
- **5,000 particles** (desktop) or **2,000 particles** (mobile) respond to cursor position
- Particles within a **500px radius** (desktop) or **300px radius** (mobile) react to the cursor
- **Dynamic modes**: Particles alternate between attraction and repulsion every ~10 seconds
- **Size feedback**: Particles grow larger when near the cursor (up to 80% size increase)
- **Smooth damping**: Velocity damping (0.98) prevents jittery movement

### 2. **Geometric Object Interaction**
- Floating spheres and octahedrons (5 parallax layers on desktop, 3 on mobile)
- Objects within **800px** of cursor are:
  - Gently **pulled toward the cursor**
  - **Rotate faster** based on proximity
  - **Scale up** by up to 30%
  - **Glow brighter** (emissive intensity increases by 50%)
- Smooth return to normal state when cursor moves away

### 3. **3D Cursor Projection**
- Mouse position is projected into 3D space using raycasting
- Interaction occurs at a focal plane **1000px** from the camera
- Enables accurate depth-based interactions

### 4. **Performance Optimizations**
- Uses inverse square law for realistic force falloff
- Velocity-based physics with smooth damping
- Particle wrapping at boundaries prevents culling
- Mobile detection with reduced particle count and interaction radius
- FPS monitoring with automatic quality adjustment

---

## 🎮 User Experience

### What Users Will See:

1. **Moving the mouse**:
   - Particles flow toward or away from cursor
   - Creates beautiful swirling patterns
   - Visual feedback with particle size changes

2. **Hovering near geometric objects**:
   - Shapes attract toward cursor
   - Rotation speeds up
   - Objects glow brighter
   - Scale increases for emphasis

3. **Scrolling**:
   - Background travels through 3D space
   - Parallax layers move at different speeds
   - Cursor effects remain active during scroll

4. **Idle state**:
   - Particles continue organic floating motion
   - Objects pulse and rotate gently
   - Ambient animations maintain visual interest

---

## 🔧 Technical Details

### Cursor Force Calculation

```javascript
// Calculate distance from cursor to particle
const distanceToCursor = particlePos.distanceTo(mouse3DRef.current);

// Apply force if within radius (500px desktop, 300px mobile)
if (distanceToCursor < cursorInfluenceRadius) {
  // Inverse square law for realistic force
  const influenceFactor = 1 - (distanceToCursor / cursorInfluenceRadius);
  const forceMagnitude = influenceFactor * influenceFactor * cursorForceStrength;
  
  // Attract or repel based on time-based mode
  const forceDirection = attractMode ? 1 : -1;
  
  // Apply to particle velocity
  particleVelocities[i3] += directionToCursor.x * forceMagnitude * forceDirection;
}
```

### 3D Mouse Position Projection

```javascript
// Convert screen coordinates to normalized device coordinates (NDC)
const mouseNDC = new THREE.Vector2(
  (event.clientX / window.innerWidth) * 2 - 1,
  -(event.clientY / window.innerHeight) * 2 + 1
);

// Project into 3D space at 1000px from camera
raycasterRef.current.setFromCamera(mouseNDC, camera);
raycasterRef.current.ray.at(1000, intersectionPoint);
```

### Interaction Parameters

| Parameter | Desktop | Mobile | Description |
|-----------|---------|---------|-------------|
| Particle Count | 5,000 | 2,000 | Total particles in scene |
| Influence Radius | 500px | 300px | Cursor interaction distance |
| Force Strength | 1.0 | 0.5 | Force multiplier |
| Velocity Damping | 0.98 | 0.98 | Smoothing factor |
| Size Growth | 80% | 80% | Max particle size increase |
| Object Radius | 800px | 800px | Geometric object interaction |

---

## 🎨 Customization

### Adjust Interaction Strength

In `ThreeBackground.jsx`, modify these constants:

```javascript
// Stronger cursor force (line ~301)
const cursorForceStrength = mobile ? 1.0 : 2.0; // Increased from 0.5/1.0

// Larger interaction radius
const cursorInfluenceRadius = mobile ? 500 : 800; // Increased from 300/500

// Faster particle size response
const targetSize = (particleSizes[i] || 3) * (1 + influenceFactor * 1.5); // Increased from 0.8
```

### Change Attraction/Repulsion Mode

```javascript
// Always attract (line ~305)
const attractMode = true; // Instead of: Math.sin(time * 0.3) > 0

// Always repel
const attractMode = false;

// Faster mode switching (every ~5 seconds)
const attractMode = Math.sin(time * 0.6) > 0; // Increased from 0.3
```

### Modify Geometric Object Interaction

```javascript
// Stronger pull toward cursor (line ~363)
const direction = new THREE.Vector3()
  .subVectors(mouse3DRef.current, child.position)
  .normalize()
  .multiplyScalar(influenceFactor * 5); // Increased from 2

// More dramatic glow effect (line ~377)
child.material.emissiveIntensity = 0.3 + influenceFactor * 1.5; // Increased from 0.5
```

---

## 🚀 Performance Considerations

### Current Optimizations:

1. **Mobile Detection**: Automatically reduces particle count and effects
2. **Velocity Damping**: Prevents runaway physics calculations
3. **Bounded Updates**: Only updates particles within interaction radius
4. **FPS Monitoring**: Adjusts quality if frame rate drops below 30 FPS
5. **GPU Acceleration**: Uses `will-change: transform` and hardware acceleration
6. **Passive Listeners**: Mouse events use `{ passive: true }`

### If Performance Issues Occur:

```javascript
// Reduce particle count (line ~93)
const particleCount = mobile ? 1000 : 2500; // Halved from 2000/5000

// Disable cursor interaction on mobile (line ~301)
if (mobile) {
  // Skip cursor interaction loop
} else {
  // Run cursor interaction
}

// Reduce object interaction radius (line ~354)
const interactionRadius = 400; // Reduced from 800
```

---

## 🌈 Theme Adaptation

The background automatically adapts to your light/dark theme:

### Dark Mode:
- Rich purple and cyan particles (#7c3aed, #00a6e0)
- Deep space fog (0x15121b)
- High contrast glow effects
- Full opacity (0.8)

### Light Mode:
- Reduced opacity (0.2) - applied via CSS
- Multiply blend mode for subtlety
- Background becomes more ambient
- Maintains all interaction effects

No code changes needed - theme detection works automatically!

---

## 🎯 What's Preserved

✅ **All existing UI components** (Hero, About, Skills, Projects, Contact, etc.)  
✅ **Dock and theme toggle** functionality  
✅ **Responsive design** and mobile layout  
✅ **Scroll animations** and reveal effects  
✅ **Typography and spacing**  
✅ **Color schemes and gradients**  
✅ **Form validation and interactivity**  
✅ **Performance optimizations**  

The 3D background sits **behind everything** with `z-index: -10` and `pointer-events: none`, ensuring it never interferes with clicks, scrolling, or navigation.

---

## 🐛 Troubleshooting

### Cursor interaction not working:
1. Check browser console for errors
2. Verify Three.js is loaded: `import * as THREE from 'three'`
3. Ensure `ThreeBackground` is uncommented in `App.jsx`
4. Test with mouse (not touch on mobile)

### Performance issues:
1. Reduce particle count (see Performance section)
2. Disable post-processing effects on lower-end devices
3. Check FPS counter (logged in component)

### Particles not visible:
1. Check theme - light mode reduces opacity
2. Verify WebGL support (fallback will show gradient)
3. Inspect with DevTools: Canvas should be present in DOM

---

## 📚 Next Steps

Want to customize further? Check out:
- `VISUAL_EFFECTS_GUIDE.md` - Bloom, SSAO, fog, and lighting
- `PERFORMANCE_GUIDE.md` - FPS optimization and monitoring
- `visualEffects.js` - Configuration presets

Enjoy your premium interactive 3D portfolio! 🎉
