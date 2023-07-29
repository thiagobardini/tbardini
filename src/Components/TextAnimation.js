import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";

function TextAnimation() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const typeAnimationStyle = useMemo(
    () => ({
      display: "inline-block",
      fontSize: { xs: "1.1rem", xxs: "1.3rem" },
      fontWeight: 800,
      color: darkMode ? "rgb(214, 211, 209)" : "#222831",
      textShadow: darkMode
        ? "none"
        : "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff",
    }),
    [darkMode]
  );

  return (
    <Typography>
      <Box
        component="span"
        sx={{
          display: "inline-block",
          fontWeight: 600,
          fontSize: { xs: "1.1rem", xxs: "1.3rem" },
        }}
      >
        {"<"}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            color: "#1270AF",
            textShadow: "none",
          }}
        >
          code
        </Box>
        {">"}
      </Box>
      <Box
        component="span"
        sx={{
          display: "inline-block",
          fontSize: { xs: "1.1rem", xxs: "1.3rem" },
          color: darkMode ? "rgb(168, 162, 158)" : "#222831",
          textShadow: darkMode
            ? "none"
            : "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff",
          mr: "0.5rem",
        }}
      >
        I build
      </Box>
      <Box sx={typeAnimationStyle}>
        <TypeAnimation
          sequence={["web applications", 1000, "automation tools", 1000]}
          speed={50}
          // style={typeAnimationStyle}
          repeat={Infinity}
        />
      </Box>
      <Box
        component="span"
        sx={{
          display: "inline-block",
          fontWeight: 600,
          fontSize: { xs: "1.1rem", xxs: "1.3rem" },
        }}
      >
        {"</"}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            fontWeight: 600,
            color: "#1270AF",
          }}
        >
          code
        </Box>
        {">"}
      </Box>
    </Typography>
  );
}

export default TextAnimation;
