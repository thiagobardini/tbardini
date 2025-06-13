import React from "react";
import { Card, CardContent, CardMedia, Stack, Typography, Box, Chip, Tooltip } from "@mui/material";
import redux from "../Assets/icons/icons8-redux-an-open-source-javascript-library-for-managing-application-state-30.png";
import { useNavigate } from "react-router-dom";
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

// Default icons for missing technologies
import PhoneIcon from '@mui/icons-material/Phone';
import CloudIcon from '@mui/icons-material/Cloud';
import MailIcon from '@mui/icons-material/Mail';
import MessageIcon from '@mui/icons-material/Message';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import AutomationIcon from '@mui/icons-material/AutoAwesome';
import CssIcon from '@mui/icons-material/Css';
import VoiceIcon from '@mui/icons-material/RecordVoiceOver';
import MapIcon from '@mui/icons-material/Map';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PetsIcon from '@mui/icons-material/Pets';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsIcon from '@mui/icons-material/Groups';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PaymentIcon from '@mui/icons-material/Payment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LandscapeIcon from '@mui/icons-material/Landscape';
import TextsmsIcon from '@mui/icons-material/Textsms';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpaIcon from '@mui/icons-material/Spa';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';

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

// Icon components for missing techs
const IconComponent = ({ iconType, tech }) => {
  const iconMap = {
    twilio: <PhoneIcon sx={{ fontSize: 30, color: '#F22F46' }} />,
    "voice ai": <VoiceIcon sx={{ fontSize: 30, color: '#667eea' }} />,
    n8n: <AutomationIcon sx={{ fontSize: 30, color: '#EA4B71' }} />,
    "sms api": <MessageIcon sx={{ fontSize: 30, color: '#25D366' }} />,
    "tailwind css": <CssIcon sx={{ fontSize: 30, color: '#06B6D4' }} />,
    "framer motion": <AutomationIcon sx={{ fontSize: 30, color: '#0055FF' }} />,
    vercel: <CloudIcon sx={{ fontSize: 30, color: '#000' }} />,
    "calendly api": <CalendarIcon sx={{ fontSize: 30, color: '#006BFF' }} />,
    vapi: <VoiceIcon sx={{ fontSize: 30, color: '#764ba2' }} />,
    "real-time transcription": <VoiceIcon sx={{ fontSize: 30, color: '#667eea' }} />,
  };

  return (
    <Tooltip title={tech}>
      <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {iconMap[iconType.toLowerCase()] || <CodeIcon sx={{ fontSize: 30, color: '#667eea' }} />}
      </Box>
    </Tooltip>
  );
};

