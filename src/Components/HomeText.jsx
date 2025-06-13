import { useEffect, useState } from "react";
import { Box, styled, Typography, useMediaQuery, Chip, Stack } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";
import ButtonFab from "./ButtonFab";
import ScrollTrigger from "react-scroll-trigger";
import { useTheme } from "@mui/material/styles";
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

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
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: "relative",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontFamily: "GothamSSm-Bold",
            fontWeight: 800,
            filter: darkMode ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : {
              xs: 'drop-shadow(0 0 8px rgba(255,255,255,1)) drop-shadow(0 0 16px rgba(255,255,255,0.8)) drop-shadow(2px 2px 4px rgba(255,255,255,1))',
              md: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            },
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
              textShadow: darkMode ? 'none' : { 
                xs: '0 0 8px rgba(255,255,255,1), 0 0 16px rgba(255,255,255,1), 2px 2px 6px rgba(255,255,255,1), -2px -2px 6px rgba(255,255,255,1)', 
                md: 'none' 
              },
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
                textShadow: (!darkMode) ? { 
                  xs: '0 1px 2px rgba(0,0,0,0.1)', 
                  md: 'none' 
                } : 'none',
                padding: (!darkMode) ? { xs: '2px 6px', md: 0 } : 0,
                backgroundColor: (!darkMode) ? { 
                  xs: 'rgba(255, 255, 255, 0.1)', 
                  md: 'transparent' 
                } : 'transparent',
                borderRadius: (!darkMode) ? { xs: '6px', md: 0 } : 0,
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
              color: (theme) => theme.palette.text.primary,
              fontWeight: 400,
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out",
              fontFamily: "GothamSSm-Light",
              maxWidth: { xs: "100%", md: "600px" },
              px: 2,
              textShadow: (!darkMode) ? { 
                xs: '0 0 6px rgba(255,255,255,1), 0 0 12px rgba(255,255,255,1), 1px 1px 3px rgba(255,255,255,1), -1px -1px 3px rgba(255,255,255,1)', 
                md: 'none' 
              } : 'none',
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
          <Box
            id="fade-slide-up-h3"
            sx={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 1.4s ease-in-out, transform 1.4s ease-in-out",
              "&.fade-slide-up-h3": {
                opacity: 1,
                transform: "translateY(0)",
              },
              mt: 3,
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2.5,
                py: 1.2,
                borderRadius: "30px",
                background: darkMode 
                  ? "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)"
                  : {
                    xs: "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)",
                    md: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)"
                  },
                border: "1px solid",
                borderColor: darkMode 
                  ? "rgba(102, 126, 234, 0.2)"
                  : {
                    xs: "rgba(102, 126, 234, 0.3)",
                    md: "rgba(102, 126, 234, 0.1)"
                  },
                backdropFilter: darkMode ? "blur(10px)" : { xs: "blur(20px)", md: "blur(10px)" },
                backgroundColor: darkMode ? "transparent" : { 
                  xs: "rgba(255, 255, 255, 0.8)", 
                  md: "transparent" 
                },
                boxShadow: darkMode ? "none" : { 
                  xs: "0 4px 12px rgba(102, 126, 234, 0.15)", 
                  md: "none" 
                },
                transition: "all 0.3s ease",
                cursor: "default",
                "&:hover": {
                  borderColor: darkMode 
                    ? "rgba(102, 126, 234, 0.4)"
                    : "rgba(102, 126, 234, 0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <CodeIcon sx={{ 
                fontSize: 20, 
                color: darkMode ? "#667eea" : { xs: "#5a67d8", md: "#667eea" },
              }} />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "GothamSSm-Light",
                  fontWeight: 500,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Full-Stack Developer
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2.5,
                py: 1.2,
                borderRadius: "30px",
                background: darkMode 
                  ? "linear-gradient(135deg, rgba(118, 75, 162, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)"
                  : {
                    xs: "linear-gradient(135deg, rgba(118, 75, 162, 0.15) 0%, rgba(102, 126, 234, 0.15) 100%)",
                    md: "linear-gradient(135deg, rgba(118, 75, 162, 0.05) 0%, rgba(102, 126, 234, 0.05) 100%)"
                  },
                border: "1px solid",
                borderColor: darkMode 
                  ? "rgba(118, 75, 162, 0.2)"
                  : {
                    xs: "rgba(118, 75, 162, 0.3)",
                    md: "rgba(118, 75, 162, 0.1)"
                  },
                backdropFilter: darkMode ? "blur(10px)" : { xs: "blur(20px)", md: "blur(10px)" },
                backgroundColor: darkMode ? "transparent" : { 
                  xs: "rgba(255, 255, 255, 0.8)", 
                  md: "transparent" 
                },
                boxShadow: darkMode ? "none" : { 
                  xs: "0 4px 12px rgba(118, 75, 162, 0.15)", 
                  md: "none" 
                },
                transition: "all 0.3s ease",
                cursor: "default",
                "&:hover": {
                  borderColor: darkMode 
                    ? "rgba(118, 75, 162, 0.4)"
                    : "rgba(118, 75, 162, 0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <AutoAwesomeIcon sx={{ 
                fontSize: 20, 
                color: darkMode ? "#764ba2" : { xs: "#6b46a3", md: "#764ba2" },
              }} />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "GothamSSm-Light",
                  fontWeight: 500,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                AI Integration
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2.5,
                py: 1.2,
                borderRadius: "30px",
                background: darkMode 
                  ? "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)"
                  : {
                    xs: "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)",
                    md: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)"
                  },
                border: "1px solid",
                borderColor: darkMode 
                  ? "rgba(102, 126, 234, 0.2)"
                  : {
                    xs: "rgba(102, 126, 234, 0.3)",
                    md: "rgba(102, 126, 234, 0.1)"
                  },
                backdropFilter: darkMode ? "blur(10px)" : { xs: "blur(20px)", md: "blur(10px)" },
                backgroundColor: darkMode ? "transparent" : { 
                  xs: "rgba(255, 255, 255, 0.8)", 
                  md: "transparent" 
                },
                boxShadow: darkMode ? "none" : { 
                  xs: "0 4px 12px rgba(102, 126, 234, 0.15)", 
                  md: "none" 
                },
                transition: "all 0.3s ease",
                cursor: "default",
                "&:hover": {
                  borderColor: darkMode 
                    ? "rgba(102, 126, 234, 0.4)"
                    : "rgba(102, 126, 234, 0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <RocketLaunchIcon sx={{ 
                fontSize: 20, 
                color: darkMode ? "#667eea" : { xs: "#5a67d8", md: "#667eea" },
              }} />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "GothamSSm-Light",
                  fontWeight: 500,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Startup Founder
              </Typography>
            </Box>
          </Box>
        </ScrollTrigger>
      </Stack>

      <Box mt={4} sx={{ width: "auto", position: "relative", zIndex: 20 }}>
        <Box sx={{ 
          "& > :not(style)": { m: 1 },
        }}>
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
