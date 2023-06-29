import {
  ThemeProvider,
  Container,
  Box,
  CssBaseline,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { theme } from "./Assets/theme";
import { Route, Routes } from "react-router-dom";
import Nav from "./Layout/Navbar/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Nav />
        {/* <CssBaseline /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        <Copyright />
      </Box>
    </ThemeProvider>
  );
}

export default App;
