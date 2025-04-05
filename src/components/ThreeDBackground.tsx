
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeDBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Create globe-like structure with particles
    const globeRadius = 2;
    const particlesCount = 2000;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      // Create points distributed in a sphere shape
      const phi = Math.acos(-1 + (2 * i) / particlesCount);
      const theta = Math.sqrt(particlesCount * Math.PI) * phi;
      
      const x = globeRadius * Math.cos(theta) * Math.sin(phi);
      const y = globeRadius * Math.sin(theta) * Math.sin(phi);
      const z = globeRadius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Lines connecting points to simulate connections
    const connectionsGeometry = new THREE.BufferGeometry();
    const connectionsPositions = [];
    const connectionsCount = 150; // Number of connections
    
    for (let i = 0; i < connectionsCount; i++) {
      // Select two random points
      const index1 = Math.floor(Math.random() * particlesCount);
      const index2 = Math.floor(Math.random() * particlesCount);
      
      // Get positions of the points
      const x1 = positions[index1 * 3];
      const y1 = positions[index1 * 3 + 1];
      const z1 = positions[index1 * 3 + 2];
      
      const x2 = positions[index2 * 3];
      const y2 = positions[index2 * 3 + 1];
      const z2 = positions[index2 * 3 + 2];
      
      // Add line vertices
      connectionsPositions.push(x1, y1, z1);
      connectionsPositions.push(x2, y2, z2);
    }
    
    connectionsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(connectionsPositions, 3));
    
    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x8DA9C4,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const connectionsMaterial = new THREE.LineBasicMaterial({
      color: 0x8DA9C4,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
    
    // Meshes
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    const connectionsMesh = new THREE.LineSegments(connectionsGeometry, connectionsMaterial);
    
    scene.add(particlesMesh);
    scene.add(connectionsMesh);
    
    // Responsive handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.y += 0.001;
      connectionsMesh.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(particlesMesh);
      scene.remove(connectionsMesh);
      particlesGeometry.dispose();
      connectionsGeometry.dispose();
      particlesMaterial.dispose();
      connectionsMaterial.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeDBackground;
