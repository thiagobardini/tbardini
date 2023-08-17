import React from "react";
import { useSelector } from "react-redux";
import {
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  selectResults,
  selectMegaBall,
} from "../../redux/matchingTicketsSlice";

const MatchingTickets = () => {
  const results = useSelector(selectResults);
  const megaBall = useSelector(selectMegaBall);
  console.log(megaBall, "MEGABALL");
  console.log(results, "results in matching tickets");
  return (
    <Box mb={2} color="#d6d3d1">
      <Accordion sx={{ background: "#424242" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="#d6d3d1">MATCHING TICKETS</Typography>
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
                Ticket {result.id}:{" "}
                {result.matchingNumbers
                  ? result.matchingNumbers.join(", ")
                  : ""}
                {result.megaBallMatch && ` (Mega Ball Match: ${megaBall})`}
              </Typography>

              <Typography color="#d6d3d1">
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
