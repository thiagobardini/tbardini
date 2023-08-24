import { useEffect } from "react";
import { Box, styled, Typography, Button, useTheme } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TextAnimation from "./TextAnimation";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  zIndex: 1,
}));

const HomeText = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theme = useTheme();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <CustomBox component="section">
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
          pb: 4,
          fontSize: "3rem",
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
      <TextAnimation darkMode={true} />

      <Box
        sx={{
          py: 3,
          px: 1,
          // textShadow: darkMode
          //   ? "none"
          //   : "0 0 5px #ffffff, 0 0 5px #ffffff, 0 0 5px #ffffff, 0 0 5px #ffffff, 0 0 5px #ffffff, 0 0 5px #ffffff",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: (theme) => theme.palette.text.secondary,
            backdropFilter: "blur(10px);",
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
      </Box>

      <Box my={6}>
        <Button
          component={Link}
          to="/portfolio"
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            textTransform: "lowercase",
            mr: 2,
            width: "117px",
            pointerEvents: "auto",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          portfolio
        </Button>

        <Button
          component={Link}
          to={"/aboutme"}
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            color: theme.palette.primary.main,
            textTransform: "lowercase",
            width: "117px",
            pointerEvents: "auto",
            backgroundColor: "#eeeeee",
            "&:hover": {
              backgroundColor: "#d6d3d1",
            },
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          about me
        </Button>
      </Box>
    </CustomBox>
  );
};

export default HomeText;
