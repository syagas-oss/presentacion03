import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSwarm = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Create particles resembling organic matter/cells/DNA fragments
  const sphere = useMemo(() => {
    const count = 300; // Not too dense
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 
      
      const r = 10 + Math.random() * 20; // Radius spread
      
      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#005CB9"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const BioNodes = () => {
    // Floating larger spheres representing "Cells" or "Data Points"
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if(group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    })

    return (
        <group ref={group}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[5, 2, -10]}>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial color="#00A3E0" transparent opacity={0.2} wireframe />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
                <mesh position={[-6, -4, -15]}>
                     <icosahedronGeometry args={[2, 0]} />
                    <meshStandardMaterial color="#005CB9" transparent opacity={0.15} wireframe />
                </mesh>
            </Float>
             <Float speed={1} rotationIntensity={0.4} floatIntensity={0.8}>
                <mesh position={[8, -6, -20]}>
                     <torusGeometry args={[3, 0.1, 16, 100]} />
                    <meshStandardMaterial color="#C5A900" transparent opacity={0.1} />
                </mesh>
            </Float>
        </group>
    )
}

const Background3D: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-white to-blue-50">
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#005CB9" />
        <ParticleSwarm />
        <BioNodes />
      </Canvas>
    </div>
  );
};

export default Background3D;