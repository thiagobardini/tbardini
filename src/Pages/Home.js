import React from "react";
import CanvasComponent from "../Components/Canvas/CanvasComponent";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

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
      <CanvasComponent />
    </Box>
  );
};

export default Home;
