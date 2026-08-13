import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function QuantumBubbles({ color, count, speedFactor, sizeVal }) {
  const ref = useRef();
  
  // Generate random coordinate bounds for quantum energy bubbles
  const [points] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Slow rotational orbits simulating floating energy particles
    ref.current.rotation.x += delta * 0.01 * speedFactor;
    ref.current.rotation.y += delta * 0.015 * speedFactor;
    
    // Smooth mouse draft
    const targetX = state.mouse.x * 0.1;
    const targetY = state.mouse.y * 0.1;
    ref.current.position.x += (targetX - ref.current.position.x) * 0.015;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.015;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={sizeVal}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.45}
      />
    </Points>
  );
}

function GridFloor() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.08) * 0.02;
  });

  return (
    <gridHelper
      ref={ref}
      args={[45, 45, '#cbd5e1', '#cbd5e1']}
      position={[0, -1.8, 0]}
      rotation={[Math.PI / 2.15, 0, 0]}
    />
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#f8fafc] bg-gradient-3d w-full h-full pointer-events-none overflow-hidden transition-colors duration-300">
      <Canvas camera={{ position: [0, 0, 1.8], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        {/* Holographic grid floor */}
        <GridFloor />
        
        {/* Stark Cyan Quantum Bubbles */}
        <QuantumBubbles color="#06b6d4" count={70} speedFactor={1} sizeVal={0.035} />
        
        {/* Wealth Gold/Champagne Cosmic Bubbles */}
        <QuantumBubbles color="#ca8a04" count={60} speedFactor={-0.8} sizeVal={0.04} />
      </Canvas>
    </div>
  );
}
