import React from "react";
import { Box, Stack } from "@mui/system";
import logoCircule from "../Assets/images/logoAnimation/logoCircule.png";
import logoLetters from "../Assets/images/logoAnimation/logoLetters.png";

const LogoAnimation = ({ height }) => {
  return (
    <Stack
      sx={{
        position: "relative",
        ".logo-letters": {
          position: "absolute",
          top: 0,
          left: 0,
          transformOrigin: "50% 50%",
          animation: "rotate 3s ease-in-out",
          "@keyframes rotate": {
            from: {
              transform: "rotate(0deg)",
            },
            to: {
              transform: "rotate(360deg)",
            },
          },
        },
      }}
    >
      <Box
        component="img"
        alt="logoCircule"
        src={logoCircule}
        sx={{ height: { height } }}
      />
      <Box
        component="img"
        className="logo-letters"
        alt="logoLetters"
        src={logoLetters}
        sx={{ height: { height } }}
      />
    </Stack>
  );
};

export default LogoAnimation;
