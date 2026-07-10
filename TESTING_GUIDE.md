# 🧪 Testing Your Interactive 3D Portfolio

## Quick Start

### 1. Start the Development Server

```bash
npm run dev
```

The site will open at `http://localhost:5173` (or similar).

---

## 🎯 Features to Test

### ✨ Cursor Interaction Effects

**Test 1: Particle Attraction/Repulsion**
1. Move your mouse slowly across the screen
2. Watch particles flow toward or away from cursor
3. Notice particles grow larger when near cursor
4. Observe the swirling patterns created

**Expected Behavior:**
- Particles within ~500px react to cursor
- Mode alternates every ~10 seconds between attract/repel
- Smooth, fluid motion with no jitter
- Particles return to normal size when cursor moves away

**Test 2: Geometric Object Interaction**
1. Move cursor near the floating spheres and octahedrons
2. Observe objects pulling slightly toward cursor
3. Notice increased rotation speed
4. See objects glow brighter and scale up

**Expected Behavior:**
- Objects within ~800px react to cursor
- Smooth attraction toward cursor position
- Rotation speed increases based on proximity
- Glow intensity increases (emissive effect)
- Scale increases up to ~30%

---

### 📱 Responsive Behavior

**Desktop Test:**
1. Open on desktop browser (>768px width)
2. Should see 5,000 particles
3. Smooth 60 FPS performance
4. All post-processing effects active (bloom, SSAO)

**Mobile Test:**
1. Open on mobile device or resize browser to <768px
2. Should see 2,000 particles (reduced for performance)
3. Smaller interaction radius (300px vs 500px)
4. Post-processing effects disabled
5. Still maintains 60 FPS

**Tablet Test:**
1. Test at 768px - 1024px width
2. Should behave like mobile (optimized)
3. Touch gestures should work for scrolling

---

### 🎨 Theme Toggle

**Test 1: Dark to Light Mode**
1. Click the theme toggle button in the dock (bottom center)
2. Observe smooth transition to light mode
3. Check that 3D background becomes subtle (reduced opacity)
4. All text should remain readable

**Expected Behavior:**
- Background opacity drops to 0.2 in light mode
- Particles still visible but more subtle
- Cursor interaction still works
- Theme persists after page reload

**Test 2: Light to Dark Mode**
1. Click theme toggle again
2. Background becomes vibrant again (full opacity)
3. Purple/cyan colors more prominent
4. Glow effects more visible

---

### 📜 Scroll Interactions

**Test 1: Parallax Layers**
1. Scroll down slowly through the entire page
2. Notice background moves at different speeds
3. Foreground objects move faster than background
4. Camera travels through 3D space

**Expected Behavior:**
- 5 distinct parallax layers (3 on mobile)
- Smooth camera movement synchronized with scroll
- No stuttering or lag
- Background never blocks text or buttons

**Test 2: Scroll + Cursor Interaction**
1. Scroll while moving mouse
2. Cursor effects should remain active
3. Particles continue responding to mouse
4. No performance degradation

---

### 🎭 Idle Animations

**Test: Leave Page Idle**
1. Stop moving mouse for 30+ seconds
2. Observe ambient animations
3. Particles should continue floating
4. Objects pulse and rotate gently
5. Lights animate smoothly

**Expected Behavior:**
- Continuous organic motion
- No static frames
- Smooth, calming movement
- Objects pulse between 95% - 105% scale

---

### 🚀 Performance Tests

**Test 1: FPS Monitoring**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for FPS logs (if enabled)
4. FPS should be 55-60 on modern hardware

**Test 2: Long Session**
1. Leave tab open for 5+ minutes
2. Switch between tabs
3. Return to portfolio tab
4. Should resume smoothly, no memory leaks

**Test 3: Multiple Sections**
1. Scroll rapidly up and down
2. Jump between sections quickly
3. Hover over dock icons rapidly
4. No lag or freezing should occur

---

### 🎮 Interaction Points

**Test All Interactive Elements:**

