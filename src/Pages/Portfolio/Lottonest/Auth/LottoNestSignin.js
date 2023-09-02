import React, { useEffect } from "react";
import { Box, Container, CssBaseline, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoNest from "../../../../Assets/images/MegaMillions.png";
import Signin from "../../../../Features/auth/Signin";
import ButtonFab from "../../../../Components/ButtonFab";

const LottoNestSignin = () => {
  const isEmail = useSelector((state) => state.authUser.email);

  const darkMode = useSelector((state) => state.theme.darkMode);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isEmail) {
      navigate("/projects/lottonest-signin");
    }
  }, [isEmail, navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 85px)",
        pt: "106px",
      }}
    >
      <Container>
        <CssBaseline />
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 3,
            pb: 1,
          }}
        >
          <Box
            component="img"
            alt="LogoNest"
            src={LogoNest}
            sx={{
              maxHeight: "auto",
              maxWidth: "200px",
              width: "100%",
              height: "auto",
              cursor: "pointer",
            }}
          />
        </Box>
        <Paper
          elevation={3}
          sx={{
            py: 5,
            px: 3,
            borderRadius: 3,
            backdropFilter: darkMode ? "blur(2px)" : "blur(2px)",
            backgroundColor: darkMode
              ? "transparent !important"
              : "#eeeeee !important",
          }}
        >
          <Signin />
          <Box my={2}></Box>
        </Paper>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            justifyContent: "flex-start",
            my: 3,
          }}
        >
          <ButtonFab
            to="/projects"
            label="Go back to portfolio"
            onClick={() => window.scrollTo(0, 0)}
            backArrow={true}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default LottoNestSignin;
