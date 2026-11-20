"use client";

import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { MODEL_CONFIG } from "./modelConfig";

useGLTF.setDecoderPath("/draco/");

interface Model3DProps {
  config: (typeof MODEL_CONFIG)[number];
}

const Model3D = ({ config }: Model3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(config.modelPath);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(clonedScene);
    const center = box.getCenter(new THREE.Vector3());

    // Shift mesh so its center sits at the origin (0, 0, 0)
    clonedScene.position.sub(center);
  }, [clonedScene]);

  return (
    <group
      ref={groupRef}
      position={config.position}
      rotation={[0, 0, 0]}
      scale={config.scale}
    >
      <primitive object={clonedScene} />
    </group>
  );
};

export default React.memo(Model3D);