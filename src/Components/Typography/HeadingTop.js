import { Box, Typography, styled, useTheme } from "@mui/material";

const TitleContainer = styled(Box)({
  padding: "2em 0",
  textAlign: "center",
});

function HeadingTop({ text }) {
  const theme = useTheme();
  const bgColor =
    theme.palette.mode === "light"
      ? theme.palette.background.default
      : theme.palette.background.paper;
  const textColor =
    theme.palette.mode === "light"
      ? theme.palette.primary.main
      : theme.palette.text.primary;

  return (
    <TitleContainer mb={2} sx={{ bgcolor: bgColor }}>
      <Typography
        variant="h2"
        sx={{
          display: "block",
          width: "100%",
          letterSpacing: "-.03em",
          textAlign: "center",
          fontWeight: "600",
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
