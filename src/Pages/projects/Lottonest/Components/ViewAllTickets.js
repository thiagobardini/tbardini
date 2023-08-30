import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTickets,
  deleteTicketById,
  deleteAllTickets,
} from "../../../../redux/ticketSlice";
import { selectAuth } from "../../../../redux/authSlices";
import {
  Box,
  Button,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
import { Delete, DeleteSweep } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, keyframes } from "@mui/system";

const dropAndBounceAnimation = keyframes`
  0% {
    transform: translateY(-100px);
  }
  80% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Ball = styled(Paper)`
  // padding: 10px;
  border-radius: 50%;
  margin: 0 5px;
  width: 30px;
  background-color: ${(props) => props.bgColor || "#f4d03f"};
  animation: ${dropAndBounceAnimation} 0.5s ease;
`;

const ViewAllTickets = () => {
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

  const handleDeleteTicket = (ticketId) => {
    dispatch(deleteTicketById(ticketId));
  };

  return (
    <Box my={2}>
      {/* VIEW ALL TICKETS */}
      <Accordion color="#d6d3d1" sx={{ background: "#424242" }}>
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
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            mt={2}
          >
            <Button
              variant="contained"
              color="info"
              size="small"
              sx={{ mb: 1, textTransform: "none" }}
              onClick={handleDeleteAllTickets}
            >
              <DeleteSweep fontSize="small" />
              Clean All Tickets
            </Button>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" color="#d6d3d1">
              Tickets
            </Typography>
            {tickets.map((ticket, index) => (
              <Box key={index}>
                <Typography mt={1} color="#d6d3d1">
                  Ticket {index + 1}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-end"
                  spacing={1}
                >
                  {ticket.numbers.map((number) => (
                    <Ball elevation={3} sx={{ backgroundColor: "#f4d03f" }}>
                      <Typography
                        variant="h6"
                        sx={{ color: "#000", textAlign: "center" }}
                      >
                        {number}
                      </Typography>
                    </Ball>
                  ))}

                  <Ball elevation={3} sx={{ backgroundColor: "#e74c3c" }}>
                    <Typography
                      variant="h6"
                      sx={{ color: "#000", textAlign: "center" }}
                    >
                      {ticket.megaBall}
                    </Typography>
                  </Ball>
                  <Button
                    variant="text"
                    color="info"
                    size="small"
                    onClick={() => handleDeleteTicket(ticket.ticketId)}
                  >
                    <Delete />
                  </Button>
                </Stack>
              </Box>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ViewAllTickets;
