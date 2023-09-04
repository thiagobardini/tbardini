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
          height: "100%",
          minHeight: "55px",
          maxHeight: "115px",
          fontSize: { xs: "2.7rem", sm: "3rem" },
          display: "block",
          width: "100%",
          letterSpacing: "-.03em",
          textAlign: "center",
          fontWeight: "600",
          color: textColor,
          textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
          textTransform: "capitalize",
        }}
      >
        {text}
      </Typography>
    </TitleContainer>
  );
}

export default HeadingTop;
