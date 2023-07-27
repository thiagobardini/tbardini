import React from "react";
import CanvasComponent from "../Components/Canvas/CanvasComponent";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ position: "relative" }}>
      {/* // <Box> */}
      <CanvasComponent />
    </Box>
  );
};

export default Home;
