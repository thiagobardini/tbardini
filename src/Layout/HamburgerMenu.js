import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
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
import { useSelector } from "react-redux";

const HamburgerMenu = ({ isOpen, setOpen, pages }) => {
  const theme = useTheme();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

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
        PaperProps={{
          sx: {
            backgroundColor: darkMode
              ? theme.palette.background.paper
              : "#d6d3d1",
            display: "block",
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
          },
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
            zIndex: 1400,
            overflow: "visible",
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
          {pages.map((page, index) => (
            <ListItem
              component={Link}
              to={page.to}
              key={page.text}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                py: 2,
                color: theme.palette.mode === "dark" ? "#eeeeee" : "#22313f",
                textTransform: "lowercase",
                fontWeight: "500",
                fontSize: "1.4rem",
                textDecoration: "none",
                position: "relative",
                mr: 2,
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                },
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
            component="a"
            href={"https://www.linkedin.com/in/thiagobardini/"}
            target="_blank"
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
          <IconButton
            component="a"
            href={"https://github.com/thiagobardini"}
            target="_blank"
          >
            <GitHubIcon
              sx={{
                fontSize: "3rem",
                color: theme.palette.mode === "dark" ? "#eeeeee" : "#22313f",
              }}
            />
          </IconButton>
        </Box>
        <ToggleThemeMode />
      </Drawer>
    </Box>
  );
};

export default HamburgerMenu;
