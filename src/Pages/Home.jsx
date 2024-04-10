import React from "react";
import CanvasComponent from "../Components/Canvas/CanvasComponent";
import { Box, Container } from "@mui/material";
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
    <Container maxWidth='false' sx={{ padding: 0 }}>
      <Box
        sx={{
          position: "relative",
          animation: `${fadeIn} 2s`,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: { xs: "100vw", sm: "60vw" },
            height: "calc(100vh - 16px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <CanvasComponent />
        </Box>
        <Box sx={{ height: "100vh", display: "flex", justifyContent: "flex-end" }}>
          <Box
            sx={{
              pb: { xs: "150px !important", sm: "0" },
              right: 0,
              width: { xs: "100%", sm: "90%", md: "50%" },
              height: "100%",

              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center", sm: "center" },
              alignItems: "center",
              px: { xs: 1, lg: 4 },
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                pt: { xs: "250px", md: "130px" },
              }}
            >
              <HomeText />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