| Element | Action | Expected Result |
|---------|--------|-----------------|
| Dock - Home | Click | Scrolls to top |
| Dock - Theme | Click | Toggles dark/light |
| Dock - LinkedIn | Click | Opens LinkedIn in new tab |
| Dock - GitHub | Click | Opens GitHub in new tab |
| Dock - Contact | Click | Scrolls to contact form |
| Dock - Hover | Hover | Shows tooltip label |
| Header Links | Click | Smooth scroll to section |
| Project Cards | Hover | Glass card effect |
| Skill Chips | Hover | Color change + lift |
| Contact Form | Submit | Validation + feedback |
| All Buttons | Click | No blocked by 3D background |

**Critical Check:** The 3D background should **NEVER** block clicks or interactions!

---

### 🌐 Browser Compatibility

**Test in Multiple Browsers:**

✅ **Chrome/Edge** (Chromium)
- Full support expected
- Best performance

✅ **Firefox**
- Full support expected
- Slightly different shader rendering

✅ **Safari** (macOS/iOS)
- WebGL support may vary
- Test on actual device if possible

⚠️ **Internet Explorer**
- Not supported (WebGL limitations)
- Will show fallback gradient background

---

### 🎯 WebGL Fallback

**Test: Disable WebGL**
1. Use browser extension to disable WebGL
2. Or use old browser without WebGL support
3. Should see animated gradient background instead
4. All other features should work normally

**Expected Fallback:**
- Gradient background with 2 pulsing orbs
- No 3D effects
- All UI remains functional
- Graceful degradation

---

## 🐛 Common Issues & Fixes

### Issue: Particles not moving with cursor
**Fix:** Refresh page, check console for errors

### Issue: Low FPS (< 30)
**Fix:** Component auto-reduces quality. If still slow:
- Close other browser tabs
- Update graphics drivers
- Reduce particle count in code

### Issue: Background blocks clicks
**Fix:** Check `pointer-events: none` is applied to canvas container

### Issue: Theme doesn't persist
**Fix:** Check localStorage is enabled in browser

### Issue: Tooltips not showing
**Fix:** Hover over dock icons longer (0.2s delay), check CSS in DevTools

---

## ✅ Checklist Before Deployment

- [ ] Test on desktop (1920x1080 or higher)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on mobile (375px - 767px)
- [ ] Test dark mode thoroughly
- [ ] Test light mode thoroughly
- [ ] Test all dock interactions
- [ ] Test all form submissions
- [ ] Verify no console errors
- [ ] Check FPS is 55-60 on target devices
- [ ] Verify cursor interaction in all modes
- [ ] Test theme persistence (reload page)
- [ ] Check social links open correctly
- [ ] Verify smooth scrolling
- [ ] Test WebGL fallback (if possible)
- [ ] Check all text is readable in both themes

---

## 📊 Performance Benchmarks

### Target Metrics:

| Device | FPS | Particle Count | Load Time | Memory |
|--------|-----|----------------|-----------|---------|
| Desktop | 60 | 5,000 | < 2s | < 100MB |
| Tablet | 60 | 2,000 | < 3s | < 80MB |
| Mobile | 60 | 2,000 | < 4s | < 60MB |

### How to Measure:

**FPS:**
1. Open DevTools
2. Performance tab
3. Record session
4. Check frame rate

**Memory:**
1. DevTools → Memory tab
2. Take heap snapshot
3. Check total size

**Load Time:**
1. DevTools → Network tab
2. Disable cache
3. Reload page
4. Check "Load" time at bottom

---

## 🎉 Success Criteria

Your portfolio is ready when:

✅ All cursor interactions work smoothly  
✅ 60 FPS on desktop, 55+ on mobile  
✅ Theme toggle works and persists  
✅ All links and forms functional  
✅ Responsive on all screen sizes  
✅ No console errors  
✅ WebGL fallback works  
✅ Text readable in both themes  
✅ Background never blocks interactions  

---

## 📞 Need Help?

Check these files for more info:
- `CURSOR_INTERACTION_GUIDE.md` - Cursor effects details
- `VISUAL_EFFECTS_GUIDE.md` - 3D effects configuration
- `PERFORMANCE_GUIDE.md` - Optimization tips
- `CUSTOMIZATION_GUIDE.md` - How to customize content

Happy testing! 🚀
