import { Box, Typography, styled } from "@mui/material";

const TitleContainer = styled(Box)({
  padding: "2em 0",
  textAlign: "center",
  textShadow: "1px 1px 1px var(--color-text-5)",
});

function HeadingTop({ text }) {
  return (
    <TitleContainer mb={2} sx={{ bgcolor: "var(--bgColor-3)" }}>
      <Typography
        variant="h3"
        sx={{
          display: "block",
          width: "100%",
          letterSpacing: "-.03em",
          textAlign: "center",
          fontWeight: "600",
          color: "var(--color-text-1)",
          textShadow: "1px 1px 1px var(--color-text-5)",
        }}
      >
        {text}
      </Typography>
    </TitleContainer>
  );
}

export default HeadingTop;
