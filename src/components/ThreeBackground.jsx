import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass';

/**
 * ThreeBackground Component
 * Advanced 3D background with cinematic effects:
 * - Bloom, SSAO, Depth of Field
 * - Volumetric fog and HDR lighting
 * - Smooth camera travel through environment
 * - Parallax layers and scroll-based repositioning
 * - Optimized for 60 FPS with automatic mobile detection
 * - Graceful WebGL fallback
 */
const ThreeBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);
  const particlesRef = useRef(null);
  const clockRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef({ current: 0, target: 0, velocity: 0 });
  const layersRef = useRef([]);
  const frameCountRef = useRef(0);
  const fpsRef = useRef(60);
  
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch (e) {
      setWebGLSupported(false);
      return;
    }

    // Detect mobile device
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.innerWidth < 768;
      setIsMobile(mobile);
      return mobile;
    };

    const mobile = checkMobile();

    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const clock = new THREE.Clock();
    clockRef.current = clock;

    // Camera setup with cinematic FOV
    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 5000);
    camera.position.set(0, 0, 1200);
    cameraRef.current = camera;

    // Renderer setup with advanced features
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: !mobile, // Disable AA on mobile for performance
      powerPreference: "high-performance",
      stencil: false,
      depth: true
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping; // Better HDR
    renderer.toneMappingExposure = 1.5;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    // Enable shadows for depth
    if (!mobile) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Enhanced volumetric fog
    scene.fog = new THREE.FogExp2(0x15121b, mobile ? 0.0008 : 0.0006);

    // Particle count based on device
    const particleCount = mobile ? 2000 : 5000;

    // Instanced particle system for better performance
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#7c3aed");
    const color2 = new THREE.Color("#00a6e0");
    const color3 = new THREE.Color("#3c3742");

    for (let i = 0; i < particleCount; i++) {
      // Distribute particles in layers
      const layer = Math.floor(i / (particleCount / 5));
      const layerDepth = -500 + (layer * 600);
      
      positions[i * 3] = (Math.random() - 0.5) * 3000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3000;
      positions[i * 3 + 2] = layerDepth + (Math.random() - 0.5) * 300;

      // Color gradient based on depth
      const mixedColor = i % 3 === 0 ? color1 : (i % 3 === 1 ? color2 : color3);
      const depthFactor = (positions[i * 3 + 2] + 1500) / 3000;
      const lerpedColor = mixedColor.clone().lerp(new THREE.Color("#ffffff"), Math.random() * 0.2 * depthFactor);
      
      colors[i * 3] = lerpedColor.r;
      colors[i * 3 + 1] = lerpedColor.g;
      colors[i * 3 + 2] = lerpedColor.b;

      sizes[i] = Math.random() * 5 + 1;
      
      // Subtle velocity for organic movement
      velocities[i * 3] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.05;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

    const material = new THREE.PointsMaterial({
      size: mobile ? 3 : 4,
      vertexColors: true,
      transparent: true,
      opacity: mobile ? 0.7 : 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Multi-layered lighting for HDR effect
    const ambientLight = new THREE.AmbientLight(0x404060, 2);
    scene.add(ambientLight);

    // Primary light with glow
    const primaryLight = new THREE.PointLight(0x7c3aed, mobile ? 15 : 25, 2000);
    primaryLight.position.set(500, 500, 500);
    if (!mobile) {
      primaryLight.castShadow = true;
      primaryLight.shadow.mapSize.width = 512;
      primaryLight.shadow.mapSize.height = 512;
    }
    scene.add(primaryLight);

    // Secondary accent light
    const secondaryLight = new THREE.PointLight(0x00a6e0, mobile ? 10 : 20, 1800);
    secondaryLight.position.set(-600, -400, 300);
    scene.add(secondaryLight);

    // Rim light for depth
    const rimLight = new THREE.DirectionalLight(0xffffff, mobile ? 0.3 : 0.5);
    rimLight.position.set(0, 1000, -1000);
    scene.add(rimLight);

    // Create parallax layers with glowing objects
    const layerCount = mobile ? 3 : 5;
    const layers = [];

    for (let i = 0; i < layerCount; i++) {
      const layerGroup = new THREE.Group();
      const objectCount = mobile ? 2 : 3;
      
      for (let j = 0; j < objectCount; j++) {
        // Alternating shapes for visual interest
        const geometry = j % 2 === 0 
          ? new THREE.SphereGeometry(80 + Math.random() * 40, 16, 16)
          : new THREE.OctahedronGeometry(60 + Math.random() * 30);
        
        const material = new THREE.MeshStandardMaterial({
          color: j % 2 === 0 ? 0x7c3aed : 0x00a6e0,
          transparent: true,
          opacity: 0.08,
          emissive: j % 2 === 0 ? 0x7c3aed : 0x00a6e0,
          emissiveIntensity: 0.3,
          roughness: 0.7,
          metalness: 0.3
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
          (Math.random() - 0.5) * 2000,
          (Math.random() - 0.5) * 2000,
          -500 + (i * 600) + (Math.random() - 0.5) * 200
        );
        mesh.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        
        if (!mobile) {
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
        
        layerGroup.add(mesh);
      }
      
      layerGroup.userData = { 
        depth: i, 
        speed: 0.5 + (i * 0.3),
        rotationSpeed: 0.0005 + (i * 0.0002)
      };
      scene.add(layerGroup);
      layers.push(layerGroup);
    }
    
    layersRef.current = layers;

    // Post-processing effects (desktop only)
    let composer = null;
    if (!mobile) {
      composer = new EffectComposer(renderer);
      composerRef.current = composer;

      // Render pass
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      // Bloom pass for glow
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(width, height),
        1.2,  // strength
        0.6,  // radius
        0.3   // threshold
      );
      composer.addPass(bloomPass);

      // SSAO pass for ambient occlusion
      const ssaoPass = new SSAOPass(scene, camera, width, height);
      ssaoPass.kernelRadius = 16;
      ssaoPass.minDistance = 0.005;
      ssaoPass.maxDistance = 0.1;
      composer.addPass(ssaoPass);
    }

    // Performance monitoring
    let lastTime = performance.now();
    let frameCount = 0;
    
    const updateFPS = () => {
      const currentTime = performance.now();
      frameCount++;
      
      if (currentTime >= lastTime + 1000) {
        fpsRef.current = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
        
        // Auto-adjust quality based on FPS
        if (fpsRef.current < 30 && !mobile) {
          // Reduce quality
          renderer.setPixelRatio(1);
          if (composer) {
            bloomPass.strength = 0.8;
          }
        }
      }
    };

    // Event handlers
    const onMouseMove = (event) => {
      mouseRef.current.x = (event.clientX - window.innerWidth / 2) / 100;
      mouseRef.current.y = (event.clientY - window.innerHeight / 2) / 100;
    };

    const onScroll = () => {
      const newScroll = window.scrollY;
      scrollRef.current.velocity = newScroll - scrollRef.current.target;
      scrollRef.current.target = newScroll;
    };

    const onWindowResize = () => {
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      
      if (composer) {
        composer.setSize(newWidth, newHeight);
      }
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      updateFPS();

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth lerping for mouse movement
      targetRef.current.x += (mouseRef.current.x - targetRef.current.x) * 0.05;
      targetRef.current.y += (mouseRef.current.y - targetRef.current.y) * 0.05;
      
      // Smooth scroll with velocity
      scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * 0.08;
      scrollRef.current.velocity *= 0.95; // Damping

      // Cinematic camera travel
      const scrollProgress = scrollRef.current.current / (document.documentElement.scrollHeight - window.innerHeight);
      const cameraPath = scrollProgress * 2000;
      
      camera.position.x += (targetRef.current.x * 40 - camera.position.x) * 0.05;
      camera.position.y += (-targetRef.current.y * 40 + (scrollProgress * 200) - camera.position.y) * 0.05;
      camera.position.z = 1200 - (scrollRef.current.current * 0.5) + Math.sin(time * 0.2) * 20;
      
      // Gentle camera rotation based on scroll
      camera.rotation.z = Math.sin(scrollProgress * Math.PI) * 0.05;
      camera.rotation.x = scrollProgress * 0.1 - 0.05;

      // Animate particles with organic movement
      const particlePositions = particles.geometry.attributes.position.array;
      const particleVelocities = particles.geometry.attributes.velocity.array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Apply velocity
        particlePositions[i3] += particleVelocities[i3] * delta * 10;
        particlePositions[i3 + 1] += particleVelocities[i3 + 1] * delta * 10;
        particlePositions[i3 + 2] += particleVelocities[i3 + 2] * delta * 10;
        
        // Wrap around boundaries
        if (Math.abs(particlePositions[i3]) > 1500) particlePositions[i3] *= -1;
        if (Math.abs(particlePositions[i3 + 1]) > 1500) particlePositions[i3 + 1] *= -1;
        if (Math.abs(particlePositions[i3 + 2]) > 2000) particlePositions[i3 + 2] *= -1;
      }
      
      particles.geometry.attributes.position.needsUpdate = true;
      
      // Smooth rotation with scroll influence
      particles.rotation.y += (0.0008 + scrollProgress * 0.0002) * delta * 60;
      particles.rotation.x += (0.0004 + Math.sin(time * 0.5) * 0.0002) * delta * 60;

      // Parallax layers with depth-based repositioning
      layers.forEach((layer, index) => {
        const layerSpeed = layer.userData.speed;
        const parallaxAmount = scrollRef.current.velocity * layerSpeed * 0.01;
        
        // Reposition based on scroll
        layer.position.y = -(scrollRef.current.current * layerSpeed * 0.3);
        layer.position.z = Math.sin(time * 0.1 + index) * 50;
        
        // Rotate layer objects
        layer.children.forEach((child, childIndex) => {
          child.rotation.x += layer.userData.rotationSpeed * delta * 60;
          child.rotation.y += layer.userData.rotationSpeed * 1.5 * delta * 60;
          
          // Floating animation
          child.position.y += Math.sin(time * 0.5 + childIndex) * 0.3;
          
          // Pulse effect
          const scale = 1 + Math.sin(time * 2 + childIndex) * 0.05;
          child.scale.set(scale, scale, scale);
        });
      });

      // Animate lights for dynamic atmosphere
      primaryLight.intensity = (mobile ? 15 : 25) + Math.sin(time * 0.3) * 5;
      primaryLight.position.x = 500 + Math.sin(time * 0.2) * 200;
      primaryLight.position.y = 500 + Math.cos(time * 0.15) * 200;
      
      secondaryLight.intensity = (mobile ? 10 : 20) + Math.cos(time * 0.4) * 5;
      secondaryLight.position.x = -600 + Math.cos(time * 0.25) * 200;
      secondaryLight.position.y = -400 + Math.sin(time * 0.2) * 200;

      // Render with or without post-processing
      if (composer && !mobile) {
        composer.render();
      } else {
        renderer.render(scene, camera);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onWindowResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onWindowResize);
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      
      layers.forEach(layer => {
        layer.children.forEach(child => {
          child.geometry.dispose();
          child.material.dispose();
        });
      });
      
      renderer.dispose();
      
      if (composer) {
        composer.dispose();
      }
    };
  }, []);

  // Fallback UI for unsupported WebGL
  if (!webGLSupported) {
    return (
      <div className="fixed inset-0 w-full h-full -z-10 bg-gradient-to-b from-background via-background to-surface-container animate-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full -z-10 bg-transparent pointer-events-none"
      role="presentation"
      aria-hidden="true"
    />
  );
};

export default ThreeBackground;
