import React from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import navLogo from "../Assets/images/logoNav.png";
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

const HamburgerMenu = ({ isOpen, setOpen, pages }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        color={
          !isOpen
            ? "#eeeeee"
            : isOpen && theme.palette.mode === "light"
            ? "#22313f"
            : "#eeeeee"
        }
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </Box>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          backgroundColor: theme.palette.background.paper,
          display: "block",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
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
            component={NavLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              my: 2,
            }}
          >
            <Box
              component="img"
              alt="logo"
              src={navLogo}
              sx={{
                height: "150px",
              }}
            />
          </Box>
        </Box>
        <List>
          {pages.map((page) => (
            <ListItem
              component={NavLink}
              onClick={() => setOpen(false)}
              to={page.to}
              key={page.text}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                py: 2,
                color: theme.palette.mode === "dark" ? "#eeeeee" : "#22313f",
                textTransform: "none",
                fontWeight: "500",
                fontSize: "1.4rem",
                textDecoration: "none",
                position: "relative",
                mr: 2,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "30%",
                  height: "6px",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#1270AF",
                  visibility: "hidden",
                  transition: "all 0.5s ease-in-out",
                },
                "&.active::after": {
                  visibility: "visible",
                  width: "170px",
                },
              }}
              isActive={(match) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
            >
              <Typography variant="h3">{page.text}</Typography>
            </ListItem>
          ))}
        </List>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 4,
          }}
        >
          <IconButton
            component={NavLink}
            to={"https://www.linkedin.com/in/thiagobardini/"}
            target="_blank"
            color="inherit"
            sx={{
              mr: 2,
            }}
          >
            <LinkedInIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
          <IconButton
            component={NavLink}
            to={"https://github.com/thiagobardini"}
            target="_blank"
            color="inherit"
          >
            <GitHubIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
        </Box>
        <ToggleThemeMode />
      </Drawer>
    </Box>
  );
};

export default HamburgerMenu;
