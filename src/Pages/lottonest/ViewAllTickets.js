import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets } from "../../redux/ticketSlice";
import { deleteAllTickets } from "../../redux/ticketSlice";
import { selectAuth } from "../../redux/authSlices";
import {
  Box,
  Button,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ViewAllTickets = () => {
  const [manualEntry, setManualEntry] = useState(true);
  const navigate = useNavigate();
  const isEmail = useSelector((state) => state.authUser.email);

  const dispatch = useDispatch();

  const { uid } = useSelector(selectAuth);
  const tickets = useSelector((state) => state.tickets.tickets);
  const storedAuth = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if (uid) {
      dispatch(fetchTickets(uid));
    }
    if (!isEmail) {
      navigate("/portfolio/lottonest-signin");
    }
  }, [uid, isEmail, navigate, dispatch]);

  const handleDeleteAllTickets = () => {
    if (storedAuth) {
      dispatch(deleteAllTickets(storedAuth.uid));
    }
  };

  return (
    <Box my={2}>
      {/* VIEW ALL TICKETS */}
      <Accordion color="#d6d3d1" sx={{ background: "#393635" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="#d6d3d1" variant="h6">
            View All Tickets
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button
            variant="outlined"
            color="info"
            sx={{ mb: 2 }}
            onClick={handleDeleteAllTickets}
          >
            Delete All Tickets
          </Button>
          {tickets.map((ticket, index) => (
            <Box key={index}>
              <Typography mt={2} color="#d6d3d1" key={index}>
                Numbers: {ticket.numbers.join(", ")} - Mega Ball:{" "}
                {ticket.megaBall}
              </Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ViewAllTickets;
