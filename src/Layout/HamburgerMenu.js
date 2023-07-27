import React from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
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
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
          },
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{
            display: { xs: "flex", md: "none" },
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
        <List>
          {pages.map((page) => (
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
            component={Link}
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
            component={Link}
            to={"https://github.com/thiagobardini"}
            target="_blank"
            color="inherit"
          >
            <GitHubIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HamburgerMenu;
