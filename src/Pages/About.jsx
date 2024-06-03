import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Container, Typography, Button, Divider, Avatar, Paper, List, ListItem, ListItemIcon, Grid, CssBaseline } from "@mui/material";
import { Timeline, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
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

  const onEnterViewport = (animationClass) => {
    const element = document.getElementById(animationClass);
    if (element) {
      element.classList.add(animationClass);
    }
  };

  const textTitle = <TypeAnimation sequence={["About me"]} wrapper='span' speed={50} repeat={1} cursor={false} />;

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
          elevation={3}
          sx={{
            py: 5,
            px: 2,
            borderRadius: 3,
            backdropFilter: darkMode ? "blur(2px)" : "blur(1px)",
            backgroundColor: darkMode ? "transparent !important" : "rgba(238, 238, 238, 0.7) !important",
          }}
        >
          <Grid container spacing={3} direction={{ xs: "column", sm: "row" }} sx={{ animation: `${fadeIn} 2s` }}>
            <Grid item xs={12} sm={2} direction='row' alignItems='center' justifyContent={{ xs: "center", md: "flex-start" }} sx={{ width: "100%", display: "flex" }}>
              <Avatar
                alt='Thiago Bardini'
                src={myself}
                sx={{
                  width: { xs: 150, sm: 200, md: 200 },
                  height: { xs: 150, sm: 200, md: 200 },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <ScrollTrigger onEnter={() => onEnterViewport("fade-in")}>
                <Typography
                  variant='h4'
                  sx={{
                    mb: 1,
                    fontFamily: "GothamSSm-Bold",
                    textTransform: "uppercase",
                    color: (theme) => theme.palette.text.primary,
                  }}
                >
                  Thiago Bardini
                </Typography>

                <List
                  id='fade-in'
                  variant='body1'
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
                      <Typography sx={{ color: (theme) => theme.palette.text.secondary }}>
                        <LocationOnIcon />
                      </Typography>
                    </ListItemIcon>
                    <Typography
                      variant='body1'
                      sx={{
                        color: (theme) => theme.palette.text.primary,
                      }}
                    >
                      <Typography
                        variant='span'
                        sx={{
                          color: (theme) => theme.palette.text.secondary,
                          fontFamily: "GothamSSm-Light",
                        }}
                      >
                        Location:
                      </Typography>{" "}
                      Greater Boston, MA
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <Typography sx={{ color: (theme) => theme.palette.text.secondary }}>
                        <FlagIcon />
                      </Typography>
                    </ListItemIcon>
                    <Typography
                      variant='body1'
                      sx={{
                        color: (theme) => theme.palette.text.primary,
                      }}
                    >
                      <Typography
                        variant='span'
                        sx={{
                          color: (theme) => theme.palette.text.secondary,
                          fontFamily: "GothamSSm-Light",
                        }}
                      >
                        Nationalities:
                      </Typography>{" "}
                      American, Brazilian
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <Typography sx={{ color: (theme) => theme.palette.text.secondary }}>
                        <LanguageIcon />
                      </Typography>
                    </ListItemIcon>
                    <Typography
                      variant='body1'
                      sx={{
                        color: (theme) => theme.palette.text.primary,
                      }}
                    >
                      <Typography
                        variant='span'
                        sx={{
                          color: (theme) => theme.palette.text.secondary,
                          fontFamily: "GothamSSm-Light",
                        }}
                      >
                        Languages:
                      </Typography>{" "}
                      English, Portuguese
                    </Typography>
                  </ListItem>
                </List>
              </ScrollTrigger>
            </Grid>
          </Grid>
          <Divider sx={{ width: { xs: "100%", md: "70%" }, my: 3, mx: "auto" }} />
          <Box
            Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
            }}
          ></Box>
          <Box
            Box
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
                  <TimelineDot variant='outlined' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: "20px", pt: 0, pr: 0, pl: 2 }}>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-down-1")}>
                    <Typography
                      id='fade-slide-down-1'
                      variant='h6'
                      component='span'
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        opacity: 0,
                        transform: "translateY(-20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-down-1": {
                          opacity: 1,
                          transform: "translateY(0)",
                          fontFamily: "GothamSSm-Light",
                        },
                      }}
                    >
                      Expertise
                    </Typography>
                  </ScrollTrigger>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-up-1")}>
                    <Typography
                      id='fade-slide-up-1'
                      sx={{
                        pl: 2,
                        transform: "translateY(20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-up-1": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      • Software Engineer with a focus on frontend development and expertise in end-to-end UI QA testing.
                    </Typography>
                  </ScrollTrigger>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: "20px", pl: 2, pt: 0, pr: 0 }}>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-down-2")}>
                    <Typography
                      id='fade-slide-down-2'
                      variant='h6'
                      component='span'
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        opacity: 0,
                        transform: "translateY(-20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-down-2": {
                          opacity: 1,
                          transform: "translateY(0)",
                          fontFamily: "GothamSSm-Light",
                        },
                      }}
                    >
                      Main Technologies
                    </Typography>
                  </ScrollTrigger>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-up-2")}>
                    <Box
                      id='fade-slide-up-2'
                      sx={{
                        pl: 2,
                        transform: "translateY(20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-up-2": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <Typography sx={{ pb: 1 }}>• Expertise in JavaScript, TypeScript, React, modern CSS libraries, and Playwright for advanced UI QA testing.</Typography>
                    </Box>
                  </ScrollTrigger>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: "20px", pl: 2, pt: 0, pr: 0 }}>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-down-4")}>
                    <Typography
                      id='fade-slide-down-4'
                      variant='h6'
                      component='span'
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        opacity: 0,
                        transform: "translateY(-20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-down-4": {
                          opacity: 1,
                          transform: "translateY(0)",
                          fontFamily: "GothamSSm-Light",
                        },
                      }}
                    >
                      Current Role at Code for Boston
                    </Typography>
                  </ScrollTrigger>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-up-4")}>
                    <Box
                      id='fade-slide-up-4'
                      sx={{
                        pl: 2,
                        transform: "translateY(20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-up-4": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <Typography sx={{ pb: 1 }}>• Actively involved as a Frontend Developer, contributing to impactful civic tech projects.</Typography>
                      <Typography>• Create accessible, user-friendly web applications designed for maximum impact.</Typography>
                    </Box>
                  </ScrollTrigger>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: "20px", pl: 2, pt: 0, pr: 0 }}>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-down-3")}>
                    <Typography
                      id='fade-slide-down-3'
                      variant='h6'
                      component='span'
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        opacity: 0,
                        transform: "translateY(-20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-down-3": {
                          opacity: 1,
                          transform: "translateY(0)",
                          fontFamily: "GothamSSm-Light",
                        },
                      }}
                    >
                      Recent Role at TransPerfect
                    </Typography>
                  </ScrollTrigger>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-up-3")}>
                    <Box
                      id='fade-slide-up-3'
                      sx={{
                        pl: 2,
                        transform: "translateY(20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-up-3": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <Typography sx={{ pb: 1 }}>• Led rigorous end-to-end UI QA testing to ensure the highest quality of product.</Typography>
                      <Typography sx={{ pb: 1 }}>• Contributed to frontend development using React, JavaScript, and TypeScript.</Typography>
                      <Typography>• Implemented and maintained RESTful APIs and developed backend functionalities with Node.js.</Typography>
                    </Box>
                  </ScrollTrigger>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: "20px", pl: 2, pt: 0, pr: 0 }}>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-down-6")}>
                    <Typography
                      id='fade-slide-down-6'
                      variant='h6'
                      component='span'
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        opacity: 0,
                        transform: "translateY(-20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-down-6": {
                          opacity: 1,
                          transform: "translateY(0)",
                          fontFamily: "GothamSSm-Light",
                        },
                      }}
                    >
                      Career Objective
                    </Typography>
                  </ScrollTrigger>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-up-6")}>
                    <Box
                      id='fade-slide-up-6'
                      sx={{
                        pl: 2,
                        transform: "translateY(20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-up-6": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <Typography sx={{ pb: 1 }}>• To grow in Software Development and testing in an environment that values and nurtures integrity, intelligence, and innovation.</Typography>
                      <Typography>• Committed to personal and professional growth, aiming to contribute to pioneering projects and creative technological solutions.</Typography>
                    </Box>
                  </ScrollTrigger>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pl: 2, pt: 0, pr: 0 }}>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-down-5")}>
                    <Typography
                      id='fade-slide-down-5'
                      variant='h6'
                      component='span'
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontFamily: "GothamSSm-Light",
                        opacity: 0,
                        transform: "translateY(-20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-down-5": {
                          opacity: 1,
                          transform: "translateY(0)",
                          fontFamily: "GothamSSm-Light",
                        },
                      }}
                    >
                      What Do I Do?
                    </Typography>
                  </ScrollTrigger>
                  <ScrollTrigger onEnter={() => onEnterViewport("fade-slide-up-5")}>
                    <Box
                      id='fade-slide-up-5'
                      sx={{
                        pl: 2,
                        transform: "translateY(20px)",
                        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                        "&.fade-slide-up-5": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <Typography sx={{ pb: 1 }}>• Develop cutting-edge, responsive websites with a keen eye for creative design and usability.</Typography>
                      <Typography>• Specialize in fine-tuning user interfaces and user experiences, underscored by a solid foundation in comprehensive UI QA testing.</Typography>
                    </Box>
                  </ScrollTrigger>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>

          <Button
            variant='outlined'
            color='inherit'
            startIcon={<DownloadIcon />}
            size='large'
            sx={{
              textTransform: "capitalize",
              mt: 2,
              textDecoration: "none",
              fontFamily: "GothamSSm-Light",
            }}
            component='a'
            href='https://drive.google.com/uc?export=download&id=1Ar7FXtFt2h2sMjF1Chr9xdxyLNZqobbY'
            target='_blank'
          >
            Download my resume
          </Button>
        </Paper>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            justifyContent: "flex-start",
            my: 3,
          }}
        >
          <ButtonFab to='/projects' label="Let's continue to projects" onClick={() => window.scrollTo(0, 0)} />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
