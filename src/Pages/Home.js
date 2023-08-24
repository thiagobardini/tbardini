import React from "react";
import CanvasComponent from "../Components/Canvas/CanvasComponent";
import { Box, Container } from "@mui/material";
import { keyframes } from "@emotion/react";
import HomeText from "../Components/HomeText";
import { useSelector } from "react-redux";

const Home = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

  return (
    <Container maxWidth="false" disableGutters>
      <Box
        sx={{
          position: "relative",
          animation: `${fadeIn} 2s`,
          padding: "60px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: !darkMode ? { xs: "100%" } : { xs: "100%", sm: "60%" },
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
            pt: 2,
            position: "absolute",
            right: 0,
            width: !darkMode ? "100%" : { xs: "100%", sm: "70%", md: "50%" },
            height: "calc(100vh - 184px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 1, lg: 4 },
            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              width: darkMode ? "100%" : { xs: "100%", sm: "80%", md: "60%" },
            }}
          >
            <HomeText />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
