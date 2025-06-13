import { useEffect, useState } from "react";
import { Box, styled, Typography, useMediaQuery, Chip, Stack } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";
import ButtonFab from "./ButtonFab";
import ScrollTrigger from "react-scroll-trigger";
import { useTheme } from "@mui/material/styles";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  minHeight: "250px",
  maxHeight: "650px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  textAlign: "center",
  zIndex: 10,
  position: "relative",
}));

const HomeText = () => {
  const [key, setKey] = useState(0);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [darkMode, matches]);

  const onEnterViewport = (animationClass) => {
    const element = document.getElementById(animationClass);
    if (element) {
      element.classList.add(animationClass);
    }
  };

  return (
    <CustomBox component="section" key={key}>
      <Stack spacing={3} alignItems="center">
        <Typography
          variant="h1"
          component="h1"
          sx={{
            background: darkMode 
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: "relative",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontFamily: "GothamSSm-Bold",
            fontWeight: 800,
          }}
        >
          <TypeAnimation
            sequence={["Thiago Bardini"]}
            wrapper="span"
            speed={50}
            repeat={1}
            cursor={false}
          />
        </Typography>

        <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-up-h1")}>
          <Typography
            variant="h5"
            id="fade-slide-up-h1"
            sx={{
              color: (theme) => theme.palette.text.primary,
              fontWeight: 600,
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
              fontFamily: "GothamSSm-Bold",
              mb: 2,
              "&.fade-slide-up-h1": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            Founder & Engineer behind{" "}
            <Box
              component="a"
              href="https://www.flowquantic.ai"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: 0.8,
                }
              }}
            >
              FlowQuantic
            </Box>
          </Typography>
        </ScrollTrigger>

        <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-up-h2")}>
          <Typography
            variant="h6"
            id="fade-slide-up-h2"
            sx={{
              color: (theme) => theme.palette.text.secondary,
              fontWeight: 400,
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out",
              fontFamily: "GothamSSm-Light",
              maxWidth: { xs: "100%", md: "600px" },
              px: 2,
              "&.fade-slide-up-h2": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            Building AI-powered tools for service businesses
          </Typography>
        </ScrollTrigger>

        <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-up-h3")}>
          <Stack 
            direction={{ xs: "column", sm: "row" }} 
            spacing={2}
            id="fade-slide-up-h3"
            sx={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 1.4s ease-in-out, transform 1.4s ease-in-out",
              "&.fade-slide-up-h3": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            <Chip
              label="PetQuantic"
              component="a"
              href="https://petquantic.com/"
              target="_blank"
              rel="noopener noreferrer"
              clickable
              variant="outlined"
              sx={{
                borderColor: darkMode ? 'rgba(102, 126, 234, 0.5)' : 'rgba(102, 126, 234, 0.5)',
                color: (theme) => theme.palette.text.primary,
                fontFamily: "GothamSSm-Light",
                fontWeight: 500,
                fontSize: "0.9rem",
                py: 2.5,
                px: 1,
                backdropFilter: 'blur(10px)',
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#667eea',
                  backgroundColor: darkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(102, 126, 234, 0.3)',
                }
              }}
            />
            <Chip
              label="CrewQuantic"
              component="a"
              href="https://www.crewquantic.com/"
              target="_blank"
              rel="noopener noreferrer"
              clickable
              variant="outlined"
              sx={{
                borderColor: darkMode ? 'rgba(118, 75, 162, 0.5)' : 'rgba(118, 75, 162, 0.5)',
                color: (theme) => theme.palette.text.primary,
                fontFamily: "GothamSSm-Light",
                fontWeight: 500,
                fontSize: "0.9rem",
                py: 2.5,
                px: 1,
                backdropFilter: 'blur(10px)',
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#764ba2',
                  backgroundColor: darkMode ? 'rgba(118, 75, 162, 0.1)' : 'rgba(118, 75, 162, 0.05)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(118, 75, 162, 0.3)',
                }
              }}
            />
          </Stack>
        </ScrollTrigger>
      </Stack>

      <Box mt={4} sx={{ width: "auto", position: "relative", zIndex: 20 }}>
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
