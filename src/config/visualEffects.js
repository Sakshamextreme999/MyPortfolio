/**
 * Visual Effects Configuration
 * Easily customize the 3D background effects here
 */

export const visualEffectsConfig = {
  // Particle System
  particles: {
    desktop: {
      count: 5000,
      size: 4,
      opacity: 0.8,
      velocity: 0.1, // Organic drift speed
    },
    mobile: {
      count: 2000,
      size: 3,
      opacity: 0.7,
      velocity: 0.05,
    },
  },

  // Colors (using Three.js color format)
  colors: {
    primary: '#7c3aed', // Purple
    secondary: '#00a6e0', // Cyan
    tertiary: '#3c3742', // Gray-purple
    background: 0x15121b, // Scene background
  },

  // Camera Settings
  camera: {
    fov: 50, // Field of view (lower = more zoomed in)
    initialZ: 1200, // Starting camera distance
    scrollMultiplier: 0.5, // How much camera moves with scroll
    mouseParallax: 40, // Mouse parallax intensity
    smoothing: 0.05, // Camera movement smoothing (0-1)
  },

  // Lighting
  lighting: {
    ambient: {
      color: 0x404060,
      intensity: 2,
    },
    primary: {
      color: 0x7c3aed,
      intensity: { desktop: 25, mobile: 15 },
      distance: 2000,
      position: [500, 500, 500],
      animation: {
        enabled: true,
        speed: 0.3,
        amplitude: 5,
      },
    },
    secondary: {
      color: 0x00a6e0,
      intensity: { desktop: 20, mobile: 10 },
      distance: 1800,
      position: [-600, -400, 300],
      animation: {
        enabled: true,
        speed: 0.4,
        amplitude: 5,
      },
    },
    rim: {
      color: 0xffffff,
      intensity: { desktop: 0.5, mobile: 0.3 },
      position: [0, 1000, -1000],
    },
  },

  // Fog Settings
  fog: {
    enabled: true,
    color: 0x15121b,
    density: { desktop: 0.0006, mobile: 0.0008 },
  },

  // Parallax Layers
  parallax: {
    layers: { desktop: 5, mobile: 3 },
    objectsPerLayer: { desktop: 3, mobile: 2 },
    scrollSpeed: 0.3, // Layer movement speed
    rotationSpeed: 0.0005, // Layer rotation speed
    baseDepth: -500, // Starting depth position
    depthSpacing: 600, // Distance between layers
    objects: {
      sphere: {
        minSize: 80,
        maxSize: 120,
        opacity: 0.08,
        emissiveIntensity: 0.3,
      },
      octahedron: {
        minSize: 60,
        maxSize: 90,
        opacity: 0.08,
        emissiveIntensity: 0.3,
      },
    },
  },

  // Post-Processing Effects (Desktop Only)
  postProcessing: {
    enabled: true, // Set to false to disable all post-processing
    bloom: {
      enabled: true,
      strength: 1.2,
      radius: 0.6,
      threshold: 0.3,
    },
    ssao: {
      enabled: true,
      kernelRadius: 16,
      minDistance: 0.005,
      maxDistance: 0.1,
    },
  },

  // Shadows (Desktop Only)
  shadows: {
    enabled: true,
    mapSize: 512, // 512, 1024, 2048 (higher = better quality, lower performance)
    type: 'PCFSoft', // 'Basic', 'PCF', 'PCFSoft'
  },

  // Renderer Settings
  renderer: {
    toneMapping: 'ACESFilmic', // 'Linear', 'Reinhard', 'Cineon', 'ACESFilmic'
    toneMappingExposure: 1.5,
    pixelRatio: {
      desktop: 2, // Max pixel ratio for desktop
      mobile: 1.5, // Max pixel ratio for mobile
    },
    antialias: {
      desktop: true,
      mobile: false, // Disabled on mobile for performance
    },
  },

  // Performance Settings
  performance: {
    targetFPS: 60,
    autoAdjust: true, // Automatically reduce quality if FPS drops
    fpsThreshold: 30, // FPS below this triggers quality reduction
    monitoringInterval: 1000, // Check FPS every X milliseconds
  },

  // Animation Settings
  animation: {
    particleRotation: {
      x: 0.0004,
      y: 0.0008,
    },
    scrollInfluence: 0.000001, // Particle rotation based on scroll
    floatingAmplitude: 0.3, // Object floating intensity
    floatingSpeed: 0.5,
    pulseAmplitude: 0.05, // Object scale pulse
    pulseSpeed: 2,
  },

  // Mobile Detection
  mobile: {
    userAgentRegex: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
    maxWidth: 768, // Screen width threshold
  },

  // WebGL Fallback
  fallback: {
    gradient: {
      enabled: true,
      colors: ['#15121b', '#15121b', '#221e28'],
      animationDuration: 15, // seconds
    },
    pulsingOrbs: {
      enabled: true,
      count: 2,
      blur: '3xl',
    },
  },
};

export default visualEffectsConfig;
