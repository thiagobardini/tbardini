import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  Box,
  IconButton,
  useTheme,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ToggleThemeMode from "../Components/ToggleThemeMode";
import { useSelector } from "react-redux";
import LogoAnimation from "../Components/LogoAnimation";

const HamburgerMenu = ({ isOpen, setOpen, pages }) => {
  const theme = useTheme();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <Box>
      <Box>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </Box>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            backdropFilter: darkMode ? "blur(20px)" : "blur(10px)",
            backgroundColor: darkMode
              ? "transparent !important"
              : "rgba(238, 238, 238, 0.7) !important",
            display: "block",
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
            overflowY: "auto",
          },
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
            zIndex: 1400,
            overflow: "visible",
            overflowY: "auto",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            color={
              !isOpen
                ? "#eeeeee"
                : isOpen && theme.palette.mode === "light"
                ? "#22313f"
                : "#eeeeee"
            }
            sx={{ position: "absolute", left: 0, pt: 5, pl: 3 }}
          >
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              py: 3,
            }}
          >
            <LogoAnimation height={"150px"} />
          </Box>
        </Box>
        <List>
          {pages.map((page, index) => (
            <ListItem
              component={Link}
              to={page.to}
              key={page.text}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",

                color: theme.palette.mode === "dark" ? "#eeeeee" : "#22313f",
                fontWeight: "500",
                textDecoration: "none",
                position: "relative",
                mr: 2,
                my: 2,
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "TuskerGrotesk",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                {page.text}
              </Typography>
            </ListItem>
          ))}
        </List>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 2,
          }}
        >
          <IconButton
            component="a"
            href={"https://www.linkedin.com/in/thiagobardini/"}
            target="_blank"
            sx={{
              mr: 2,
            }}
          >
            <LinkedInIcon
              sx={{
                fontSize: "2.5rem",
                color: theme.palette.mode === "dark" ? "#eeeeee" : "#22313f",
              }}
            />
          </IconButton>
          <IconButton
            component="a"
            href={"https://github.com/thiagobardini"}
            target="_blank"
          >
            <GitHubIcon
              sx={{
                fontSize: "2.5rem",
                color: theme.palette.mode === "dark" ? "#eeeeee" : "#22313f",
              }}
            />
          </IconButton>
        </Box>
        <Box sx={{ pb: 3 }}>
          <ToggleThemeMode />
        </Box>
      </Drawer>
    </Box>
  );
};

export default HamburgerMenu;
