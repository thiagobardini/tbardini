import { useEffect } from "react";
import { Box, styled, Typography, Button, useTheme } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { lighten, darken } from "@mui/system";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(2),
  marginTop: "-100px",
  position: "absolute",
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
        variant="h2"
        component="h1"
        sx={{
          textShadow: darkMode
            ? "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
            : "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          color: "#eeeeee",
          fontWeight: 900,
          position: "relative",
          borderRadius: "5px",
          padding: "1rem",
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

      <Typography
        variant="h5"
        component="p"
        sx={{
          py: 3,
          lineHeight: 1.6,
          letterSpacing: "0.08em",
          color: darkMode ? "#eeeeee" : "#222831",
          width: { xs: "100%", md: "60%" },
          borderRadius: "5px",
          padding: "1rem",
          fontWeight: "900",
          textShadow: darkMode
            ? "none"
            : "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff",
        }}
      >
        <Box
          sx={{
            padding: "0.2rem 0.5rem",
            borderRadius: "5px",
            minHeight: "140px",
          }}
        >
          <TypeAnimation
            sequence={[
              1200,
              "I'm a software engineer turned problem-solver, bringing creativity and design thinking to every line of code.",
            ]}
            wrapper="span"
            speed={50}
            repeat={1}
          />
        </Box>
      </Typography>

      <Box>
        <Button
          component={Link}
          to="/portfolio"
          variant="contained"
          sx={{
            color: "#eeeeee",
            backgroundColor: darkMode
              ? theme.palette.primary.main
              : theme.palette.primaryDark.main,
            textTransform: "capitalize",
            mr: 2,
            px: 4,
            py: 1,
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
            textTransform: "capitalize",
            px: 4,
            py: 1,
            pointerEvents: "auto",
            backgroundColor: "#eeeeee",
            "&:hover": {
              backgroundColor: "#eeeeee",
              color: theme.palette.primary.main,
              borderColor: !darkMode ? "#eeeeee" : "#222831",
            },
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          Resume
        </Button>
      </Box>
    </CustomBox>
  );
};

export default HomeText;
