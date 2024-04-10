import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: { xs: "100vw", sm: "60vw" },
        height: "calc(100vh - 16px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
