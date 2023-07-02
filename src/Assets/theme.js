import { createTheme } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

// Ref: https://mui.com/material-ui/customization/dark-mode/
// Pallete:
// https://mui.com/material-ui/customization/palette/
// https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
// https://mui.com/system/palette/#api
// https://mui.com/material-ui/customization/dark-mode/
// https://medium.com/@mokshi/how-to-persist-custom-material-ui-theme-light-dark-using-redux-toolkit-and-local-storage-in-481f4399eb4b

/* The custom colors palette is located in the Index.css file. */
export const createCustomTheme = (mode) =>
  createTheme({
    palette: {
      mode: "dark",
      ...(mode === "light"
        ? {
            // palette values for light mode
            // primary: amber,
            // divider: amber[200],
            // text: {
            //   primary: grey[900],
            //   secondary: grey[800],
            // },
          }
        : {
            // palette values for dark mode
            primary: { main: "#1565c0" },
            // primary: { main: "#2A2A2A" },
            // divider: deepOrange[700],
            // secondary: { main: "#0a0b0b" },
            // secondary: { main: "#2A2A2A" },
            secondary: { main: grey[900] },
            background: {
              default: "var(--bgColor-1)",
              paper: "var(--bgColor-1)",
            },
            text: {
              primary: "#f7f7f7", // --color-text-1
              secondary: grey[500],
            },
          }),
    },
  });
