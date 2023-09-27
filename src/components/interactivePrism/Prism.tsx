/* eslint-disable */
// @ts-nocheck

import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";

export const Prism = React.memo(({ onRayOver, onRayOut, onRayMove, ...props }) => {
  const { nodes } = useLoader(
    GLTFLoader,
    "https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/xxpI-prism.glb",
  );

  const invisiblePrismGeometry = useMemo(() => (
    <mesh
      visible={false}
      scale={1.9}
      rotation={[Math.PI / 2, Math.PI, 0]}
      onRayOver={onRayOver}
      onRayOut={onRayOut}
      onRayMove={onRayMove}
    >
      <cylinderGeometry args={[1, 1, 1, 3, 1]} />
    </mesh>
  ), [onRayOver, onRayOut, onRayMove]);

  return (
    <>
      {invisiblePrismGeometry}
      <mesh
        position={[0, 0, 0.6]}
        renderOrder={10}
        scale={6}
        dispose={null}
        geometry={nodes.Cone.geometry}
      >
        <meshPhysicalMaterial
          clearcoat={1.5}
          clearcoatRoughness={0}
          transmission={1}
          thickness={1}
          roughness={0}
          toneMapped={true}
          // luminanceSmoothing={true}
          smoothstep={10}
        />
      </mesh>
    </>
  );
});
