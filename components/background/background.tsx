"use client"

import React, { Suspense, useState, useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
 // @ts-expect-error: Random module type definition is not available, ignoring type checking
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

interface StarBackgroundProps {
  position?: [number, number, number];
  scale?: [number, number, number];
}

const StarBackground = (props: StarBackgroundProps) => {
  // Update the ref type to Points
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 });
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="$fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
