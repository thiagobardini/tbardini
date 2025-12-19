import React from "react";
import { Card, CardContent, CardMedia, Stack, Typography, Box, Chip, Tooltip, Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
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
import TableChartIcon from '@mui/icons-material/TableChart';
import VerifiedIcon from '@mui/icons-material/Verified';
import PaletteIcon from '@mui/icons-material/Palette';

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
    trpc: <CodeIcon sx={{ fontSize: 30, color: '#2596BE' }} />,
    supabase: <StorageIcon sx={{ fontSize: 30, color: '#3ECF8E' }} />,
    "supabase postgres": <StorageIcon sx={{ fontSize: 30, color: '#3ECF8E' }} />,
    "next.js 15": <CloudIcon sx={{ fontSize: 30, color: '#000' }} />,
    zustand: <StorageIcon sx={{ fontSize: 30, color: '#453F39' }} />,
    "real-time analytics": <TrendingUpIcon sx={{ fontSize: 30, color: '#667eea' }} />,
    openai: <SmartToyIcon sx={{ fontSize: 30, color: '#412991' }} />,
    "drizzle orm": <TableChartIcon sx={{ fontSize: 30, color: '#2E7D32' }} />,
    "shadcn/ui": <PaletteIcon sx={{ fontSize: 30, color: '#000000' }} />,
    "shadcn": <PaletteIcon sx={{ fontSize: 30, color: '#000000' }} />,
    zod: <VerifiedIcon sx={{ fontSize: 30, color: '#3B82F6' }} />,
    "retell ai": <VoiceIcon sx={{ fontSize: 30, color: '#FF6B6B' }} />,
  };

  return (
    <Tooltip title={tech}>
      <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {iconMap[iconType.toLowerCase()] || <CodeIcon sx={{ fontSize: 30, color: '#667eea' }} />}
      </Box>
    </Tooltip>
  );
};

