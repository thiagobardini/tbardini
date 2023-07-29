import { useEffect } from "react";
import { Box, styled, Typography, Button, useTheme } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { lighten, darken } from "@mui/system";
import TextAnimation from "./TextAnimation";

const CustomBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  top: 1, // this should be equal to the height of your navbar
  position: "absolute",
  zIndex: 1,
  // backgroundColor: { xs: "none", md: "#282524" },
  borderRadius: "20px",
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
          color: darkMode ? "#eeeeee" : "#d6d3d1",
          fontWeight: 800,
          position: "relative",
          borderRadius: "5px",
          pb: 4,
          fontSize: "3rem",
        }}
      >
        <TypeAnimation
          sequence={["Hey, I'm Thiago"]}
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
          textShadow: darkMode
            ? "none"
            : "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: darkMode ? "rgb(168, 162, 158)" : "#222831",
            fontSize: { xs: "1.1rem", sm: "1.3rem" },
          }}
        >
          I'm a Boston based{" "}
          <span
            style={{
              fontWeight: 800,
              color: darkMode ? "#d6d3d1" : "#222831",
            }}
          >
            software engineer
          </span>{" "}
          turned problem-solver, bringing creativity and design thinking to
          every line of code.
        </Typography>
      </Box>

      <Box my={2}>
        <Button
          component={Link}
          to="/portfolio"
          variant="contained"
          sx={{
            color: "#eeeeee",
            backgroundColor: darkMode
              ? theme.palette.primary.main
              : theme.palette.primaryDark.main,
            textTransform: "lowercase",
            mr: 2,
            width: "117px",
            pointerEvents: "auto",
            "&:hover": {
              backgroundColor: darkMode
                ? lighten(theme.palette.primary.main, 0.1)
                : darken(theme.palette.secondary.main, 0.1),
            },
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          portfolio
        </Button>

        <Button
          component={Link}
          to={"/resume"}
          variant="outlined"
          sx={{
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            textTransform: "lowercase",
            width: "117px",
            pointerEvents: "auto",
            backgroundColor: "#d6d3d1",
            "&:hover": {
              backgroundColor: "#eeeeee",
              color: theme.palette.primary.main,
              borderColor: !darkMode ? "#eeeeee" : "#222831",
            },
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          resume
        </Button>
      </Box>
    </CustomBox>
  );
};

export default HomeText;
