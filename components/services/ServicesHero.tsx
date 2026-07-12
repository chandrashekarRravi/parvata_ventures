"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NetworkMesh() {
  const group = useRef<THREE.Group>(null!);

  const { points, lines } = useMemo(() => {
    const POINTS = 120;  // 120 pts → ~7k checks vs 450 → ~100k checks
    const MAX_DIST = 1.8;

    const pts: THREE.Vector3[] = [];
    let attempts = 0;

    while (pts.length < POINTS && attempts < 8000) {
      attempts++;
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 1.5;

      const angle = -0.15;
      const rx = x * Math.cos(angle) - y * Math.sin(angle);
      const ry = x * Math.sin(angle) + y * Math.cos(angle);

      const valid =
        (rx >= -9 && rx <= -3 && ry >= -1.2 && ry <= 1.2) ||
        (rx >= 3  && rx <= 9  && ry >= -1.2 && ry <= 1.2) ||
        (rx > -3  && rx <= 0  && ry >= -1.5 && ry <= 2.2) ||
        (rx > 0   && rx <= 2  && ry >= 0.5  && ry <= 2.5) ||
        (rx > 0   && rx <= 2.5 && ry >= -1.2 && ry <= 0.5)||
        (rx > 0   && rx < 3  && ry >= -2.2  && ry <= 1.5) ||
        (rx >= -2.5 && rx <= 0 && ry >= -2.5 && ry <= -1.0)||
        Math.random() < 0.04;

      if (valid) pts.push(new THREE.Vector3(x, y, z));
    }

    const lineArray: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < MAX_DIST) {
          lineArray.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    return {
      points: new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z])),
      lines:  new Float32Array(lineArray),
    };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.3) * 0.15;
      group.current.rotation.x = Math.cos(t * 0.2) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[lines, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#000000" transparent opacity={0.15} />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[points, 3]}
          />
        </bufferGeometry>
        <pointsMaterial color="#000000" size={0.08} sizeAttenuation />
      </points>
    </group>
  );
}

export default function ServicesHero() {
  return (
    <section className="relative min-h-[614px] flex items-center justify-center overflow-hidden bg-surface-container-low px-gutter py-section-padding-sm">
      
      {/* Handshake 3D Wireframe — dpr capped at 1 for smooth perf */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas
          orthographic
          camera={{ zoom: 55, position: [0, 0, 20] }}
          dpr={1}
        >
          <ambientLight intensity={2} />
          <NetworkMesh />
        </Canvas>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-container-max mx-auto text-center z-10 pointer-events-none"
      >
        <span className="font-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
          Our Services
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8 max-w-4xl mx-auto leading-tight">
          One Partner. Endless Opportunities.
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          We provide comprehensive education, career, and business support services tailored to help students, professionals, institutions, and organizations achieve their goals.
        </p>
      </motion.div>
    </section>
  );
}
