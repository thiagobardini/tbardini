import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Container, CssBaseline, Modal, Typography } from "@mui/material";
import tickets from "../../Assets/images/tickets.jpg";
import tickets2 from "../../Assets/images/tickets2.jpg";
import CheckNumbers from "./CheckNumbers";
import LogoNest from "../../Assets/images/MegaMillions.png";
import Logout from "../../Features/auth/Logout";

const LottoNest = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.authUser.isLogged);

  console.log(isLogged, " isLogged");
  useEffect(() => {
    if (!isLogged) {
      navigate("/portfolio/lottonest-signin");
    }
  }, [isLogged, navigate]);

  return (
    <Box
      mb={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 243px)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          pt: 1,
          position: "absolute",
        }}
      >
        <Logout text="logout" to="/portfolio/lottonest-signin" />
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "1.5em 0",
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

      <Container>
        <CssBaseline />

        <Box my={2}>
          <Typography variant="h4" gutterBottom>
            Mega Millions Number Checker
          </Typography>

          <Box
            component="img"
            alt="tickets"
            src={tickets}
            sx={{ width: "50%", cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
          <Box
            component="img"
            alt="tickets"
            src={tickets2}
            sx={{ width: "45.5%", cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
          <Typography variant="subtitle1" pb={1}>
            Click on the lottery ticket images to view it in full size.
          </Typography>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                boxShadow: 24,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                alt="tickets"
                src={tickets}
                sx={{
                  maxHeight: "80vh",
                  maxWidth: "80vw",
                  pt: 4,
                  pb: 1,
                  cursor: "pointer",
                  boxShadow: "0 3px 5px 2px rgba(33, 49, 63, .3)",
                }}
                onClick={() => setOpen(false)}
              />
            </Box>
          </Modal>
          <CheckNumbers />
        </Box>
      </Container>
    </Box>
  );
};

export default LottoNest;
