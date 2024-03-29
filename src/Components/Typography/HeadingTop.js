import { Box, Typography, styled, useTheme } from "@mui/material";

const TitleContainer = styled(Box)({
  paddingTop: "1.5em",
  paddingBottom: "0.8em",
  textAlign: "center",
});

function HeadingTop({ text }) {
  const theme = useTheme();

  const textColor =
    theme.palette.mode === "light"
      ? theme.palette.primary.main
      : theme.palette.text.primary;

  return (
    <TitleContainer>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontFamily: "GothamSSm-Bold",
          // fontFamily: "Trattatello, sans-serif",
          // fontFamily: "TuskerGrotesk",
          // fontFamily: "YatraOne-Regular",
          textTransform: "capitalize",
          // letterSpacing: "0.1em",
          height: "100%",
          minHeight: "55px",
          maxHeight: "115px",
          fontSize: { xs: "2.7rem", sm: "3rem" },
          display: "block",
          width: "100%",
          textAlign: "center",
          color: textColor,
          textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
        }}
      >
        {text}
      </Typography>
    </TitleContainer>
  );
}

export default HeadingTop;
