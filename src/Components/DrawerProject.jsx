import React from "react";
import { Drawer, Paper, Link, Stack, Divider, Typography, Box, Chip, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeDrawer } from "../redux/drawerSlice";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import LaunchIcon from "@mui/icons-material/Launch";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from '@mui/icons-material/Phone';
import CloudIcon from '@mui/icons-material/Cloud';
import MessageIcon from '@mui/icons-material/Message';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CssIcon from '@mui/icons-material/Css';
import VoiceIcon from '@mui/icons-material/RecordVoiceOver';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

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
  react: react,
  reactjs: react,
  "react native": react,
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
  "node.js": nodejs,
  nodejs: nodejs,
  stripe: stripe,
  sass: sass,
  "globallink go": globalLinkGO,
  playwright: playwright,
  "next js": nextjs,
  "next.js": nextjs,
  typescript: typescript,
  mongodb: mongodb,
  prisma: prisma,
  "after-effects": ae,
  "mantine-ui": mantine,
  postgresql: postgreSQL,
  d3js: d3js,
  mapbox: mapbox,
};

// Icon components for techs without image files
const IconComponent = ({ iconType, tech }) => {
  const iconMap = {
    twilio: <PhoneIcon sx={{ fontSize: 30, color: '#F22F46' }} />,
    "voice ai": <VoiceIcon sx={{ fontSize: 30, color: '#667eea' }} />,
    n8n: <AutoAwesomeIcon sx={{ fontSize: 30, color: '#EA4B71' }} />,
    "sms api": <MessageIcon sx={{ fontSize: 30, color: '#25D366' }} />,
    "tailwind css": <CssIcon sx={{ fontSize: 30, color: '#06B6D4' }} />,
    "framer motion": <AutoAwesomeIcon sx={{ fontSize: 30, color: '#0055FF' }} />,
    vercel: <CloudIcon sx={{ fontSize: 30, color: '#000' }} />,
    "calendly api": <CalendarIcon sx={{ fontSize: 30, color: '#006BFF' }} />,
    vapi: <VoiceIcon sx={{ fontSize: 30, color: '#764ba2' }} />,
    "real-time transcription": <VoiceIcon sx={{ fontSize: 30, color: '#667eea' }} />,
    trpc: <CodeIcon sx={{ fontSize: 30, color: '#2596BE' }} />,
    supabase: <StorageIcon sx={{ fontSize: 30, color: '#3ECF8E' }} />,
    "next.js 15": <CloudIcon sx={{ fontSize: 30, color: '#000' }} />,
    zustand: <StorageIcon sx={{ fontSize: 30, color: '#453F39' }} />,
    "real-time analytics": <TrendingUpIcon sx={{ fontSize: 30, color: '#667eea' }} />,
    openai: <SmartToyIcon sx={{ fontSize: 30, color: '#412991' }} />,
  };

  const icon = iconMap[iconType.toLowerCase()];

  if (icon) {
    return (
      <Tooltip title={tech}>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
        </Box>
      </Tooltip>
    );
  }

  return null;
};

export default function TemporaryDrawer({ open, onClose, title, subtitle, description, img, techs, live, readme, github, instagram, openNewTab, logo, index, localUrl, id }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    dispatch(closeDrawer());
    navigate(location.pathname);
  }

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
          <Link
            color='text.primary'
            href={live}
            target='_blank'
            rel='noopener noreferrer'
            sx={{
              height: "300px",
              width: "100%",
              textDecoration: "none",
            }}
          >
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
            {[...new Set(techs)]
              .sort((a, b) => a.localeCompare(b))
              .map((tech, index) => {
                const techKey = tech.toLowerCase();
                const TechIcon = techIcons[techKey];

                if (TechIcon) {
                  return (
                    <Tooltip key={index} title={tech}>
                      <img src={TechIcon} alt={tech} style={{ height: "30px", width: "auto" }} />
                    </Tooltip>
                  );
                }

                // Check if we have an icon component for this tech
                const hasIconComponent = [
                  'twilio', 'voice ai', 'n8n', 'sms api', 'tailwind css',
                  'framer motion', 'vercel', 'calendly api', 'vapi',
                  'real-time transcription', 'trpc', 'supabase', 'next.js 15',
                  'zustand', 'real-time analytics', 'openai'
                ].includes(techKey);

                if (hasIconComponent) {
                  return <IconComponent key={index} iconType={techKey} tech={tech} />;
                }

                return (
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
          {github ? (
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
          ) : (
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{
                fontStyle: 'italic',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              🔒 Private Repository
            </Typography>
          )}
          {instagram && (
            <>
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
                <InstagramIcon sx={{ mr: 1, color: '#E4405F' }} />
                Instagram
              </Typography>
              <Link
                color='text.primary'
                href={instagram}
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  '&:hover': {
                    color: '#E4405F',
                  }
                }}
              >
                <Typography variant='body2'>{instagram}</Typography>
              </Link>
            </>
          )}
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
