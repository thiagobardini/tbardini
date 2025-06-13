import React, { useState, useMemo } from "react";
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
import Projects from "./Pages/Portfolio/Projects";
import { styled } from "@mui/system";
import LightModeDiagonalLinesUrl from "/LightModeDiagonalLines.svg?url";
import DarkModeDiagonalLinesUrl from "/DarkModeDiagonalLines.svg?url";
import ChatBox from "./Components/ChatBox/ChatBox";
import BackgroundBeamsWithCollision from "./Components/BackgroundBeamsWithCollision";
import SEO from "./Components/SEO";

const AppBackground = styled("div")(({ theme }) => ({
  backgroundImage: `url(${theme.palette.mode === "dark" ? DarkModeDiagonalLinesUrl : LightModeDiagonalLinesUrl})`,
  backgroundSize: "300px 300px",
  backgroundRepeat: "repeat",
  color: theme.palette.mode === "dark" ? "#eeeeee" : "#424242",
  minHeight: "100vh",
  backgroundColor: "transparent",
}));


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
           And don't forget to shoot me an email at hello@flowquantic.ai if you need me to come do awesome work at your company`);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ position: "relative", minHeight: "100vh" }}>
          {/* Background Beams Layer */}
          <BackgroundBeamsWithCollision />
          
          {/* Diagonal Lines Pattern Layer */}
          <AppBackground theme={theme} sx={{ position: "relative", zIndex: 1 }}>
            <CssBaseline />
            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Box sx={{ position: "relative", zIndex: 9999 }}>
                <Navbar />
                <ChatBox />
                <HireMe />
              </Box>
              <ScrollToTop />
              <Routes>
                <Route path="/signin" element={<><SEO description="Sign in to your account" /><Signin /></>} />
                <Route path="/signup" element={<><SEO description="Create a new account" /><Signup /></>} />
                <Route index element={<><SEO /><Home /></>} />
                <Route path="/aboutme" element={<><SEO description="Learn more about Thiago Bardini - Software Engineer, Founder of FlowQuantic, and passionate developer building innovative solutions." keywords="Thiago Bardini, About, Software Engineer, FlowQuantic, PetQuantic, CrewQuantic, React Developer, TypeScript Developer" /><AboutMe /></>} />
                <Route path="/contact" element={<><SEO description="Get in touch with Thiago Bardini. Let's discuss your project or collaboration opportunities." keywords="Contact Thiago Bardini, Hire Software Engineer, React Developer Contact, FlowQuantic Contact" /><Contact /></>} />
                <Route path="/projects" element={<><SEO description="Explore my portfolio of projects including FlowQuantic, PetQuantic, CrewQuantic, and other innovative solutions." keywords="Thiago Bardini Projects, Portfolio, FlowQuantic, PetQuantic, CrewQuantic, React Projects, TypeScript Projects" /><Projects /></>} />

                <Route path="*" element={<><SEO title="Page Not Found" description="The page you're looking for doesn't exist." /><NotFound /></>} />
              </Routes>
              <Footer hideOn={["/"]} />
            </Box>
          </AppBackground>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
