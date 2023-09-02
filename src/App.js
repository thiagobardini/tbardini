import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { createCustomTheme } from "./Assets/theme";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/About";
import Signin from "./Features/auth/Signin";
import Signup from "./Features/auth/Signup";
import Contact from "./Pages/Contact";
import HireMe from "./Components/HireMe";
import ScrollToTop from "./Components/ScrollToTop";
import NotFound from "./Pages/NotFound";
import Footer from "./Layout/Footer";
import LottoNest from "./Pages/Portfolio/Lottonest/LottoNest";
import LottoNestSignin from "./Pages/Portfolio/Lottonest/Auth/LottoNestSignin";
import LottoNestReadme from "./Pages/Portfolio/Lottonest/Pages/LottoNestReadme";
import SoundControl from "./Components/SoundControl";
import Projects from "./Pages/Portfolio/Projects";

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

  console.log(`CONTACT ME
----------------------------------------
   \\   ^__^
    \\  (oo)\\_______
       (__)\\       )\\/\\
           ||----w |
           ||     ||
           Hey There, I'm glad you liked the site and want to see what's going on, sure check the repo at https://github.com/thiagobardini/tbardini
           And don't forget to shoot me an email at thiagobardini@icloud.com if you need me to come do awesome work at your company`);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Box sx={{ zIndex: 9999 }}>
            <Navbar />
            <HireMe />
            <SoundControl />
          </Box>
          <ScrollToTop />
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route index element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/lottonest-signin"
              element={<LottoNestSignin />}
            />
            <Route path="/projects/lottonest" element={<LottoNest />} />
            <Route
              path="/projects/lottonest/readme"
              element={<LottoNestReadme />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer hideOn={["/"]} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
