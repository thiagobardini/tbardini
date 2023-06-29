import React from "react";
import { Link } from "react-router-dom";
import { Box, AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import BottomDrawer from "./BottomDrawer";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlices";
import Logout from "../../Components/auth/Logout";

const pages = [
  {
    text: "Projects",
    to: "/projects",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Login",
    to: "/signin",
  },
];
const settings = ["Profile", "Account", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const userAuth = useSelector(selectAuth);
  const { isLogged } = userAuth;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TBARDINI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) =>
                page.text === "Projects" ? (
                  // FIXME: ADDED REDUX
                  <MenuItem
                    component={Link}
                    to={page.to}
                    key={page.text}
                    onClick={handleCloseNavMenu}
                  >
                    <BottomDrawer color="black" />
                  </MenuItem>
                ) : (
                  <MenuItem
                    component={Link}
                    to={page.to}
                    key={page.text}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page.text}</Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TBARDINI
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              page.text === "Projects" ? (
                <Button
                  component={Link}
                  to={page.to}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                >
                  {/* // FIXME: ADDED REDUX */}
                  <BottomDrawer color="white" />
                </Button>
              ) : (
                <Button
                  component={Link}
                  to={page.to}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block", fontSize: 14 }}
                >
                  {page.text}
                </Button>
              )
            )}
          </Box>
          {!isLogged ? <Logout text="Login" /> : <Logout text="Logout" />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
