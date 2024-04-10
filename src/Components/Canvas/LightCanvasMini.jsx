import React, { useRef, useEffect } from "react"; // Adicione useEffect
import * as THREE from "three"; // I
import { useGLTF } from "@react-three/drei";

export function LightCanvasMini(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/sceneMini.glb");

  useEffect(() => {
    // Adicione useEffect
    materials.Crown.side = THREE.FrontSide; // Habilitar backface culling
  }, [materials]);

  materials.Stone.roughness = 0.4; // Smaller value makes surface brighter
  materials.Crown.roughness = 2.9;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -8, 0]}
          scale={1.8}
        >
          <group name="Root">
            <group
              name="Empty"
              position={[0, 0, 5]}
              rotation={[0, 0, 0]}
              scale={1.2}
            >
              <group name="nimbus002">
                <mesh
                  name="nimbus002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.nimbus002_0.geometry}
                  material={materials.Crown}
                />
              </group>
              <group name="nimbus001">
                <mesh
                  name="nimbus001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.nimbus001_0.geometry}
                  material={materials.Crown}
                />
              </group>
              <group name="nimbus003">
                <mesh
                  name="nimbus003_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.nimbus003_0.geometry}
                  material={materials.Crown}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/sceneMini.glb");