const CardsProjects = ({ id, title, description, subtitle, img, video, techs, height, isMainFeature = false, live, github, instagram }) => {
  const navigate = useNavigate();
  const isBusinessProject = ["flowquantic", "petquantic"].includes(id);

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
      { icon: <SmartToyIcon sx={{ fontSize: 16 }} />, label: "FlowStaff AI", color: "#764ba2" },
      { icon: <PhoneIcon sx={{ fontSize: 16 }} />, label: "Voice AI", color: "#667eea" },
      { icon: <CalendarIcon sx={{ fontSize: 16 }} />, label: "Bookings", color: "#764ba2" },
    ],
    crewquantic: [
      { icon: <LandscapeIcon sx={{ fontSize: 16 }} />, label: "Landscaping", color: "#667eea" },
      { icon: <SmartToyIcon sx={{ fontSize: 16 }} />, label: "FlowStaff AI", color: "#764ba2" },
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

  // Featured Project Layout - Horizontal with description
  if (isMainFeature) {
    // Remove emoji from description for cleaner display
    const cleanDescription = description?.replace(/^[^\w\s]+\s*/, '') || '';

    return (
      <Box key={id}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            borderRadius: '20px',
            overflow: 'hidden',
            transition: 'all 0.4s ease',
            border: '2px solid rgba(102, 126, 234, 0.3)',
            background: (theme) => theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(30, 30, 40, 0.95) 0%, rgba(20, 20, 30, 0.98) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 250, 0.98) 100%)',
            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15)',
            position: 'relative',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 60px rgba(102, 126, 234, 0.25)',
              borderColor: '#667eea',
              '& .featured-image': {
                transform: 'scale(1.05)',
              }
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              zIndex: 2,
            },
          }}
        >
          {/* Image/Video Section */}
          <Box
            sx={{
              width: { xs: '100%', md: '55%' },
              minHeight: { xs: '220px', md: '400px' },
              maxHeight: { xs: '280px', md: 'none' },
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
            onClick={handleClick}
          >
            {video && video.trim() !== "" ? (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  paddingBottom: '56.25%', // 16:9 aspect ratio
                }}
              >
                <iframe
                  src={video}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; encrypted-media; fullscreen"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  title={`${title} video`}
                />
              </Box>
            ) : (
              <CardMedia
                component='img'
                alt={title}
                image={img}
                loading="eager"
                className="featured-image"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
              />
            )}
            {/* Featured Badge */}
            <Chip
              icon={<StarIcon sx={{ fontSize: 16 }} />}
              label="Featured Project"
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                fontFamily: 'GothamSSm-Bold',
                fontSize: '0.75rem',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                '& .MuiChip-icon': {
                  color: '#ffd700',
                },
              }}
            />
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              width: { xs: '100%', md: '45%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: { xs: 2, md: 4 },
              pt: { xs: 1.5, md: 4 },
            }}
          >
            <Typography
              variant='h4'
              component='div'
              sx={{
                fontFamily: "GothamSSm-Bold",
                mb: { xs: 0.5, md: 1 },
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.3rem', md: '1.8rem' },
              }}
            >
              {title}
            </Typography>

            <Typography
              variant='subtitle1'
              sx={{
                fontFamily: "GothamSSm-Light",
                color: 'text.secondary',
                mb: { xs: 1, md: 2 },
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              {subtitle}
            </Typography>

            <Typography
              variant='body2'
              sx={{
                color: 'text.secondary',
                mb: { xs: 1.5, md: 3 },
                lineHeight: 1.6,
                display: '-webkit-box',
                WebkitLineClamp: { xs: 3, md: 4 },
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                fontSize: { xs: '0.8rem', md: '0.875rem' },
              }}
            >
              {cleanDescription}
            </Typography>

            {/* Business Badges */}
            {businessBadges[id] && (
              <Stack
                direction='row'
                sx={{
                  flexWrap: "wrap",
                  gap: { xs: '6px', md: '8px' },
                  mb: { xs: 1, md: 2 },
                }}
              >
                {businessBadges[id].map((badge, index) => (
                  <Chip
                    key={index}
                    icon={badge.icon}
                    label={badge.label}
                    size="small"
                    sx={{
                      backgroundColor: (theme) => theme.palette.mode === 'dark'
                        ? 'rgba(102, 126, 234, 0.1)'
                        : 'rgba(102, 126, 234, 0.08)',
                      color: 'text.primary',
                      border: '1px solid',
                      borderColor: badge.color + '30',
                      fontFamily: 'GothamSSm-Light',
                      fontSize: '0.75rem',
                      transition: 'all 0.3s ease',
                      '& .MuiChip-icon': {
                        color: badge.color,
                      },
                      '&:hover': {
                        backgroundColor: badge.color + '20',
                        borderColor: badge.color,
                        transform: 'translateY(-2px)',
                      }
                    }}
                  />
                ))}
              </Stack>
            )}

            {/* Tech Stack */}
            {techs && techs.length > 0 && (
              <Stack
                direction='row'
                sx={{
                  flexWrap: "wrap",
                  gap: { xs: '8px', md: '10px' },
                  mb: { xs: 1.5, md: 3 },
                }}
              >
                {techs.map((tech, index) => {
                  const techKey = tech.toLowerCase();
                  const TechIcon = techIcons[techKey];

                  return TechIcon ? (
                    <Tooltip key={index} title={tech}>
                      <img src={TechIcon} alt={tech} style={{ height: "24px", width: "auto", opacity: 0.9 }} />
                    </Tooltip>
                  ) : (
                    <IconComponent key={index} iconType={techKey} tech={tech} />
                  );
                })}
              </Stack>
            )}

            {/* Action Buttons */}
            <Stack direction="row" spacing={{ xs: 1, md: 2 }} flexWrap="wrap" useFlexGap>
              <Button
                variant="contained"
                size="small"
                onClick={handleClick}
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  fontFamily: 'GothamSSm-Bold',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.75, md: 1 },
                  fontSize: { xs: '0.8rem', md: '0.875rem' },
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
                  }
                }}
              >
                View Details
              </Button>
              {live && (
                <Button
                  variant="outlined"
                  size="small"
                  endIcon={<OpenInNewIcon sx={{ fontSize: { xs: 16, md: 20 } }} />}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(live, '_blank');
                  }}
                  sx={{
                    borderColor: '#667eea',
                    color: '#667eea',
                    fontFamily: 'GothamSSm-Light',
                    textTransform: 'none',
                    borderRadius: '8px',
                    px: { xs: 2, md: 3 },
                    py: { xs: 0.75, md: 1 },
                    fontSize: { xs: '0.8rem', md: '0.875rem' },
                    '&:hover': {
                      borderColor: '#764ba2',
                      backgroundColor: 'rgba(102, 126, 234, 0.08)',
                    }
                  }}
                >
                  Live
                </Button>
              )}
              {github && (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(github, '_blank');
                  }}
                  sx={{
                    borderColor: 'text.secondary',
                    color: 'text.secondary',
                    fontFamily: 'GothamSSm-Light',
                    textTransform: 'none',
                    borderRadius: '8px',
                    minWidth: 'auto',
                    px: { xs: 1.5, md: 2 },
                    py: { xs: 0.75, md: 1 },
                    '&:hover': {
                      borderColor: '#667eea',
                      color: '#667eea',
                    }
                  }}
                >
                  <GitHubIcon sx={{ fontSize: { xs: 18, md: 22 } }} />
                </Button>
              )}
              {instagram && (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(instagram, '_blank');
                  }}
                  sx={{
                    borderColor: '#E4405F',
                    color: '#E4405F',
                    fontFamily: 'GothamSSm-Light',
                    textTransform: 'none',
                    borderRadius: '8px',
                    minWidth: 'auto',
                    px: { xs: 1.5, md: 2 },
                    py: { xs: 0.75, md: 1 },
                    '&:hover': {
                      borderColor: '#C13584',
                      backgroundColor: 'rgba(228, 64, 95, 0.08)',
                      color: '#C13584',
                    }
                  }}
                >
                  <InstagramIcon sx={{ fontSize: { xs: 18, md: 22 } }} />
                </Button>
              )}
            </Stack>
          </Box>
        </Card>
      </Box>
    );
  }

  // Regular Card Layout
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
        {video && video.trim() !== "" ? (
          <Box
            sx={{
              width: "100%",
              minWidth: "273px",
              height: { xs: "100%", md: height },
              minHeight: { xs: "350px", md: height },
              maxHeight: { xs: "500px", md: "none" },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <iframe
              src={video}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; encrypted-media; fullscreen"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              title={`${title} video`}
            />
          </Box>
        ) : (
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
        )}

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
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'inline-block',
              backdropFilter: 'blur(10px)',
              mb: 1,
            }}
          >
            <Typography
              gutterBottom
              variant='h6'
              component='div'
              sx={{
                fontFamily: "GothamSSm-Bold",
                textTransform: "capitalize",
                color: isBusinessProject ? '#ffffff' : '#eeeeee',
                background: isBusinessProject
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'none',
                backgroundClip: isBusinessProject ? 'text' : 'unset',
                WebkitBackgroundClip: isBusinessProject ? 'text' : 'unset',
                WebkitTextFillColor: isBusinessProject ? 'transparent' : 'unset',
                filter: isBusinessProject ? 'brightness(1.2)' : 'none',
                // Ensure text is visible even if gradient fails
                textShadow: isBusinessProject ? '0 0 2px rgba(255, 255, 255, 0.3)' : 'none',
              }}
            >
              {title}
            </Typography>
          </Box>
          <Typography variant='body2' color='#eeeeee' mb={2} component='div'>
            <div style={{ display: "inline-block", backdropFilter: "blur(10px)" }}>{subtitle}</div>
          </Typography>

          {isBusinessProject ? (
            <>
              <Stack
                mb={1}
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
              {techs && techs.length > 0 && (
                <Stack
                  mb={2}
                  direction='row'
                  sx={{
                    flexWrap: "wrap",
                    gap: "8px",
                    rowGap: "6px",
                  }}
                >
                  {techs.slice(0, 6).map((tech, index) => {
                    const techKey = tech.toLowerCase();
                    const TechIcon = techIcons[techKey];

                    return TechIcon ? (
                      <Tooltip key={index} title={tech}>
                        <img src={TechIcon} alt={tech} style={{ height: "22px", width: "auto", opacity: 0.85 }} />
                      </Tooltip>
                    ) : (
                      <IconComponent key={index} iconType={techKey} tech={tech} />
                    );
                  })}
                </Stack>
              )}
            </>
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
