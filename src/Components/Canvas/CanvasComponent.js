import React, { Suspense, useRef } from "react";
import { useSelector } from "react-redux";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HomeText from "../HomeText";
import { DarkCanvas } from "./DarkCanvas";
import { LightCanvas } from "./LightCanvas";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const CanvasComponent = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const ModelContainerLight = () => {
    const modelRef = useRef();

    useFrame(() => {
      modelRef.current.rotation.y += 0.001;
    });
    return (
      <group ref={modelRef}>
        <LightCanvas />
      </group>
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
          position={[0, 0, 5]} // Adjust camera start position as needed
        />
        <group ref={modelRef}>
          <DarkCanvas />
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
        width: { xs: "100vw", md: "100vw" },
        height: "calc(100vh - 124px)",
        animation: `${fadeIn} 2s`,
        // backgroundColor: "#1B1917",
        // borderRadius: "20px",
        mx: 2,
      }}
    >
      {!darkMode ? (
        <Canvas>
          <pointLight position={[5, 5, 5]} intensity={0.5} />
          <Suspense fallback={null}>
            <ModelContainerLight />
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
      ) : (
        <Canvas>
          <Suspense fallback={null}>
            <ModelContainerDark />
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
      )}

      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "100%", md: "50%" },
          // width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <HomeText />
      </Box> */}
    </Box>
  );
};

export default CanvasComponent;
