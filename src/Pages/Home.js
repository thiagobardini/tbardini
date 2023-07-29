import React from "react";
import CanvasComponent from "../Components/Canvas/CanvasComponent";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import HomeText from "../Components/HomeText";
const Home = () => {
  const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

  return (
    <Box sx={{ position: "relative", animation: `${fadeIn} 2s` }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "100%", md: "50%" },
          height: "calc(100vh - 124px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <CanvasComponent />
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          width: { xs: "100%", md: "50%" },
          // width: "50%",
          height: "calc(100vh - 124px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          // pointerEvents: "none",
        }}
      >
        <HomeText />
      </Box>
    </Box>
  );
};

export default Home;
