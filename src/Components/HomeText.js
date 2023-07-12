import { useEffect } from "react";
import { Box, styled, Typography, Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
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

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <CustomBox component='section'>
      <Typography
        variant='h2'
        component='h1'
        sx={{
          textShadow: "2px 2px 4px rgba(247, 247, 247, 0.5)",
          color: "text.primary",
          fontWeight: 900,
          position: "relative",
        }}
      >
        <TypeAnimation
          sequence={["Hey, I'm Thiago"]}
          wrapper='span'
          speed={50}
          repeat={1}
          cursor={false}
        />
      </Typography>

      <Typography
        variant='h5'
        component='p'
        sx={{
          py: 3,
          lineHeight: 1.6,
          color: "#fff",
          width: { xs: "100%", md: "60%" },
        }}
      >
        <TypeAnimation
          sequence={[
            1200,
            "I'm a software engineer turned problem-solver, bringing creativity and design thinking to every line of code.",
          ]}
          wrapper='span'
          speed={50}
          repeat={1}
          style={{
            background: "rgba(0, 0, 0, 0.5)",
          }}
        />
      </Typography>
      <Box>
        <Button
          component={Link}
          to='/portfolio'
          variant='contained'
          sx={{
            color: "#f7f7f7",
            backgroundColor: "#2A2A2A",
            textTransform: "capitalize",
            mr: 2,
            px: 4,
            py: 1,
            pointerEvents: "auto",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          portfolio
        </Button>
        <Button
          component={Link}
          to={"/resume"}
          variant='outlined'
          sx={{
            color: "#2A2A2A",
            backgroundColor: "#f7f7f7",
            textTransform: "capitalize",
            px: 4,
            py: 1,
            pointerEvents: "auto",
            backgroundColor: "#fff",
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
