import React from "react";
import { useSelector } from "react-redux";
import {
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  selectResults,
  selectMegaBall,
} from "../../../../redux/matchingTicketsSlice";
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

const MatchingTickets = () => {
  const results = useSelector(selectResults);
  const megaBall = useSelector(selectMegaBall);
  console.log(megaBall, "MEGABALL");

  return (
    <Box mb={2} color="#d6d3d1">
      <Accordion sx={{ background: "#424242" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="#d6d3d1" variant="h6">
            Matching Tickets
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {results.map((result) => (
            <Paper
              elevation={3}
              style={{
                padding: "16px",
                margin: "8px 0",
                backgroundColor: "#282524",
              }}
            >
              <Typography color="#eeeeee" variant="h6">
                Ticket {result.ticketId}:
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  // spacing={2}
                >
                  {result.matchingNumbers
                    ? result.matchingNumbers.map((number) => (
                        <Ball elevation={3} sx={{ backgroundColor: "#f4d03f" }}>
                          <Typography
                            variant="h6"
                            sx={{ color: "#000", textAlign: "center" }}
                          >
                            {number}
                          </Typography>
                        </Ball>
                      ))
                    : ""}

                  {result.megaBallMatch && (
                    <Ball elevation={3} sx={{ backgroundColor: "#e74c3c" }}>
                      <Typography
                        variant="h6"
                        sx={{ color: "#000", textAlign: "center" }}
                      >
                        {megaBall}
                      </Typography>
                    </Ball>
                  )}
                </Stack>
              </Typography>
              <Typography color="#d6d3d1" sx={{ mt: 1 }}>
                (Total Matches: {result.count})
              </Typography>
            </Paper>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MatchingTickets;
