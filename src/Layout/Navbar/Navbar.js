import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// routes
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo-nav.png";
import SwipeableEdgeDrawer from "./SwipeableEdgeDrawer";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//routes
const itemList = [
  {
    text: "Projects",
    to: "/projects",
  },
  // {
  //   text: "Resume",
  //   to: "/resume",
  // },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      marginTop={2}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: { xl: "0 18%" },
      }}
      elevation={0}
    >
      <Container>
        <StyledToolbar>
          <Link to="">
            <Box
              component="img"
              src={logo}
              className="logo"
              alt="logo"
              sx={{
                mb: 3,
                mt: 5,
                maxWidth: "100%",
                "@media (max-width: 385px)": {
                  minWidth: "192px",
                },
              }}
            />
          </Link>

          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <DrawerItem />
          </Box>
          <ListMenu>
            <SwipeableEdgeDrawer />
            {itemList.map((item) => {
              const { text } = item;
              return (
                <ListItem key={text}>
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#1e2a5a",
                      },
                    }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </ListMenu>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
