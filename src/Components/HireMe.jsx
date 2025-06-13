import { styled, Typography, Button, Stack, Avatar, Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { keyframes } from "@emotion/react";
import myself from "../Assets/images/myself-nonebg.jpg";

const HireMe = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const pulse = keyframes`
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(102, 126, 234, 0);
    }
  `;

  const slideIn = keyframes`
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  const ripple = keyframes`
    to {
      transform: scale(4);
      opacity: 0;
    }
  `;

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#667eea",
      boxShadow: darkMode 
        ? `0 0 0 2px #1a1a1a`
        : `0 0 0 2px #ffffff`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: `${ripple} 1.2s infinite ease-in-out`,
        border: "1px solid currentColor",
        content: '""',
      },
    },
  }));

  const StickyButton = styled(Button)(({ theme }) => ({
    position: "fixed",
    bottom: 20,
    left: 20,
    pointerEvents: "auto",
    borderRadius: "50px",
    padding: "8px 16px",
    [theme.breakpoints.up("sm")]: {
      padding: "10px 20px",
    },
    background: darkMode 
      ? "rgba(30, 30, 30, 0.95)"
      : "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(20px)",
    border: "1px solid",
    borderColor: darkMode 
      ? "rgba(102, 126, 234, 0.3)"
      : "rgba(102, 126, 234, 0.2)",
    boxShadow: darkMode
      ? "0 10px 30px rgba(102, 126, 234, 0.4)"
      : "0 10px 30px rgba(102, 126, 234, 0.2)",
    animation: `${slideIn} 0.5s ease-out, ${pulse} 2s ease-in-out infinite`,
    transition: "all 0.3s ease",
    "&:hover": {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      transform: "translateY(-2px) scale(1.05)",
      boxShadow: darkMode
        ? "0 15px 40px rgba(102, 126, 234, 0.5)"
        : "0 15px 40px rgba(102, 126, 234, 0.3)",
      "& .hire-text": {
        color: "#ffffff",
      },
      "& .MuiAvatar-root": {
        transform: "scale(1.1)",
      },
    },
    "&:focus": {
      outline: "none",
      boxShadow: darkMode
        ? "0 0 0 3px rgba(102, 126, 234, 0.5)"
        : "0 0 0 3px rgba(102, 126, 234, 0.3)",
    },
  }));

  return (
    <StickyButton
      component='a'
      href="mailto:hello@flowquantic.ai?subject=👨🏻‍💻 Hi Thiago, I'd like to hire you"
      variant='text'
      sx={{
        pointerEvents: "auto",
        zIndex: "1200",
      }}
      size='medium'
      startIcon={
        <Stack direction='row' justifyContent='center' alignItems='center' spacing={0}>
          <StyledBadge 
            overlap='circular' 
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }} 
            variant='dot'
          >
            <Avatar 
              alt='Thiago Bardini' 
              src={myself} 
              sx={{ 
                width: 35, 
                height: 35,
                border: '2px solid',
                borderColor: darkMode 
                  ? 'rgba(102, 126, 234, 0.3)'
                  : 'rgba(102, 126, 234, 0.2)',
                transition: "all 0.3s ease",
              }} 
            />
          </StyledBadge>
        </Stack>
      }
    >
      <Typography
        variant='body1'
        className="hire-text"
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "GothamSSm-Bold",
          textTransform: "none",
          fontWeight: "600",
          letterSpacing: "0.5px",
          transition: "all 0.3s ease",
          ml: 1,
          fontSize: { xs: "0.875rem", sm: "1rem" },
          display: { xs: "none", sm: "block" },
        }}
      >
        Available for hire
      </Typography>
      <Typography
        variant='body1'
        className="hire-text"
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "GothamSSm-Bold",
          textTransform: "none",
          fontWeight: "600",
          letterSpacing: "0.5px",
          transition: "all 0.3s ease",
          ml: 1,
          fontSize: "0.875rem",
          display: { xs: "block", sm: "none" },
        }}
      >
        Hire me
      </Typography>
    </StickyButton>
  );
};

export default HireMe;
