import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Grid,
  CssBaseline,
  Stack,
} from "@mui/material";
import {
  Timeline,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import DownloadIcon from "@mui/icons-material/Download";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlagIcon from "@mui/icons-material/Flag";
import myself from "../Assets/images/aboutme.jpg";
import { TypeAnimation } from "react-type-animation";
import HeadingTop from "../Components/Typography/HeadingTop";
import LanguageIcon from "@mui/icons-material/Language";
import { keyframes } from "@emotion/react";
import ButtonFab from "../Components/ButtonFab";
import ScrollTrigger from "react-scroll-trigger";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const AboutMe = () => {
  const [key, setKey] = useState(0);

  const darkMode = useSelector((state) => state.theme.darkMode);

  // ScrollTrigger keep the animation from running after change the theme
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [darkMode]);

  const boldTextStyles = {
    fontFamily: "GothamSSm-Bold",
    color: (theme) => theme.palette.text.primary,
  };

  const gradientTextStyles = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: "GothamSSm-Bold",
  };

  const onEnterViewport = (animationClass) => {
    const element = document.getElementById(animationClass);
    if (element) {
      element.classList.add(animationClass);
    }
  };

  const textTitle = (
    <TypeAnimation
      sequence={["About me"]}
      wrapper="span"
      speed={50}
      repeat={1}
      cursor={false}
    />
  );

  return (
    <Box
      key={key}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 85px)",
        alignItems: "center",
        pt: "96px",
      }}
    >
      <HeadingTop text={textTitle} />
      <Container sx={{ px: 1 }}>
        <CssBaseline />
        <Paper
          elevation={0}
          sx={{
            py: 5,
            px: { xs: 2, md: 4 },
            borderRadius: 3,
            backdropFilter: darkMode ? "blur(10px)" : "blur(5px)",
            backgroundColor: darkMode
              ? "rgba(255, 255, 255, 0.02)"
              : "rgba(255, 255, 255, 0.7)",
            border: darkMode 
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          <Grid
            container
            spacing={3}
            direction={{ xs: "column", sm: "row" }}
            sx={{ animation: `${fadeIn} 2s` }}
          >
            <Grid
              item
              xs={12}
              sm={2}
              direction="row"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ width: "100%", display: "flex" }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 156, sm: 206, md: 206 },
                  height: { xs: 156, sm: 206, md: 206 },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  p: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: darkMode 
                    ? '0 10px 40px rgba(102, 126, 234, 0.4)' 
                    : '0 10px 40px rgba(102, 126, 234, 0.25)',
                }}
              >
                <Avatar
                  alt="Thiago Bardini"
                  src={myself}
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: '3px solid',
                    borderColor: darkMode ? '#1a1a1a' : '#ffffff',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <ScrollTrigger onEnter={() => onEnterViewport("fade-in")}>
                <Stack spacing={1}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "GothamSSm-Bold",
                      color: (theme) => theme.palette.text.primary,
                      letterSpacing: "-0.02em",
                      mb: 2,
                    }}
                  >
                    Thiago Bardini
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      ...gradientTextStyles,
                      mb: 1,
                    }}
                  >
                    Founder & Software Engineer
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: (theme) => theme.palette.text.secondary,
                      fontFamily: "GothamSSm-Light",
                      mb: 2,
                      lineHeight: 1.7,
                    }}
                  >
                    Brazilian-born software developer and founder based in Massachusetts
                  </Typography>
                </Stack>

                <List
                  id="fade-in"
                  variant="body1"
                  sx={{
                    opacity: 0,
                    transition: "opacity 1s ease-in-out",
                    "&.fade-in": {
                      opacity: 1,
                    },
                  }}
                >
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <Typography
                        sx={{ color: (theme) => theme.palette.text.secondary }}
                      >
                        <LocationOnIcon />
                      </Typography>
                    </ListItemIcon>
                    <Typography
                      variant="body1"
                      sx={{
                        color: (theme) => theme.palette.text.primary,
                      }}
                    >
                      <Typography
                        variant="span"
                        sx={{
                          color: (theme) => theme.palette.text.secondary,
                          fontFamily: "GothamSSm-Light",
                        }}
                      >
                        Location:
                      </Typography>{" "}
                      <span style={boldTextStyles}>Greater Boston, MA</span>
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <Typography
                        sx={{ color: (theme) => theme.palette.text.secondary }}
                      >
                        <FlagIcon />
                      </Typography>
                    </ListItemIcon>
                    <Typography
                      variant="body1"
                      sx={{
                        color: (theme) => theme.palette.text.primary,
                      }}
                    >
                      <Typography
                        variant="span"
                        sx={{
                          color: (theme) => theme.palette.text.secondary,
                          fontFamily: "GothamSSm-Light",
                        }}
                      >
                        Nationalities:
                      </Typography>{" "}
                      <span style={boldTextStyles}>American, Brazilian</span>
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <Typography
                        sx={{ color: (theme) => theme.palette.text.secondary }}
                      >
                        <LanguageIcon />
                      </Typography>
                    </ListItemIcon>
                    <Typography
                      variant="body1"
                      sx={{
                        color: (theme) => theme.palette.text.primary,
                      }}
                    >
                      <Typography
                        variant="span"
                        sx={{
                          color: (theme) => theme.palette.text.secondary,
                          fontFamily: "GothamSSm-Light",
                        }}
                      >
                        Languages:
                      </Typography>{" "}
                      <span style={boldTextStyles}>English, Portuguese</span>
                    </Typography>
                  </ListItem>
                </List>
              </ScrollTrigger>
            </Grid>
          </Grid>
          
          <Divider
            sx={{ 
              width: { xs: "100%", md: "70%" }, 
              my: 4, 
              mx: "auto",
              borderColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
            }}
          />

          {/* New modern intro section */}
          <ScrollTrigger onEnter={() => onEnterViewport("fade-intro")}>
            <Box
              id="fade-intro"
              sx={{
                mb: 4,
                p: 3,
                borderRadius: 2,
                backgroundColor: darkMode 
                  ? 'rgba(102, 126, 234, 0.05)'
                  : 'rgba(102, 126, 234, 0.02)',
                border: '1px solid',
                borderColor: darkMode 
                  ? 'rgba(102, 126, 234, 0.2)'
                  : 'rgba(102, 126, 234, 0.1)',
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                "&.fade-intro": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontFamily: "GothamSSm-Light",
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                After years working across frontend development, QA automation, and AI integration, 
                I now lead{" "}
                <Box 
                  component="a" 
                  href="https://www.flowquantic.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{
                    ...gradientTextStyles,
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.8,
                    }
                  }}
                >
                  FlowQuantic
                </Box>
                : a platform company building modular, AI-powered solutions for real-world service businesses.
              </Typography>
            </Box>
          </ScrollTrigger>

          {/* Current Focus with Icons */}
          <ScrollTrigger onEnter={() => onEnterViewport("fade-focus")}>
            <Box
              id="fade-focus"
              sx={{
                mb: 4,
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out",
                "&.fade-focus": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "GothamSSm-Bold",
                  color: (theme) => theme.palette.text.primary,
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <RocketLaunchIcon sx={{ color: '#667eea' }} />
                My Current Focus
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper
                    component="a"
                    href="https://petquantic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: darkMode 
                        ? 'rgba(102, 126, 234, 0.3)'
                        : 'rgba(102, 126, 234, 0.2)',
                      backgroundColor: darkMode 
                        ? 'rgba(102, 126, 234, 0.05)'
                        : 'rgba(102, 126, 234, 0.02)',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: '#667eea',
                        transform: 'translateY(-4px)',
                        boxShadow: darkMode 
                          ? '0 10px 30px rgba(102, 126, 234, 0.2)'
                          : '0 10px 30px rgba(102, 126, 234, 0.1)',
                      }
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ ...gradientTextStyles, mb: 1 }}
                    >
                      PetQuantic
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        lineHeight: 1.6,
                      }}
                    >
                      AI automation for pet shops and clinics — voice assistants, 
                      booking systems, upselling & CRM tools.
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper
                    component="a"
                    href="https://www.crewquantic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: darkMode 
                        ? 'rgba(118, 75, 162, 0.3)'
                        : 'rgba(118, 75, 162, 0.2)',
                      backgroundColor: darkMode 
                        ? 'rgba(118, 75, 162, 0.05)'
                        : 'rgba(118, 75, 162, 0.02)',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: '#764ba2',
                        transform: 'translateY(-4px)',
                        boxShadow: darkMode 
                          ? '0 10px 30px rgba(118, 75, 162, 0.2)'
                          : '0 10px 30px rgba(118, 75, 162, 0.1)',
                      }
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ ...gradientTextStyles, mb: 1 }}
                    >
                      CrewQuantic
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        lineHeight: 1.6,
                      }}
                    >
                      Smart dashboards for field teams — scheduling, SMS automation, 
                      check-ins, and payment workflows.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </ScrollTrigger>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Timeline
              sx={{
                mr: 0,
                pr: 0,
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot 
                    sx={{ 
                      backgroundColor: 'transparent',
                      border: '2px solid #667eea',
                    }} 
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: "20px", pt: 0, pr: 0, pl: 2 }}>
                  <ScrollTrigger
                    onEnter={() => onEnterViewport("fade-slide-down-1")}
                  >
                    <Typography
                      id="fade-slide-down-1"
                      variant="h6"
                      component="span"
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        opacity: 0,
                        transform: "translateY(-20px)",
                        transition:
                          "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-down-1": {
                          opacity: 1,
                          transform: "translateY(0)",
                          fontFamily: "GothamSSm-Light",
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CodeIcon sx={{ fontSize: 20, color: '#667eea' }} />
                        Technical Background
                      </Box>
                    </Typography>
                  </ScrollTrigger>
                  <ScrollTrigger
                    onEnter={() => onEnterViewport("fade-slide-up-1")}
                  >
                    <Typography
                      id="fade-slide-up-1"
                      sx={{
                        pl: 2,
                        transform: "translateY(20px)",
                        transition:
                          "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-up-1": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      • Hands-on experience with{" "}
                      <span style={boldTextStyles}>React, TypeScript, Node.js</span>,
                      and modern AI integration frameworks
                    </Typography>
                  </ScrollTrigger>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot 
                    sx={{ 
                      backgroundColor: 'transparent',
                      border: '2px solid #764ba2',
                    }} 
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: "20px", pl: 2, pt: 0, pr: 0 }}>
                  <ScrollTrigger
                    onEnter={() => onEnterViewport("fade-slide-down-2")}
                  >
                    <Typography
                      id="fade-slide-down-2"
                      variant="h6"
                      component="span"
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        opacity: 0,
                        transform: "translateY(-20px)",
                        transition:
                          "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-down-2": {
                          opacity: 1,
                          transform: "translateY(0)",
                          fontFamily: "GothamSSm-Light",
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <GroupsIcon sx={{ fontSize: 20, color: '#764ba2' }} />
                        Current Role at Code for Boston
                      </Box>
                    </Typography>
                  </ScrollTrigger>
                  <ScrollTrigger
                    onEnter={() => onEnterViewport("fade-slide-up-2")}
                  >
                    <Box
                      id="fade-slide-up-2"
                      sx={{
                        pl: 2,
                        transform: "translateY(20px)",
                        transition:
                          "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-up-2": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <Typography sx={{ pb: 1 }}>
                        • Contributing to impactful{" "}
                        <span style={boldTextStyles}>civic tech projects</span>{" "}
                        that serve the community
                      </Typography>
                    </Box>
                  </ScrollTrigger>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot 
                    sx={{ 
                      backgroundColor: 'transparent',
                      border: '2px solid #667eea',
                    }} 
                  />
                </TimelineSeparator>
                <TimelineContent sx={{ pl: 2, pt: 0, pr: 0 }}>
                  <ScrollTrigger
                    onEnter={() => onEnterViewport("fade-slide-down-3")}
                  >
                    <Typography
                      id="fade-slide-down-3"
                      variant="h6"
                      component="span"
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        opacity: 0,
                        transform: "translateY(-20px)",
                        transition:
                          "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-down-3": {
                          opacity: 1,
                          transform: "translateY(0)",
                          fontFamily: "GothamSSm-Light",
                        },
                      }}
                    >
                      Mission
                    </Typography>
                  </ScrollTrigger>
                  <ScrollTrigger
                    onEnter={() => onEnterViewport("fade-slide-up-3")}
                  >
                    <Box
                      id="fade-slide-up-3"
                      sx={{
                        pl: 2,
                        transform: "translateY(20px)",
                        transition:
                          "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-up-3": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <Typography>
                        I combine{" "}
                        <span style={boldTextStyles}>hands-on development</span>{" "}
                        with <span style={boldTextStyles}>business strategy</span>{" "}
                        to help small and mid-sized companies grow through{" "}
                        <span style={gradientTextStyles}>automation and efficiency</span>.
                      </Typography>
                    </Box>
                  </ScrollTrigger>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>

          <Stack 
            direction={{ xs: "column", sm: "row" }} 
            spacing={2} 
            sx={{ mt: 4 }}
            alignItems="center"
          >
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              size="large"
              sx={{
                textTransform: "capitalize",
                textDecoration: "none",
                fontFamily: "GothamSSm-Light",
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                px: 3,
                py: 1.5,
                '&:hover': {
                  background: 'linear-gradient(135deg, #5a67d8 0%, #6b46a3 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)',
                }
              }}
              component="a"
              href="https://drive.google.com/uc?export=download&id=1Ar7FXtFt2h2sMjF1Chr9xdxyLNZqobbY"
              target="_blank"
            >
              Download my resume
            </Button>

            <Typography
              variant="body2"
              sx={{
                color: (theme) => theme.palette.text.secondary,
                fontFamily: "GothamSSm-Light",
              }}
            >
              Let's connect or explore what I'm building.
            </Typography>
          </Stack>
        </Paper>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            justifyContent: "flex-start",
            my: 3,
          }}
        >
          <ButtonFab
            to="/projects"
            label="Let's continue to projects"
            onClick={() => window.scrollTo(0, 0)}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
