import { ThemeProvider, Box, Stack } from "@mui/material";
import { theme } from "./Assets/theme";
import Navbar from "./Layout/Navbar";
import HeroPage from "./Components/HeroPage";
import logo from "./Assets/images/logo-hero.png";

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
            <Navbar />
            <HeroPage
              title="Boston Residents Can "
              titleBold="Save Money with Heat Pumps"
              text1="Heat pumps can help you "
              textBold="save money"
              text2=" on your home heating and cooling costs."
              image={logo}
              link="https://www.masssave.com/residential/programs-and-services/income-based-offers/income-eligible-programs"
            />
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
