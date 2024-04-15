import { Box, CircularProgress } from "@mui/material";

export default function LoadingDots() {
  return (
    <Box span sx={{fontSize: "3rem"}}>
      <span className='dot'>.</span>
      <span className='dot'>.</span>
      <span className='dot'>.</span>
    </Box>
  );
}
