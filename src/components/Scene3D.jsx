import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function ParticleNeuralNetwork({ count = 1200 }) {
  const pointsRef = useRef();

  // Generate coordinates distributed in a 3D breathing sphere shell
  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      // Radius of the sphere shell
      const r = 2.4 + Math.random() * 0.4;
      
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();

    // Revolve the particle shell slowly
    pointsRef.current.rotation.y = time * 0.04;
    pointsRef.current.rotation.x = time * 0.02;

    // Apply mouse parallax bending
    const targetX = state.mouse.x * 0.25;
    const targetY = state.mouse.y * 0.25;
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.025;
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.025;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0284c7"
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

function ParticleWaveFloor({ count = 1000 }) {
  const pointsRef = useRef();

  // Generate a flat 2D grid coordinates mapping in 3D space
  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3);
    const cols = 40;
    const rows = 25;
    const spacing = 0.25;

    for (let i = 0; i < count; i++) {
      const r = Math.floor(i / cols);
      const c = i % cols;

      arr[i * 3] = (c - cols / 2) * spacing;
      arr[i * 3 + 1] = -1.6; // Base floor height
      arr[i * 3 + 2] = (r - rows / 2) * spacing;
    }
    return arr;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const pos = pointsRef.current.geometry.attributes.position.array;

    // Mathematically animate the particle height (y) to create a flowing 3D wave landscape
    for (let i = 0; i < count; i++) {
      const x = pos[i * 3];
      const z = pos[i * 3 + 2];
      
      // Calculate dynamic wave heights using sine/cosine combinations
      pos[i * 3 + 1] = -1.6 + Math.sin(x * 0.5 + time) * Math.cos(z * 0.5 + time * 0.8) * 0.2;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // React to mouse movements for subtle perspective shifts
    const targetZ = state.mouse.y * 0.1;
    pointsRef.current.rotation.x = (Math.PI / 2.15) + targetZ;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ca8a04"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#f8fafc] bg-gradient-3d w-full h-full pointer-events-none overflow-hidden transition-colors duration-300">
      <Canvas camera={{ position: [0, 0, 2], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        {/* Waving 3D Particle light floor */}
        <ParticleWaveFloor />

        {/* Breathing 3D Particle neural network shell */}
        <ParticleNeuralNetwork />
      </Canvas>
    </div>
  );
}
