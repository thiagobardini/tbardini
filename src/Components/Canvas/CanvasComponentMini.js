import React, { Suspense, useRef } from "react";
import { useSelector } from "react-redux";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { DarkCanvas } from "./DarkCanvas";
import { LightCanvasMini } from "./LightCanvasMini";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const CanvasComponentMini = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const ModelContainerLight = () => {
    const modelRef = useRef();
    const cameraRef = useRef();
    useFrame(({ camera }) => {
      modelRef.current.rotation.set(0, modelRef.current.rotation.y + 0.001, 0);
    });

    return (
      <>
        <perspectiveCamera
          ref={cameraRef}
          position={[0, 0, 5]} // Adjust camera start position as needed
        />
        <group ref={modelRef}>
          <LightCanvasMini />
        </group>
      </>
    );
  };

  const ModelContainerDark = () => {
    const modelRef = useRef();
    const cameraRef = useRef();
    useFrame(({ camera }) => {
      modelRef.current.rotation.y += 0.001;
    });

    return (
      <>
        <perspectiveCamera
          ref={cameraRef}
          position={[0, 0, 0]} // Adjust camera start position as needed
        />
        <group ref={modelRef}>
          <LightCanvasMini />
        </group>
      </>
    );
  };

  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  `;
  return (
    <Box
      sx={{
        position: "relative",
        animation: `${fadeIn} 2s`,
        height: "220px",
      }}
    >
      <Canvas>
        <Suspense fallback={null}>
          {!darkMode ? (
            <>
              <pointLight position={[5, 5, 5]} intensity={0.5} />
              <ModelContainerLight />
            </>
          ) : (
            <ModelContainerDark />
          )}
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </Box>
  );
};

export default CanvasComponentMini;
