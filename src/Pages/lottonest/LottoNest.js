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
  Paper,
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
import ButtonFab from "../../Components/ButtonFab";

const LottoNest = () => {
  const [showComponent, setShowComponent] = useState(null);
  const [accordionExpanded, setAccordionExpanded] = useState(false);

  const navigate = useNavigate();
  const isEmail = useSelector((state) => state.authUser.email);
  const isTicket = useSelector(isTickets);
  const results = useSelector(selectResults);
  const darkMode = useSelector((state) => state.theme.darkMode);

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
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "calc(100vh - 85px)",
        pt: "96px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          pt: 1,
          position: "absolute",
          top: "155px",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-end", sm: "space-between" },
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <DonateButton />
          </Box>

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

      <Container>
        <CssBaseline />
        <Paper
          elevation={3}
          sx={{
            py: 5,
            p: { xs: 1, sm: 3 },
            borderRadius: 3,
            backdropFilter: darkMode ? "blur(2px)" : "blur(2px)",
            backgroundColor: darkMode
              ? "transparent !important"
              : "#eeeeee !important",
          }}
        >
          <CheckNumbers />
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
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "center",
              width: "100%",
              mt: 4,
            }}
          >
            <DonateButton />
          </Box>
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
            to="/portfolio"
            label="Go back to portfolio"
            onClick={() => window.scrollTo(0, 0)}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default LottoNest;
