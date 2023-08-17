import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets } from "../../redux/ticketSlice";
import { selectAuth } from "../../redux/authSlices";
import {
  Box,
  Container,
  CssBaseline,
  Button,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckNumbers from "./CheckNumbers";
import LogoNest from "../../Assets/images/MegaMillions.png";
import Logout from "../../Features/auth/Logout";
import TicketInput from "./TicketInput";
import CardCaptureData from "./CardCaptureData";
import MatchingTickets from "./MatchingTickets";
import ViewAllTickets from "./ViewAllTickets";

const LottoNest = () => {
  const [manualEntry, setManualEntry] = useState(true);
  const navigate = useNavigate();
  const isEmail = useSelector((state) => state.authUser.email);

  const dispatch = useDispatch();

  const { uid } = useSelector(selectAuth);

  useEffect(() => {
    if (uid) {
      dispatch(fetchTickets(uid));
    }
    if (!isEmail) {
      navigate("/portfolio/lottonest-signin");
    }
  }, [uid, isEmail, navigate, dispatch]);

  const toggleManualEntry = () => {
    setManualEntry(!manualEntry);
  };

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

      <CheckNumbers />
      <Container>
        <CssBaseline />

        <Box my={2}>
          {/* ENTER YOUR TICKETS NUMBERS */}
          <Box mb={2}>
            <Accordion sx={{ background: "#424242" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography color="#d6d3d1">
                  ENTER YOUR TICKETS NUMBERS
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    color="info"
                    sx={{ mb: 4 }}
                    onClick={toggleManualEntry}
                  >
                    {manualEntry
                      ? "Switch to Camera Capture"
                      : "Switch to Manual Entry"}
                  </Button>
                </Box>
                {manualEntry ? <TicketInput /> : <CardCaptureData />}
                <ViewAllTickets />
              </AccordionDetails>
            </Accordion>
          </Box>
          <MatchingTickets />
        </Box>
      </Container>
    </Box>
  );
};

export default LottoNest;
