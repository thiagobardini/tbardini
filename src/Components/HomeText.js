import { useEffect, useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";
import TextAnimation from "./TextAnimation";
import ButtonFab from "./ButtonFab";
import ScrollTrigger from "react-scroll-trigger";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  minHeight: "250px",
  maxHeight: "650px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  textAlign: "center",
  zIndex: 1,
}));

const HomeText = () => {
  const [key, setKey] = useState(0);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [darkMode]);

  const onEnterViewport = (animationClass) => {
    const element = document.getElementById(animationClass);
    if (element) {
      element.classList.add(animationClass);
    }
  };
  return (
    <CustomBox component="section" key={key}>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          color: darkMode ? "#eeeeee" : "#eeeeee",
          fontWeight: 800,
          position: "relative",
          borderRadius: "5px",
          fontSize: "3rem",
          fontFamily: "TuskerGrotesk",
          letterSpacing: "0.1em",
        }}
      >
        <TypeAnimation
          sequence={["Hi, I'm Thiago"]}
          wrapper="span"
          speed={50}
          repeat={1}
          cursor={false}
        />
      </Typography>
      <Box sx={{ py: 3 }}>
        <TextAnimation darkMode={true} />
      </Box>

      <Box
        sx={{
          px: 1,
        }}
      >
        <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-up-h1")}>
          <Typography
            variant="h6"
            id="fade-slide-up-h1"
            sx={{
              color: (theme) => theme.palette.text.secondary,
              backdropFilter: darkMode ? "blur(2px)" : "blur(3px)",
              textShadow: darkMode
                ? "none"
                : {
                    xs: "0 0 5px #d6d3d1, 0 0 5px #d6d3d1, 0 0 5px #d6d3d1, 0 0 5px #d6d3d1, 0 0 5px #d6d3d1, 0 0 5px #d6d3d1",
                    md: "none",
                  },
              fontWeight: 600,
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
              fontFamily: "PPNeueMontreal-Medium",
              "&.fade-slide-up-h1": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            I'm a Boston based{" "}
            <span
              style={{
                fontWeight: 900,
                color: darkMode ? "#eeeeee" : "#222831",
                textShadow: darkMode
                  ? "none"
                  : "0 0 5px #ffffff, 0 0 5px #ffffff, 0 0 5px #ffffff, 0 0 5px #ffffff, 0 0 5px #ffffff, 0 0 5px #ffffff",
              }}
            >
              software engineer
            </span>{" "}
            turned problem-solver, bringing creativity and design thinking to
            every line of code.
          </Typography>
        </ScrollTrigger>
      </Box>

      <Box mt={4} sx={{ width: "auto" }}>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <ButtonFab
            to="/aboutme"
            label="See more about me"
            onClick={() => window.scrollTo(0, 0)}
          />
        </Box>
      </Box>
    </CustomBox>
  );
};

export default HomeText;
