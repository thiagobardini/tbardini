import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo-nav.png";

// import { red, green, blue, yellow, orange } from "@mui/material/colors";
const Root = styled("div")(({ theme }) => ({
  // padding: theme.spacing(1),
  // [theme.breakpoints.up("xs")]: {
  //   backgroundColor: yellow[500],
  // },
  // [theme.breakpoints.up("sm")]: {
  //   backgroundColor: red[500],
  // },
  // [theme.breakpoints.up("md")]: {
  //   backgroundColor: blue[500],
  // },
  // [theme.breakpoints.up("lg")]: {
  //   backgroundColor: green[500],
  // },
  // [theme.breakpoints.up("xl")]: {
  //   backgroundColor: orange[500],
  // },
}));

const drawerWidth = "100%";

const navbarItems = {
  Projects: { link: "projects" },
  Resume: { link: "resume" },
  About: { link: "about" },
  Contact: { link: "Contact" },
};

function Navbar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { window } = props;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Stack direction="row" alignItems="center">
        <Button onClick={handleDrawerToggle}>
          <CloseIcon />
        </Button>

        <Box sx={{ flexGrow: 1, marginRight: "48px" }}>
          <Link to="" onClick={handleDrawerToggle}>
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
        </Box>
      </Stack>

      <List>
        {Object.keys(navbarItems).map((item) => (
          <>
            <ListItem key={item} disablePadding onClick={handleDrawerToggle}>
              <ListItemButton
                sx={{ textAlign: "center" }}
                component={Link}
                to={navbarItems[item].link}
                focusVisible
              >
                <ListItemText>
                  <Typography
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    {item}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <Box
        id="navbar"
        sx={{
          display: "flex",
          zIndex: 3,
        }}
      >
        <AppBar
          position="static"
          marginTop={2}
          sx={{
            background: "#fff",
            boxShadow: "none",
            padding: { xl: "0 18%" },
          }}
        >
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              wrap="noWrap"
            >
              <Grid item sx={{ my: 2 }}>
                <Link to="">
                  <Box
                    component="img"
                    src={logo}
                    className="logo"
                    alt="logo"
                    sx={{
                      my: 2,
                      maxWidth: "100%",
                      "@media (max-width: 385px)": {
                        minWidth: "192px",
                      },
                    }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Stack spacing={2} direction="row">
                    {Object.keys(navbarItems).map((item) => (
                      <>
                        <Button
                          key={item}
                          component={Link}
                          to={navbarItems[item].link}
                        >
                          <Typography
                            sx={{
                              color: "#000",
                              textTransform: "none", // Remove the uppercase
                            }}
                          >
                            {item}
                          </Typography>
                        </Button>
                      </>
                    ))}
                  </Stack>
                </Box>
              </Grid>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  ml: 2,
                  display: { md: "none" },
                  color: "#000",
                  justifyContent: "flex-start",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            container={container}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor="top"
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                height: "100vh",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </Root>
  );
}

export default Navbar;
