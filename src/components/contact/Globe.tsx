"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, Suspense } from "react";

function Wireframe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.12; });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2, 4]} />
      <meshBasicMaterial color="#406edc" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y -= dt * 0.18; });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.85, 64, 64]} />
      <meshPhysicalMaterial
        color="#dbe6ff"
        emissive="#406edc"
        emissiveIntensity={0.18}
        roughness={0.3}
        metalness={0.3}
        clearcoat={1}
      />
    </mesh>
  );
}

function Pins() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => { if (group.current) group.current.rotation.y += dt * 0.12; });

  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < 18; i++) {
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      const r = 2.03;
      arr.push([
        r * Math.sin(p) * Math.cos(t),
        r * Math.sin(p) * Math.sin(t),
        r * Math.cos(p),
      ]);
    }
    return arr;
  }, []);

  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#d4a843" emissive="#e7c068" emissiveIntensity={1} />
        </mesh>
      ))}
    </group>
  );
}

export default function Globe() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full bg-navy-400/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-10 rounded-full bg-gold-400/12 blur-3xl pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[4, 4, 4]} intensity={70} color="#fff5dc" />
          <pointLight position={[-4, -2, -3]} intensity={45} color="#9ec4ff" />
          <Core />
          <Wireframe />
          <Pins />
        </Suspense>
      </Canvas>
    </div>
  );
}
