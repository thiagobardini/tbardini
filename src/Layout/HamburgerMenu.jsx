import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import { Drawer, List, ListItem, Box, IconButton, useTheme, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ToggleThemeMode from "../Components/ToggleThemeMode";
import { useSelector } from "react-redux";
import tBardiniLogo from "../Assets/images/logoNav250.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const HamburgerMenu = ({ isOpen, setOpen, pages }) => {
  const theme = useTheme();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(location.pathname);

  useEffect(() => {
    setPreviousPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== previousPath && isOpen) {
      setOpen(false);
    }
  }, [location.pathname, previousPath, isOpen]);

  return (
    <Box>
      <Box>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </Box>
      <Drawer
        anchor='left'
        open={isOpen}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            backdropFilter: darkMode ? "blur(20px)" : "blur(10px)",
            backgroundColor: darkMode ? "transparent !important" : "rgba(238, 238, 238, 0.7) !important",
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
          <Box color={!isOpen ? "#eeeeee" : isOpen && theme.palette.mode === "light" ? "#22313f" : "#eeeeee"} sx={{ position: "absolute", left: 0, pt: 5, pl: 3 }}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </Box>
          <Box
            component={Link}
            to='/'
            onClick={() => setOpen(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              py: 3,
            }}
          >
            <Box component='img' alt='logo' src={tBardiniLogo} sx={{ height: "150px" }} />
          </Box>
        </Box>
        <List>
          {pages.map((page) => (
            <ListItem
              component={page.isExternal ? "a" : Link}
              to={!page.isExternal ? page.to : undefined}
              href={page.isExternal ? page.to : undefined}
              target={page.isExternal ? "_blank" : undefined}
              rel={page.isExternal ? "noopener noreferrer" : undefined}
              onClick={page.isExternal ? undefined : () => setOpen(false)}
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
                variant='h3'
                sx={{
                  fontFamily: "GothamSSm-Light",
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {page.text}
                {page.isExternal && (
                  <OpenInNewIcon 
                    sx={{ 
                      fontSize: "2rem",
                      opacity: 0.7,
                    }} 
                  />
                )}
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
            component='a'
            href={"https://www.linkedin.com/in/thiagobardini/"}
            target='_blank'
            sx={{
              mr: 2,
            }}
          >
            <LinkedInIcon
              sx={{
                fontSize: "3rem",
                color: theme.palette.mode === "dark" ? "#eeeeee" : "#22313f",
              }}
            />
          </IconButton>
          <IconButton component='a' href={"https://github.com/thiagobardini"} target='_blank'>
            <GitHubIcon
              sx={{
                fontSize: "3rem",
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
