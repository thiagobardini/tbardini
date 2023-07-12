import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { createCustomTheme } from "./Assets/theme";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Signin from "./Features/auth/Signin";
import Signup from "./Features/auth/Signup";
import RouterPlanner from "./Pages/projects/RouterPlanner/RouterPlanner";
import RouterPlannerReadme from "./Pages/projects/RouterPlanner/RouterPlannerReadme";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import MyPortfolioReadme from "./Pages/projects/MyPortfolioReadme/MyPortfolioReadme";

function App() {
  const [mode, setMode] = useState("dark");
  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createCustomTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Box sx={{ zIndex: 9999 }}>
          <Navbar />
        </Box>
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />

          <Route index element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/portfolio' element={<Projects />} />
          <Route path='/portfolio' element={<Projects />} />
          <Route path='/portfolio/trip-route' element={<RouterPlanner />} />
          <Route
            path='/portfolio/trip-route/readme'
            element={<RouterPlannerReadme />}
          />
          <Route
            path='/portfolio/my-portfolio-readme'
            element={<MyPortfolioReadme />}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
