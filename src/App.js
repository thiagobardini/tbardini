import React, { useState, useEffect, useMemo } from "react";
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
import HireMe from "./Components/HireMe";
import ScrollToTop from "./Components/ScrollToTop";
import NotFound from "./Pages/NotFound";
import Footer from "./Layout/Footer";
import Lottery from "./Pages/lottery/Lottery";

function App() {
  const [mode, setMode] = useState("dark");
  const [isLoading, setLoading] = useState(true);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createCustomTheme(mode), [mode]);
  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Box sx={{ zIndex: 9999 }}>
          <Navbar />
          <HireMe />
        </Box>
        <ScrollToTop />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/portfolio/trip-route" element={<RouterPlanner />} />
          <Route
            path="/portfolio/trip-route/readme"
            element={<RouterPlannerReadme />}
          />
          <Route
            path="/portfolio/my-portfolio-readme"
            element={<MyPortfolioReadme />}
          />
          <Route path="*" element={<NotFound />} />{" "}
          {/* delete it later - Implemented lottery game logic */}
          <Route path="/lottery" element={<Lottery />} />
        </Routes>
        <Footer hideOn={["/"]} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
