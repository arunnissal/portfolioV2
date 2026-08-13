import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Line } from '@react-three/drei';
import { Cpu, ChevronRight, Layers, Target, Compass } from 'lucide-react';
import useTilt from '../hooks/useTilt';

function FloatingNode({ position, label, color, description, projects, onHover, activeNode }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Slow random orbital floating motion
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    const offset = label.charCodeAt(0) * 0.1; // unique seed offset per node
    meshRef.current.position.y = position[1] + Math.sin(t * 0.8 + offset) * 0.08;
    meshRef.current.position.x = position[0] + Math.cos(t * 0.6 + offset) * 0.05;
  });

  const isActive = activeNode === label;

  return (
    <group ref={meshRef}>
      {/* Node Sphere */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover({ label, description, projects });
        }}
        onPointerOut={() => {
          setHovered(false);
        }}
        position={[0, 0, 0]}
      >
        <sphereGeometry args={[isActive ? 0.16 : 0.12, 16, 16]} />
        <meshBasicMaterial 
          color={hovered || isActive ? 'var(--color-accent-gold)' : color} 
          toneMapped={false}
        />
      </mesh>

      {/* Connection Line back to center (0,0,0) */}
      <Line
        points={[[0, 0, 0], [-position[0], -position[1], -position[2]]]}
        color={hovered || isActive ? 'var(--color-accent-gold)' : 'rgba(255,255,255,0.06)'}
        lineWidth={1.2}
      />

      {/* Label Text floating above sphere */}
      <Text
        position={[0, 0.22, 0]}
        fontSize={0.09}
        color={hovered || isActive ? '#ffffff' : '#94a3b8'}
        font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFJVnZa3glus919A.woff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

export default function Capabilities() {
  const panelTilt = useTilt({ max: 5, scale: 1.01 });

  // Hovered tech focus state
  const [activeTech, setActiveTech] = useState({
    label: 'Django REST',
    description: 'Constructed REST APIs for JeevanSetu AI, Seminar Hall Booking, and UrbanEye platforms.',
    projects: ['JeevanSetu AI', 'Seminar Hall Booking', 'UrbanEye']
  });

  const techNodes = [
    { label: 'Django', position: [-1.4, 0.7, 0], color: '#ca8a04', description: 'Primary backend REST framework for DB schemas and authorization logic.', projects: ['JeevanSetu AI', 'Seminar Hall Booking', 'UrbanEye', 'Nexus AI'] },
    { label: 'PostgreSQL', position: [-1.2, -0.7, 0], color: '#ca8a04', description: 'Primary relational DB, optimizing query structures and triggers.', projects: ['JeevanSetu AI', 'Seminar Booking', 'UrbanEye'] },
    { label: 'React Native', position: [1.3, 0.7, 0], color: '#06b6d4', description: 'Used to build the mobile client interface for JeevanSetu AI.', projects: ['JeevanSetu AI'] },
    { label: 'React (Vite)', position: [1.4, -0.6, 0], color: '#06b6d4', description: 'Used to write responsive web dashboards with glassmorphism.', projects: ['Seminar Hall Booking', 'UrbanEye', 'Nexus AI'] },
    { label: 'Spring Boot', position: [-0.6, -1.2, 0], color: '#ca8a04', description: 'Used as an alternative robust Java backend for Civic reporting.', projects: ['UrbanEye'] },
    { label: 'Computer Vision', position: [0.6, 1.2, 0], color: '#8b5cf6', description: 'Integrated OpenCV flows for stadium seating and automation.', projects: ['Nexus AI'] },
    { label: 'Sarvam AI', position: [-0.6, 1.2, 0], color: '#8b5cf6', description: 'Integrated regional LLM endpoints for translation tasks.', projects: ['JeevanSetu AI'] },
  ];

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Wavelength R3F Canvas - Visual 3D Nodes */}
        <div className="lg:col-span-7 h-[280px] md:h-[450px] relative glass-card rounded-2xl border border-white/5 shadow-inner">
          <div className="absolute top-3 left-4 text-[10px] font-mono text-accent-blue tracking-widest">[WEBGL.3D_TECH_ECOSYSTEM]</div>
          <Canvas camera={{ position: [0, 0, 2.2], fov: 50 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} />
            
            {/* Center Core Node */}
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.2, 32, 32]} />
              <meshBasicMaterial color="#06b6d4" toneMapped={false} />
            </mesh>
            <Text
              position={[0, -0.32, 0]}
              fontSize={0.1}
              color="#06b6d4"
              font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFJVnZa3glus919A.woff"
              anchorX="center"
              anchorY="middle"
            >
              Software Engineer
            </Text>

            {/* Orbiting technology category nodes */}
            {techNodes.map((node) => (
              <FloatingNode
                key={node.label}
                position={node.position}
                label={node.label}
                color={node.color}
                description={node.description}
                projects={node.projects}
                onHover={setActiveTech}
                activeNode={activeTech.label}
              />
            ))}
          </Canvas>
        </div>

        {/* Right Column: Node focus card & contextual details */}
        <div className="lg:col-span-5 space-y-5 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
              <Layers size={12} className="animate-pulse" />
              <span>Skills Matrix</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-text-light leading-tight">3D Technical <span className="text-gradient">Ecosystem</span></h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans">
              Interact with the node grid on the left to read context on where these languages and backends were deployed in actual projects.
            </p>
          </div>

          {/* Node detail display card with Glint */}
          <div 
            ref={panelTilt.ref}
            style={panelTilt.style}
            className="glass-card p-5 rounded-xl border border-white/5 space-y-4 shadow-xl group relative h-64 flex flex-col justify-between"
          >
            <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="space-y-2">
              <h4 className="text-text-light text-lg md:text-xl font-bold font-mono tracking-tight flex items-center gap-2">
                <Cpu size={18} className="text-accent-blue" />
                <span>{activeTech.label}</span>
              </h4>
              <p className="text-text-muted text-xs md:text-sm leading-relaxed font-sans min-h-[50px]">{activeTech.description}</p>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-slate-850">
              <h5 className="text-[10px] font-bold text-accent-gold uppercase font-mono tracking-widest flex items-center gap-1">
                <Target size={12} />
                <span>Deploys In My Projects</span>
              </h5>
              <div className="flex flex-wrap gap-1.5 pl-0.5">
                {activeTech.projects.map((p) => (
                  <div key={p} className="flex items-center gap-1 text-xs text-text-light font-medium bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md shadow-sm">
                    <ChevronRight size={10} className="text-accent-blue" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
