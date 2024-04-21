import { styled, Typography, Button, Stack, Avatar, Badge } from "@mui/material";
import myself from "../Assets/images/myself-nonebg.jpg";

const HireMe = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.box}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
  }));

  const StickyButton = styled(Button)({
    position: "fixed",
    bottom: 0,
    pointerEvents: "auto",
    borderRadius: "0 5px 0 0",
    "&:hover": {
      backgroundColor: "#ccc",
    },
  });

  return (
    <StickyButton
      component='a'
      href="mailto:thiagobardini@icloud.com?subject=👨🏻‍💻 Hi Thiago, I'd like to hire you"
      variant='text'
      sx={{
        pointerEvents: "auto",
        color: "#eeeeee",
        zIndex: "1200",
        background: "rgba(204, 204, 204, 0.8)",
      }}
      size='small'
      startIcon={
        <Stack direction='row' pl={{ xs: 2, sm: 0 }} justifyContent='flex-end' alignItems='flex-end' spacing={0}>
          <StyledBadge overlap='circular' anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant='dot'>
            <Avatar alt='Thiago Bardini' src={myself} sx={{ width: 30, height: 30 }} />
          </StyledBadge>
        </Stack>
      }
    >
      <Typography
        variant='body1'
        pr={{ xs: 2, sm: 0 }}
        sx={{
          color: "#0D0D0D",
          borderRadius: "5px",
          transition: "all 0.3s ease-in-out",
          textTransform: "capitalize",
          fontWeight: "900",
          "&:hover": {
            color: "#0D0D0D",
            textShadow: "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff",
          },
        }}
      >
        Hire Me!
      </Typography>
    </StickyButton>
  );
};

export default HireMe;
