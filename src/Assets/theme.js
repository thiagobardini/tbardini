import { createTheme } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

// Ref: https://mui.com/material-ui/customization/dark-mode/
// Pallete:
// https://mui.com/material-ui/customization/palette/
// https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette

/* The custom colors palette is located in the Index.css file. */
export const theme = (mode = "dark") =>
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
            // divider: deepOrange[700],
            background: {
              default: "var(--color-text-3)",
              paper: "var(--color-text-3)",
            },
            text: {
              primary: "#f7f7f7", // --color-text-1
              secondary: grey[500],
            },
          }),
    },
  });
