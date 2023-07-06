import React, { Suspense, useRef } from "react";
import { useSelector } from "react-redux";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, OrbitControls, Lightformer } from "@react-three/drei";
import { Model } from "./Model";
import HomeText from "../HomeText";
import { DarkCanvas } from "./DarkCanvas";

const CanvasComponent = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const ModelContainerLight = () => {
    const modelRef = useRef();

    useFrame(() => {
      modelRef.current.rotation.y += 0.001;
    });
    return (
      <group ref={modelRef}>
        <Model />
      </group>
    );
  };
  const ModelContainerDark = () => {
    const modelRef = useRef();
    const cameraRef = useRef();
    // const zoomSpeed = 0.001;
    // const scrollSpeed = 0.2;

    useFrame(({ camera }) => {
      // Mover a câmera para baixo
      // camera.position.y -= scrollSpeed;
      // Ajustar o campo de visão (zoom)
      // const zoom = Math.max(1, camera.position.y * zoomSpeed);
      // cameraRef.current.zoom = zoom;
      // cameraRef.current.updateProjectionMatrix();
      modelRef.current.rotation.y += 0.001;
    });

    return (
      <>
        <perspectiveCamera
          ref={cameraRef}
          position={[0, 0, 5]} // Ajuste a posição inicial da câmera conforme necessário
        />
        <group ref={modelRef}>
          <DarkCanvas />
        </group>
      </>
    );
  };

  // const ambientLightIntensity = 4;

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {!darkMode ? (
        <Canvas>
          {/* <Sky azimuth={1} inclination={0.6} distance={1000} /> */}
          {/* <ambientLight intensity={ambientLightIntensity} color="#000000" /> */}
          <pointLight position={[0, 0, 1]} />

          <Suspense fallback={null}>
            <ModelContainerLight />
          </Suspense>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Canvas>
      ) : (
        <Canvas>
          <Suspense fallback={null}>
            <ModelContainerDark />
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
      )}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <HomeText />
      </div>
    </div>
  );
};

export default CanvasComponent;
