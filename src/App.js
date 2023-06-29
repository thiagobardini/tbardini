import * as React from "react";
import { ThemeProvider, Box } from "@mui/material";
import { theme } from "./Assets/theme";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Form from "./Components/common/Form";
import AuthComponent from "./Components/auth/AuthComponent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Routes>
          <Route
            path="/login"
            element={
              <Form
                title="Login"
                // setEmail={setEmail}
                // setPassword={setPassword}
                // handleAction={() => handleAction(1)}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                title="Register"
                // setEmail={setEmail}
                // setPassword={setPassword}
                // handleAction={() => handleAction(2)}
              />
            }
          />
          <Route path="/signin" element={<AuthComponent />} />
          <Route path="/signup" element={<AuthComponent />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
