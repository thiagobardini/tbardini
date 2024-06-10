import React from "react";
import { Drawer, Paper, Link, Stack, Divider, Typography, Box, Chip, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../redux/drawerSlice";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import LaunchIcon from "@mui/icons-material/Launch";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";
import redux from "../Assets/icons/icons8-redux-an-open-source-javascript-library-for-managing-application-state-30.png";
import javascript from "../Assets/icons/icons8-javascript-30.png";
import react from "../Assets/icons/icons8-react-30.png";
import materialui from "../Assets/icons/materialui-original.svg?url";
import reactThree from "../Assets/icons/Threejs-logo.svg?url";
import gemini from "../Assets/icons/google-gemini-icon.png";
import i18n from "../Assets/icons/i18n.png";
import rtkQuery from "../Assets/icons/rtk-query.svg?url";
import firebase from "../Assets/icons/firebase-30.png";
import expressjs from "../Assets/icons/express-js-30.png";
import nodejs from "../Assets/icons/icons8-nodejs-30.png";
import stripe from "../Assets/icons/icons8-stripe-30.png";
import sass from "../Assets/icons/icons8-sass-30.png";
import globalLinkGO from "../Assets/icons/globalLinkGO.png";
import playwright from "../Assets/icons/playwright-logo.png";
import nextjs from "../Assets/icons/icons8-next.js-30.png";
import typescript from "../Assets/icons/icons8-typescript-30.png";
import mongodb from "../Assets/icons/icons8-mongodb-30.png";
import prisma from "../Assets/icons/icons8-prisma-orm-30.png";
import ae from "../Assets/icons/icons8-after-effects-30.png";
import mantine from "../Assets/icons/mantine-ui-30.png";
import postgreSQL from "../Assets/icons/postgresql-30.png";
import d3js from "../Assets/icons/icons8-d3js.png";
import mapbox from "../Assets/icons/mapbox.svg?url";

const techIcons = {
  reactjs: react,
  javascript: javascript,
  "redux toolkit": redux,
  "material-ui": materialui,
  "react three js": reactThree,
  "gemini-ai": gemini,
  i18n: i18n,
  "rtk query": rtkQuery,
  firebase: firebase,
  "express js": expressjs,
  "node js": nodejs,
  stripe: stripe,
  sass: sass,
  "globallink go": globalLinkGO,
  playwright: playwright,
  "next js": nextjs,
  typescript: typescript,
  mongodb: mongodb,
  prisma: prisma,
  "after-effects": ae,
  "mantine-ui": mantine,
  postgresql: postgreSQL,
  d3js: d3js,
  mapbox: mapbox,
};

export default function TemporaryDrawer({ open, onClose, title, subtitle, description, img, techs, live, readme, github, openNewTab, logo, index, localUrl, id }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(closeDrawer());
  };

  return (
    <Drawer
      key={id}
      anchor='right'
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          backgroundColor: darkMode ? "transparent !important" : "#transparent !important",
          width: { xs: "100vw", sm: "544px" },
          height: "100%",
          overflowY: "auto",
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: darkMode ? "transparent !important" : "#transparent !important",
          display: "block",
          backdropFilter: darkMode ? "blur(40px)" : "blur(50px)",
          height: "100%",
          overflowY: "auto",
          px: 2,
          py: 3,
        }}
      >
        <Stack direction='row' justifyContent='space-between' alignItems='flex-start' spacing={0}>
          <Link variant='text' onClick={handleDrawerClose} color='text.third'>
            <ArrowCircleLeftIcon />
          </Link>
          <Typography
            color='text.third'
            sx={{
              cursor: "pointer",
              fontFamily: "GothamSSm-Light",
            }}
            onClick={handleDrawerClose}
          >
            Back to projects
          </Typography>
        </Stack>
        <Divider sx={{ my: 2, px: 2 }} />
        <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' spacing={0}>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            color='text.primary'
            sx={{
              fontFamily: "GothamSSm-Bold",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>
          <Typography variant='body2' color='text.primary' mb={2} component='div'>
            {subtitle}
          </Typography>
          <Link color='text.primary' href={live} target='_blank' rel='noopener noreferrer'>
            <Box
              component='img'
              alt='title'
              src={img}
              sx={{
                height: "300px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "11px",
              }}
            />
          </Link>
          <Typography variant='h6' color='text.primary' gutterBottom mt={2} component='div' sx={{ fontFamily: "GothamSSm-Light" }}>
            About
          </Typography>
          <Typography variant='body2' color='text.primary' component='div'>
            {description}
          </Typography>
          <Typography variant='h6' color='text.primary' gutterBottom mt={2} component='div' sx={{ fontFamily: "GothamSSm-Light" }}>
            Technologies
          </Typography>
          <Stack
            direction='row'
            sx={{
              flexWrap: "wrap",
              gap: "10px",
              rowGap: "8px",
            }}
          >
            {techs
              .sort((a, b) => a.localeCompare(b))
              .map((tech, index) => {
                const techKey = tech.toLowerCase();
                const TechIcon = techIcons[techKey];

                return TechIcon ? (
                  <Tooltip key={index} title={tech}>
                    <img src={TechIcon} alt={tech} style={{ height: "30px", width: "auto" }} />
                  </Tooltip>
                ) : (
                  <Chip
                    key={index}
                    label={tech}
                    size='small'
                    color='secondary'
                    sx={{
                      textTransform: "capitalize",
                      fontFamily: "GothamSSm-Light",
                    }}
                  />
                );
              })}
          </Stack>
          <Typography
            variant='h6'
            color='text.primary'
            gutterBottom
            mt={2}
            component='div'
            sx={{
              display: "flex",
              alignItems: "flex-start",
              fontFamily: "GothamSSm-Light",
            }}
          >
            <PublicIcon sx={{ mr: 1 }} />
            Website
          </Typography>
          <Link color='text.primary' href={live} target='_blank' rel='noopener noreferrer'>
            <Typography variant='body2'>{live}</Typography>
          </Link>
          <Typography
            variant='h6'
            color='text.primary'
            gutterBottom
            mt={2}
            component='div'
            sx={{
              display: "flex",
              alignItems: "flex-start",
              fontFamily: "GothamSSm-Light",
            }}
          >
            <GitHubIcon sx={{ mr: 1 }} />
            Github
          </Typography>
          <div style={{ width: "100%" }}>
            <Link
              color='text.primary'
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block",
              }}
            >
              <Typography
                variant='body2'
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "100%",
                  display: "block",
                }}
              >
                {github}
              </Typography>
            </Link>
          </div>
        </Stack>
      </Paper>
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          p: 2,
          backgroundColor: "#2A2525",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {localUrl === "" ? (
          <Link
            href={live}
            target='_blank'
            rel='noopener noreferrer'
            underline='none'
            sx={{
              color: "#eeeeee",
              "&:hover": {
                textDecoration: "underline",
                "& svg": {
                  textDecoration: "none",
                },
              },
            }}
          >
            <Stack direction='row' alignItems='center'>
              <Typography mr={1} sx={{ fontFamily: "GothamSSm-Light" }}>
                Open Project
              </Typography>
              <LaunchIcon />
            </Stack>
          </Link>
        ) : (
          <Link
            href={localUrl}
            underline='none'
            sx={{
              color: "#eeeeee",
              "&:hover": {
                textDecoration: "underline",
                "& svg": {
                  textDecoration: "none",
                },
              },
            }}
          >
            <Stack direction='row' alignItems='center'>
              <Typography
                mr={1}
                sx={{
                  fontFamily: "GothamSSm-Light",
                  color: "#eeeeee",
                }}
              >
                Open Project
              </Typography>
              <LaunchIcon color='text.third' />
            </Stack>
          </Link>
        )}
      </Box>
    </Drawer>
  );
}