const CardsProjects = ({ id, title, description, subtitle, img, techs, height }) => {
  const navigate = useNavigate();
  const isBusinessProject = ["flowquantic", "petquantic", "crewquantic", "pinkdog-website"].includes(id);

  const handleClick = () => {
    navigate(`?project=${encodeURIComponent(title)}`); 
  };

  // Custom badges for business projects
  const businessBadges = {
    flowquantic: [
      { icon: <SmartToyIcon sx={{ fontSize: 16 }} />, label: "AI Platform", color: "#667eea" },
      { icon: <AutoAwesomeIcon sx={{ fontSize: 16 }} />, label: "Automation", color: "#764ba2" },
      { icon: <RocketLaunchIcon sx={{ fontSize: 16 }} />, label: "Growth", color: "#667eea" },
      { icon: <TrendingUpIcon sx={{ fontSize: 16 }} />, label: "Efficiency", color: "#764ba2" },
    ],
    petquantic: [
      { icon: <PetsIcon sx={{ fontSize: 16 }} />, label: "Pet Business", color: "#667eea" },
      { icon: <PhoneIcon sx={{ fontSize: 16 }} />, label: "Voice AI", color: "#764ba2" },
      { icon: <AttachMoneyIcon sx={{ fontSize: 16 }} />, label: "Revenue+", color: "#667eea" },
      { icon: <CalendarIcon sx={{ fontSize: 16 }} />, label: "Bookings", color: "#764ba2" },
    ],
    crewquantic: [
      { icon: <LandscapeIcon sx={{ fontSize: 16 }} />, label: "Landscaping", color: "#667eea" },
      { icon: <CheckCircleIcon sx={{ fontSize: 16 }} />, label: "Check-ins", color: "#764ba2" },
      { icon: <PaymentIcon sx={{ fontSize: 16 }} />, label: "Payments", color: "#667eea" },
      { icon: <TextsmsIcon sx={{ fontSize: 16 }} />, label: "SMS Auto", color: "#764ba2" },
    ],
    "pinkdog-website": [
      { icon: <PetsIcon sx={{ fontSize: 16 }} />, label: "Pet Resort", color: "#667eea" },
      { icon: <SpaIcon sx={{ fontSize: 16 }} />, label: "Grooming", color: "#764ba2" },
      { icon: <StarIcon sx={{ fontSize: 16 }} />, label: "5-Star", color: "#667eea" },
      { icon: <HomeIcon sx={{ fontSize: 16 }} />, label: "Boarding", color: "#764ba2" },
    ],
  };

  return (
    <Box key={id} onClick={handleClick}>
      <Card
        sx={{
          height: "100%",
          position: "relative",
          cursor: "pointer",
          objectFit: "cover",
          backgroundPosition: " center center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "flex-end",
          borderRadius: "11px",
          breakInside: "avoid",
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          border: isBusinessProject ? '2px solid' : '1px solid',
          borderColor: isBusinessProject 
            ? 'rgba(102, 126, 234, 0.3)' 
            : 'rgba(255, 255, 255, 0.1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: isBusinessProject 
              ? '0 10px 30px rgba(102, 126, 234, 0.3)'
              : '0 5px 20px rgba(0, 0, 0, 0.2)',
            borderColor: isBusinessProject 
              ? '#667eea'
              : 'rgba(255, 255, 255, 0.2)',
          },
          '&::before': isBusinessProject ? {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            zIndex: 2,
          } : {},
        }}
      >
        <CardMedia
          component='img'
          alt={title}
          image={img}
          loading="eager"
          sx={{
            width: "100%",
            minWidth: "273px",
            objectFit: "cover",
            height: { xs: "100%", md: height },
            minHeight: { xs: "350px", height: "none" },
            maxHeight: { xs: "500px", height: "none" },
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
        />

        <CardContent
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            opacity: { xs: 1, md: 1 },
            background: isBusinessProject 
              ? "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85))"
              : "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))",
            transition: "opacity 0.3s ease-in-out, background 0.3s ease-in-out",
            "&:hover": {
              opacity: 1,
              background: isBusinessProject 
                ? "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))"
                : "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))",
            },
          }}
        >
          <Typography
            gutterBottom
            variant='h6'
            component='div'
            sx={{
              fontFamily: "GothamSSm-Bold",
              textTransform: "capitalize",
              color: isBusinessProject 
                ? '#ffffff'
                : '#eeeeee',
              background: isBusinessProject 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'none',
              backgroundClip: isBusinessProject ? 'text' : 'unset',
              WebkitBackgroundClip: isBusinessProject ? 'text' : 'unset',
              WebkitTextFillColor: isBusinessProject ? 'transparent' : 'unset',
              filter: isBusinessProject ? 'brightness(1.2)' : 'none',
            }}
          >
            <div style={{ display: "inline-block", backdropFilter: "blur(10px)" }}>{title}</div>
          </Typography>
          <Typography variant='body2' color='#eeeeee' mb={2} component='div'>
            <div style={{ display: "inline-block", backdropFilter: "blur(10px)" }}>{subtitle}</div>
          </Typography>

          {isBusinessProject ? (
            <Stack
              mb={2}
              direction='row'
              sx={{
                flexWrap: "wrap",
                gap: "8px",
                rowGap: "8px",
              }}
            >
              {businessBadges[id]?.map((badge, index) => (
                <Chip
                  key={index}
                  icon={badge.icon}
                  label={badge.label}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    border: '1px solid',
                    borderColor: badge.color + '40',
                    backdropFilter: 'blur(10px)',
                    fontFamily: 'GothamSSm-Light',
                    fontSize: '0.75rem',
                    padding: '2px 4px',
                    transition: 'all 0.3s ease',
                    '& .MuiChip-icon': {
                      color: badge.color,
                      filter: 'brightness(1.2)',
                    },
                    '&:hover': {
                      backgroundColor: badge.color + '30',
                      borderColor: badge.color,
                      transform: 'translateY(-2px) scale(1.05)',
                      boxShadow: `0 4px 12px ${badge.color}40`,
                      '& .MuiChip-icon': {
                        filter: 'brightness(1.5)',
                      },
                    }
                  }}
                />
              ))}
            </Stack>
          ) : (
            <Stack
              mb={2}
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
                  <IconComponent key={index} iconType={techKey} tech={tech} />
                );
              })}
            </Stack>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardsProjects;
