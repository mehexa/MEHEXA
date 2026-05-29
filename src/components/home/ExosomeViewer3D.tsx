"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sparkles, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, Suspense } from "react";

function LipidBilayer() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.06;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.6, 96, 96]} />
      <meshPhysicalMaterial
        transmission={0.92}
        thickness={0.5}
        roughness={0.08}
        ior={1.35}
        attenuationColor={new THREE.Color("#9ec4ff")}
        attenuationDistance={1.4}
        color={"#dbe6ff"}
        clearcoat={1}
        clearcoatRoughness={0.08}
      />
    </mesh>
  );
}

function InnerCargo() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current) {
      group.current.rotation.y -= dt * 0.18;
      group.current.rotation.x += dt * 0.04;
    }
  });

  const positions = useMemo(() => {
    const arr: [number, number, number, number, string][] = [];
    for (let i = 0; i < 26; i++) {
      const r = Math.random() * 0.9;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr.push([
        r * Math.sin(p) * Math.cos(t),
        r * Math.sin(p) * Math.sin(t),
        r * Math.cos(p),
        Math.random() * 0.06 + 0.04,
        Math.random() > 0.5 ? "#e7c068" : "#406edc",
      ]);
    }
    return arr;
  }, []);

  return (
    <group ref={group}>
      {positions.map(([x, y, z, r, c], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[r, 16, 16]} />
          <meshStandardMaterial
            color={c}
            emissive={c}
            emissiveIntensity={0.55}
            roughness={0.3}
            metalness={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

function SurfaceLigands() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.06;
  });

  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < 20; i++) {
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      const r = 1.65;
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
      {positions.map(([x, y, z], i) => {
        const out = new THREE.Vector3(x, y, z).normalize().multiplyScalar(0.22);
        return (
          <group key={i} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.075, 16, 16]} />
              <meshStandardMaterial
                color="#f5d68a"
                emissive="#e7c068"
                emissiveIntensity={0.7}
                metalness={0.4}
                roughness={0.2}
              />
            </mesh>
            <mesh position={[out.x * 0.5, out.y * 0.5, out.z * 0.5]}>
              <cylinderGeometry args={[0.015, 0.015, 0.18, 8]} />
              <meshStandardMaterial color="#e7c068" emissive="#b58a2a" emissiveIntensity={0.35} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} intensity={140} color="#fff5dc" />
      <pointLight position={[-5, -4, -3]} intensity={70} color="#9ec4ff" />
      <pointLight position={[0, 0, 6]} intensity={30} color="#ffffff" />

      <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.6}>
        <group>
          <LipidBilayer />
          <InnerCargo />
          <SurfaceLigands />
        </group>
      </Float>

      <Sparkles count={90} scale={[8, 8, 8]} size={2.2} speed={0.3} color="#e7c068" opacity={0.55} />
      <Environment preset="apartment" environmentIntensity={0.45} />
    </>
  );
}

export default function ExosomeViewer3D() {
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      <div className="absolute inset-0 rounded-full bg-gold-400/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-12 rounded-full bg-navy-400/12 blur-3xl pointer-events-none" />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="!w-full !h-full"
      >
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(Math.PI * 2) / 3}
          />
        </Suspense>
      </Canvas>
      <div className="hidden sm:block absolute top-4 left-4 glass rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ink-300">
        Lipid bilayer · ~100 nm
      </div>
      <div className="hidden sm:block absolute bottom-4 right-4 glass rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-gold-700">
        Surface ligands · AI-optimized
      </div>
      <div className="hidden md:block absolute top-1/2 right-2 -translate-y-1/2 glass rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ink-300">
        RNA · proteins · cargo
      </div>
    </div>
  );
}
