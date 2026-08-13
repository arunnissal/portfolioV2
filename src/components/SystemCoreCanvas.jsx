import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Line } from '@react-three/drei';

function CoreMesh() {
  const coreRef = useRef();
  
  useFrame((state) => {
    if (!coreRef.current) return;
    const t = state.clock.getElapsedTime();
    // Rotate and pulse
    coreRef.current.rotation.y = t * 0.15;
    coreRef.current.rotation.x = t * 0.08;
    const scaleVal = 1.0 + Math.sin(t * 1.5) * 0.04;
    coreRef.current.scale.set(scaleVal, scaleVal, scaleVal);
  });

  return (
    <mesh ref={coreRef}>
      <icosahedronGeometry args={[0.3, 1]} />
      <meshBasicMaterial 
        color="#06b6d4" 
        wireframe 
        toneMapped={false}
      />
    </mesh>
  );
}

function OrbitNode({ label, angle, radius, speedFactor, color, onHover }) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Calculate orbital circular path positions in 3D
    const currentAngle = angle + t * 0.12 * speedFactor;
    groupRef.current.position.x = Math.cos(currentAngle) * radius;
    groupRef.current.position.z = Math.sin(currentAngle) * radius;
    // Add a slight floating wobble
    groupRef.current.position.y = Math.sin(t * 1.2 + angle) * 0.08;
  });

  const nodePos = [
    Math.cos(angle) * radius,
    0,
    Math.sin(angle) * radius
  ];

  return (
    <group ref={groupRef}>
      {/* Node sphere */}
      <mesh 
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); onHover(label); }}
        onPointerOut={() => { setHovered(false); onHover(null); }}
      >
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshBasicMaterial color={hovered ? '#ca8a04' : color} toneMapped={false} />
      </mesh>

      {/* Connection line back to core center */}
      <Line
        points={[[0, 0, 0], [-groupRef.current?.position.x || 0, -groupRef.current?.position.y || 0, -groupRef.current?.position.z || 0]]}
        color={hovered ? 'rgba(202,138,4,0.3)' : 'rgba(255,255,255,0.04)'}
        lineWidth={1}
      />

      {/* Floating text labels */}
      <Text
        position={[0, 0.14, 0]}
        fontSize={0.065}
        color={hovered ? '#ca8a04' : '#94a3b8'}
        font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFJVnZa3glus919A.woff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

// Renders dynamic coordinate lines representing: Frontend -> API -> Backend -> Database -> AI -> Cloud
function SystemsFlowLine({ activeNode }) {
  const flowRef = useRef();

  useFrame((state) => {
    if (!flowRef.current) return;
    const t = state.clock.getElapsedTime();
    flowRef.current.rotation.y = t * 0.03;
  });

  // Coordinates mapping a processing chain flow
  const pts = [
    [-1.0, 0.4, 0.2],  // Frontend
    [-0.6, 0.1, -0.2], // API
    [-0.2, 0.3, 0.4],  // Backend
    [0.2, -0.3, -0.4], // Database
    [0.6, -0.1, 0.2],  // AI
    [1.0, -0.4, -0.2]  // Cloud
  ];

  return (
    <group ref={flowRef}>
      <Line
        points={pts}
        color="rgba(6, 182, 212, 0.18)"
        lineWidth={1.5}
      />
      {pts.map((pt, idx) => (
        <mesh key={idx} position={pt}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#06b6d4" toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

export default function SystemCoreCanvas() {
  const [hoveredLabel, setHoveredLabel] = useState(null);

  const nodes = [
    { label: 'Frontend', angle: 0, radius: 0.9, speedFactor: 1, color: '#06b6d4' },
    { label: 'API Gateway', angle: (Math.PI * 2) / 6, radius: 0.9, speedFactor: -0.8, color: '#06b6d4' },
    { label: 'Backend Core', angle: ((Math.PI * 2) / 6) * 2, radius: 0.9, speedFactor: 1.2, color: '#ca8a04' },
    { label: 'Database', angle: ((Math.PI * 2) / 6) * 3, radius: 0.9, speedFactor: -1, color: '#ca8a04' },
    { label: 'AI Service', angle: ((Math.PI * 2) / 6) * 4, radius: 0.9, speedFactor: 0.8, color: '#8b5cf6' },
    { label: 'Cloud Infrastructure', angle: ((Math.PI * 2) / 6) * 5, radius: 0.9, speedFactor: -1.1, color: '#0d9488' }
  ];

  return (
    <div className="w-full h-full relative min-h-[300px] md:min-h-[400px]">
      <div className="absolute top-3 right-4 text-[8px] font-mono text-accent-blue/40 tracking-widest uppercase pointer-events-none">[3D.SYSTEM_ARCHITECTURE_CORE]</div>
      {hoveredLabel && (
        <div className="absolute bottom-4 left-4 text-[9px] font-mono text-accent-gold tracking-widest uppercase bg-slate-950/80 border border-slate-900 px-2 py-0.5 rounded pointer-events-none">
          SYSTEM_STATE: {hoveredLabel.toUpperCase()}_NODE_HOVER
        </div>
      )}
      <Canvas camera={{ position: [0, 0, 1.8], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} />
        
        {/* Core System Engine */}
        <CoreMesh />

        {/* Orbiting System Components */}
        {nodes.map((node) => (
          <OrbitNode
            key={node.label}
            label={node.label}
            angle={node.angle}
            radius={node.radius}
            speedFactor={node.speedFactor}
            color={node.color}
            onHover={setHoveredLabel}
          />
        ))}

        {/* Data processing flow lines */}
        <SystemsFlowLine activeNode={hoveredLabel} />
      </Canvas>
    </div>
  );
}
