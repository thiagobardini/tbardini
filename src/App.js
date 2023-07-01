import React from "react";
import { ThemeProvider, Box } from "@mui/material";
import { theme } from "./Assets/theme";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Signin from "./Features/auth/Signin";
import Signup from "./Features/auth/Signup";
import RouterPlanner from "./Pages/RouterPlanner";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/router-planner" element={<RouterPlanner />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
