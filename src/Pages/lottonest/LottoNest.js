import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets } from "../../redux/ticketSlice";
import { deleteAllTickets } from "../../redux/ticketSlice";
import {
  Box,
  Container,
  CssBaseline,
  Modal,
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

const LottoNest = () => {
  const [manualEntry, setManualEntry] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.authUser.isLogged);

  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);

  console.log(isLogged, " isLogged");
  useEffect(() => {
    if (isLogged) {
      dispatch(fetchTickets());
    }
    if (!isLogged) {
      navigate("/portfolio/lottonest-signin");
    }
  }, [isLogged, navigate, dispatch]);

  const toggleManualEntry = () => {
    setManualEntry(!manualEntry);
  };

  const handleDeleteAllTickets = () => {
    dispatch(deleteAllTickets());
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
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography color="#d6d3d1">
                  ENTER YOUR TICKETS NUMBERS
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <button onClick={toggleManualEntry}>
                  {manualEntry
                    ? "Switch to Camera Capture"
                    : "Switch to Manual Entry"}
                </button>
                {manualEntry ? <TicketInput /> : <CardCaptureData />}
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box mb={2}>
            {/* VIEW ALL TICKETS */}
            <Accordion color="#d6d3d1">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography color="#d6d3d1">VIEW ALL TICKETS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <button onClick={handleDeleteAllTickets}>
                  Delete All Tickets
                </button>
                {tickets.map((ticket, index) => (
                  <Box key={index}>
                    <Typography color="#d6d3d1" variant="h6">
                      Ticket {ticket.id}
                    </Typography>
                    <Typography color="#d6d3d1" variant="body1">
                      Numbers:{" "}
                      {ticket?.numbers?.length > 0
                        ? ticket.numbers.join(", ")
                        : "N/A"}
                    </Typography>
                    <Typography color="#d6d3d1" variant="body1">
                      Mega Ball: {ticket.megaBall}
                    </Typography>
                    {/* <Typography variant="body1">
                Timestamp: {ticket.timestamp.toString()}
              </Typography> */}
                  </Box>
                ))}
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
