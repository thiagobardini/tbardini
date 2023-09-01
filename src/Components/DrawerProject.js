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

export default function TemporaryDrawer({
  open,
  onClose,
  id,
  title,
  description,
  img,
  techs,
  live,
  readme,
  github,
  openNewTab,
  logo,
  index,
}) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(closeDrawer());
  };

  return (
    <Drawer
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
            sx={{ fontWeight: "600", cursor: "pointer" }}
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
            sx={{ fontWeight: 900 }}
          >
            {title}
          </Typography>
          {/* <Typography
            variant="body2"
            color="text.primary"
            mb={2}
            component="div"
          >
            {description}
          </Typography> */}
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
          >
            Website
          </Typography>
          <Link color="text.primary">{live}</Link>
          <Typography
            variant="h6"
            color="text.primary"
            gutterBottom
            mt={2}
            component="div"
          >
            Github
          </Typography>

          <Link color="text.primary">{github}</Link>
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
        <Button
          variant="text"
          endIcon={<LaunchIcon />}
          color="customWhite"
          sx={{ textTransform: "none" }}
        >
          Open project
        </Button>
      </Box>
    </Drawer>
  );
}
