import { ThemeProvider, Box, Stack } from "@mui/material";
import { theme } from "./Assets/theme";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Nav from "./Layout/Navbar/Nav";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className="container-wrapper">
          <Stack
            direction="column"
            justifyContent="space-between"
            sx={{
              minHeight: "100vh",
              fontSize: "16px",
            }}
          >
            <Nav />
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
