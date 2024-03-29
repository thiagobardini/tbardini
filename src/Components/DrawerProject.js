import React, { useState } from "react";
import {
  Drawer,
  Paper,
  Button,
  Link,
  Stack,
  Divider,
  Typography,
  Box,
  Chip,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../redux/drawerSlice";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import LaunchIcon from "@mui/icons-material/Launch";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function TemporaryDrawer({
  open,
  onClose,
  title,
  subtitle,
  description,
  img,
  techs,
  live,
  readme,
  github,
  openNewTab,
  logo,
  index,
  localUrl,
  id,
}) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(closeDrawer());
  };

  return (
    <Drawer
      key={id}
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          backgroundColor: darkMode
            ? "transparent !important"
            : "#transparent !important",
          width: { xs: "100vw", sm: "544px" },
          height: "100%",
          overflowY: "auto",
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: darkMode
            ? "transparent !important"
            : "#transparent !important",
          display: "block",
          backdropFilter: darkMode ? "blur(40px)" : "blur(50px)",
          height: "100%",
          overflowY: "auto",
          px: 2,
          py: 3,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={0}
        >
          <Link variant="text" onClick={handleDrawerClose} color="text.third">
            <ArrowCircleLeftIcon />
          </Link>
          <Typography
            color="text.third"
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
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="text.primary"
            sx={{
              // fontWeight: 900,
              // fontFamily: "Trattatello, sans-serif !important",
              // fontFamily: "TuskerGrotesk",
              fontFamily: "GothamSSm-Bold",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            mb={2}
            component="div"
          >
            {subtitle}
          </Typography>
          <Box
            component="img"
            alt="title"
            src={img}
            sx={{
              height: "300px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "11px",
            }}
          />
          <Typography
            variant="h6"
            color="text.primary"
            gutterBottom
            mt={2}
            component="div"
            sx={{ fontFamily: "GothamSSm-Light" }}
          >
            About
          </Typography>
          <Typography variant="body2" color="text.primary" component="div">
            {description}
          </Typography>
          <Typography
            variant="h6"
            color="text.primary"
            gutterBottom
            mt={2}
            component="div"
            sx={{ fontFamily: "GothamSSm-Light" }}
          >
            Technologies
          </Typography>
          <Stack
            direction="row"
            sx={{
              flexWrap: "wrap",
              gap: "4px",
              rowGap: "8px",
            }}
          >
            {techs.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                color="secondary"
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "GothamSSm-Light",
                }}
              />
            ))}
          </Stack>
          <Typography
            variant="h6"
            color="text.primary"
            gutterBottom
            mt={2}
            component="div"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              fontFamily: "GothamSSm-Light",
            }}
          >
            <PublicIcon sx={{ mr: 1 }} />
            Website
          </Typography>
          <Link
            color="text.primary"
            href={live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="body2">{live}</Typography>
          </Link>
          <Typography
            variant="h6"
            color="text.primary"
            gutterBottom
            mt={2}
            component="div"
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
              color="text.primary"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block",
              }}
            >
              <Typography
                variant="body2"
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
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
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
            <Stack direction="row" alignItems="center">
              <Typography mr={1} sx={{ fontFamily: "GothamSSm-Light" }}>
                Open Project
              </Typography>
              <LaunchIcon />
            </Stack>
          </Link>
        ) : (
          <Link
            href={localUrl}
            underline="none"
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
            <Stack direction="row" alignItems="center">
              <Typography
                mr={1}
                sx={{
                  fontFamily: "GothamSSm-Light",
                  color: "#eeeeee",
                }}
              >
                Open Project
              </Typography>
              <LaunchIcon color="text.third" />
            </Stack>
          </Link>
        )}
      </Box>
    </Drawer>
  );
}
