import React from "react";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 243px)",
        textAlign: "center",
        padding: "0 30px",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        404
      </Typography>
      <Typography variant="h4">Page Not Found</Typography>
    </Box>
  );
};

export default NotFound;
