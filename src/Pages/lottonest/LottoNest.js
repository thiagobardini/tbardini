import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets, isTickets } from "../../redux/ticketSlice";
import { selectAuth } from "../../redux/authSlices";
import { selectResults } from "../../redux/matchingTicketsSlice";
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
import DonateButton from "../../Components/DonateButton";

const LottoNest = () => {
  const [showComponent, setShowComponent] = useState(null);
  const [accordionExpanded, setAccordionExpanded] = useState(false);

  const navigate = useNavigate();
  const isEmail = useSelector((state) => state.authUser.email);
  const isTicket = useSelector(isTickets);
  const results = useSelector(selectResults);

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

  const handleAccordionChange = (event, newExpanded) => {
    setAccordionExpanded(newExpanded);
    if (!newExpanded) {
      setShowComponent(null);
    }
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
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "0 auto",
          pt: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <DonateButton />

          <Box sx={{ mt: 1.5 }}>
            <Logout text="logout" to="/portfolio/lottonest-signin" />
          </Box>
        </Box>
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
            <Accordion
              sx={{ background: "#424242" }}
              onChange={handleAccordionChange}
              expanded={accordionExpanded}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography color="#d6d3d1" variant="h6">
                  Enter Your Tickets
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  {showComponent !== "manualEntry" && (
                    <Button
                      variant="contained"
                      color="info"
                      sx={{ mb: 4, textTransform: "none" }}
                      onClick={() => setShowComponent("manualEntry")}
                    >
                      Manual Entry
                    </Button>
                  )}
                  {showComponent !== "cameraCapture" && (
                    <Button
                      variant="contained"
                      color="info"
                      sx={{ mb: 4, ml: 2, textTransform: "none" }}
                      onClick={() => setShowComponent("cameraCapture")}
                    >
                      Camera Capture
                    </Button>
                  )}
                </Box>
                {showComponent === "manualEntry" && <TicketInput />}
                {showComponent === "cameraCapture" && <CardCaptureData />}
              </AccordionDetails>
            </Accordion>
          </Box>
          {results.length > 0 && <MatchingTickets />}
          {isTicket.length > 0 && <ViewAllTickets />}
        </Box>
      </Container>
    </Box>
  );
};

export default LottoNest;
