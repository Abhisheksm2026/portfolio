import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import './ThreeBackground.css';

// Dark, low‑intensity galaxy
const DarkGalaxy = () => {
  const pointsRef = useRef();
  const count = 12000;          // fewer particles for performance
  const radius = 14;
  const arms = 4;
  const spin = 2.2;
  const randomness = 0.3;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const armAngle = (i % arms) * (Math.PI * 2 / arms);
    const angle = armAngle + (i / count) * Math.PI * spin;
    const r = Math.pow(Math.random(), 1.5) * radius;
    
    const x = Math.cos(angle) * r + (Math.random() - 0.5) * randomness * (r / 2);
    const z = Math.sin(angle) * r + (Math.random() - 0.5) * randomness * (r / 2);
    const y = Math.sin(angle * 2) * 0.3 + (Math.random() - 0.5) * 0.2;
    
    positions[i*3] = x;
    positions[i*3+1] = y;
    positions[i*3+2] = z;
    
    // Dark galaxy colours: deep purple, dark blue, very dim
    const t = r / radius; // 0 = centre, 1 = edge
    const rCol = 0.2 + t * 0.1;
    const gCol = 0.1 + t * 0.15;
    const bCol = 0.3 + t * 0.2;
    colors[i*3] = rCol;
    colors[i*3+1] = gCol;
    colors[i*3+2] = bCol;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  useFrame(() => {
    if (pointsRef.current) {
      // Continuous, very slow rotation – seamless loop
      pointsRef.current.rotation.y += 0.0003;
      pointsRef.current.rotation.x += 0.00005;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Very faint central glow
const DimCore = () => {
  const coreRef = useRef();
  useFrame(() => {
    if (coreRef.current) coreRef.current.rotation.y += 0.001;
  });
  return (
    <mesh ref={coreRef}>
      <sphereGeometry args={[0.6, 24, 24]} />
      <meshStandardMaterial
        color="#1a1a3a"
        emissive="#2a1a5a"
        emissiveIntensity={0.15}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="three-bg">
      <Canvas camera={{ position: [0, 0, 16], fov: 50 }}>
        <ambientLight intensity={0.08} />
        <pointLight position={[0, 0, 0]} intensity={0.2} color="#2a1a5a" distance={25} />
        <fogExp2 attach="fog" color="#05050a" density={0.015} />
        <DarkGalaxy />
        <DimCore />
        <Stars radius={180} depth={120} count={3000} factor={4} saturation={0.1} fade speed={0.2} color="#334" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;