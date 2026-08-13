import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function QuantumBubbles({ color, count, speedFactor, sizeVal }) {
  const ref = useRef();
  
  // Generate random coordinate bounds for floating 3D perspective particles
  const [points] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Smooth slow orbits simulating float particles in 3D space
    ref.current.rotation.x += delta * 0.015 * speedFactor;
    ref.current.rotation.y += delta * 0.02 * speedFactor;
    
    // Parallax mouse movements
    const targetX = state.mouse.x * 0.15;
    const targetY = state.mouse.y * 0.15;
    ref.current.position.x += (targetX - ref.current.position.x) * 0.02;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.02;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={sizeVal}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

function GridFloor() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    // Slow dynamic waving rotation
    ref.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.03;
  });

  return (
    <gridHelper
      ref={ref}
      args={[50, 50, '#38bdf8', '#cbd5e1']}
      position={[0, -1.6, 0]}
      rotation={[Math.PI / 2.15, 0, 0]}
    />
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#f8fafc] bg-gradient-3d w-full h-full pointer-events-none overflow-hidden transition-colors duration-300">
      <Canvas camera={{ position: [0, 0, 2], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        {/* Glowing holographic grid floor */}
        <GridFloor />
        
        {/* Tech Cyan Bubbles - Larger 3D perspective */}
        <QuantumBubbles color="#06b6d4" count={120} speedFactor={0.8} sizeVal={0.05} />
        
        {/* Wealth Amber Gold Bubbles */}
        <QuantumBubbles color="#ca8a04" count={90} speedFactor={-0.6} sizeVal={0.06} />

        {/* Purple Accent Bubbles */}
        <QuantumBubbles color="#8b5cf6" count={70} speedFactor={0.5} sizeVal={0.07} />
      </Canvas>
    </div>
  );
}
