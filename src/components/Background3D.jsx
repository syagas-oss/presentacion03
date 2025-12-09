import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function DNAHelix(props) {
  const ref = useRef();
  
  // Generamos puntos en forma de doble hélice
  const points = useMemo(() => {
    const count = 400; // Número de partículas
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color('#005CA9'); // BioBlue
    const color2 = new THREE.Color('#D4AF37'); // BioGold

    for (let i = 0; i < count; i++) {
      const t = i * 0.1;
      const radius = 2;
      const height = (i - count / 2) * 0.05;

      // Hélice 1
      const x1 = Math.cos(t) * radius;
      const z1 = Math.sin(t) * radius;
      
      // Hélice 2 (desfasada PI)
      const x2 = Math.cos(t + Math.PI) * radius;
      const z2 = Math.sin(t + Math.PI) * radius;

      // Alternamos puntos entre las dos hebras
      const isStrand1 = i % 2 === 0;
      const x = isStrand1 ? x1 : x2;
      const y = height;
      const z = isStrand1 ? z1 : z2;

      // Aleatoriedad ligera para efecto orgánico
      positions[i * 3] = x + (Math.random() - 0.5) * 0.2;
      positions[i * 3 + 1] = y + (Math.random() - 0.5) * 0.2;
      positions[i * 3 + 2] = z + (Math.random() - 0.5) * 0.2;

      const color = isStrand1 ? color1 : color2;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.1; // Rotación lenta y constante
    ref.current.rotation.z += delta * 0.05;
  });

  return (
    <group {...props} rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points.positions} colors={points.colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-bio-dark">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <fog attach="fog" args={['#0B1120', 5, 20]} />
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
           <DNAHelix />
        </Float>
      </Canvas>
      {/* Overlay gradiente para asegurar legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-bio-dark/80 via-transparent to-bio-dark/90 pointer-events-none" />
    </div>
  );
}